const describe = function(desc, fn) {
  console.log(desc)
  fn()
}

const testWill = function(msg, fn) {
  describe(' ' + msg, fn)
}
