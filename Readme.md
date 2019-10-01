# Pet API

Enpoing is developed using `koa.js` framework and mongodb document database.

Code is written in Typescript compilation is performed using typescript engine.

Typescript linter is avalable in the project in order to ensure coding standards and can be ran typing `yarn lint`.

Note: yarn package manager is used to lock the package versions and npm is used within the docker images to start node server.

## Endponts

* POST /petcreate - create a Pet with the given payload.

## Payload Validations

For the endpoing payload validations `vlc`  `json schema` validation tool have been used.

## Seting Up the project

follow following set of steps to setup the project

* Clone the project.
* Make sure computer has node v10 or greater.
* Install yarn by typing following command `npm install -g yarn`.
* Run command `yarn install` to install.

### Unit Tests

Number of Demonstrative tests avalable under the `jest` test suit.

* Make sure npm modules exist if not run `yarn install`.
* Run `yarn test`

### Starting up Service

* Make sure the host mashine has latest version of docker running.
* Run start run `docker-compose up` to stand up docker infrastructure.
* Test sending a request to the api endpoint. {refer to API Test section below to send request to test the api}

### API Test

* Download and install Postman from following website <https://www.getpostman.com>.
* Import following postman file to the postman <resources/postman/test.postman_collection.json>.
* Endpoint payload body is as follows:

```{
    "id": 1,
    "category": {
      "id": 11,
      "name": "category1"
    },
    "name": "doggie",
    "photoUrls": [
      "http://testurl.com/test/pic1"
    ],
    "tags": [
      {
        "id": 2,
        "name": "tagone"
      }
    ],
    "status": "available"
}```
