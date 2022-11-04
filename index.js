// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

//1cv
function zoo(paroots, lions, giraffes) {
  let x = 2 * paroots;
  let z= 4 * lions ;
  let y=4 * giraffes;
  
console.log(x+z+y)

}

console.log(zoo(2, 4, 1));


//2cv
function array(ar) {
  let x=0;
  for(let i=0; i<ar.length;i++){

   x=x+ar[i];
  
   
   }
   return x;
}

console.log(array([1,4,6,3]));

//3cv a
function dayrate(money){

  let a=money*8;

return a;

}
console.log(dayrate(600))
console.log(dayrate(120))

//3cvb

function dayrate(fixedprice,hodinovka){

  let day=8*hodinovka;
  
let b= fixedprice/day; 

b.roundFloor(2);
  return b;

}
console.log(dayrate(20000,300));