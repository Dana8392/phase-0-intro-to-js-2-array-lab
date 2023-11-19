// Write your solution here!

const cats = [];

console.log(cats.length); //=> length = 0

cats.push('Milo', 'Otis', 'Garfield')

console.log(cats.length); //=> length = 3

function destructivelyAppendCat(name) {
  cats.push('Ralph');
};

function destructivelyPrependCat(name) {

  cats.unshift('Bob');
};

function  destructivelyRemoveLastCat(){

  cats.pop()

};

function destructivelyRemoveFirstCat(params) {

  cats.shift();
  
};

function appendCat(name){

  const newCatsArrayPush = [...cats];
  newCatsArrayPush.push('Broom')
  return newCatsArrayPush;

}

function prependCat(name){

  const newCatsArrayUnshift = [...cats];
  newCatsArrayUnshift.unshift('Arnold');
  return newCatsArrayUnshift
  
}

function removeLastCat() {

  const newCatsArrayPop = cats.slice();
  newCatsArrayPop.pop()
  return newCatsArrayPop
  
}

function removeFirstCat() {

  const newCatsArrayShift = cats.slice();
  newCatsArrayShift.shift()
  return newCatsArrayShift
  
}