// Function to display a greeting message
function greetUser(userName) {
    return "Hello, " + userName + "! Welcome to JavaScript!";
  }
  
  // Declare variables (same as before)
  let personName = "John Doe"; 
  let personAge = 30;         
  const personCountry = "USA"; 
  
  // Print initial details (using the function)
  console.log("Initial Details:");
  console.log(greetUser(personName)); // Call the function
  console.log("Age:", personAge);
  console.log("Country:", personCountry);
  
  // Update name and age (same as before)
  personName = "Jane Smith";
  personAge = 35;
  
  // Print updated details (using the function again)
  console.log("\nUpdated Details:");
  console.log(greetUser(personName));  // Call the function again
  console.log("Age:", personAge);
  console.log("Country:", personCountry);