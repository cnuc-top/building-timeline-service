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
      type: {
        type: INTEGER,
        defaultValue: 1
      },
      content: {
        type: STRING,
        defaultValue: ''
      },
      isActive: {
        type: BOOLEAN,
        defaultValue: false
      }
    },
    {
      indexes: [],
      getterMethods: {
        viewDate() {
          return moment(this.date).format('YYYY年MM月DD日')
        }
      }
    }
  )
  Contribute.associate = function() {
    app.model.Contribute.belongsTo(app.model.Building, {
      foreignKey: 'bid'
    })
    app.model.Contribute.belongsTo(app.model.User, {
      foreignKey: 'userid'
    })
  }
  return Contribute
}
