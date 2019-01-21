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
  }
})
const expect = (value) => matchers(value)

// const expect = function(value) {
//   matchers(value)
// }

// const matchers = function(value) {
//   toBeEqualTo: function(comparator) {
//     if (value === comparator) {
//       console.log('Success')
//       return true
//     } else {
//       console.log('Failure')
//       return false
//     }
//   }
// }
