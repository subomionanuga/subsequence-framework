describe('Square', function() {
  var square

  testWill('check the length of one square side', function() {
    square = new Square(5)
    expect(square.size).toBeEqualTo(5)
  })
})
