describe('Square', function() {
  var square

  // beforeEach(function() {
  //   square = new Square(5)
  // })

  testWill('check the length of one square side', function() {
    square = new Square(5)
    expect(square.size).toBeEqualTo(5)
  })

  testWill('check the area of the square', function() {
    square = new Square(5)
    expect(square.area()).toBeEqualTo(25)
  })


  testWill('check that size is an integer', function() {
     expect(function() {
       square = new Square('a')
     }).toThrow('argument is not a number')
   })

   testWill('check that size is positive', function() {
     expect(function() {
       square = new Square(-1)
     }).toThrow('size should be a positive number')
   })

})
