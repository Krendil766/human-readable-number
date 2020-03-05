module.exports = function toReadable(number) {
    let array = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    if (number < 20) {
        console.log(array[number]);

    }
    let ty = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy',
        'eighty', 'ninety'
    ]
    if (number < 20) {
        console.log(arr[number]);
    }
    if (20 < number < 100) {
        if (number % 10 == 0) {
            console.log(ty[number / 10])
        } else {
            let newN = Math.floor(number / 10);
            console.log(ty[newN] + " " + arr[number % 10])
        }
    }
    if (number > 99) {
        if (number % 100 == 0) {
            console.log(`${arr[number / 100]} hundred`);
        } else if (number % 10 == 0) {
            console.log(`${arr[Math.floor(number / 100)]} hundred ${ty[(number / 10) % 10]}`)
        } else if (number % 100 < 20) {
            console.log(`${arr[Math.floor(number / 100)]} hundred ${arr[number % 100]}`)
        } else {
            console.log(`${arr[Math.floor(number / 100)]} hundred ${ty[(Math.floor(number / 10)) % 10]} ${arr[number % 10]}`)
        }
    }
}