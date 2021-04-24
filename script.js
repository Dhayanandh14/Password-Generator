var lower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var upper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
var symbol = ['!', '@', '#', '$', '%', '&', '*', '(', ')', '_', '+', '=', '-']
total = [lower, upper, number, symbol]

function genarate() {
    var low = document.getElementById("lower")
    var up = document.getElementById("upper")
    var num = document.getElementById("numbers")
    var sym = document.getElementById("symbols")
    var p = document.getElementById("pass")
    var c = document.getElementById("count").value
    text = ""
    ran = ""
    for (i = 0; i < c; i++) {
        if (low.checked) ran = ran + lower[Math.floor(Math.random() * 26)]
        if (up.checked) ran = ran + upper[Math.floor(Math.random() * 26)]
        if (num.checked) ran = ran + number[Math.floor(Math.random() * 10)]
        if (sym.checked) ran = ran + symbol[Math.floor(Math.random() * 13)]
    }
    // console.log(ran.slice(0,c))
    p.innerHTML = ran.slice(0, c)
}