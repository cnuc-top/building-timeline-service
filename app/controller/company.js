const Controller = require('egg').Controller

class CompanyController extends Controller {
  async create() {
    const { ctx } = this
    const { bid, name, type, logoUrl, webUrl } = ctx.request.body
    const ret = await ctx.model.Company.create({
      bid,
      name,
      type,
      logoUrl,
      webUrl
    })

    const { id } = ret
    ctx.body = { id }
  }

  async delete() {
    const { ctx } = this
    const { id } = ctx.params
    const ret = await ctx.model.Company.destroy({
      where: {
        id
      }
    })
    ctx.body = { id }
  }

  async update() {
    const { ctx } = this
    const { id } = ctx.params
    const { name, type, logoUrl, webUrl } = ctx.request.body

    const ret = await ctx.model.Company.update(
      {
        name,
        type,
        logoUrl,
        webUrl
      },
      {
        where: {
          id
        }
      }
    )
    ctx.body = { id }
  }

  async list() {
    const { ctx } = this
    const data = await ctx.model.Company.findAll()
    ctx.body = data
  }
}

module.exports = CompanyController
