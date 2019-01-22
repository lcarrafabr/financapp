package br.com.financapp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class AppStartFinc {

	public static void main(String[] args) throws Exception{
		SpringApplication app = new SpringApplication(AppStartFinc.class);
        app.run(args);
	}

}

