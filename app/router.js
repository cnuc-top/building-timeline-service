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
  router.get('/v1/buildings/:id/companies', controller.building.companies)
  router.post('/v1/buildings/:id/companies', controller.building.companiesCreate)
  router.delete('/v1/buildings/:id/companies', controller.building.companiesDelete)

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

  router.post('/v1/timelines', controller.timeline.create)
  router.delete('/v1/timelines/:id', controller.timeline.delete)
  router.put('/v1/timelines/:id', controller.timeline.update)
  router.get('/v1/timelines', page, controller.timeline.list)

  router.post('/v1/companies', controller.company.create)
  router.delete('/v1/companies/:id', controller.company.delete)
  router.put('/v1/companies/:id', controller.company.update)
  router.get('/v1/companies', controller.company.list)

  router.post('/v1/attachments', controller.attachment.create)

  router.get('/v1/upload/token', controller.upload.token)
}
