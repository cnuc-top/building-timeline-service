'use strict'

const Controller = require('egg').Controller
const { removeProperty } = require('../utils')

class BuildingController extends Controller {
  async create() {
    const { ctx } = this

    const {
      name,
      code,
      company,
      picUrl,
      city,
      width,
      height,
      layers,
      isShow,
      address
    } = ctx.request.body

    const ret = await ctx.model.Building.create({
      name,
      code,
      company,
      picUrl,
      city,
      width,
      height,
      layers,
      isShow,
      address
    })

    ctx.body = { id: ret.id }
  }

  async update() {
    const { ctx } = this
    const { id } = ctx.params

    const {
      name,
      code,
      company,
      picUrl,
      city,
      width,
      height,
      layers,
      isShow,
      address
    } = ctx.request.body

    const ret = await ctx.model.Building.update(
      {
        name,
        code,
        company,
        picUrl,
        city,
        width,
        height,
        layers,
        isShow,
        address
      },
      {
        where: { id }
      }
    )

    ctx.body = { id }
  }

  async list() {
    const { ctx } = this
    const { city } = ctx.query
    let where = { city }
    where = removeProperty(where)

    const list = await ctx.model.Building.findAll({
      ...ctx.page,
      order: [['height', 'DESC']],
      where,
      include: [
        {
          model: ctx.model.Svgfile,
          attributes: ['id', 'type', 'content', 'fill']
        },
        {
          model: ctx.model.Process,
          attributes: ['id', 'date', 'basic', 'layers', 'seconds']
        }
      ]
    })

    const total = await ctx.model.Building.count({ where })
    ctx.body = {
      code: 0,
      data: {
        ...ctx.page,
        total,
        list
      }
    }
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
      svgfiles
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

  async contributes() {
    const { ctx } = this
    const { id } = ctx.params
    const data = await ctx.model.Contribute.findAll({
      attributes: ['id', 'date', 'content', 'picUrl', 'type'],
      where: {
        bid: id
      }
    })
    ctx.body = data
  }

  async companies() {
    const { ctx } = this
    const { id } = ctx.params
    const data = await ctx.model.Company.findAll({
      where: {
        bid: id
      }
    })
    ctx.body = data
  }

  async companiesCreate() {

  }

  async companiesDelete() {

  }
}

module.exports = BuildingController
