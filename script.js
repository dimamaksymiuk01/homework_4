"use strict"; 

const testDiv = document.querySelector ("#test");
console.log("testDiv:", testDiv);
const diviberDiv = document.querySelector ("#diviber");
console.log("diviberDiv:", diviberDiv);



// task 1
const btn = document.querySelector ("#btn");
btn.style.display="block";
btn.addEventListener('click',()=>{
  let ghj = 100;
function getRandomInt(max) {
    let rnd = Math.random();
    return Math.floor(rnd * max);
  }
  let result = getRandomInt(ghj)
  console.log(result);
  testDiv.textContent = "Ваше випадкове число: "+result;
})



// task 2
const inp3 = document.querySelector (".inp3");
const inp4 = document.querySelector (".inp4");
const btn3 = document.querySelector ("#btn3");
const reso = document.querySelector (".reso"); 
let a;
let b;
let o = {a, b};
function swapnumber (o){
  o.a = +inp3.value;
  o.b = +inp4.value;
    let c = o.a;
    o.a = o.b;
    o.b = c;
  }
btn3.addEventListener ('click', ()=> {
  swapnumber (o);
  console.log(o.a,o.b);
  reso.textContent = `${o.a} ${o.b}`;
}
)


// task 3 
const inp5 = document.querySelector (".inp5");
const btn4 = document.querySelector ("#btn4");
const res4 = document.querySelector (".res4");
let f;
btn4.addEventListener (`click`, () => {
  const getNumber = (number) => {
    if (number && number > 0) {
      if (number % 2 === 0) {
        res4.textContent = "Парне";
      }
      else if (number % 2 !== 0) {
        res4.textContent = "Не парне";
      }
    }
    else {
      res4.textContent = "Error";
    }
  }
  f = +inp5.value; 
  getNumber (f);
})


// task 4
const resp = document.querySelector ("#res");
const btn2 = document.querySelector (".btn2"); 
const inp1 = document.querySelector (".inp1");
const inp2 = document.querySelector (".inp2");
let enternumber1; 
let enternumber2; 
btn2.addEventListener ('click', ()=> {
  function getDivisor(number1, number2) {
    enternumber1 = +inp1.value; 
    enternumber2 = +inp2.value; 
  while (number1 && number2) {
    if (number1 > number2) {
      number1 = number1 % number2;
    } else if (number1 < number2) {
      number2 = number2 % number1;
    } else if (number1 === number2) {
      number1 = 0;
    }
  }
  return number1 + number2;
}
getDivisor(enternumber1, enternumber2);
resp.textContent = +enternumber1, enternumber2;
clean (inp1, inp2);
})
function clean (clean1, clean2) {
  clean1.value="";
  clean2.value="";
}