package com.example.testcontainers;

import com.example.testcontainers.model.Person;
import com.example.testcontainers.repository.PersonRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class TestcontainersApplication {

  private static final Logger log = LoggerFactory.getLogger(TestcontainersApplication.class);

  public static void main(String[] args) {
    SpringApplication.run(TestcontainersApplication.class, args);
  }

  @Bean
  public CommandLineRunner commandLineRunner(final PersonRepository repository) {
    return (args -> {
      log.info("Persons found with findAll:");
      log.info("---------------------------");
      for (Person person : repository.findAll()) {
        log.info(person.toString());
      }
      log.info("");
    });
  }
}
