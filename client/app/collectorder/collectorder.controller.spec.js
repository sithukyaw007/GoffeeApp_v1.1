'use strict';

describe('Controller: CollectorderCtrl', function () {

  // load the controller's module
  beforeEach(module('goffeeAppApp'));

  var CollectorderCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CollectorderCtrl = $controller('CollectorderCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
