/*
 * Copyright (C) 2021 Spanning Cloud Apps. All rights reserved.
 */

package com.example.testcontainers.repository;

import com.example.testcontainers.model.Person;
import org.springframework.data.repository.CrudRepository;

public interface PersonRepository extends CrudRepository<Person, Long> {
}
