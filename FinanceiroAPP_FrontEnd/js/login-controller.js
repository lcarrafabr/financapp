app.controller('loginCtrl', function($scope, $http, LoginService, $localStorage, CadastroService) {

    $scope.form = {
        username : "",
        email : "",
        senha: "", 
        cpf : ""
    }

    $scope.cadastro = null;

    //$scope.entrar = function(){
        // console.info($localStorage);

        //LoginService.login($scope.form)
       // .then(function successCallback(response) {
            // this callback will be called asynchronously
            // when the response is available
          //  console.info("sucesso:");
          //  console.info(response);
         //   $localStorage.token = response.data.token;

            //window.location = "home.html";

         // }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
          //  alert("Erro ao tentar fazer login.");
           // console.info("error:");
           // console.info(response);
       // });
   // }

    //$scope.preencherCrianca = function(crianca){
       // $scope.form = {
         //   id: crianca.id,
         //   username : crianca.username,
         //   password : crianca.password,
         //   user_id: crianca.user_id, 
         //   nome : crianca.nome, 
         //   dataNasc : crianca.nascimento, 
         //   sexo : crianca.sexo
        //}
   // }

    $scope.cadastrarUsuario = function(){
        // console.info($localStorage);
        if($scope.form.id == null) {

            CadastroService.cadastrar($scope.form)
            .then(function successCallback(response) {
                // this callback will be called asynchronously
                // when the response is available
                console.info("sucesso:");
                console.info(response);
                

              }, function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
                alert("Erro ao tentar fazer o cadastro.");
                console.info("error:");
                console.info(response);
            });
        } else {
            CadastroService.atualizar($scope.form)
            .then(function successCallback(response) {
                // this callback will be called asynchronously
                // when the response is available
                console.info("sucesso:");
                console.info(response);

              }, function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
                alert("Erro ao tentar atualizar.");
                console.info("error:");
                console.info(response);
            });
        }

        //$scope.buscarCriancas();
        $scope.limparCampos();
    }


    $scope.limparCampos = function(){
        $scope.form = {
            id: null,
            username : "",
            password : "",
            user_id: "", 
            nome : "", 
            dataNasc : "", 
            sexo : "",
        }

    }

    //$scope.buscarCriancas = function(){
       // CriancaService.buscarTodos()
       // .then(function successCallback(response) {
            // this callback will be called asynchronously
            // when the response is available
         //   console.info("sucesso:");
         //   console.info(response);
         //   $scope.criancas = response.data;

        //  }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
           // alert("Erro ao tentar fazer o cadastro.");
           // console.info("error:");
           // console.info(response);
       // });
    //}

   // $scope.excluirCrianca = function(id){
     //   CriancaService.deletar(id)
      //  .then(function successCallback(response) {
      //      $scope.buscarCriancas();

       //   }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
        //    console.info("Erro ao tentar excluir o cadastro.");
        //    console.info("error:");
        //    console.info(response);
       // });
   // }

    var init = function(){
    //    $scope.buscarCriancas();
    }

    init();

});