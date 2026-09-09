

let registerForm = document.querySelector('#registerForm')

// name validation
let nameValidation = (element) => {
    let inputValue = element.value.trim()

    if (inputValue[0] == "@") {

        if (inputValue.length < 4) {
            handleError(element, "please enter at least 3 character")
        }
        else {
            handleError(element, "")
        }

    }

    else {

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(inputValue)) {
            handleError(element, "invalid Email")
        }
        else {
            handleError(element, "")
        }

    }

}
//email validation
let emailValidation = (element) => {
    // https://mailtrap.io/blog/javascript-email-validation/


}
let passwordValidation = (element) => {
    // https://regexr.com/3bfsi
    const passwordReg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/

    let inputValue = element.value;
    (passwordReg.test(inputValue))
        ? handleError(element, "")
        : handleError(element, "please enter at leaset 1 lowercase , 1 uppercase , 1 digit , 1 special character")

}
let handleError = (element, msg) => {
    element.nextElementSibling.innerText = msg
}

registerForm.addEventListener("input", (e) => {
    // console.log(e)
    // console.log(e.target.id)

    if (e.target.id == 'userName') nameValidation(e.target)
    else if (e.target.id == "userEmail") emailValidation(e.target)
    else if (e.target.id == "userPassword") passwordValidation(e.target)
})


// name ==> at leaset 3 charcaters
// email ==> username@domain.subdomain ==> nouran@email.com
// password ==> 1 lowercase , 1 uppercase , 1 digit , 1 speacial character (!@#$%^&*)

registerForm.addEventListener("submit", (e) => {

    e.preventDefault()

    let userName = document.querySelector("#userName")
    let password = document.querySelector("#userPassword")


    nameValidation(userName)
    passwordValidation(password)

})