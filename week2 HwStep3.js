/**********
1.Create a function that takes 3 arguments and returns the sum of the three arguments.
*********/
function sumNumbers(a,b,c){
	return a + b + c;
}
console.log(sumNumbers(1,2,3));

/**********
2.Create a function named colorCar that receives a color, and prints out, "a red car" for example. (Hint: put it in your file and run it like before.)
*********/
function colorCar(color){
	console.log("a " + color + " car");
}
colorCar("red");

/**********
3.Create an object and a function that takes the object as a parameter and prints out all of its names and values.
**********/
let class = {
	FirstStudent : 'Nick',
	SecondStudent : 'Sam',
	ThirdStudent : 'Raul'
}
function printClass(obj){
	for(key in obj){
		console.log(key + ' : ' +  obj[key]);
	}
}
printClass(class);

/**********
4.Create a function named vehicleType that receives a color, and a code, 1 for car, 2 for motorbike. And prints "a blue motorbike" for example when called as vehicleType("blue", 2)
*********/
function vehicleType(color , code){
	if(code == 1)
		console.log("a " + color + " car");
	else if(code == 2)
		console.log("a " + color + " motorbike");
}
vehicleType("red", 1);

/**********
5.Can you write the following without the if statement, but with just as a single line with console.log(...);?
**********/
(3 == 3)? console.log("true") : console.log("false");

/**********
6.Create a function called vehicle, like before, but takes another parameter called age, so that vehicle("blue", 1, 5) prints "a blue used car"
**********/
function vehicle(color , code , age){
	let vehicle_type = '';
	if(code == 1)
		vehicle_type = "car";
	else if(code == 2)
		vehicle_type = "motorbike";
	
	let vehicle_age = '';
	if(age == 0)
		vehicle_age = "not used";
	else if(age > 0 && age < 5)
		vehicle_age = "new";
	else
		vehicle_age = "used";
	
	console.log("a " + color + " " +  vehicle_age + " " + vehicle_type);
	
}
vehicle("blue", 1, 5);
vehicle("green", 2, 3);
vehicle("red", 1, 0);

/**********
7.Make a list of vehicles, you can add "motorbike", "caravan", "bike", or more.
**********/
let vehicles = ['motorbike','caravan','car'];

/**********
8.How do you get the third element from that list?
**********/
let third_element = vehicles[2];
console.log(third_element);

/**********
9.Change the function vehicle to use the list of question 5. So that vehicle("green", 3, 1) prints "a green new caravan".
**********/
function vehicle2(color , code , age){
	let vehicle_type = '';
	if(code < vehicles.length)
		vehicle_type = vehicles[code];
	
	let vehicle_age = '';
	if(age == 0)
		vehicle_age = "not used";
	else if(age > 0 && age < 5)
		vehicle_age = "new";
	else
		vehicle_age = "used";
	
	console.log("a " + color + " " +  vehicle_age + " " + vehicle_type);
}
vehicle2("green", 3, 1);

/**********
10.Use the list of vehicles to write an advertisement. So that it prints something like: "Amazing Joe's Garage, we service cars, motorbikes, caravans and bikes.". (Hint: use a for loop.)
**********/
function printAdvertisement(){
	let adv = "Amazing Joe's Garage, we service ";
	for(let i=0;i< vehicles.length;i++)
		
		adv += vehicles[i] + ', ';	
	}
    adv += ".";
	console.log(adv);
}
printAdvertisement();

/**********
11.What if you add one more vehicle to the list, can you have that added to the advertisement without changing the code for question 8?
**********/
vehicles.push("truck");
printAdvertisement();

/**********
12.Create an empty object
**********/
let myObject = {};

/**********
13.Create a function that takes two objects as parameters and compares them. You will actually need to write two functions — one that compares with == and one that compares with ===. Remember that objects can have objects inside of them so you'll need to find a way to compare every element of every object (types and values). For example:
**********/
function ObjLength(obj){
	let len = 0;
	for(let key in obj){
		len++;
	}
	return len;
}	
function KeyCompaing(obj1 , obj2){
	for(let key in obj1){
		if(!obj2.hasOwnProperty(key))
			return false;
	}
	return true;
}
function DataComparing(obj1 , obj2 , is_strict){
	for(let key in obj1){
		if(typeof obj1[key] != 'object' && typeof obj2[key] != 'object')
		{
			if(is_strict)
			{
				if(obj1[key] !== obj2[key])
					return false;
			}
			else
			{
				if(obj1[key] != obj2[key])
					return false;
			}
		}
		else if(typeof obj1[key] == 'object' && typeof obj2[key] == 'object')
		{
			if(!isObjectsEqual(obj1[key] , obj2[key])) 
				return false;
		}
		else
			return false;
	}
	return true;
}
function isObjectsEqual(obj1 , obj2 , is_strict=false){
	
	if(ObjLength(obj1) != ObjLength(obj2))
		return false;
	
	if(!KeyComparing(obj1 , obj2))
		return false;
	
	if(!DataComparing(obj1 , obj2 , is_strict))
		return false;
	
	return true;
}
var obj1 = {
	a: 1, 
	b: 'this is the letter b', 
	c: { foo: 'what is a foo anyway', 
		 bar: [1,2,3,4]
	}
}
    
var obj2 = {
	a: '1', 
	b: 'this is the letter b', 
	c: { foo: 'what is a foo anyway', 
		 bar: [1,2,3,4]
	}
}
console.log(isObjectsEqual(obj1 , obj2));
console.log(isObjectsEqual(obj1 , obj2 , true));

/**********
14.We saw that we can pass functions as arguments to other functions. Your task is to write a function that takes another function as an argument and runs it.
**********/
function foo(func) {
	func();
}
function bar() {
	console.log('Hello, I am bar!');
}
foo(bar);

/**********
15.Write some code to test two arrays for equality using == and ===. Test the following:
**********/
var x = [1,2,3];
var y = ['1',2,3];
var z = y;

console.log(x == y);
console.log(isObjectsEqual(x , y));
console.log(isObjectsEqual(x , y , true));

function ArrE(a, b , is_strict=false) {
    if (a.length != b.length) 
		return false;
    for (i=0;i<a.length;i++) {
		if(is_strict){
			if (a[i] !== b[i]) 
				return false;
		}
		else{
			if (a[i] != b[i]) 
				return false;
		}
    }
    return true;
}
console.log(ArrE(x , y));
console.log(ArrE(y , z));
console.log(ArrE(x , y , true));
console.log(ArrE(y , z , true));

/**********
16.Show that changing `o2` changes `o3` (or not) and changing ~~`o2` changes `o3`~~ `o1` changes `o3`(or not). 
**********/
var o1 = { foo: 'bar' };
var o2 = { foo: 'bar' };
var o3 = o2;
o2.foo = 'bar1';
o2 = o1;
console.log(o1);
console.log(o2);
console.log(o3); 




/**********
17.What does the following code return? (And why?)
**********/
let barr = 42;  
console.log(typeof(typeof barr));  // it returns a string

