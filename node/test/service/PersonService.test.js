/*
 * Copyright (C) 2021 Spanning Cloud Apps. All rights reserved.
 */
const { resolve } = require('path');

const { GenericContainer } = require('testcontainers');
const DbConfig = require('db/DbConfig');
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

let container;

describe("all", () => {
  describe("1", () => {
    beforeAll(async () => {
      try {
        container = await new GenericContainer('postgres', '9.6-alpine')
          .withEnv('POSTGRES_USER', DbConfig.user)
          .withEnv('POSTGRES_PASSWORD', DbConfig.pass)
          .withBindMount(resolve(__dirname, '../../db/init.sql'), '/docker-entrypoint-initdb.d/1-init.sql')
          .withBindMount(resolve(__dirname, '../../db/data.sql'), '/docker-entrypoint-initdb.d/2-data.sql')
          .withExposedPorts(5432)
          .start();

        DbConfig.host = container.getHost();
        DbConfig.port = container.getMappedPort(5432);
      } catch (e) {
        console.log(e);
      }
    });

    afterAll(async () => {
      await container.stop();
    });

    describe('PersonService - Node', () => {
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
  });

  describe("1", () => {
    beforeAll(async () => {
      try {
        container = await new GenericContainer('postgres', '9.6-alpine')
          .withEnv('POSTGRES_USER', DbConfig.user)
          .withEnv('POSTGRES_PASSWORD', DbConfig.pass)
          .withBindMount(resolve(__dirname, '../../db/init.sql'), '/docker-entrypoint-initdb.d/1-init.sql')
          .withBindMount(resolve(__dirname, '../../db/data.sql'), '/docker-entrypoint-initdb.d/2-data.sql')
          .withExposedPorts(5432)
          .start();

        DbConfig.host = container.getHost();
        DbConfig.port = container.getMappedPort(5432);
      } catch (e) {
        console.log(e);
      }
    });

    afterAll(async () => {
      await container.stop();
    });

    describe('PersonService - Node', () => {
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
  });

  describe("1", () => {
    beforeAll(async () => {
      try {
        container = await new GenericContainer('postgres', '9.6-alpine')
          .withEnv('POSTGRES_USER', DbConfig.user)
          .withEnv('POSTGRES_PASSWORD', DbConfig.pass)
          .withBindMount(resolve(__dirname, '../../db/init.sql'), '/docker-entrypoint-initdb.d/1-init.sql')
          .withBindMount(resolve(__dirname, '../../db/data.sql'), '/docker-entrypoint-initdb.d/2-data.sql')
          .withExposedPorts(5432)
          .start();

        DbConfig.host = container.getHost();
        DbConfig.port = container.getMappedPort(5432);
      } catch (e) {
        console.log(e);
      }
    });

    afterAll(async () => {
      await container.stop();
    });

    describe('PersonService - Node', () => {
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
  });
});

