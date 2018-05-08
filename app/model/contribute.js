const moment = require('moment')

module.exports = app => {
  const { STRING, TEXT, INTEGER, BOOLEAN, DATE } = app.Sequelize

  const Contribute = app.model.define(
    'contributes',
    {
      date: DATE,
      picUrl: STRING(255),
      rate: {
        type: INTEGER,
        defaultValue: 0
      },
      isActive: {
        type: BOOLEAN,
        defaultValue: false
      }
    },
    {
      indexes: []
    }
  )
  Contribute.associate = function() {
    app.model.Contribute.belongsTo(app.model.Building, {
      foreignKey: ['bid']
    })
    app.model.Contribute.belongsTo(app.model.User, {
      foreignKey: ['userid']
    })
  }
  return Contribute
}
