/*
 * Copyright (C) 2021 Spanning Cloud Apps. All rights reserved.
 */

const PersonService = require('service/PersonService');

const generateString = () => {
  const length = 5;
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;

  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}

describe('PersonService - Jest', () => {
  // FIXME Unstable test, sometimes get "Error: Connection terminated" error
  it('should save person into database', async () => {
    for (let i = 0; i < 10; i++) {
      const firstName = generateString();
      const lastName = generateString();

      const beforeList = await PersonService.listPersons();
      await PersonService.createPerson(firstName, lastName);
      const afterList = await PersonService.listPersons();

      expect(afterList.length).toEqual(beforeList.length + 1);
      const lastPerson = afterList[afterList.length - 1];
      expect(lastPerson.firstName).toEqual(firstName);
      expect(lastPerson.lastName).toEqual(lastName);
    }
  });
});
