function testCode() {
  
  function addOne(x) {
    return x + 1
  }
  let whatAmI = addOne
  addOne = (x) => x + 2


  console.log(whatAmI(10));

}
  testCode(); // console.log 11 - it calls the closest addOne function