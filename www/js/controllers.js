members = [
    { nombre: 'Dani Pérez', imagen: 'img/miembros/Dani.jpg', facebook: 'https://www.facebook.com/dani.perezesteban', twitter: 'https://twitter.com/daj26kc', id: 0},
    { nombre: 'Jonathan García', imagen: 'img/miembros/Jonathan.jpg', facebook: 'https://www.facebook.com/jonathan.garciavillodres', twitter: 'https://twitter.com/JonathanGV23', instagram: 'https://www.instagram.com/jonathangv26/', id: 1 },
    { nombre: 'Juan Manuel Pinto', imagen: 'img/miembros/Juanma.jpg', facebook: 'https://www.facebook.com/juanmanuel.pintorodriguez', instagram: 'https://www.instagram.com/juanmanuelpintorodriguez/', id: 2 },
    { nombre: 'José Antonio Gómez', imagen: 'img/miembros/Jose.jpg', facebook: 'https://www.facebook.com/joseantonio.gomezlopez', twitter: 'https://twitter.com/JoseAGM_90', instagram: 'https://www.instagram.com/joseagm90/', id: 3 },
    { nombre: 'Piter Arjona', imagen: 'img/miembros/Pedro.jpg', facebook: 'https://www.facebook.com/pedrojesus.arjonasiles', twitter: 'https://twitter.com/piterarjonasile', instagram: 'https://www.instagram.com/piter_algaidas', id: 4 },
    { nombre: 'Ricardo León', imagen: 'img/miembros/Ricardo.jpg', facebook: 'https://www.facebook.com/ricardoluis.leon', id: 5 },
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
