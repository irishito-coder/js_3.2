let userInput = prompt("Введите число:");
userInput = parseInt(userInput);

if (!isNaN(userInput) && userInput > 0) {
    let sum = 0;
    
    for (let i = 1; i <= userInput; i++) {
        if (i % 2 === 0) {
            sum += i;
        }
    }
    
    console.log("Сумма всех четных чисел " + "равна " + sum);
} 
