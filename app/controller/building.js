'use strict'

const Controller = require('egg').Controller

class BuildingController extends Controller {
  async list() {
    this.ctx.body = 'hi, egg'
  }

  async id() {
    this.ctx.body = 'hi, egg'
  }
}

module.exports = BuildingController
