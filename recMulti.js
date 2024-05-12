function multiplyGradeSchool(num1, num2) {
    const arr = new Array(num1.length + num2.length).fill(0); // Create an array with the correct length
    for (let i = num1.length - 1; i >= 0; i--) {
        for (let j = num2.length - 1; j >= 0; j--) {
            const product = parseInt(num1[i]) * parseInt(num2[j]);
            const sum = arr[i + j + 1] + product;
            arr[i + j + 1] = sum % 10; // Store the ones digit
            arr[i + j] += Math.floor(sum / 10); // Carry the tens digit
        }
    }
    return arr.join(''); // Convert the array to a string
}

// Define the two 64-digit numbers
const num1 = '3141592653589793238462643383279502884197169399375105820974944592';
const num2 = '2718281828459045235360287471352662497757247093699959574966967627';

// Multiply the numbers using the grade-school algorithm
const result = multiplyGradeSchool(num1, num2);

// Print the result
console.log(result);

