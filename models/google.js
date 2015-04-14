"use strict";

module.exports = function(sequelize, DataTypes) {
	var GOOGLE = sequelize.define('GOOGLE', {
    gid: { type: DataTypes.STRING, allowNull: false },
    token: { type: DataTypes.STRING, allowNull: false },
		email: { type: DataTypes.STRING, allowNull: false },
		name: { type: DataTypes.STRING, allowNull: false }
	}, {
		classMethods: {
			associate: function(models){
        GOOGLE.belongsTo(models.USER)
			}
		}
	});
	return GOOGLE;
};
