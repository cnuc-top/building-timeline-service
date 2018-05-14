const moment = require('moment')

module.exports = app => {
  const { STRING, TEXT, INTEGER, BOOLEAN, DATE } = app.Sequelize

  const Company = app.model.define(
    'companies',
    {
      name: STRING,
      type: {
        type: INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      logoUrl: {
        type: STRING,
        defaultValue: ''
      },
      webUrl: {
        type: STRING,
        defaultValue: ''
      }
    },
    {}
  )

  return Company
}
