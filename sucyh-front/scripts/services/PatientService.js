'use strict';

// LOCAL
var baseUrl = 'http://localhost:3000';

// VM AZURE
//var baseUrl = '';

cards.factory("PatientService", function($resource) {
    return {
        patients: $resource(baseUrl + '/patients', {}, {
            query: { method: 'GET', isArray: true },
            create: { method: 'POST' },
        }),
        patient: $resource(baseUrl + '/patients/:patient', {}, {
            query: { method: 'GET', isArray: false },
            update: { method: 'PUT' },
            delete: { method: 'DELETE' },
        })
    };
});
