## Object Literal Notation 

## Spread Syntax(...)
The JavaScript spread operator (...) allows us to quickly copy *all* or *part* of an existing *array* or *object* into another *array* or *object*.
 - Example: </br>
    const firstArray = [1,3,4]; </br>
    const secondArray = [3,2,5]; </br>
    
    const combineArrays = [...firstArray, ...secondArray]</br>
    > console.log(combineArrays)    //**Expected output: [1,3,4,3,2,5]**

## Empty Values in JS

## Sparse Arrays

## Callback
Functions are first class citizens and a callback is just a function that you pass as a parameter to another function. That function will do some work and then call the call back function.
 - *Examples:* </br>
 // set the function first before calling it </br>
   const logHello = () => { </br>
     console.log("Hello, world") </br>
   } </br>
    setTimeout(logHello, 100) </br></br>
// example using the built-in forEach() that accepts a callback function as parameter
    const names = ["jess","paul","gil","ida"] </br>
    names.forEach((name)=> console.log(name)) </br>
- Resources:
  - JavaScript Callbacks Explained in 5 Minutes (Essential for asynchronous code!) https://www.youtube.com/watch?v=kz_vwAF4NHI
