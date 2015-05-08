var app = angular.module('myApp', []);
app.controller('AlumnoController', function ($scope){
	$scope.alumnos = [
		{nombre: "Fernando Torres", telefono: "3012548796", curso:  "3º ESO"},
		{nombre: "Andres Vargas", telefono: "3012548796", curso:  "3º ESO"},
		{nombre: "John Yepez", telefono: "3012548796", curso:  "3º ESO"},
		{nombre: "Gonzalo Nuñez", telefono: "3012548796", curso:  "3º ESO"},
		{nombre: "Andres Cabrera", telefono: "3012548796", curso:  "3º ESO"},
		{nombre: "Maria Alejandra ", telefono: "3012548796", curso:  "3º ESO"}
	];

	$scope.Save = function(){
		$scope.alumnos.push({nombre: $scope.nuevoAlumno.nombre, telefono: $scope.nuevoAlumno.telefono, curso:  $scope.nuevoAlumno.telefono});
	}
});