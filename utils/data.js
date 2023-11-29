const firstNames = [
    "John",
    "Jane",
    "Michael",
    "Emily",
    "David",
    "Sarah",
    "Christopher",
    "Olivia",
    "Matthew",
    "Sophia",
    "Andrew",
    "Ava",
    "William",
    "Emma",
    "Daniel",
    "Madison",
    "Ethan",
    "Abigail",
    "Joseph",
    "Chloe",
    "Alexander",
    "Mia",
    "Nicholas",
    "Ella",
    "Benjamin",
    "Grace",
    "Liam",
    "Aiden",
    "Sophie",
    "Zoe",
    "Lucas",
    "Lily",
    "Henry",
    "Avery",
    "Gabriel",
    "Jackson",
    "Evelyn",
    "Dylan",
    "Charlotte",
    "Carter",
    "Amelia",
    "Luke",
    "Scarlett",
    "Isaac",
    "Harper",
    "Leo",
    "Aubrey",
    "Owen",
    "Lillian",
    "Caleb",
    "Addison",
  ];
  
  const thoughts = [
    "Decision Tracker",
    "Find My Phone",
    "Learn Piano",
    "Starbase Defender",
    "Tower Defense",
    "Monopoly Money Manager",
    "Movie Trailers",
    "Hello World",
    "Stupid Social Media App",
    "Notes",
    "Messages",
    "Email",
    "Compass",
    "Firefox",
    "Running App",
    "Cooking App",
    "Poker",
    "Deliveries",
  ];
  
  // Get a random item given an array
  const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
  
  // Function to generate a random username
  const getRandomUsername = () =>
    `${getRandomArrItem(firstNames)}_${Math.floor(Math.random() * 100)}`;
  
  // Function to generate a random email
  const getRandomEmail = () =>
    `${
      getRandomArrItem(firstNames).toLowerCase() +
      Math.floor(Math.random() * 9) +
      1
    }@gmail.com`;
  
  // Function to generate random thoughts
  const getRandomThoughts = () => `${getRandomArrItem(thoughts)}`;
  
  // Export the functions for use in seed.js
  module.exports = { getRandomUsername, getRandomEmail, getRandomThoughts };
  