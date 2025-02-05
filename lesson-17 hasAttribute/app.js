let inputBox = document.getElementById("username");

inputBox.hasAttribute("class");

console.log(inputBox.hasAttribute("class"));

// hasAttribute returns “true” if there is a selected element and “false” if there is no selected element.  
// I got “false” output because the value I selected does not contain “class”.