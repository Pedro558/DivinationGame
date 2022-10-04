// Creating random number
let random = Math.floor(Math.random() * 10)

// Creating the click counter
let clickCounter = 0

// grabbing elements
const button = document.querySelector('.button')
const input = document.querySelector('#typed-number')
const divText = document.querySelector('.text')
const form = document.querySelector('#form')

button.addEventListener('click', (e) =>{
  e.preventDefault()

  clickCounter += 1
  const inputNumber = input.value
  inputNumber == random ? hit() : miss()
})

function hit(){
  divText.children[1].remove();
  divText.firstElementChild.innerHTML = `Congrats, you hit in ${clickCounter} attempts`
  
  clickCounter = 0

  changeHtml()
}

function miss(){
  newDiv()
}

function changeHtml(){
  form.children[1].remove()
  form.lastElementChild.classList.add('playAgain')
  form.lastElementChild.value = 'Play again'
  form.lastElementChild.setAttribute('onclick', 'location.reload()')

  removeChild()
}

function newDiv(){
  if (divText.children.length == 2){
    let newDiv = document.createElement('div')
    newDiv.classList.add("caption", "missCaption")
  
    let newDivText = document.createTextNode('You miss 😞, try again ')
  
    newDiv.appendChild(newDivText)
    divText.appendChild(newDiv)
  } else{
    return
  }
}

function removeChild(){
  divText.hasChildNodes() ? divText.removeChild(divText.children[1]) : console.log("There is nothing to remove");
}