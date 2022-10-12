/**
 * The program the max run
 *
 * By       Lily Liu
 * Version  1.0
 * Since    2022-10-11
 */

import promptSync from 'prompt-sync'

/**
 * The function calculates the max run
 *
 * @param {string} userInput  - String variable
 * @returns {number} Return value
 */
function maxRunCalc(userInput: string): number {
  let maxRun = 1
  let tempValue = 1
  for (let counter = 0; counter < userInput.length; counter++) {
    if (userInput.charAt(counter) === userInput.charAt(counter + 1)) {
      tempValue += 1
    } else {
      if (tempValue > maxRun) {
        maxRun = tempValue
        tempValue = 1
      }
    }
  }
  if (tempValue > maxRun) {
    maxRun = tempValue
    tempValue = 1
  }
  return maxRun
}

const prompt = promptSync()
const userString = prompt('Enter a string: ')
const maxRunValue = maxRunCalc(userString)
console.log(`The max amount of values in a row is ${maxRunValue}`)

console.log('\nDone.')
