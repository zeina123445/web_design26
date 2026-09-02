let changeColor = (element) => {

    let items = document.querySelectorAll("li");


    items.forEach(item => {
        item.classList.remove("bg-danger");
    });


    element.classList.add("bg-danger");
};
