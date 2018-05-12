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
    const { id } = ctx.params
    const data = await ctx.model.Contribute.findAll({
      attributes: ['date', 'content', 'picUrl', 'type'],
      where: {
        bid: id
      }
    })
    ctx.body = data
  }

  async id() {
    const { ctx } = this
    const { id } = ctx.params
    const processes = await ctx.model.Process.findAll({
      where: {
        bid: id
      },
      order: [['date', 'ASC']]
    })
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

    const {
      name,
      code,
      company,
      picUrl,
      webUrl,
      city,
      width,
      height,
      layers,
      svgfiles,
    } = data

    ctx.body = {
      name,
      code,
      company,
      picUrl,
      webUrl,
      city,
      width,
      height,
      layers,
      svgfiles,
      processes
    }
  }
}

module.exports = BuildingController
