//Write a function that takes a single String parameter called action. If the value passed into our function is eathave the function
 //return the String value EAT TACOS
function youGetTaco(action){
	if(action==="eat"){
	return "Eat Tacos";
 }
}
console.log(youGetTaco("eat"));

//Write a function that takes two variables of type Number called first and secondrespectively. Return true if the first number is
 //greater than the second.
function isNumberGreaterThan(first, second){
	if(first>second){
		return true;
	}else {
		return false;
	}
}

console.log(isNumberGreaterThan(5, 3));

//Write a function that takes in a Boolean value named val and have the function return whether the value is true.
function isTrue(val){
if(val==="cat"){
	return true;
}else{
	return false;
}
}
console.log(isTrue("cat"));

//Write a function that takes in a Boolean value named val and have the function return whether the value is false.
/*function isFalse(val){*/
/*if(val==="dog"){
	return false;
}else{
	return true;		
	}
}
console.log(isFalse("dog"));*/

//Write a function that takes in a Boolean value named val and have the function return whether the value is false.
function isFalse(val){
if(val>2){
	return false;
}else{
	return true;		
	}
}
console.log("current " + isFalse(3));

//Write a function that takes two variables of type String called firstWord and secondWordrespectively. Return 'AWWWWRIGHT' if the two are equal otherwise return 'Y U NO MATCH!'.
function isEqual(firstword, secondword){
	if (firstword === secondword){
		return "AWAWWWRIGHT";
	}else {
		return "Y U NO MATCH";
 }
}
console.log(isEqual("la", "la"));

//Write a function that takes two variables of type String called firstWord and secondWordrespectively. Return 'AWWWWRIGHT' if the two are not equal otherwise return 'Y U MATCH!'.
function isNotEqual(firstword, secondword){


}
//Write a function that takes two variables of type Boolean called first and secondrespectively. Return true if both values are true otherwise return false.
function doubleEquals(first, second){
	if(first===second){
		return true;
	}else{
		return false;
	}
}
console.log(doubleEquals());

//Write a function that takes two variables of type Boolean called first and secondrespectively. Return true if both values are true otherwise return false.

function doubleEquals(first, second){
	if(first>2&&second<1){
		return true;
			}else{
				return false;
			}
}
console.log(doubleEquals(7,0));

//Write a function that takes a single variable of type String called word and write a for loop that creates an Array made up of each character in word except for A. We don't want no stinking A in our Array. Note: You will need to use the Array.push() method to complete this function.

var phrase = "An apple a day...";
function createArrayFromString(word){
	var newPhrase = [];  //will store prase without 'a's
	for (var i = 0; i<word.length; i++){
var currentLetter = word.charAt(i);
if(currentLetter !=="A"&& currentLetter !== "a"){
	newPhrase.push(currentLetter);}
}
	return newPhrase;
}
myNewPhrase = createArrayFromString(phrase);
console.log(myNewPhrase);

//
//Write a function that takes in a Number value named limit and have the function write a for loop that loops the number of times of limit and console.log each number as the loop executes.

function loopToNumber(limit){
for (var i = 0; i<limit; i++){
	console.log(i);
}
}
loopToNumber(3);

//
//Write a function that takes an Array with any number of type Number and write a for loop to add all numbers in the Array and return the sum.
var arrayNumber = [1, 2, 3, 4, 5];
var newNumber = 0;
function greatSummator(number){
	for(var i = 0; i < number.length; i++){
		newNumber += number[i];
		console.log(newNumber);
	}
}
greatSummator(arrayNumber); //invoke

//alternativeL

var arrayNumber = [1, 2, 3, 4, 5];
var newNumber = 0;
function greatSummator(number){
	for(var i = 0; i < number.length; i++){
		newNumber += number[i];
	}
	console.log(newNumber);
}
greatSummator(arrayNumber); //invoke

//Write a function that takes an Array with any number of type Number and second variable called total. Return true if the sum of all values in the Array are less than total otherwise return false.

function totalUnderWhatFor(numbers){
	var sum = 0; 
	for (var i = 0; i<numbers.length; i++){
		/*var ithnumber = numbers[i];*/
		sum += ithnumber;
		if (sum< total){
			console.log("true");
		}else{
			console.log("false");
		}
		return sum;
		}
	}
	var total = 14;
	var sumNumber = [1, 4, 2, 2];
	console.log(totalUnderWhatFor(sumNumber));

//Write a function that takes an Array with any number of type Number and second variable called total. Return true if the sum of all values in the Array are less than total otherwise return false.
	var sum = 0; 
	var array = [1,2,3,4,5];
	var totalNum = 10;
function totalUnderWhatFor(arr, total){
	for (var i = 0; i < arr.length; i++);{
		
		sum += arr[i];
	}
		return sum<total;
	}
	console.log(totalUnderWhatFor(array, 20));

//Write a function that takes an Array with any number of type Boolean values and write a for loop to call our isTrue function with each value as input and return true if all values return true from our isTrue function.
function isTrue (bool){
	return bool === true;
}	
	 	

	 	var someArr =  [true, false, true];
	 	var someArr2 =  [true, true, true];
	 	function checkTrueValue(arr){
	 		for (var i = 0; i < arr.length; i++);{
	 			if (!isTrue(arr[i])){
	 				return false;
	 }

	} 				return true;
}
	 		console.log(checkTrueValue(someArr));
	 		console.log(checkTrueValue(someArr2));
//
