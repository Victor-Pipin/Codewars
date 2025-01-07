
// ❓TASK:
// Завершите решение так, чтобы оно возвращало true
// если первый переданный аргумент (строка) заканчивается вторым аргументом (тоже строкой).

// 💡EXAMPLES:
// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

// 🔄ENGLISH TRANSLATION:
// Complete the solution so that it returns true 
// if the first argument(string) passed in ends with the 2nd argument (also a string).

// ✅SOLUTION:

function isStringEndingsEqual() {
    const reversedString = string.split('').reverse().join('')
    const reversedEnding = ending.split('').reverse().join('')
    const trimmedReversedString = reversedString.slice(0, reversedEnding.length)

    if (reversedEnding !== trimmedReversedString) {
        return false
    }

    return true
}
