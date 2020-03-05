module.exports = function toReadable(number) {
    let arr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let ty = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy',
        'eighty', 'ninety'
    ]
    if (number < 20) {
        return (arr[number]);
    }
    if (number >= 20 && number < 100) {
        if (number % 10 == 0) {
            return (ty[number / 10])
        } else {
            let newN = Math.floor(number / 10);
            return (ty[newN] + " " + arr[number % 10])
        }
    }
    if (number > 99) {
        if (number % 100 == 0) {
            return (`${arr[number / 100]} hundred`);
        } else if (number % 10 == 0) {
            return (`${arr[Math.floor(number / 100)]} hundred ${ty[(number / 10) % 10]}`)
        } else if (number % 100 < 20) {
            return (`${arr[Math.floor(number / 100)]} hundred ${arr[number % 100]}`)
        } else {
            return (`${arr[Math.floor(number / 100)]} hundred ${ty[(Math.floor(number / 10)) % 10]} ${arr[number % 10]}`)
        }
    }

}