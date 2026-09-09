let plusBtn = document.getElementById("plus")
let minusBtn = document.getElementById("minus")
let count = document.getElementById("count")
let counter = 1

plusBtn.addEventListener("click", () => {
    counter++
    count.innerText = counter
})

minusBtn.addEventListener("click", () => {
    if (counter > 1) {
        counter--
        count.innerText = counter
    }
})



let mainImage = document.querySelector(".product-image")
let thumbnails = document.querySelectorAll(".thumbnail")

thumbnails.forEach((image) => {
    image.addEventListener("click", () => {
        mainImage.src = image.src
    })
})


let wishlist = document.getElementById("wishlist")
wishlist.addEventListener("click", () => {
    if (wishlist.innerText == "♡ Wishlist") {
        wishlist.innerText = "♥ Wishlist"
        wishlist.classList.add("text-danger")
    }
    else {
        wishlist.innerText = "♡ Wishlist"
        wishlist.classList.remove("text-danger")
    }
})




let reviewInput = document.getElementById("reviewInput")
let writeReviewBtn = document.getElementById("writeReview")
let reviewsContainer = document.querySelector(".reviews-container")

writeReviewBtn.addEventListener("click", () => {

    let reviewText = reviewInput.value
    let newReview = document.createElement("div")
    let reviewPhoto = document.createElement("div")
    let img = document.createElement("img")
    let reviewInfo = document.createElement("div")
    reviewPhoto.classList.add("review-photo")
    let name = document.createElement("h6")
    let stars = document.createElement("div")
    let comment = document.createElement("p")
    let date = document.createElement("small")

    img.src = "images/product.PROF.jpg"
    img.classList.add("rounded-circle")
    name.innerText = "Sofia Harris"
    stars.innerText = "☆☆☆☆☆"
    comment.innerText = reviewText
    date.innerText = "Just now · Reply"

    reviewPhoto.appendChild(img)
    reviewInfo.appendChild(name)
    reviewInfo.appendChild(stars)
    reviewInfo.appendChild(comment)
    reviewInfo.appendChild(date)

    newReview.appendChild(reviewPhoto)
    newReview.appendChild(reviewInfo)
    newReview.classList.add(
        "review",
        "d-flex",
        "gap-3",
        "py-3",
        "border-bottom"
    )

    reviewsContainer.appendChild(newReview)
    reviewInput.value = ""

})


let addToCartBtn = document.getElementById("addToCart")
let cartNumber = document.getElementById("cartNumber")
let cartCount = 0

addToCartBtn.addEventListener("click", () => {
    cartCount++
    cartNumber.innerText = cartCount
})




let days = document.getElementById("days")
let hours = document.getElementById("hours")
let minutes = document.getElementById("minutes")
let seconds = document.getElementById("seconds")

let second = 5
let minute = 45
let hour = 12
let day = 2

let timer = setInterval(() => {
    second--
    if (second < 0) {
        second = 59
        minute--
    }

    if (minute < 0) {
        minute = 59
        hour--
    }

    if (hour < 0) {
        hour = 23
        day--
    }

    if (day < 0) {
        clearInterval(timer)
    }

    if (second < 10)
        seconds.innerText = "0" + second
    else
        seconds.innerText = second

    if (minute < 10)
        minutes.innerText = "0" + minute
    else
        minutes.innerText = minute

    if (hour < 10)
        hours.innerText = "0" + hour
    else
        hours.innerText = hour

    if (day < 10)
        days.innerText = "0" + day
    else
        days.innerText = day

}, 1000)