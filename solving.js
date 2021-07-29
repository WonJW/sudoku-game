const sudokuBoard = document.querySelector(".sudoku-board")

const firstNumInput = document.querySelector(".sudoku-board__numbers:first-child")
const secondNumInput = document.querySelector(".sudoku-board__numbers:nth-child(2)")
const thirdNumInput = document.querySelector(".sudoku-board__numbers:nth-child(3)")
const fourthNumInput = document.querySelector(".sudoku-board__numbers:nth-child(4)")
const fifthNumInput = document.querySelector(".sudoku-board__numbers:nth-child(5)")
const sixthNumInput = document.querySelector(".sudoku-board__numbers:nth-child(6)")
const seventhNumInput = document.querySelector(".sudoku-board__numbers:nth-child(7)")
const eighthNumInput = document.querySelector(".sudoku-board__numbers:nth-child(8)")
const ninthNumInput = document.querySelector(".sudoku-board__numbers:last-child")

const answerSpan = document.querySelector(".sudoku-board__answer")


function solvingNumbers(event) {
    event.preventDefault();
    const firstNum = firstNumInput.innerText
    const secondNum = secondNumInput.innerText
    const thirdNum = thirdNumInput.innerText
    const fourthNum = fourthNumInput.innerText
    const fifthNum = fifthNumInput.innerText
    const sixthNum = sixthNumInput.innerText
    const seventhNum = seventhNumInput.innerText
    const eighthNum = eighthNumInput.innerText
    const ninthNum = ninthNumInput.innerText
}

function HorizonAnswer(first, second, third, forth, fifth, sixth, seventh, eighth, ninth){

}

function verticalAnswer(first, second, third, forth, fifth, sixth, seventh, eighth, ninth){

}

function roomAnswer(first, second, third, forth, fifth, sixth, seventh, eighth, ninth){

}

sudokuBoard.addEventListener("submit", solvingNumbers);