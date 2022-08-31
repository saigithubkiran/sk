//Create 2 objects - parent and child. Attach methods to parent and use those methods in child object using parents prototype.
const parent = {
    name: "sai",
    age:21,
  parentDetails: function(){
        console.log(`name ${this.name}age ${this.age}`);
         return(`name ${this.name}age ${this.age} `)
    
    }   
}
const child={
    name:"kiran",
    age:26,
}
child.__proto__= parent;
console.log(child.age);
console.log(child)
console.log(child.parentDetails());
child.parentDetails();


//Prototype chaining

const studentOne = {
name: "sai",
age:21,
StudentDetails: function(){
    console.log(`name ${this.name}age ${this.age}`);

}   
}
const studentTwo = {
name:"kiran",
}
console.log(studentOne.__proto__);
console.log(studentTwo.__proto__);
console.log(studentTwo.__proto__.__proto__); //null

//  use that method to calculate sum for multiple arrays.

const sum ={
addition:function(arr){
    let arraysum=0;
    let n= arr.length;
    for( let i=0 ; i<n ; i++){
        arraysum=arraysum+arr[i];
    }
    console.log(arraysum);
}
}
Array.__proto__=sum;
arr1= [10,25,45,60,78];
Array.addition(arr1);
arr2=[35,65,99]
Array.addition(arr2);
//Write a JavaScript function to retrieve all the names of object's own and inherited properties.
const parent = {
    name: "sai",
    age:21,
  parentDetails: function(){
        console.log(`name ${this.name}age ${this.age}`);
         return(`name ${this.name}age ${this.age} `)
    
    }   
}
const child={
    name:"kiran",
    age:26,
}
child.__proto__= parent;
console.log(child.age);
console.log(child)
console.log(child.parentDetails());
child.parentDetails();

var keys=[];
for( let key in parent) keys.push(key);
console.log(keys);



