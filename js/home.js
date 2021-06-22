let socialMediaContainer = document.querySelector('.social-media');

socialMediaContainer.addEventListener("click", function () {
    socialMediaContainer.classList.toggle('active');
    console.log("HELLO")
})

function changeFacebookUrl() {
    window.location.href = "https://www.facebook.com/zayar.linnnaung";
}

function changeLinkedinUrl() {
    window.location.href = "https://www.linkedin.com/in/zayar-linn-naung-b24672212";
}

function changeGithubUrl() {
    window.location.href = "https://github.com/ZayarLinnNaung-Code";
}
