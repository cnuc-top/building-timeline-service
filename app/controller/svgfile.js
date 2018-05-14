'use strict'

const Controller = require('egg').Controller

class SvgfileController extends Controller {
  async create() {
    const { ctx } = this

    const { content, type, fill, bid } = ctx.request.body

    const ret = await ctx.model.Svgfile.create({
      content,
      type,
      fill,
      bid
    })

    ctx.body = { id: ret.id }
  }

  async delete() {
    const { ctx } = this
    const { id } = ctx.params

    const ret = await ctx.model.Svgfile.destroy({
      where: {
        id
      }
    })
    ctx.body = { id }
  }

  async update() {
    const { ctx } = this
    const { id } = ctx.params
    const { content, type, fill } = ctx.request.body

    const ret = await ctx.model.Svgfile.update(
      { content, type, fill },
      {
        where: {
          id
        }
      }
    )
    ctx.body = { id }
  }
}

module.exports = SvgfileController
