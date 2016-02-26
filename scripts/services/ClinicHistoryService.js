'use strict';

// LOCAL
var baseUrl = 'http://localhost:3000';

// VM AZURE
//var baseUrl = '';

cards.factory("ClinicHistoryService", function($resource) {
    return {
        clinichistories: $resource(baseUrl + '/clinichistories', {}, {
            query: { method: 'GET', isArray: true },
            create: { method: 'POST' },
        }),
        clinichistory: $resource(baseUrl + '/clinichistories/:clinichistory', {}, {
            query: { method: 'GET', isArray: false },
            update: { method: 'PUT' },
            delete: { method: 'DELETE' },
        })
    };
});


