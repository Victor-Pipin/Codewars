
// ❓TASK:
// Замените в предложении все гласные на восклицательные знаки.
// Гласные: 'a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'.

// 🔽INPUT:
// Строка в которой есть гласные.

// 🔼OUTPUT:
// Строка в которой гласные были заменены на восклицательные знаки.

// 💡EXAMPLES:
// "Hi!" --> "H!!"
// "!Hi! Hi!" --> "!H!! H!!"
// "aeiou" --> "!!!!!"
// "ABCDE" --> "!BCD!"

// 🔄ENGLISH TRANSLATION:
// Replace all vowel to exclamation mark in the sentence.
// Vowels is 'a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'.
// 🔽INPUT:
// A string that has vowels in it.
// 🔼OUTPUT:
// A string in which vowels have been replaced by exclamation marks.


// ✅SOLUTION:

function replaceAllVowel (string) {
    let replacedVowelsStr = ''

    const arrayFromString = string.split('')

    for (let char of arrayFromString) {
        if ((char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' 
        || char === 'A' || char === 'E' || char === 'I' || char === 'O' || char === 'U')) {
            char = '!'
        }

        replacedVowelsStr += char
    }

    return replacedVowelsStr
}

// 📈REFACTOR: