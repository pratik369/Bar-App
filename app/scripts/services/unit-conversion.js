'use strict';

angular.module('barApp')
	.factory('UnitConversion', function(){
		return function(){
			this.convert = function(value, from, to) {
                if(angular.equals(from, to)){ return value; }

				switch(from) {
					case 'OZ':
						switch(to){
							case 'L':
								return mlToLiter(ouncesToML(value));
							case 'ML':
								return ouncesToML(value);
						}
						break;
					case 'L':
						value = literToML(value);
					case 'ML':
						switch(to){
							case 'OZ':
								return mlToOunces(value);
							case 'L':
								return mlToLiter(value);
						}
						break;
				}
				return NaN;
			};

			function ouncesToML(ounces) {
				return Math.floor(ounces / 0.0338140225589);
			}

			function mlToOunces(ml) {
				return Math.floor(ml * 0.0338140225589);
			}

			function mlToLiter(ml) {
				return +(parseFloat(Math.round((ml / 1000) * 100) / 100).toFixed(2));
			}

			function literToML(liter) {
				return liter * 1000;
			}
		};
	});