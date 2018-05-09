const Controller = require('egg').Controller
const to = require('../utils/to')

class contributeController extends Controller {
  async deleteId() {
    const { ctx } = this
    const { id } = ctx.params

    const userid = ctx.userinfo.id
    await ctx.model.Contribute.destroy({
      where: {
        id,
        userid
      }
    })
    ctx.body = { id }
  }

  async create() {
    const { ctx } = this
    const { bid, content, picUrl, date, type } = ctx.request.body
    let err, data

    const create = {
      bid,
      content,
      picUrl,
      userid: 1,
      date,
      type
    }

    const ret = await ctx.model.Contribute.create(create)

    ctx.body = { id: ret.id }
  }
}

module.exports = contributeController
