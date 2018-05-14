const moment = require('moment')

module.exports = app => {
  const { STRING, TEXT, INTEGER, BOOLEAN, DATE } = app.Sequelize

  const BuildingCompany = app.model.define('buildings_companies', {}, {})

  BuildingCompany.associate = function() {
    app.model.BuildingCompany.belongsTo(app.model.Company, {
      as: 'company',
      foreignKey: 'cid'
    })
    app.model.BuildingCompany.belongsTo(app.model.Building, {
      as: 'building',
      foreignKey: 'bid'
    })
  }

  return BuildingCompany
}
