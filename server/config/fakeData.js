const { faker } = require('@faker-js/faker');

function generateFakeUsers(count = 10) {
  return Array.from({ length: count }, () => ({
    id: faker.datatype.uuid(),
    name: faker.name.fullName(),
    email: faker.internet.email(),
    phone: faker.phone.number(),
    address: {
      street: faker.location.streetAddress(),
      city: faker.location.city(),
      country: faker.location.country(),
    },
    company: faker.company.name(),
    jobTitle: faker.person.jobTitle(),
    avatar: faker.image.avatar(),
  }));
}

module.exports = generateFakeUsers;