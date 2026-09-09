let profilePic = document.getElementById("profilePic");
let profileImage = document.getElementById("profileImage");
let profileIcon = document.getElementById("profileIcon");

profilePic.addEventListener("change", function () {

    const file = profilePic.files[0];

    if (file) {

        profileImage.src = URL.createObjectURL(file);

        profileImage.classList.remove("d-none");

        profileIcon.classList.add("d-none");
    }

})

let nameValidation = (element) => {
    let inputValue = element.value.trim()

    if(inputValue.length < 3)
        handleError(element , "please enter at least 3 character")
    else
        handleError(element , "")
}

let emailValidation = (element) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    let inputValue = element.value

    if(!emailRegex.test(inputValue))
        handleError(element , "invalid Email")
    else
        handleError(element , "")
}

let passwordValidation = (element) => {
    const passwordReg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/
    let inputValue = element.value

    (passwordReg.test(inputValue))
        ? handleError(element , "")
        : handleError(element , "please enter at least 1 lowercase , 1 uppercase , 1 digit , 1 special character")
}

let handleError = (element , msg) => {
    element.nextElementSibling.innerText = msg
}

accountForm.addEventListener("input" , (e) => { 
 
    if(e.target.id == 'firstName') 
        nameValidation(e.target) 
 
    else if(e.target.id == 'lastName') 
        nameValidation(e.target) 
 
    else if(e.target.id == 'displayName') 
        nameValidation(e.target) 
 
    else if(e.target.id == 'email') 
        emailValidation(e.target) 
 
    else if(e.target.id == 'newPassword') 
        passwordValidation(e.target) 
})

let accountMenu = document.querySelector('#accountMenu')

if(accountMenu){

    accountMenu.addEventListener("change" , (e)=>{

        if(e.target.value == "account")
            window.location.href = "account.html"

        else if(e.target.value == "address")
            window.location.href = "address.html"

        else if(e.target.value == "orders")
            window.location.href = "orders.html"

        else if(e.target.value == "wishlist")
            window.location.href = "wishlist.html"

    })

}