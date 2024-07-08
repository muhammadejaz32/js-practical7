
let inputString = prompt("Enter a string:");
let indexString = prompt("Enter an index (0-based):");


let index = parseInt(indexString);

if (!isNaN(index) && index >= 0 && index < inputString.length) {
    let character = inputString.charAt(index);
    alert(`The character at index ${index} in "${inputString}" is "${character}".`);
} else {
    alert(`Invalid index (${index}). Please enter a valid index within the range of the string.`);
}
