package br.com.financapp.controller;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import br.com.financapp.model.Cadastro;

@Controller
@RequestMapping("/cadastro")
public class CadastroController {

	Logger logger = LoggerFactory.getLogger(CadastroController.class);

	@RequestMapping(value = "", method = RequestMethod.POST)
	@ResponseBody
	public Cadastro inserir(@RequestBody Cadastro cadastro) {
		return cadastro;
	}

	@RequestMapping(value="", method=RequestMethod.GET)
	@ResponseBody
	public ResponseEntity<List<Cadastro>> buscarTodos(){
		
		List<Cadastro> list = new ArrayList<>();
		
		for (int i = 0; i < 1000; i++) {
			
			Cadastro oCadastro = new Cadastro();
			
			oCadastro.setNomeUsuario("User_" + i);
			oCadastro.setDataCadastro(LocalDate.now());
			oCadastro.setEmail("user_" + i + "_@gmail.com");
			oCadastro.setSenha("kjshfgksjhfgksjfhksdASDLFKJALKDJSLAJDLKASJj");
			oCadastro.setTipoAcesso("admin");
			oCadastro.setCpf("105.859.444-50");
			list.add(oCadastro);
		}
		
		return new ResponseEntity<List<Cadastro>>(list, HttpStatus.OK);
		
	}
	
	@RequestMapping(value="/{id}", method=RequestMethod.GET)
	@ResponseBody
	public Cadastro buscarPorId(@PathVariable String id) {
		
		Cadastro oCadastro = new Cadastro();
		
		oCadastro.setCodigoCadastro(1L);
		oCadastro.setNomeUsuario("User_");
		oCadastro.setDataCadastro(LocalDate.now());
		oCadastro.setEmail("user_1_@gmail.com");
		oCadastro.setSenha("kjshfgksjhfgksjfhksdASDLFKJALKDJSLAJDLKASJj");
		oCadastro.setTipoAcesso("admin");
		oCadastro.setCpf("105.859.444-50");
		
		return oCadastro;
	}
	
	@ResponseBody
	@RequestMapping(value="{id}", method=RequestMethod.PUT)
	public ResponseEntity<Cadastro> atualizar(@RequestBody Cadastro cadastro, @PathVariable String id){
		
		return new ResponseEntity<Cadastro>(new Cadastro(), HttpStatus.OK);
		
	}
	@ResponseBody
	@RequestMapping(value="{id}", method=RequestMethod.DELETE)
	public ResponseEntity<Cadastro> deletar(@PathVariable String id){
		
		return new ResponseEntity<Cadastro>(new Cadastro(), HttpStatus.OK);
	}
	
}
