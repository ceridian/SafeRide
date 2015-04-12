"use strict";

module.exports = function(sequelize, DataTypes) {
	var CAR = sequelize.define('CAR', {
    make: { type: DataTypes.STRING, allowNull: false },
    model: { type: DataTypes.STRING, allowNull: false },
    year: { type: DataTypes.INTEGER, allowNull: false },
		type: { type: DataTypes.STRING, allowNull: false },
	}, {
		classMethods: {
			associate: function(models){
        CAR.belongsTo(models.USER);
			}
		}
	});
	return CAR;
};
