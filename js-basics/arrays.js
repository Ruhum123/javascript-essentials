// Create an array of favorite fruits
const favoriteFruits = ["apple", "banana", "orange", "mango"];

// Loop through the array and print each fruit
console.log("\nMy Favorite Fruits:");
for (let i = 0; i < favoriteFruits.length; i++) {
  console.log(favoriteFruits[i]);
}

// Alternatively, using a for...of loop (more modern):
console.log("\nMy Favorite Fruits (for...of loop):");
for (const fruit of favoriteFruits) {
  console.log(fruit);
}