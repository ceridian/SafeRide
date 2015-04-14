"use strict";

module.exports = function(sequelize, DataTypes) {
	var USER = sequelize.define('USER', {
		uuid: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV1, primaryKey: true },
		first: { type: DataTypes.STRING, allowNull: false },
		last: { type: DataTypes.STRING, allowNull: false },
		middle: { type: DataTypes.STRING, allowNull: false }
	}, {
		classMethods: {
			associate: function(models){
				USER.hasMany(models.LOCAL, {as: 'user_id'});
			}
		}
	});
	return USER;
};
