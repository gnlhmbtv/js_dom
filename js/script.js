let heading=document.getElementById("heading");
let input1=document.getElementById("input1");
let number1=document.getElementById("number1");
let input2=document.getElementById("input2");
let number2=document.getElementById("number2");
let btnPlus=document.getElementById("plus");
let btnMinus=document.getElementById("minus");
let btnMultiply=document.getElementById("multiply");
let btnDivide=document.getElementById("divide");

btnPlus.addEventListener("click",function(){
    let num1=input1.value;
    let num2=input2.value;
    let result=parseInt(num1)+parseInt(num2);
    let p=document.createElement("P");
    document.getElementById("result").innerHTML = result;
    console.log(p);
})
btnMinus.addEventListener("click",function(){
    let num1=input1.value;
    let num2=input2.value;
    let result=parseInt(num1)-parseInt(num2);
    let p=document.createElement("P");
    document.getElementById("result").innerHTML = result;
    console.log(p);
})
btnMultiply.addEventListener("click",function(){
    let num1=input1.value;
    let num2=input2.value;
    let result=parseInt(num1)*parseInt(num2);
    let p=document.createElement("P");
    document.getElementById("result").innerHTML = result;
    console.log(p);
})
btnDivide.addEventListener("click",function(){
    let num1=input1.value;
    let num2=input2.value;
    let result=parseInt(num1)/parseInt(num2);
    let p=document.createElement("P");
    document.getElementById("result").innerHTML = result;
    console.log(p);
})