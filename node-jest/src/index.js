/*
 * Copyright (C) 2021 Spanning Cloud Apps. All rights reserved.
 */


const PersonService = require('./service/PersonService');

PersonService.listPersons().then(personList => {
  for (const person of personList) {
    console.log(person);
  }
});

