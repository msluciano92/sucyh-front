'use strict';

cards.controller('patientController',['$scope', 'PatientService', function($scope, PatientService){

	$scope.reloadPatients = function() {
	    $scope.patients = PatientService.patients.query().$promise.then(
			function (result) {
		        $scope.patients = result;
		    }
		);
	};

	$scope.newPatientTitle = "";
	$scope.saveNewPatient = function() {
		if ($scope.newPatientTitle != "") {
			var newPatient = {
				//new clinic history 
				"firstname": String,
				"creationDate": new Date()
			
			};
			PatientService.patients.create(newPatient);
			setTimeout(function () { location.reload(); }, 500);
		};
	};

	$scope.editPatient = function () {
		var editedPatient = {
				//new clinic history 
				"firstname": String,
				"lastname": String,
				"creationDate": new Date()
		};
		PatientService.patient.update(editedPatient);
	};

	$scope.deleteClinicHIstory = function (idPatient){
		PatientService.patient.delete(idPatient);
	};

	$scope.reloadPatients();

}]);