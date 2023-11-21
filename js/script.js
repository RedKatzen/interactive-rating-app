const btnsRating = document.querySelectorAll(".rating-container button");
const btnSubmit = document.querySelector(".button-ratingstate-container button");
const paragraphRatingSelected = document.getElementById("ratingselected");
const ratingstateContainer = document.getElementById("main-ratingstate-container");
const thankstateContainer = document.getElementById("main-thankstate-container");

btnsRating.forEach(btn => {
    btn.addEventListener("click", (e) =>{
        removeSelectedClasses()
        selected = e.target.textContent
        e.target.classList.add("selected")
    })
})

function removeSelectedClasses()
{
    btnsRating.forEach(btn => {
        btn.classList.remove("selected")
    })
}

function hideRatingContainer() {
    ratingstateContainer.classList.add("transitioning-out");
    
    setTimeout(() => {
        ratingstateContainer.style.display = "none";
        ratingstateContainer.classList.remove("transitioning-out");
    }, 20);
}

function showThankContainer() {
    thankstateContainer.style.display = "flex";
    thankstateContainer.classList.add("transitioning-in");
    
    setTimeout(() => {
        thankstateContainer.style.opacity = 1;
        thankstateContainer.classList.remove("transitioning-in");
    }, 5000);
}

btnSubmit.addEventListener("click", (e) => {
    paragraphRatingSelected.textContent = `You selected ${selected} out of 5`;

    hideRatingContainer();
    showThankContainer();
});