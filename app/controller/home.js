const pkg = require('../../package.json')
const Controller = require('egg').Controller
const fs = require('fs')
const { readText } = require('../utils')

class HomeController extends Controller {
  async index() {
    const { ctx } = this
    // await ctx.model.User.sync({ force: true })
    // await ctx.model.Userprofile.sync({ force: true })
    // await ctx.model.SocialOauth.sync({ force: true })

    // await ctx.model.Building.sync({ force: true })
    // await ctx.model.BuildingCompany.sync({ force: true })
    // await ctx.model.Process.sync({ force: true })
    // await ctx.model.Svgfile.sync({ force: true })
    // await ctx.model.Contribute.sync({ force: true })
    // await ctx.model.Company.sync({ force: true })

    const { name, version } = pkg
    ctx.body = { name, version }
  }

  async addbuilds() {
    const { ctx } = this

    const path = './app/common/data'
    const files = fs.readdirSync(path)

    const list = []
 

    files.forEach(item => {
      const data = readText(path + '/' + item)
      data.code = item.replace('.json', '')
      list.push(data)
      ctx.service.json.addBuild(data)
    })

    ctx.body = list
  }
}

module.exports = HomeController
