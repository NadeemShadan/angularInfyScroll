(function () {
    'use strict';
  angular.module('infyScroll',[]).directive('ngInfyScroll', function () {
      return {
          restrict: 'A',
          link: function (scope, element, attrs) {
              var curElement = element[0];
              element.bind('scroll', function () {
                  var currY =curElement.scrollTop;
                  var postHeight = curElement.offsetHeight;
                  var scrollHeight = curElement.scrollHeight;
                  var scrollPercent = (currY / (scrollHeight - postHeight)) * 100;
                  if(scrollPercent>=99.5 && scrollPercent<=100){
                      scope[attrs['ngInfyScroll']]();
                  }
  
              });
          }
      };
  });
  })();
  