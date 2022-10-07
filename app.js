const ratingCard = document.querySelector(".rating-container");
const thankyouCard = document.querySelector(".thankyou-container");
const submitButton = document.querySelector(".btn-submit");
const rating = document.querySelector(".rate"); //span
const rateSelectors = document.querySelectorAll(".btn") //buttons


// toggle between cards
submitButton.addEventListener("click", function(){
    ratingCard.style.display = "none";
    thankyouCard.classList.remove("hidden");

});

// loop through buttons to get innerHTML
let numberofbuttons = rateSelectors.length;

for(let i = 0; i < numberofbuttons; i++){

    document.querySelectorAll(".btn")[i].addEventListener("click", function(){

        rating.innerHTML = this.innerHTML;
    })
}

