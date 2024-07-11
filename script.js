function calculate(num1, num2) {
    function operation(a, b, callback) {
        return callback(a, b);
    }

    function add(x, y) {
        return x + y;
    }

    function multiply(x, y) {
        return x * y;
    }

    const sum = operation(num1, num2, add);
    console.log(`The sum of ${num1} and ${num2} is: ${sum}`);

    const product = operation(num1, num2, multiply);
    console.log(`The product of ${num1} and ${num2} is: ${product}`);
}

calculate(5, 3); 
calculate(7, 2);  
