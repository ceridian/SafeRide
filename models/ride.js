"use strict";

module.exports = function(sequelize, DataTypes) {
	var RIDE = sequelize.define('RIDE', {
		type: { type: DataTypes.STRING, allowNull: false },
    start: { type: DataTypes.STRING, allowNull: false },
		dest: { type: DataTypes.STRING, allowNull: false },
		rideID: { type: DataTypes.STRING, allowNull: false },
		startDtTm: { type: DataTypes.DATE, allowNull: false },
		endDtTm: DataTypes.DATE
	}, {
		classMethods: {
			associate: function(models){
				RIDE.belongsTo(models.USER);
			}
		}
	});
	return RIDE;
};
