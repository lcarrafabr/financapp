package br.com.financapp.model;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Cadastro {

	@Id
	@GeneratedValue
	private Long codigoCadastro;
	
	@Column(nullable=false, length=50)
	private String nomeUsuario;
	@Column(nullable=false)
	private LocalDate dataCadastro;
	@Column(nullable=false, length=155)
	private String email;
	@Column(nullable=false, length=20)
	private String senha;
	@Column(nullable=false, length=255)
	private String tipoAcesso;
	@Column(nullable=false, length=14)
	private String cpf;

	public Long getCodigoCadastro() {
		return codigoCadastro;
	}

	public void setCodigoCadastro(Long codigoCadastro) {
		this.codigoCadastro = codigoCadastro;
	}

	public String getNomeUsuario() {
		return nomeUsuario;
	}

	public void setNomeUsuario(String nomeUsuario) {
		this.nomeUsuario = nomeUsuario;
	}

	public LocalDate getDataCadastro() {
		return dataCadastro;
	}

	public void setDataCadastro(LocalDate dataCadastro) {
		this.dataCadastro = dataCadastro;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getSenha() {
		return senha;
	}

	public void setSenha(String senha) {
		this.senha = senha;
	}

	public String getTipoAcesso() {
		return tipoAcesso;
	}

	public void setTipoAcesso(String tipoAcesso) {
		this.tipoAcesso = tipoAcesso;
	}

	public String getCpf() {
		return cpf;
	}

	public void setCpf(String cpf) {
		this.cpf = cpf;
	}

}
