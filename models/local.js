"use strict";

module.exports = function(sequelize, DataTypes) {
	var LOCAL = sequelize.define('LOCAL', {
		email: { type: DataTypes.STRING, allowNull: false },
		password: { type: DataTypes.STRING, allowNull: false }
	}, {
		classMethods: {
			associate: function(models){
        LOCAL.belongsTo(models.USER);
			}
		}
	});
	return LOCAL;
};
