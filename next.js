//TASK # 1(ADD AND REMOVE ONE ITEM FROM THE LIST)
let vegList = ['potato, onion, chilli'];
console.log(vegList);


//adding items
function addOne(items) {
    vegList.push(items)
}
addOne('tomato');


console.log(vegList);

//removing items
let veg2List = ['tomato','cucumber','carrot'];
console.log(veg2List);

function remove(items) {
    veg2List.pop(items)
}
remove('carrot');
console.log(veg2List);

//TASK # 3 (REVERSING WORD)
let word = ['javascript']
console.log(word);

function reverse(word) {
    return word.split('').reverse().join('');
  }
  console.log(reverse('JavaScript')); 
  console.log(reverse(reverse('JavaScript')));

  //TASK # 2 (RETURNING THE LAST VALUE)

function lastChar(string){
    return string[string.length - 1];
    
} 

console.log(lastChar("JavaScript")); 





