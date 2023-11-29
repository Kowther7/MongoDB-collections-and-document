// Import the necessary modules and models
const connection = require("../config/connection");
const { Thought, User } = require("../models");
const {
  getRandomUsername,
  getRandomEmail,
  getRandomThoughts,
} = require("./data");

// Handle errors in the connection
connection.on("error", (err) => err);

// Once the connection is open, perform seeding operations
connection.once("open", async () => {
  // Check and delete collections if they exist
  let usersCheck = await connection.db
    .listCollections({ name: "users" })
    .toArray();
  if (usersCheck.length) {
    await connection.dropCollection("users");
  }

  let thoughtsCheck = await connection.db
    .listCollections({ name: "thoughts" })
    .toArray();
  if (thoughtsCheck.length) {
    await connection.dropCollection("thoughts");
  }

  // Seed users
  const users = [];
  for (let i = 0; i < 20; i++) {
    const username = getRandomUsername();
    const email = getRandomEmail();

    users.push({
      username,
      email,
    });
  }

  // Insert seeded users into the User collection
  await User.collection.insertMany(users);

  // Seed thoughts
  const thoughts = [];
  for (let i = 0; i < 20; i++) {
    const thought = getRandomThoughts(1);
    const username = users[Math.floor(Math.random() * users.length)].username;

    thoughts.push({
      thought,
      username,
    });
  }

  // Insert seeded thoughts into the Thought collection
  await Thought.collection.insertMany(thoughts);

  // Log out the seed data to indicate the completion of seeding
  console.table(users);
  console.info("Seeding users complete! 🌱");
  console.table(thoughts);
  console.info("Seeding thoughts complete! 🌱");
  process.exit(0); // Exit the seeding process
});
