const { faker } = require("@faker-js/faker");

function generateFakePosts(count = 5) {
  return Array.from({ length: count }, () => ({
    id: faker.string.uuid(),
    title: faker.lorem.sentence({ min: 3, max: 8 }),
    content: faker.lorem.paragraphs({ min: 1, max: 3 }),
    author: {
      name: faker.person.fullName(),
      avatar: faker.image.avatar(),
    },
    tags: faker.helpers.arrayElements(
      ["tech", "life", "travel", "finance", "coding", "food", "health"],
      faker.number.int({ min: 1, max: 3 })
    ),
    createdAt: faker.date.past().toISOString(),
    likes: faker.number.int({ min: 0, max: 500 }),
    commentsCount: faker.number.int({ min: 0, max: 50 }),
  }));
}

module.exports = {
  generateFakePosts,
};
