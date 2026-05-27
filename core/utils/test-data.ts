import {faker} from "@faker-js/faker";

export function getRandomUser() {
  return {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    address: faker.location.streetAddress(),
    city: faker.location.city(),
    state: faker.location.state(),
    zipCode: faker.location.zipCode(),
    phoneNumber: faker.phone.number(),
    ssn: faker.finance.accountNumber(),
    username: faker.internet.username(),
    password: faker.internet.password(),
  };
}