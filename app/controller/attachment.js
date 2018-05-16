'use strict'

const Controller = require('egg').Controller

class AttachmentController extends Controller {
  async create() {
    const { ctx } = this
    const { hash, url, size, type } = ctx.request.body

    const create = {
      hash,
      url,
      size,
      type
    }

    const ret = await ctx.model.Attachment.create(create)
    ctx.body = { id: ret.id }
  }
}

module.exports = AttachmentController
