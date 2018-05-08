const Controller = require('egg').Controller

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
    const { bid, content, picUrl, userid = 1 } = ctx.request.body

    const create = {
      bid,
      content,
      picUrl,
      userid
    }

    await ctx.model.Contribute.create(create)
    ctx.body = create
  }
}

module.exports = contributeController
