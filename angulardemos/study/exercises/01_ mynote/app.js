angular.module('noteApp', [])
  .controller('noteController', ['$scope', function ($scope) {
    $scope.note = '';
    console.log(''.trim())

    $scope.getLeftWords = function () {
      $scope.note = $scope.note.trim();
      console.log($scope.note.split(' '));
      return $scope.note.split(' ').length;

    }
  }])