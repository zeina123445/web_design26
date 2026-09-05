
let furnitureCards = document.getElementsByClassName('furniture')
let electronicsCards = document.getElementsByClassName('electronics')
let filterCategory = document.getElementsByClassName('filterCategory')
let handlefilter = (flag)=>{

      for(let i = 0 ; i < filterCategory.length ; i++){
            filterCategory[i].classList.add('d-none')
        }

    if(flag == 'furniture'){
        // for(let i = 0 ; i < electronicsCards.length ; i++){
        //     electronicsCards[i].classList.add('d-none')
        // }
         for(let i = 0 ; i < furnitureCards.length ; i++){
            furnitureCards[i].classList.remove('d-none')
        }
    }
    else {
      
          for(let i = 0 ; i < electronicsCards.length ; i++){
            electronicsCards[i].classList.remove('d-none')
        }
    }

}



let registerForm = document.querySelector('#registerForm')
let nameValidation = (element)=>{
    // console.log(element) // input
    // console.log(element.value)
    console.log(element.value.length)
    let inputValue = element.value.trim()
if(inputValue.length < 3 ) {
    handleError(element , "please enter at least 3 character" )
    // element.nextElementSibling.innerText = "please enter at least 3 character"
}
else handleError(element , "")
    //   element.nextElementSibling.innerText = ""

}
let emailValidation = (element)=>{
    // https://mailtrap.io/blog/javascript-email-validation/
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let inputValue = element.value
    console.log(emailRegex.test(inputValue))

    // if(emailRegex.test(inputValue)) element.nextElementSibling.innerText= ""
    // else element.nextElementSibling.innerText = "invalid email"

    if(!emailRegex.test(inputValue)) handleError(element , "invalid Email")
    else handleError(element , "")


}
let passwordValidation = (element)=>{
    // https://regexr.com/3bfsi
    const passwordReg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/

    let inputValue = element.value;
    (passwordReg.test(inputValue)) 
    ? handleError(element , "")
    : handleError(element , "please enter at leaset 1 lowercase , 1 uppercase , 1 digit , 1 special character")

}
let handleError = (element , msg)=>{
    element.nextElementSibling.innerText = msg
}

registerForm.addEventListener("input" , (e)=>{
    // console.log(e)
    // console.log(e.target.id)

    if(e.target.id == 'userName') nameValidation(e.target)
        else if (e.target.id == "userEmail")  emailValidation(e.target)
    else if(e.target.id == "userPassword") passwordValidation(e.target)
})


// name ==> at leaset 3 charcaters
// email ==> username@domain.subdomain ==> nouran@email.com
// password ==> 1 lowercase , 1 uppercase , 1 digit , 1 speacial character (!@#$%^&*)