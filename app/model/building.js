module.exports = app => {
  const { STRING, TEXT, INTEGER, BOOLEAN, DATE, FLOAT } = app.Sequelize

  const Building = app.model.define(
    'buildings',
    {
      name: {
        type: STRING,
        allowNull: false
      },
      city: {
        type: STRING,
        allowNull: false
      },
      height: {
        type: FLOAT,
        allowNull: false
      },
      width: {
        type: FLOAT,
        allowNull: false
      },
      layers: {
        type: INTEGER,
        allowNull: false
      }
    },
    {
      indexes: [
        {
          fields: ['name']
        },
        {
          fields: ['city']
        }
      ]
    }
  )

  Building.associate = function() {
    app.model.Building.hasMany(app.model.Process, {
      foreignKey: 'bid'
    })
    app.model.Building.hasMany(app.model.Svgfile, {
      foreignKey: 'bid'
    })
  }

  return Building
}
