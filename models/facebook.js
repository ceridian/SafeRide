"use strict";

module.exports = function(sequelize, DataTypes) {
	var FACEBOOK = sequelize.define('FACEBOOK', {
    fid: { type: DataTypes.STRING, allowNull: false },
    token: { type: DataTypes.STRING, allowNull: false },
		email: { type: DataTypes.STRING, allowNull: false },
		name: { type: DataTypes.STRING, allowNull: false }
	}, {
		classMethods: {
			associate: function(models){
        FACEBOOK.belongsTo(models.USER)
			}
		}
	});
	return FACEBOOK;
};
