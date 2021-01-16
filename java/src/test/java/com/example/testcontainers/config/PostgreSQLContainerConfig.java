/*
 * Copyright (C) 2021 Spanning Cloud Apps. All rights reserved.
 */

package com.example.testcontainers.config;

import lombok.AccessLevel;
import lombok.NoArgsConstructor;
import lombok.extern.log4j.Log4j;
import lombok.extern.log4j.Log4j2;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.test.util.TestPropertyValues;
import org.springframework.context.ApplicationContextInitializer;
import org.springframework.context.ConfigurableApplicationContext;
import org.testcontainers.containers.PostgreSQLContainer;
import org.testcontainers.containers.output.Slf4jLogConsumer;
import org.testcontainers.utility.MountableFile;

@Slf4j
@NoArgsConstructor(access = AccessLevel.PRIVATE)
public class PostgreSQLContainerConfig {

  private static final PostgreSQLContainer container = new PostgreSQLContainer<>("postgres:9.6-alpine")
    .withExposedPorts(5432)
    .withDatabaseName("postgres")
    .withCopyFileToContainer(
      MountableFile.forClasspathResource("db/init.sql"), "/docker-entrypoint-initdb.d/1-init.sql")
    .withCopyFileToContainer(
      MountableFile.forClasspathResource("db/data.sql"), "/docker-entrypoint-initdb.d/2-data.sql")
    .withLogConsumer(new Slf4jLogConsumer(log));

  static {
    container.start();
  }

  private static String getDatasourceUrl() {
    return "jdbc:postgresql://" +
      container.getContainerIpAddress() + ":" + container.getMappedPort(PostgreSQLContainer.POSTGRESQL_PORT);
  }

  public static class Initializer implements ApplicationContextInitializer<ConfigurableApplicationContext> {

    static {
      // Run migrations here
    }

    @Override
    public void initialize(final ConfigurableApplicationContext applicationContext) {
      TestPropertyValues
        .of(
          "spring.datasource.url=" + getDatasourceUrl() + "/postgres?stringtype=unspecified",
          "spring.datasource.username=" + container.getUsername(),
          "spring.datasource.password=" + container.getPassword()
        )
        .applyTo(applicationContext.getEnvironment());
    }
  }
}
