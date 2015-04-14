"use strict";

module.exports = function(sequelize, DataTypes) {
	var TWITTER = sequelize.define('TWITTER', {
    tid: { type: DataTypes.STRING, allowNull: false },
    token: { type: DataTypes.STRING, allowNull: false },
		displayName: { type: DataTypes.STRING, allowNull: false },
		username: { type: DataTypes.STRING, allowNull: false }
	}, {
		classMethods: {
			associate: function(models){
        TWITTER.belongsTo(models.USER)
			}
		}
	});
	return TWITTER;
};
