const Service = require('egg').Service

class JsonService extends Service {
  async addBuild(data) {
    const { ctx } = this
    const { name, local, height, width, layers, structure, secounds, code } = data

    const ret = await ctx.model.Building.create({
      code,
      name,
      city: local,
      height,
      width,
      layers
    })

    const bid = ret.id

    const svgs = []

    svgs.push({
      bid,
      type: 1,
      content: structure
    })

    secounds.forEach(item => {
      svgs.push({
        bid,
        type: 2,
        content: item[0],
        fill: item[1]
      })
    })

    for (let item of svgs) {
      await ctx.model.Svgfile.create(item)
    }

    return bid
  }
}

module.exports = JsonService
