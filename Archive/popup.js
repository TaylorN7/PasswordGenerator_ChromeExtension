document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('generate');
    // onClick's logic below:
    link.addEventListener('click', function() {
        generate_password();
    });
});

var letters = "abcdefghijklmnopqrstuvwxyz"
var upperLets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numbers = "1234567890"
var specials = "!@#$%^&*}{)("

function getRandomInt(min, max) {
    //return Math.floor(Math.random() * Math.floor(max));
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function shuffle(password_array) {
    for (let i = password_array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [password_array[i], password_array[j]] = [password_array[j], password_array[i]];
    }
    return password_array
}

function copyToClipboard(text) {
    var dummy = document.createElement("textarea");
    // to avoid breaking orgain page when copying more words
    // cant copy when adding below this code
    // dummy.style.display = 'none'
    document.body.appendChild(dummy);
    //Be careful if you use texarea. setAttribute('value', value), which works with "input" does not work with "textarea". – Eduard
    dummy.value = text;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
}

function generate_password(plength, incLetters, incUpLetters, incNumbers, incSpecials) {

    var plength = document.getElementById("len").value
    var incLetters = document.getElementById("iL")
    var incUpLetters = document.getElementById("iUL")
    var incNumbers = document.getElementById("iN")
    var incSpecials = document.getElementById("iS")

    useChars = []
   
    if (incLetters.checked == true) {
        letter = getRandomInt(0, letters.length-1)
        whatLetter = letters[letter]
        console.log(whatLetter)
        useChars.push(whatLetter)
        plength -= 1
    }

    if (incUpLetters.checked == true) {
        upperLet = getRandomInt(0, upperLets.length-1)
        whatUpperLetter = upperLets[upperLet]
        console.log(whatUpperLetter)
        useChars.push(whatUpperLetter)
        plength -= 1
    }

    if (incNumbers.checked == true) {
        number = getRandomInt(0, numbers.length-1)
        whatNumber = numbers[number]
        console.log(whatNumber)
        useChars.push(whatNumber)
        plength -= 1
    }

    if (incSpecials.checked == true) {
        special = getRandomInt(0, specials.length-1)
        whatSpecial = specials[special]
        console.log(whatSpecial)
        useChars.push(whatSpecial)
        plength -= 1
    }

    for (i=0;i<plength;) {
        console.log(useChars)
        console.log("Plength: " + plength)
        getChar = getRandomInt(0,3)

        if (getChar == 0 && incLetters.checked == true) {
            letter = getRandomInt(0, letters.length-1)
            whatLetter = letters[letter]
            useChars.push(whatLetter)
            i++
        } else if (getChar == 1 && incUpLetters.checked == true) {
            upperLet = getRandomInt(0, upperLets.length-1)
            whatUpperLetter = upperLets[upperLet]
            useChars.push(whatUpperLetter)
            i++
        } else if (getChar == 2 && incNumbers.checked == true) {
            number = getRandomInt(0, numbers.length-1)
            whatNumber = numbers[number]
            useChars.push(whatNumber)
            i++
        } else if (getChar == 3 && incSpecials.checked == true) {
            special = getRandomInt(0,specials.length-1)
            whatSpecial = specials[special]
            useChars.push(whatSpecial)
            i++
        }
    }

    console.log(useChars)
    final_array = shuffle(useChars)
    final_password = final_array.toString()
    final_password = final_password.replace(/,/g, '')
    console.log("Final Password: " + final_password)
    copyToClipboard(final_password)
    document.getElementById('pass').value = final_password
    return final_password

}

//generate_password(16, true, true, true, true)
