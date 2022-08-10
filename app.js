const number1 = (data) => {
    let result = 0
    for (let i = 0; i < data.length; i++){
        if (i == 0) {
            result += data[i];
        } else if (i%2==0) {
            result -= data[i];
        }else if (i%2==1) {
            result += data[i];
        }
    }
    return result;
}
const number2 = (data) => {
    let arrString = data.split("");
    let string = [];
    for (let i = 0; i < arrString.length; i++){
        for (let j = i+1; j < arrString.length; j++){
            if (arrString[i] == arrString[j]) {   
                string.push(arrString[i]); 
            }
        }     
    }
    return string[0]
}
const number3 = (data) => {
    let arrString = data.split("")
    let reverse = arrString.reverse()
    let result = reverse.join("")
    return (result === data)
}
console.log(number1([-2,3,-3,-7]))
console.log(number2("halo hola"))
console.log(number3("rever"))
