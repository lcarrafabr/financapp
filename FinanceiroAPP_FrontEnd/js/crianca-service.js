angular
.module('myApp')
.factory('CadastroService', CadastroService);

function CadastroService ($q, $window, $http) {
    return {

        buscarTodos : function (form) {
            return $http({
                method : "GET",
                url : backend + "/cadastro",
            })
        },


        buscar : function (form) {
            return $http({
                method : "GET",
                url : backend + "/cadastro/" + form.id,
                data: {
                    "id" : form.id
                }
            })
        },


        atualizar : function (form) {
            return $http({
                method : "PUT",
                url : backend + "/cadastro/" + form.id,
                data: {
                    "id" : form.id,
                    "user_id": form.user_id,
                    "nome": form.nome,
                    "nascimento" : form.nascimento,
                    "sexo" : form.sexo

                }
            })
        },

        cadastrar : function (form) {
            return $http({
                method : "POST",
                url : backend + "/cadastro",
                data: {
                    "user_id": form.user_id,
                    "nome": form.nome,
                    "nascimento" : form.dataNasc,
                    "sexo" : form.sexo
                }
            })
        },

        deletar : function (id) {
            return $http({
                method : "DELETE",
                url : backend + "/cadastro/" +id
            })
        },

    };
}