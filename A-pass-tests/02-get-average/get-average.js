// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings

function average(numbers) {
   let newNumbers = numbers.filter(item => typeof item === 'number')
   let total = 0
   newNumbers.forEach(item => total += item)
   return total / newNumbers.length
}

module.exports = average;
