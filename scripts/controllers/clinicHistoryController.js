'use strict';

cards.controller('clinicHistoryController',['$scope', 'ClinicHistoryService', function($scope, ClinicHistoryService){

	$scope.reloadClinicHistories = function() {
	    $scope.clinicHistories = ClinicHistoryService.clinicHistories.query().$promise.then(
			function (result) {
		        $scope.clinicHistories = result;
		    }
		);
	};

	$scope.newClinicHistoryTitle = "";
	$scope.saveNewClinicHistory = function() {
		if ($scope.newClinicHistoryTitle != "") {
			var newClinicHistory = {
				//new clinic history 
				"patientId": String,
				"creationDate": new Date(),
			
			};
			ClinicHistoryService.clinicHistories.create(newClinicHistory);
			setTimeout(function () { location.reload(); }, 500);
		};
	};

	$scope.editClinicHistory = function () {
		var newClinicHistory = {
				//new clinic history 
				"patient": String,
				"creationDate": new Date(),
		};
		ClinicHistoryService.clinicHistory.update(editedClinicHistory);
	};

	$scope.deleteClinicHIstory = function (idClinicHistory){
		ClinicHistoryService.clinicHistory.delete(idClinicHistory);
	};

	$scope.reloadClinicHistories();

}]);

