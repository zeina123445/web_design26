//validation

let emailUser = document.querySelector('#emailUser');
let emailError = document.querySelector('.text-danger');
let signupForm = document.querySelector('#signupForm');

signupForm.addEventListener("submit", (e) => {
    
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let inputValue = emailUser.value;

    if (emailRegex.test(inputValue)|| inputValue=="") {
        emailError.innerText = "";
    } else {
        emailError.innerText = "invalid email";
    }
});



// sidebar

 document.querySelectorAll('.inc').forEach(btn => {
            btn.addEventListener('click', () => {
                const num = btn.previousElementSibling; // .num element
                num.textContent = parseInt(num.textContent) + 1;
            });
        });
 
        document.querySelectorAll('.dec').forEach(btn => {
            btn.addEventListener('click', () => {
                const num = btn.nextElementSibling; 
               if(num.textContent > 0) num.textContent = parseInt(num.textContent) - 1;
            });
        });


// Add to cart 
       const cartNav = document.querySelector('.count');
 
        document.querySelectorAll('.addToCartBtn').forEach(btn => {
            btn.addEventListener('click', () => {
                cartNav.textContent = parseInt(cartNav.textContent) + 1;
            });
        });