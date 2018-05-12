'use strict'

module.exports = app => {
  const { router, controller, middleware } = app
  const islogin = middleware.islogin()

  router.get('/', controller.home.index)
  router.get('/v1/wx-login', controller.user.wxLogin)
  router.get('/v1/cos_auth', controller.user.cos_auth)

  router.get('/v1/user', islogin, controller.user.user)
  // router.get('/v1/user/:userid', controller.user.info)
  router.put('/v1/user', islogin, controller.user.update)

  router.get('/v1/buildings', controller.building.list)
  router.get('/v1/buildings/:id', controller.building.id)
  router.get('/v1/buildings/:id/contributes', controller.building.contributes)
  // router.post('/v1/buildings', controller.building.create)

  // router.get('/v1/process', controller.process.list)
  router.post('/v1/process', controller.process.create)
  // router.put('/v1/process', controller.process.edit)
  // router.delete('/v1/process', controller.process.delete)
  
  // router.get('/v1/citys', controller.city.list)
  // router.post('/v1/citys', controller.city.create)
  // router.get('/v1/citys/:id', controller.city.list)
  // router.put('/v1/citys/:id', controller.city.create)
  
  router.post('/v1/contributes', controller.contribute.create)
  // router.get('/v1/contributes', controller.contribute.create)
  // router.put('/v1/contributes/:id', controller.contribute.edit)
  // router.delete('/v1/contributes/:id', controller.contribute.delete)

  router.get('/v1/upload/token', controller.upload.token)
}
