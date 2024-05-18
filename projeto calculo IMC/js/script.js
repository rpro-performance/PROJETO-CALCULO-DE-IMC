const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

import {Modal} from './modal.js'

form.onsubmit = event => {
  event.preventDefault()

  const weight = inputWeight.value 
  const height = inputHeight.value

  const result = IMC(weight, height)
  const message = `seu IMC é de ${result}`

  
  Modal.open()
}


function IMC(weight, height) {
  console.log((weight / ((height / 100) ** 2)).toFixed(2))
  return (weight / ((height / 100) ** 2)).toFixed(2)
}