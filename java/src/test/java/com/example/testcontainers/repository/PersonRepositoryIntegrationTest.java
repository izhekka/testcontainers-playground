/*
 * Copyright (C) 2021 Spanning Cloud Apps. All rights reserved.
 */

package com.example.testcontainers.repository;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.is;

import com.example.testcontainers.config.PostgreSQLContainerConfig;
import com.example.testcontainers.model.Person;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import java.util.List;
import java.util.concurrent.ThreadLocalRandom;

@ExtendWith(SpringExtension.class)
@SpringBootTest
@ActiveProfiles("test")
@ContextConfiguration(initializers = PostgreSQLContainerConfig.Initializer.class)
public class PersonRepositoryIntegrationTest {

  @Autowired
  private PersonRepository repository;

  @Test
  public void testSave() {
    for (int i = 0; i < 10; i++) {
      final String firstName = generateString();
      final String lastName = generateString();

      final var beforeList = (List<Person>) repository.findAll();
      repository.save(new Person(firstName, lastName));
      final var afterList = (List<Person>) repository.findAll();

      assertThat(afterList.size(), is(beforeList.size() + 1));
    }

  }

  private String generateString() {
    final int length = 5;
    final String characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    final int charactersLength = characters.length();

    StringBuilder result = new StringBuilder();
    for (int i = 0; i < length; i++) {
      result.append(characters.charAt(ThreadLocalRandom.current().nextInt(charactersLength)));
    }

    return result.toString();
  }
}
