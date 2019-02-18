module.exports = function(sequelize, DataTypes) {
  
  var Group = sequelize.define("Group", {
      //  This will be an array contanining ids form vacation_options
      // vacations: {
      //   type: DataTypes.ARRAY,
        
      //   allowNull: true,
        
      // },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 125]
        }
      }
      
    });

    Group.associate = function(models) {
    models.Group.hasMany(models.VacationOptions);
    models.Group.belongsToMany(models.User, {
      through: "UserGroup"
    });
  };

  return Group;
};