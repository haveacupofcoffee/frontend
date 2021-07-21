angular.module('noteApp', [])
  .controller('noteController', ['$scope', function ($scope) {
    const whiteSpace = " ";
    const allowedWordsCount  = 10;
    $scope.note = '';
    $scope.leftWordsCount = allowedWordsCount;

    $scope.keyUp = function (event) {
      let currNote = $scope.note;
/*      console.log(currNote);
      console.log(currNote.length);*/

      if(currNote === ''){
        return;
      }

      if($scope.leftWordsCount <= 0) {
        $scope.note = currNote.trim().split(whiteSpace).slice(0, allowedWordsCount).join(whiteSpace);
        $scope.leftWordsCount = 0;
        return;
      }

      $scope.note = currNote.trim();
      $scope.leftWordsCount = allowedWordsCount - currNote.split(whiteSpace).length;

    };

    $scope.save = function () {
      localStorage.setItem("mynote", JSON.stringify($scope.note));
      alert("Note is saved!");
    }

    $scope.read = function () {
      $scope.note = JSON.parse(localStorage.getItem("mynote") || '[]');
    }

    $scope.delete = function() {
      $scope.note = '';
    }

  }])