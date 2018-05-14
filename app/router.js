'use strict'

module.exports = app => {
  const { router, controller, middleware } = app
  const islogin = middleware.islogin()
  const page = middleware.page()
  
  router.get('/', controller.home.index)
  router.get('/v1/wx-login', controller.user.wxLogin)
  router.get('/v1/cos_auth', controller.user.cos_auth)

  router.get('/v1/user', islogin, controller.user.user)
  // router.get('/v1/user/:userid', controller.user.info)
  router.put('/v1/user', islogin, controller.user.update)

  router.post('/v1/buildings', controller.building.create)
  router.put('/v1/buildings/:id', controller.building.update)
  router.get('/v1/buildings', page, controller.building.list)
  router.get('/v1/buildings/:id', controller.building.id)
  router.get('/v1/buildings/:id/contributes', controller.building.contributes)

  router.post('/v1/processes', controller.process.create)
  router.delete('/v1/processes/:id', controller.process.delete)
  router.put('/v1/processes/:id', controller.process.update)
  
  // router.post('/v1/citys', controller.city.create)
  // router.put('/v1/citys/:id', controller.city.create)
  // router.get('/v1/citys', controller.city.list)
  // router.get('/v1/citys/:id', controller.city.list)

  router.post('/v1/svgfiles', controller.svgfile.create)
  router.delete('/v1/svgfiles/:id', controller.svgfile.delete)
  router.put('/v1/svgfiles/:id', controller.svgfile.update)

  // router.post('/v1/weblinks', controller.weblink.create)
  // router.delete('/v1/weblinks', controller.weblink.delete)
  // router.put('/v1/weblinks/:id', controller.weblink.update)
  // router.get('/v1/weblinks', controller.weblink.list)
  
  router.post('/v1/contributes', controller.contribute.create)
  // router.delete('/v1/contributes/:id', controller.contribute.delete)
  // router.put('/v1/contributes/:id', controller.contribute.edit)
  // router.get('/v1/contributes', controller.contribute.create)

  // router.post('/v1/companies', controller.company.create)
  // router.delete('/v1/companies/:id', controller.company.delete)
  // router.put('/v1/companies/:id', controller.company.edit)
  // router.get('/v1/companies', controller.company.create)

  router.get('/v1/upload/token', controller.upload.token)
}
