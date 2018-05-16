const moment = require('moment')
const { ATTACHMENT_TYPE } = require('../common/const/cnuc')

module.exports = app => {
  const { STRING, TEXT, INTEGER, BOOLEAN, DATE } = app.Sequelize

  const Attachment = app.model.define(
    'attachments',
    {
      hash: {
        type: STRING,
        allowNull: false
      },
      url: {
        type: STRING,
        allowNull: false
      },
      size: {
        type: INTEGER,
        defaultValue: 0
      },
      type: {
        type: INTEGER,
        defaultValue: ATTACHMENT_TYPE.IMAGE
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
  Attachment.associate = function() {
    app.model.Attachment.belongsTo(app.model.Timeline, {
      foreignKey: 'tid'
    })
    app.model.Attachment.belongsTo(app.model.User, {
      foreignKey: 'userid'
    })
  }
  return Attachment
}
