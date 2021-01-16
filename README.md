Testcontainers Playground
=

There are several examples of how to configure Testcontainers in Java and NodeJS projects in several ways

# Requirements

### openjdk-11

##### For MacOS users
- Install with HomeBrew:
```bash
$ brew update
$ brew tap homebrew/cask-versions
$ brew cask install java11
```

- Find the location of a specific Java version using -v:
```bash
$ /usr/libexec/java_home -v 11
/Library/Java/JavaVirtualMachines/openjdk-11.0.2.jdk/Contents/Home
```

- Update JAVA_HOME:
Set _JAVA_HOME_ in `~/.bash_profile`
```bash
$ export JAVA_HOME=$(/usr/libexec/java_home -v 11)
```

### NVM
`https://github.com/nvm-sh/nvm`

### Node 8.11.3
```bash
$ nvm install 8.11.3
$ nvm use 8.11.3
```

### Set up `NODE_CONFIG_DIR` environment variable

For correct work of Node examples you need to set a config environment variable
```
NODE_CONFIG_DIR=config
```

### Docker
`https://docs.docker.com/desktop/`

### Docker compose
`https://docs.docker.com/compose/`

# Run locally

### DB
All services work with a Postgres 9.6.10 database that is up in a docker container.
For starting a container with this database execute from the project root:
```bash
$ docker-compose up
```

### Java Spring Boot example

The example is located in a `java` directory.

An application could be run with application class.
```
src/main/java/com/example/testcontainers/TestcontainersApplication.java
```

### Node `testcontainers` example

The example is located in a `node` directory.
```bash
$ cd node
```

Install all dependencies
```bash
$ npm install
```

An application could be run with a command executed from this directory:
```bash
$ npm run start
```
or
```bash
$ node src/index.js
```

For running tests execute the command:
```bash
$ npm run test
```

### Node `jest-testcontainers` example

The example is located in a `node-jest` directory.
```bash
$ cd node-jest
```

Install all dependencies
```bash
$ npm install
```

An application could be run with a command executed from this directory:
```bash
$ npm run start
```
or
```bash
$ node src/index.js
```

For running tests execute the command:
```
$ npm run test
```
