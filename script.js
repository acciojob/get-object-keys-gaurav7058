//your JS code here. If required.

const student = {
  name: "John Doe",
  
};

// Adding getKeys() method to the Object prototype
Object.prototype.getKeys = function() {
  return Object.keys(this);
};

// Testing the getKeys() method
console.log(student.getKeys()); // Output: ["name"]

