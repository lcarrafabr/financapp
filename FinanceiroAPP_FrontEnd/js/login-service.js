angular
.module('myApp')
.factory('CadastroService', CadastroService);

function CadastroService ($q, $window, $http) {
    return {

        cadastro : function (form) {
            return $http({
                method : "POST",
                url : backend + "/cadastro",
                headers: [{'Content-Type': 'application/json'}], 
                data: {
                    "username": form.username,
                    "email": form.email,
                    "pwd" : form.pwd,
                    "cpf" : form.cpf
                }
            })
        },

    };
}