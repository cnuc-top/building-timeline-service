const pkg = require('../../package.json')
const Controller = require('egg').Controller

class HomeController extends Controller {
  async index() {
    const { ctx } = this
    // await ctx.model.User.sync({ force: true })
    // await ctx.model.Userprofile.sync({ force: true })
    // await ctx.model.SocialOauth.sync({ force: true })
    
    // await ctx.model.Building.sync({ force: true })
    // await ctx.model.Process.sync({ force: true })
    // await ctx.model.Svgfile.sync({ force: true })
    // await ctx.model.Contribute.sync({ force: true })

    const { name, version } = pkg
    ctx.body = { name, version }
  }
}

module.exports = HomeController
