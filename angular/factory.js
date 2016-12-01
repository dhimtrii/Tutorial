angular.module('sampleApp')
.factory('sampleFactory', function($http) {
    return {
        get: function(id) {
            return $http.post("http:/127.0.0.1:8000/login", {
                id: id
            }).then(function(response) {
                return response;
            })
        }
    }
});


angular.module('sampleApp')
.config(function($urlRouteProvider, $stateProvider) {
    
    $stateProvider.state('home', {
        url: '/login',
        template: 'views/login.html',
        controller: 'loginCtrl',
        resolve: {
            userData: function(sampleFactory, $stateParams) {
                return sampleFactory.get($stateParams.id);
            }
        }
    })
});


angular.module('sampleApp')
.controller('loginCtrl', function($scope, userData) {
    
});