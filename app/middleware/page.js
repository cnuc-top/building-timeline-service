module.exports = () => {
  return async function(ctx, next) {
    let { page = 1, limit = 5 } = ctx.query
    page = parseInt(page)
    limit = parseInt(limit)
    ctx.page = { limit, offset: limit * (page - 1) }
    await next()
  }
}
