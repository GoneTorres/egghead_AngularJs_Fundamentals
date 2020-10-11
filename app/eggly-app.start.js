angular.module("Eggly", []).controller("MainCtrl", function ($scope) {
  $scope.categories = [
    { id: 0, name: "Development" },
    { id: 1, name: "Design" },
    { id: 2, name: "Exercise" },
    { id: 3, name: "Humor" },
  ];
  $scope.bookmarks = [
    {
      id: 0,
      title: "AngularJS",
      url: "http://angularjs.org",
      category: "Development",
    },
    {
      id: 1,
      title: "Poorly Drawn Lines",
      url: "http://www.poorlydrawnlines.com/",
      category: "Humor",
    },
    {
      id: 2,
      title: "Polar - Flow",
      url: "https://flow.polar.com",
      category: "Exercise",
    },
  ];
  $scope.currentCategory = null;

  function setCurrentCategory(category) {
    $scope.currentCategory = category;
    $scope.cancelCreating();
    $scope.cancelEditing();
  }

  function isCurrentCategory(category) {
    return (
      $scope.currentCategory !== null &&
      category.name === $scope.currentCategory.name
    );
  }

  $scope.setCurrentCategory = setCurrentCategory;
  $scope.isCurrentCategory = isCurrentCategory;

  // Creating and Editing States

  $scope.isCreating = false;
  $scope.isEditing = false;

  function startCreating() {
    $scope.isCreating = true;
    $scope.isEditing = false;
  }
  function cancelCreating() {
    $scope.isCreating = false;
  }

  function startEditing() {
    $scope.isCreating = false;
    $scope.isEditing = true;
  }
  function cancelEditing() {
    $scope.isEditing = false;
  }

  function shouldShowCreating() {
    return $scope.currentCategory && !$scope.isEditing;
  }
  function shouldShowEditing() {
    return $scope.isEditing && !$scope.isCreating;
  }

  $scope.startCreating = startCreating;
  $scope.cancelCreating = cancelCreating;
  $scope.startEditing = startEditing;
  $scope.cancelEditing = cancelEditing;
  $scope.shouldShowCreating = shouldShowCreating;
  $scope.shouldShowEditing = shouldShowEditing;
});
