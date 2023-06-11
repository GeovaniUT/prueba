
// function sumaDosnumeros(num1, num2){
//     let result = num1 + num2
//     return  result

// }
// console.log("La suma de los dos numneros es")
// console.log(sumaDosnumeros(60,40))


// function RestaDosnumeros(num1, num2){
//     let result = num1 - num2
//     return  result

// }
// console.log("La resta de los dos numneros es")
// console.log(RestaDosnumeros(60,140))


function calcula(operacion){
    let num1 = document.calc.num1.value
    let num2 = document.calc.num2.value 
    let result = eval(num1 + operacion + num2)
    document.calc.resultado.value = result
}



