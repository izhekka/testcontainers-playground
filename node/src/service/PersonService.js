/*
 * Copyright (C) 2021 Spanning Cloud Apps. All rights reserved.
 */

const DB = require('../db/DB');
const PersonTable = require('../db/tables/Person');
const Person = require('../model/Person');

class PersonService {
  createPerson(firstName, lastName) {
    const sql = PersonTable.insert({
      first_name: firstName,
      last_name: lastName
    }).toQuery();

    return DB.query(sql.text, sql.values).then(() => {
      return new Person(firstName, lastName);
    })
  }

  listPersons() {
    const sql = PersonTable.select(PersonTable.star())
      .from(PersonTable)
      .order('id')
      .toQuery();

    return DB.query(sql.text, sql.values).then(result => {
      return result.length !== 0 ? result.map(item => new Person(item.first_name, item.last_name)) : [];
    })
  }
}

module.exports = new PersonService();
