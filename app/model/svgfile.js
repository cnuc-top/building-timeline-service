module.exports = app => {
  const { STRING, TEXT, INTEGER, BOOLEAN, DATE } = app.Sequelize
  const { SVGFILE_TYPE } = require('../common/const/cnuc')
  const Svgfile = app.model.define('svgfiles', {
    content: {
      type: TEXT,
      allowNull: false
    },
    type: {
      type: INTEGER,
      allowNull: false
    },
    fill: {
      type: STRING,
      defaultValue: ''
    }
  })

  Svgfile.associate = function() {
    app.model.Svgfile.belongsTo(app.model.Building, {
      as: 'building',
      foreignKey: 'bid'
    })
  }

  return Svgfile
}
