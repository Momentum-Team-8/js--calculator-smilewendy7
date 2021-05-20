

// click on 1 2 3 + 

let button_1= document.querySelector ('.box')

// click on the boxes 
button_1.addEventListener('click', function(event){
    console.log (event.target)
})

//shows in output 1, 2 , 3, + , - ... 

const output = document.querySelector('.output')



button_1.addEventListener('click', function (event){
    console.log('you clicked:', event.target.innerText)
    output.innerText += event.target.innerText
})


// calculate result
let result = eval(output.innerText)


document.querySelector('#equals').addEventListener('click', function (event){

    console.log(eval(output.innerText))

    output.innerText =output.innerText+ event.target.innerText + eval(output.innerText)

})


// reload the page to clear the sceen


document.querySelector("#clear").addEventListener('click',
function (event){
    location.reload()
}     
)