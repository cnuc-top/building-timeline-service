'use strict'

const Controller = require('egg').Controller

class ProcessController extends Controller {
  async create() {
    const { ctx } = this
    const { bid, basic, layers, seconds, date } = ctx.request.body
    const ret = await ctx.model.Process.create({
      bid,
      basic,
      layers,
      seconds,
      date
    })

    const { id } = ret
    ctx.body = { id }
  }
}

module.exports = ProcessController
