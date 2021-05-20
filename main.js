// adding a head above each num box 

    // first select where you want to place the new content  (existingElement)
    let existingElement = document. querySelector('.box')


        // *create the new element
        // *let newElement = document.createElement('h1')
        //* console.log(newElement)
        //* add the element to the dom
        // *existingElement.appendChild(newElement)
        // *add clss to h1 ? and add backgroud to h1? 



// click on 1 2 3 + 

let button = document. querySelector ('.box')


// click on the boxes 
button.addEventListener('click', function(event){
    console.log (event.target)
})

//shows in output 1, 2 , 3

const output = document.querySelector('.output')

button.addEventListener('click', function (event){
    console.log('you clicked:', event.target.innerText)
    output.innerText += event.target.innerText

})

// when the equal button is clicked, do the math 

// document.querySelector('#equals').addEventListener('clcik', function (event){
//     console.log(eval(output.innerText))
// })

// how could I get this to show up on the page? 

let result = eval(output.innerText)

document.querySelector('#equals').addEventListener('click', function (event){

    console.log(eval(output.innerText))

    output.innerText =output.innerText+ event.target.innerText + eval(output.innerText)

    // there is a issue with double ==, this may because 1 + 2= 
    // from below: button.addEventListener('click', function (event){
    //     console.log('you clicked:', event.target.innerText)
    //     output.innerText += event.target.innerText
    
    })


// reload the page to clear the sceen

document.querySelector("#clear").addEventListener('click',
function (event){
    location.reload()
}     
)





    

    



