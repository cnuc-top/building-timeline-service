'use strict'

const Controller = require('egg').Controller

class BuildingController extends Controller {
  async list() {
    const { ctx } = this
    const { city } = ctx.query
    const data = await ctx.model.Building.findAll({
      order: [['height', 'DESC']],
      where: {
        city
      },
      include: [
        {
          model: ctx.model.Svgfile,
          attributes: ['type', 'content', 'fill']
        },
        {
          model: ctx.model.Process,
          attributes: ['date', 'basic', 'layers', 'seconds']
        }
      ]
    })
    ctx.body = data
  }

  async contributes() {
    const { ctx } = this
    const { bid } = ctx.params
    const data = await ctx.model.Contribute.findAll({
      attributes: ['date', 'content', 'picUrl', 'type'],
      where: {
        bid
      }
    })
    ctx.body = data
  }

  async id() {
    const { ctx } = this
    const { id } = ctx.params
    const data = await ctx.model.Building.findOne({
      where: {
        id
      },
      include: [
        {
          model: ctx.model.Svgfile,
          attributes: ['type', 'content', 'fill']
        },
        {
          model: ctx.model.Process,
          attributes: ['date', 'basic', 'layers', 'seconds']
        }
      ]
    })
    ctx.body = data
  }
}

module.exports = BuildingController
