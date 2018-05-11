'use strict'

module.exports = app => {
  const { router, controller, middleware } = app
  const islogin = middleware.islogin()

  router.get('/', controller.home.index)


  router.get('/v1/wx-login', controller.user.wxLogin)
  router.get('/v1/cos_auth', controller.user.cos_auth)

  router.get('/v1/user', islogin, controller.user.user)
  router.put('/v1/user', islogin, controller.user.update)

  // router.get('/addbuilds', controller.home.addbuilds)
  router.get('/v1/buildings', controller.building.list)
  router.get('/v1/buildings/:id', controller.building.id)
  router.get('/v1/buildings/:bid/contributes', controller.building.contributes)

  router.post('/v1/process', controller.process.create)
  router.post('/v1/contributes', controller.contribute.create)

  router.get('/v1/upload/token', controller.upload.token)
}
