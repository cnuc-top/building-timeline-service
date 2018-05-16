'use strict'

module.exports = appInfo => {
  const config = (exports = {})

  config.keys = appInfo.name + '_1522461581637_7339'

  config.sequelize = {
    dialect: 'mysql',
    database: 'building-timeline',
    host: 'localhost',
    port: '3306',
    username: 'root',
    password: 'root',
    timezone: '+08:00'
  }

  config.qiniu = {
    accessKey: '',
    secretKey: '',
    bucket: ''
  }

  config.gt3 = {
    geetestId: '',
    geetestKey: ''
  }

  config.redis = {
    client: {
      host: '127.0.0.1',
      port: '6379',
      password: '',
      db: '0'
    }
  }
  config.sessionRedis = {
    name: ''
  }

  config.weappSDK = {
    appId: '',
    appSecret: ''
  }

  config.security = {
    csrf: {
      enable: false
    }
  }

  config.adminKey = ''

  config.middleware = []

  return config
}
