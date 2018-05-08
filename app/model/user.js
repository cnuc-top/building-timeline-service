const bcrypt = require('bcrypt-nodejs')

module.exports = app => {
  const { STRING, INTEGER } = app.Sequelize

  const User = app.model.define(
    'user',
    {
      id: {
        type: STRING(255),
        primaryKey: true
      },
      name: {
        type: STRING(32),
        allowNull: false
      },
      email: {
        type: STRING(60),
        validate: {
          isEmail: true
        }
      },
      phoneNumber: {
        type: STRING(255)
      },
      avatar: {
        type: STRING(255),
        validate: {
          isUrl: true
        }
      },
      password: {
        type: STRING(60),
        validate: {
          len: [6, 60]
        }
      },
      status: {
        type: INTEGER,
        defaultValue: 1
      },
      level: {
        type: INTEGER,
        defaultValue: 0
      },
      mark: {
        type: INTEGER,
        defaultValue: 50
      },
      contribute: {
        type: INTEGER,
        defaultValue: 0
      }
    },
    {
      indexes: [
        {
          fields: ['name']
        },
        {
          fields: ['email']
        }
      ]
    }
  )

  return User
}
