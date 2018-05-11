const Controller = require('egg').Controller
const crypto = require('crypto')
const { ERROR_CODE } = require('../utils/const')
const { umoji } = require('umoji')

class userController extends Controller {
  async wxLogin() {
    const { ctx, app } = this
    const loginService = app.weapp.LoginService.create(
      ctx.request,
      ctx.response
    )

    const data = await loginService.login()
    const userInfo = data.userInfo

    let nickName = userInfo.nickName
    nickName = umoji.emojiToUnicode(nickName)

    userInfo.nickName = nickName.replace(
      /ud83c[udc00-udfff]|ud83d[udc00-udfff]|[u2000-u2fff]/g,
      ''
    )

    const user = await ctx.service.user.getOauthUser(userInfo, 'WEAPP')

    data.userInfo = Object.assign(
      {
        id: user.id,
        name: user.name,
        avatar: user.avatar,
        level: user.level
      },
      data.userInfo
    )
    ctx.body = data
  }

  async update() {
    const { ctx } = this
    const { name, sex, birthday } = ctx.request.body
    const userid = ctx.userinfo.id

    const userprofile = {}
    if (sex) userprofile.sex = sex
    if (birthday) userprofile.birthday = birthday

    const userinfo = {}
    if (name) userinfo.name = name

    if (userinfo) {
      await ctx.model.User.update(userinfo, {
        where: { id: userid }
      })
    }

    if (userprofile) {
      await ctx.model.Userprofile.update(userprofile, {
        where: { userid }
      })
    }

    ctx.body = { message: '修改成功' }
  }

  async info() {
    const { ctx } = this
    const { userid } = ctx.params
    ctx.body = await ctx.service.user.getUserinfo(userid)
  }

  async user() {
    const { ctx } = this
    ctx.body = await ctx.service.user.getUserinfo(ctx.userinfo.id)
  }

  async cos_auth() {
    const config = this.app.config.cos
    let folder = config.folder || ''
    if (folder && folder.indexOf('/') === 0) {
      folder = folder.substr(folder.indexOf('/') + 1)
    }

    const { appId, bucket, secretId, secretKey } = config
    const expiredTime = 0 // 单次签名，e 必须设置为0；多次有效签名时，e 为签名的时间戳，单位是秒
    const currentTime = parseInt(Date.now() / 1000) // 当前时间戳，是一个符合 Unix Epoch 时间戳规范的数值，单位为秒
    const rand = parseInt(Math.random() * Math.pow(2, 32)) // 随机串，无符号10进制整数，用户需自行生成，最长 10 位
    const fileId = encodeURIComponent(`/${appId}/${bucket}/${folder}`) // 唯一标识存储资源的相对路径。格式为 /appId/bucketname/dirname/[filename]

    const plainText = `a=${appId}&k=${secretId}&e=${expiredTime}&t=${currentTime}&r=${rand}&f=${fileId}&b=${bucket}`
    const data = new Buffer(plainText, 'utf8')
    const resStr = crypto
      .createHmac('sha1', secretKey)
      .update(data)
      .digest()
    const bin = Buffer.concat([resStr, data])
    const sign = bin.toString('base64')
    this.ctx.body = sign
  }
}

module.exports = userController
