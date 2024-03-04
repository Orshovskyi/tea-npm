// Sample data - an array of user objects
const users = [
    { id: 1, name: 'Alice', age: 28 },
    { id: 2, name: 'Bob', age: 35 },
    { id: 3, name: 'Charlie', age: 22 },
    { id: 4, name: 'David', age: 30 },
  ];
  
  // Helper function to filter users by age range
  function filterUsersByAge(usersArray, minAge, maxAge) {
    if (!Array.isArray(usersArray) || usersArray.length === 0 || typeof minAge !== 'number' || typeof maxAge !== 'number') {
      throw new Error("Invalid inputs. Users array must be a non-empty array, and minAge and maxAge must be numbers");
    }
  
    return usersArray.filter(user => user.age >= minAge && user.age <= maxAge);
  }
  
  // Helper function to sort users by name in ascending order
  function sortUsersByName(usersArray) {
    if (!Array.isArray(usersArray) || usersArray.length === 0) {
      throw new Error("Input must be a non-empty array of users");
    }
  
    return usersArray.slice().sort((a, b) => a.name.localeCompare(b.name));
  }
  
  // Demo using the helper functions
  try {
    const filteredUsers = filterUsersByAge(users, 25, 35);
    console.log("Filtered Users by Age:", filteredUsers);
  
    const sortedUsersByName = sortUsersByName(users);
    console.log("Sorted Users by Name:", sortedUsersByName);
  } catch (error) {
    console.error("Error:", error.message);
  }
  