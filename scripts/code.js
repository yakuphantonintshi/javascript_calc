let buttons = document.querySelectorAll(".buttons, .operators")
let screen = document.querySelector('.screen')
let equal = document.querySelector('.equal')
let clear = document.querySelector('.clear')

//functionality for numbers and operators
buttons.forEach(button =>{
    button.addEventListener('click' , () =>{
        screen.value += button.innerHTML
    })
})
//functionality for equal button
equal.addEventListener('click' , () =>{
    screen.value = eval(screen.value)
})
clear.addEventListener('click' , ()=>{
    screen.value = ''
})