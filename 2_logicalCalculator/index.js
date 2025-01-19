
// ❓TASK:
// Даны массив булевых значений и логический оператор,
// возвращает булевый результат, основанный на последовательном применении оператора к значениям в массиве.

// 🔽INPUT:
// 1. Массив булевых значений (1 <= array_length <= 50)
// 2. Строка, определяющая логический оператор: "AND", "OR", "XOR"

// 🔼OUTPUT:
// Булево значение (True or False).

// 💡EXAMPLES:
// operator: 'AND'
// booleans = [True, True, False], operator = "AND"
// True AND True -> True
// True AND False -> False
// return False

// operator: 'OR'
// booleans = [True, True, False], operator = "OR"
// True OR True -> True
// True OR False -> True
// return True

// operator: 'XOR'
// booleans = [True, True, False], operator = "XOR"
// True XOR True -> False
// False XOR False -> False
// return False

// 🔄ENGLISH TRANSLATION:
// Given an array of Boolean values and a logical operator,
// return a Boolean result based on sequentially applying the operator to the values in the array.
// 🔽INPUT:
// 1. An Array of boolean values (1 <= array_length <= 50)
// 2. A String defining a logical operator: "AND", "OR", "XOR"
// 🔼OUTPUT:
// A Boolean value (True or False).


// ✅SOLUTION:

function logicalCalculator(array, operator) {
    let result
    
    if (operator === 'OR') {
        result = array[0] || array[1];
    } else if (operator === 'AND') {
        result = array[0] && array[1];
    }
    
    for (let i = 2; i < array.length; i++) {
        if (operator === 'OR') {
            result = result || array[i]
        } else if (operator === 'AND') {
            result = result && array[i]
        }
    }

    return result
}


// 📈REFACTOR: