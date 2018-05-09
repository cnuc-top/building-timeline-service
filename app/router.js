'use strict'

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app
  router.get('/', controller.home.index)
  // router.get('/addbuilds', controller.home.addbuilds)
  router.get('/v1/buildings', controller.building.list)
  router.get('/v1/buildings/:id', controller.building.id)
  router.get('/v1/buildings/:bid/contributes', controller.building.contributes)

  router.post('/v1/process', controller.process.create)
  router.post('/v1/contributes', controller.contribute.create)


  router.get('/v1/upload/token', controller.upload.token)

}
