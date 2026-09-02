// task1

let changeColor = (element) => {

    let items = document.querySelectorAll("li");


    items.forEach(item => {
        item.classList.remove("bg-danger");
    });


    element.classList.add("bg-danger");
};


// task2
 
let loginform = document.getElementById('loginform')

let users = [];

loginform.addEventListener('submit' , (e)=>{
    e.preventDefault()

    // console.log('submitted')
    //  console.log(e)

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    let user = {
        name: name,
        email: email
    };
    users.push(user);
    // console.log(users);
    

    //task3
    let divsContainer = document.querySelector('.divsContainer');
    let div =document.createElement('div');
    let h3 = document.createElement('h3');
    let p = document.createElement('p');
    
    h3.innerText = name;
    p.innerText = email;
    div.append(h3)
    div.append(p)
    divsContainer.appendChild(div);

    console.log(users);
});