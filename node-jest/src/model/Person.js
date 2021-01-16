/*
 * Copyright (C) 2021 Spanning Cloud Apps. All rights reserved.
 */

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFirstName() {
    return this.firstName;
  }

  getLastName() {
    return this.lastName;
  }
}

module.exports = Person;
