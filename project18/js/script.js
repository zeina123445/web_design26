// ================ cart page ================
if(document.getElementById('cart-section')){
    let activeCol = document.querySelector('.active-col');
    let activeSpan = document.querySelector('.active-span');

    let nextCols = document.querySelectorAll('.next-col');
    let nextSpans = document.querySelectorAll('.next-span');
    nextCols.forEach((item)=>{
        item.classList.add('border-0')
    })
    nextSpans.forEach((item)=>{
        item.classList.add('bg-secondary')
    })

    activeCol.classList.add('border-bottom', 'border-dark', 'pb-2');
    activeSpan.classList.add('bg-dark', 'bg-gradient');
    nextCols.forEach((item)=>{
        item.classList.add('text-secondary');
    })
    let decreaseBtns = document.querySelectorAll('.decrease-btn');
    let increaseBtn = document.querySelectorAll('.increase-btn');

    decreaseBtns.forEach((item)=>{
        item.addEventListener('click',(e)=>{
            // console.log(e.target.nextElementSibling);
            // console.log(e.target);
            let valueBtn = e.target.nextElementSibling;
            let quantityValue = Number(valueBtn.innerText);
            if(quantityValue > 0)valueBtn.innerText = --quantityValue;
        })
    }) 
    increaseBtn.forEach((item)=>{
        item.addEventListener('click',(e)=>{
            // console.log(e.target.previousElementSibling);
            // console.log(e.target);
            let valueBtn = e.target.previousElementSibling;
            let quantityValue = Number(valueBtn.innerText);
            valueBtn.innerText = ++quantityValue;
        })
    }) 
    let checkoutBtn = document.getElementById('checkout-btn');
    checkoutBtn.addEventListener('click',(e)=>{
        e.preventDefault();
        let cartSection = document.getElementById('cart-section');
        let checkoutSection = document.getElementById('checkout-section');
        cartSection.classList.add('d-none');
        checkoutSection.classList.remove('d-none');
        let pageHeader = document.getElementById('page-header');

        let cart = document.getElementById('cart');
        let cartBtn = document.querySelector('#cart p  button');
        let cartSpan = document.querySelector('#cart p  span');

        pageHeader.innerText = "checkout"
        cart.classList.remove('active-col');
        cart.classList.add('prev-col');
        cartBtn.classList.remove('text-darck');
        cartBtn.classList.add('text-success');
        cartSpan.classList.remove('bg-dark');
        cartSpan.classList.add('bg-success');


    })
}
// ================ shop page ================
// show more handling
if(document.getElementById('pro-page')){
    function handleClick(e){
        let btnText = e.target.innerText;
        if(btnText == 'show more'){
            handleShowMoreClick(e);
        }
        else{
        handleShowLessClick(e);
        }
    }

    function createElement(elementName, elementClasses = [], elementInnerHtml = '', elementInnerText = '',numToRepeatInnerHtml = 1){
        let element = document.createElement(elementName);
        if(elementInnerText.length != 0){ 
            element.innerText = elementInnerText;
        }
        if(elementInnerHtml.length != 0){ 
            for(let i = 0; i < numToRepeatInnerHtml;  i++){
                element.innerHTML += elementInnerHtml;
            }
        }
        for(let i = 0; i < elementClasses.length; i++ ){
            element.classList.add(elementClasses[i]);
        }
        return element;
    }
    function handleShowMoreClick(e){
            e.target.innerText = 'show less';
            let productsDiv = document.getElementById('products');
            for(let j = 0; j < 2; j++){
                let colDiv = createElement('div', ['col', 'living-card', 'js-card','price-300']);
                let cardDiv = createElement('div',['card', 'rounded-4', 'border-0',  'product-card']);
                let cardImgDiv =createElement('div',['position-relative'],'<img src="images/living_3.png" class="card-img-top rounded-4" alt="...">',);
                let badgesDiv = createElement( 'div',
                                            ['badges', 'position-absolute', 'start-0', 'top-0', 'mt-2', 'row', 'row-cols-2', 'me-1'],
                                            '<h4 class="col"><span class="badge text-dark bg-light-subtle shadow-sm">New</span></h4>' +
                                            '<i class="col fa-regular fa-heart bg-light rounded-circle p-2 ms-5 w-h-40"></i>' +
                                            '<h4><span class="col badge bg-success bg-gradient m-0">-50%</span></h4>'
                                        );
                let cardBody = createElement('div',['card-body']);
                let iconsDiv = createElement('div',['s-small'],'<i class="fa-solid fa-star "></i>','',5);
                let h5 = createElement('h5',['card-title', 'fw-semi-bolder', 'fs-6', 'my-2', 'text-capitalize'],'green chair');
                let p = createElement('p',['card-text', 'fw-bolder', 'fs-small'],'$300.00 <span class="ps-2 text-body-tertiary text-decoration-line-through">$150</span>');
                let cardBtn = createElement('button',['btn', 'btn-dark', 'position-absolute', 'bottom-0', 'start-50', 'w-75', 'translate-middle', 'cart-btn'],'','show more');

                //append badgesDiv to cardImgDiv 
                cardImgDiv.appendChild(badgesDiv);
                //append cardBtn to cardImgDiv
                cardImgDiv.appendChild(cardBtn);
                //append cardImgDiv to cardDiv
                cardDiv.appendChild(cardImgDiv);
                // append iconsDiv to  cardBody
                cardBody.appendChild(iconsDiv);
                // append h5 to  cardBody
                cardBody.appendChild(h5);
                //append p to cardBody
                cardBody.appendChild(p);
                //append cardBody to cardDiv
                cardDiv.appendChild(cardBody);
                // append cardDiv to colDiv
                colDiv.appendChild(cardDiv)
                // append colDiv to productsDiv
                productsDiv.appendChild(colDiv);
            }
    }
    function handleShowLessClick(e){
        e.target.innerText = 'show more';
        let jsCards = document.getElementsByClassName('js-card');
        for(let i = 0 ; i < jsCards.length; i++){
            jsCards[i].classList.add('d-none');
        } 
    }

    // ------------------------------------------- filter handling ------------------------------------------------- 
    let filterICatItems = document.querySelectorAll('.accordion .col .accordion-item .accordion-collapse .accordion-body .list-group .filter-cat-Item');
    let filterCatBtn = document.querySelector('.cat-filter-btn');

    let filterIPriceItems = document.querySelectorAll('.accordion .col .accordion-item .accordion-collapse .accordion-body .list-group .filter-price-Item');
    let filterPriceBtn = document.querySelector('.price-filter-btn');

    for(let i = 0; i < filterICatItems.length; i++){
        filterICatItems[i].addEventListener('mouseover', (e)=>{handleMouseOverFilter(e,filterCatBtn,filterICatItems)});
        filterICatItems[i].addEventListener('click',(e)=>{ handleClickFilter(e)});
    }

    for(let i = 0; i < filterIPriceItems.length; i++){
        filterIPriceItems[i].addEventListener('mouseover',(e)=>handleMouseOverFilter(e,filterPriceBtn,filterIPriceItems));
        filterIPriceItems[i].addEventListener('click', (e)=>{ handleClickFilter(e)});
    }

    function handleMouseOverFilter(e,btn,filterItems){
        
        btn.innerText = e.target.innerText;
        filterItems.forEach((item)=>{item.classList.remove('active','bg-body-tertiary','text-dark','fw-bolder');
        });
        e.target.classList.add('active','bg-body-tertiary','text-dark','fw-bolder');
    }
    function handleClickFilter(e){
        let clickedElement = e.target;
        let productCards = document.querySelectorAll('#products .col');
        let living = document.querySelectorAll('.living-card');
        let bed = document.querySelectorAll('.bed-card');
        let bath = document.querySelectorAll('.bathroom-card');
        let price_199 = document.querySelectorAll('.price-199');
        let price_300 = document.querySelectorAll('.price-300');
        let price_350 = document.querySelectorAll('.price-350');

        productCards.forEach((item)=>{
            item.classList.add('d-none');  
        })

        if(clickedElement.id == 'living-room'){
            living.forEach((item)=>{
                item.classList.remove('d-none');  
            })
        }

        if(clickedElement.id == 'bedroom'){
            bed.forEach((item)=>{
                item.classList.remove('d-none');  
            })
        }

        if(clickedElement.id == 'bath-room'){
            bath.forEach((item)=>{
                item.classList.remove('d-none');  
            })  
        }

        if(clickedElement.id == 'all-products' || clickedElement.id == 'all-prices'){
                productCards.forEach((item)=>{
                item.classList.remove('d-none');  
            }) 
        }

        if(clickedElement.id == 'p-199'){
            price_199.forEach((item)=>{
            item.classList.remove('d-none');  
            }) 
        }

        if(clickedElement.id == 'p-300'){
            price_300.forEach((item)=>{
            item.classList.remove('d-none');  
            }) 
        }
        
        if(clickedElement.id == 'p-350'){
            price_350.forEach((item)=>{
            item.classList.remove('d-none');  
            }) 
        }
    }
}