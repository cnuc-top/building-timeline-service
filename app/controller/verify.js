'use strict'

const Geetest = require('gt3-sdk')
const Controller = require('egg').Controller

class VerifyController extends Controller {
  async smsCode() {
    const { ctx, app } = this

    var captcha = new Geetest({
      geetest_id: app.config.gt3.geetestId,
      geetest_key: app.config.gt3.geetestKey,
    })

    ctx.body = '123456'
  }
}

module.exports = VerifyController
