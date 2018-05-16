const moment = require('moment')
const { TIMELINE_TYPE } = require('../common/const/cnuc')

module.exports = app => {
  const { STRING, TEXT, INTEGER, BOOLEAN, DATE } = app.Sequelize

  const Timeline = app.model.define(
    'Timelines',
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
  Timeline.associate = function() {
    app.model.Timeline.belongsTo(app.model.Building, {
      foreignKey: 'bid'
    })
    app.model.Timeline.belongsTo(app.model.User, {
      foreignKey: 'userid'
    })
  }
  return Timeline
}
