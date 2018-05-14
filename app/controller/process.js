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

  async delete() {
    const { ctx } = this
    const { id } = ctx.params
    const ret = await ctx.model.Process.destroy({
      where: {
        id
      }
    })
    ctx.body = { id }
  }

  async update() {
    const { ctx } = this
    const { id } = ctx.params
    const { bid, basic, layers, seconds, date } = ctx.request.body

    const ret = await ctx.model.Process.update(
      {
        bid,
        basic,
        layers,
        seconds,
        date
      },
      {
        where: {
          id
        }
      }
    )

    ctx.body = { id }
  }
}

module.exports = ProcessController
