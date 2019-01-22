const describe = function(desc, fn) {
  console.log(desc)
  fn()
}

const testWill = function(msg, fn) {
  describe(' ' + msg, fn)
}


const matchers = (value) => ({
  toBeEqualTo: (comparator) => {
    if (value === comparator) {
      console.log('Success')
      return true
    } else {
      console.log('Failure')
      return false
    }
  },

  // toThrow: function(comparator) => ({
  //   if (value === comparator) {
  //     console.log('Success')
  //     return true
  //   } else {
  //     console.log('Failure')
  //     return false
  //   })()
  // }

  toThrow: (comparator) => {
    var error = 'Failure'
    try {
      value()
    }
    catch(e) {
      error = 'Success' //+ e.stack
    }
    finally {
      console.log(error)
    }
  }
})

const expect = (value) => matchers(value)
