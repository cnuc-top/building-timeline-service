'use strict'

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app
  router.get('/', controller.home.index)

  router.get('/v1/buildings', controller.building.list)
  router.get('/v1/buildings/:id', controller.building.id)
}
