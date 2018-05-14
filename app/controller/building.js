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
      id,
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
    const { id: bid } = ctx.params
    const data = await ctx.model.BuildingCompany.findAll({
      where: {
        bid
      },
      include: {
        model: ctx.model.Company,
        as: 'companies',
        attributes: ['id', 'name', 'type']
      }
    })
    ctx.body = data
  }

  async companiesCreate() {
    const { ctx } = this
    const { id: bid } = ctx.params
    const { id: cid } = ctx.request.body

    const ret = await ctx.model.BuildingCompany.create({
      bid,
      cid
    })
    ctx.body = { id: ret.id }
  }

  async companiesDelete() {
    const { ctx } = this
    const { id } = ctx.params

    await ctx.model.BuildingCompany.destroy({
      where: {
        id
      }
    })
    ctx.body = { id }
  }
}

module.exports = BuildingController
