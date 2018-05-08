module.exports = app => {
  const { STRING, TEXT, INTEGER, BOOLEAN, DATE } = app.Sequelize

  const Process = app.model.define(
    'process',
    {
      date: {
        type: DATE,
        allowNull: false
      },
      basic: {
        type: INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      layers: {
        type: INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      seound: {
        type: INTEGER,
        allowNull: false,
        defaultValue: 0
      }
    },
    {
      indexes: [
        {
          fields: ['date']
        }
      ]
    }
  )

  Process.associate = function() {
    app.model.Process.belongsTo(app.model.Building, {
      as: 'building',
      foreignKey: 'bid',
    })
  }

  return Process
}