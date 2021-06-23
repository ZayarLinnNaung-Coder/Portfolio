let projectColOne = document.querySelector(".projectColOne");
let projectColTwo = document.querySelector(".projectColTwo");
let projectColThree = document.querySelector(".projectColThree");
let projectColFour = document.querySelector(".projectColFour");

let projectDataArr = [
    {imageUrl: "img/projects/KanHtooP.png", caption: "It's for validation of lottery in Myanmar.", category: "utility", link: "https://github.com/ZayarLinnNaung-Coder/KanHtooP"},
    {imageUrl: "img/projects/zcc.png", caption: "ZCCUtil is for validation for your credit card number and creating a fake card.", category: "utility", link: "https://github.com/ZayarLinnNaung-Coder/ZCCUtil"},
    {imageUrl: "img/projects/facebook-clone.jpg", caption: "Facebook Clone", category: "clone", link: "https://zayarlinnnaung-coder.github.io/Facebook-Clone/"},
    {imageUrl: "img/projects/currency-exchanger.jpg", caption: "As the name mentioned, it is used to convert your currencies very easily and efficiently. Addition to dark mode :D", category: "utility", link: "https://zayarlinnnaung-coder.github.io/jQuery_Projects/VoucherApp/"},
    {imageUrl: "img/projects/voucher.png", caption: "You can calculate the price of your product by one click with very great UX", category: "utility", link: "https://zayarlinnnaung-coder.github.io/Currency-Exchanger/"},
    {imageUrl: "img/projects/portfolio-1.png", caption: "Sample Portfolio", category: "portfolio", link: "https://zayarlinnnaung-coder.github.io/PortfolioSample/1/project/index.html"},

    // {imageUrl: "", caption: "", category: ""}
]
function removeActiveClass(){
    document.querySelector('.lAll').classList.remove('active');
    document.querySelector('.lClone').classList.remove('active');
    document.querySelector('.lUtility').classList.remove('active');
    document.querySelector('.lEcommerce').classList.remove('active');
    document.querySelector('.lGame').classList.remove('active');
    document.querySelector('.lPortfolio').classList.remove('active');
}

showData(projectDataArr)

document.querySelector('.lAll').addEventListener('click', function () {
    removeActiveClass();
    this.classList.add("active");
    showData(projectDataArr)
})
document.querySelector('.lClone').addEventListener('click', function () {
    removeActiveClass();
    this.classList.add("active");
    let filteredDataArr = projectDataArr.filter((data) => data.category === 'clone');
    showData(filteredDataArr)
})
document.querySelector('.lUtility').addEventListener('click', function () {
    removeActiveClass();
    this.classList.add("active");
    let filteredDataArr = projectDataArr.filter((data) => data.category === 'utility');
    showData(filteredDataArr)
})
document.querySelector('.lEcommerce').addEventListener('click', function () {
    removeActiveClass();
    this.classList.add("active");
    let filteredDataArr = projectDataArr.filter((data) => data.category === 'ecommerce');
    showData(filteredDataArr)
})
document.querySelector('.lPortfolio').addEventListener('click', function () {
    removeActiveClass();
    this.classList.add("active");
    let filteredDataArr = projectDataArr.filter((data) => data.category === 'portfolio');
    showData(filteredDataArr)
})
document.querySelector('.lGame').addEventListener('click', function () {
    removeActiveClass();
    this.classList.add("active");
    let filteredDataArr = projectDataArr.filter((data) => data.category === 'game');
    showData(filteredDataArr)
})

function showData(projectDataArr) {
    projectColOne.innerHTML = '';
    projectColTwo.innerHTML = '';
    projectColThree.innerHTML = '';
    projectColFour.innerHTML = '';
    for(let i=0; i<projectDataArr.length; i++){
        let imageUrl = projectDataArr[i].imageUrl;
        let caption = projectDataArr[i].caption;
        let link = projectDataArr[i].link;
        if(i%4 == 0){
            projectColOne.innerHTML += `
            <figure class="imghvr-flip-vert">
                <img src="${imageUrl}">
                <figcaption>
                   ${caption}
                </figcaption>
                <a href="${link}"></a>
            </figure>
            `;
        }else if(i%4 == 1){
            projectColTwo.innerHTML += `
            <figure class="imghvr-flip-vert">
                <img src="${imageUrl}">
                <figcaption>
                   ${caption}
                </figcaption>
                <a href="${link}"></a>
            </figure>
            `;
        }else if(i%4 == 2){
            projectColThree.innerHTML += `
            <figure class="imghvr-flip-vert">
                <img src="${imageUrl}">
                <figcaption>
                   ${caption}
                </figcaption>
                <a href="${link}"></a>
            </figure>
            `;
        }else if(i%4 == 3){
            projectColFour.innerHTML += `
            <figure class="imghvr-flip-vert">
                <img src="${imageUrl}">
                <figcaption>
                   ${caption}
                </figcaption>
                <a href="${link}"></a>
            </figure>
            `;
        }
    }
}

