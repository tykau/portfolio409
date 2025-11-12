function sum() {
    let op1 = parseInt(document.getElementById('op1').value)
    let op2 = parseInt(document.getElementById('op2').value)

    if (op2 != 0) {
        let resultString = op1 / op2

        document.getElementById('result').innerHTML = resultString
    }
    else {
        document.getElementById('result').innerHTML = 'На ноль делить нельзя'
    }


}


