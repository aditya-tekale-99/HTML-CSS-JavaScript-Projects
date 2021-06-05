//text that we will translate into whale language
let input = 'Turpentine and turtles';
//an array of vowels
let vowels = ['a', 'e', 'i', 'o', 'u'];
//to store vowels from the input string
let resultArray = [];

//logic that compares the input variable's text to the vowels array.
for (let inputIndex = 0; inputIndex< input.length; inputIndex++){

 for (let vowelsIndex=0; vowelsIndex<vowels.length; vowelsIndex++){
   //comparing the input letter to every letter in the vowels array.
	if (input[inputIndex] === vowels[vowelsIndex]){
      resultArray.push(input[inputIndex]);
   }
 }
  //double the 'e' and the 'u' that the program finds
  if (input[inputIndex] === 'e' || input[inputIndex] === 'u'){
    resultArray.push(input[inputIndex]);
  }
 }

//printing the result
console.log(resultArray.join('').toUpperCase());