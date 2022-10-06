const ratingCard = document.querySelector(".rating-container");
const thankyouCard = document.querySelector(".thankyou-container");
const submitButton = document.querySelector(".btn-submit");
const rating = document.querySelector(".rate");






// toggle between cards
submitButton.addEventListener("click", function(){
    ratingCard.style.display = "none";
    thankyouCard.classList.remove("hidden");

});
