const cards = [
    {
        coursename: "Frontend Domination",
        languages: ["HTML", "CSS", "JavaScript", "Tailwind", "React"],
        thumbnailimg: "../static/images/frontenddomination.jpg",
        oldprice: "4999",
        newprice: "1999",   
        discount: "60",
        coursepage: "frontend.html"
    },
    {
        coursename: "Three.js Domination",
        languages: ["JavaScript", "Three.js", "WebGL", "Shaders"],
        thumbnailimg: "../static/images/threejsdomination.jpg",
        oldprice: "5999",
        newprice: "2499",
        discount: "58",
        coursepage: "threejs.html"
    },
    {
        coursename: "FullStack Development",
        languages: ["HTML", "CSS", "JS", "Node.js", "Express", "MongoDB"],
        thumbnailimg: "../static/images/fullstackdev.jpg",
        oldprice: "7999",
        newprice: "3499",
        discount: "56",
        coursepage: "fullstack.html"
    },
    {
        coursename: "Backend Development",
        languages: ["JS", "Node.js", "Express", "MongoDB"],
        thumbnailimg: "../static/images/backenddev.jpg",
        oldprice: "6999",
        newprice: "2999",
        discount: "57",
        coursepage: "backend.html"
    },
    {
        coursename: "DSA with JavaScript",
        languages: ["JavaScript"],
        thumbnailimg: "../static/images/dsawithjs.jpg",
        oldprice: "3999",
        newprice: "1499",
        discount: "62",
        coursepage: "dsa.html"
    }
];
const cardcontainer = document.querySelector(".coursecard-container")
let card = ""
cards.map((element) => {
    card += `<div class="card">
                <div class="card-image">
                    <img src="${element.thumbnailimg}" alt="Course">
                </div>
                <div class="card-content">
                    <div class="tags">
                        ${element.languages.map(language =>
        `<span>${language}</span>`
    ).join("")}
                    </div>
                    <h2>${element.coursename}</h2>
                    <div class="price-row">
                        <div class="price">
                            <span class="new-price">Rs.${element.newprice}</span>
                            <span class="old-price">Rs.${element.oldprice}</span>
                        </div>
                        <span class="discount">${element.discount}% OFF</span>
                    </div>
                    <button onclick="window.location.href='${element.coursepage}'" class="btn">
                        Check Course →
                    </button>
                </div>
            </div>`
})
cardcontainer.innerHTML = card