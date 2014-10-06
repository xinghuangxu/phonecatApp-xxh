'use strict';

/* Services */
var phonecatServices=angular.module('phonecatServices',['ngResource']);  //define dependency

phonecatServices.factory('Phone',['$resource',function($resource){
    return $resource('phones/:phoneId.json',{},{
        query:{method:'GET',params:{phoneId:'phones'},isArray:true}
    });
}]);
