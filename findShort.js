/*
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.
*/

function findShort(s){  
  const arr = s.split(" ");
  let short = arr[0].length;
  let curr = 0;
  for (let i = 0; i < arr.length; i++) {
    curr = arr[i].length;
    if (curr < short) {
      short = curr;
      curr = 0;
    }
  }
  return short;
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps")) //> 3
console.log(findShort("turns out random test cases are easier than writing out basic ones")) //> 3
console.log(findShort("Let's travel abroad shall we")) //> 2
