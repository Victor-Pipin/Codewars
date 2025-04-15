
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
    // Переменная в которую будут добавлятся, после проверки, по очереди, символы из входящей строки(string), если буква согласная - 
    // попадает без изменений, если буква гласная - будет переопределена в '!' и затем добавлена
    let replacedVowelsStr = ''

    // С помощью метода .split(''), входящая строка(string) преобразуется в массив
    const arrayFromString = string.split('')

    // С помощью цикла for of, происходит итерация по каждому элементу(char) массива(arrayFromString)
    for (let char of arrayFromString) {
        // Проверка соответствует ли итерируемый элемент(char) гласным буквам описанным в условии
        if ((char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' 
        || char === 'A' || char === 'E' || char === 'I' || char === 'O' || char === 'U')) {
            // Если итерируемый элемент(char) соответствует одной из гласных описанных в условии, такой элемент пререопределяется в '!'
            char = '!'
        }

        // Заполнение переменной replacedVowelsStr символами из итерируемого массива arrayFromString по результатам проверки,
        // если буква согласная - попадает без изменений, если буква гласная - будет переопределена в '!' и затем добавлена
        replacedVowelsStr += char
    }

    // Возвращаемая функцией строка с заменёнными гласными на '!'
    return replacedVowelsStr
}

// 📈REFACTOR: