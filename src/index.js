function testCode() {

  let y = 100
  
  function addOne(x) {
    return x + 1
  }

  let whatAmI = addOne
  console.log(addOne(1))

  addOne = (x, y) => x + y

  console.log(addOne(10,20))
  console.log(addOne(100));

  console.log(whatAmI(10));

}

function addFive(x) {
    return x + 5;
}

function multiplyByThree(n) {
  return n * 10;
}

function multiplyByTen(n) {
  return n * 3;
}

function compose(applyFirst, applySecond) {
  let myInternalFunc = number => {
    let x = 10
    return applySecond(applyFirst(number))
  }
  applyFirst = multiplyByTen
  applySecond = multiplyByTen
  return myInternalFunc
}
/* uncommet line below for testing purposes */
// testCode(); // console.log 11 - it calls the closest addOne function

  // compose() = myInternalFunction
  // console.log(compose()(8))
  // console.log(compose(addFive, multiplyByThree)(8))
  
function tricky(x) {
  console.log(x)
  console.log("tricky")
}

function extraTricky(){
  return tricky
}

//extraTricky()(console.log('hello from line 58'))

function testCode() {
  [1, undefined, 2].map(item => console.log("hi " + item))
  return ``
}

//testCode();

[...Array(10)].map((item) => console.log("hi " + item))

// expected out put in the terminal:
// hi undefined
// hi undefined
// hi undefined
// hi undefined
// hi undefined
// hi undefined
// hi undefined
// hi undefined
// hi undefined
// hi undefined