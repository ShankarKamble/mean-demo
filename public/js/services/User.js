//User service used for User REST endpoint
angular.module('UserChat.User').factory("User", ['$resource', function($resource) {
    return $resource('User/:UserChatsId', {
        UserChatsId: '@_id'
    }, {
        update: {
            method: 'PUT'
        }
    });
}]);

//User service used for User REST endpoint
angular.module('UserChat.User').service("Contact", ['$http','$q', function($http, $q) {
    this.getAllContact = function() {
    var deferred = $q.defer();
     $http.get('contacts')
       .success(function(data) { 
          deferred.resolve(data);
       }).error(function(msg, code) {
          deferred.reject(msg);
       });
     return deferred.promise;

  }


  this.removeContact = function(data) {
    var deferred = $q.defer();
     $http.delete('contact/'+data._id)
       .success(function(data) { 
          deferred.resolve(data);
       }).error(function(msg, code) {
          deferred.reject(msg);
       });
     return deferred.promise;

  }


  this.updateContact = function(data) {
    var deferred = $q.defer();
     $http.put('contact/'+data._id, data)
       .success(function(data) { 
          deferred.resolve(data);
       }).error(function(msg, code) {
          deferred.reject(msg);
       });
     return deferred.promise;

  }

  this.addContact = function(data) {
    var deferred = $q.defer();
     $http.post('contact',data)
       .success(function(data) { 
          deferred.resolve(data);
       }).error(function(msg, code) {
          deferred.reject(msg);
       });
     return deferred.promise;

  }
}]);