members = [
    { nombre: 'Dani Pérez', id: 0},
    { nombre: 'Jonathan García', id: 1 },
    { nombre: 'Juan Manuel Pinto', id: 2 },
    { nombre: 'José Antonio Gómez', id: 3 },
    { nombre: 'Piter Arjona', id: 4 },
    { nombre: 'Ricardo León', id: 5 },
  ];

angular.module('starter.controllers', [])

.controller('AppCtrl', function() {
})

.controller('MiembrosCtrl', function($scope) {
  $scope.miembros = members;
})

.controller('MiembroCtrl', function($scope, $stateParams) {
  $scope.miembro=members[$stateParams.miembroId];
});
