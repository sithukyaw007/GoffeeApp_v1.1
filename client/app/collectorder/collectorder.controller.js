'use strict';

angular.module('goffeeAppApp')
.controller('CollectorderCtrl', function ($scope, $timeout, $rootScope) {
	$scope.message = 'Hello';

	$scope.captureImg = function() {
		debugger;
		$scope.showCircular = true;
		$scope.myClick();
	};

	$scope.myClick = function() {
		$timeout(
			function() {
				$scope.showSuccessMsg = true;
				$scope.showCircular = false;
				$rootScope.successCollection = true;
			}, 5000);
	};
});

