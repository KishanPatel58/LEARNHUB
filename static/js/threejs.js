const videos = [
    { title: "Introduction", src: "../static/videoes/frontendintro.mp4", completed: false },
    { title: "Three.js Basics", src: "../static/videoes/frontendhtml.mp4", completed: false },
    { title: "Scene", src: "../static/videoes/frontendcss.mp4", completed: false },
    { title: "Camera", src: "../static/videoes/frontendjs.mp4", completed: false },
    { title: "Renderer", src: "../static/videoes/frontendjs.mp4", completed: false },
    { title: "What is Mesh", src: "../static/videoes/frontendjs.mp4", completed: false },
    { title: "Textures", src: "../static/videoes/frontendjs.mp4", completed: false },
    { title: "Project with Three.js", src: "../static/videoes/frontendjs.mp4", completed: false },
];

let currentVideoIndex = null;

// Load saved progress
let completedVideos = JSON.parse(localStorage.getItem("completedVideos")) || [];
let certificateShown = localStorage.getItem("certificateShown") === "true";

const videoList = document.getElementById("videoList");
const videoPlayer = document.getElementById("videoPlayer");
const videoTitle = document.getElementById("videoTitle");
const markBtn = document.getElementById("markDoneBtn");
const certificateWrapper = document.getElementById("certificateWrapper");

certificateWrapper.addEventListener("click",()=>{
    certificateWrapper.style.display="none"
})
// ==========================
// Render Sidebar
// ==========================
function renderSidebar() {
    videoList.innerHTML = "";

    videos.forEach((video, index) => {
        videoList.innerHTML += `
            <li style="margin-bottom:10px;">
                <input class="course-check" type="checkbox" disabled
                    ${completedVideos.includes(index) ? "checked" : ""}>
                <span onclick="playVideo(${index})"
                      style="cursor:pointer;margin-left:8px;">
                    ${video.title}
                </span>
            </li>
        `;
    });

    // Add download button if completed
    if (completedVideos.length === videos.length) {
        addDownloadButton();
    }
}


// ==========================
// Play Video
// ==========================
function playVideo(index) {
    currentVideoIndex = index;
    videoPlayer.src = videos[index].src;
    videoTitle.textContent = videos[index].title;
    markBtn.disabled = false;
}


// ==========================
// Mark Current Video Done
// ==========================
function markCurrentVideo() {
    if (currentVideoIndex === null) return;

    if (!completedVideos.includes(currentVideoIndex)) {
        completedVideos.push(currentVideoIndex);
        localStorage.setItem("completedVideos",
            JSON.stringify(completedVideos));
    }

    markBtn.disabled = true;
    renderSidebar();
    checkCompletion();
}


// ==========================
// Move To Next Video
// ==========================
function moveToNext() {
    if (currentVideoIndex === null) return;

    let nextIndex = currentVideoIndex + 1;

    if (nextIndex < videos.length) {
        playVideo(nextIndex);
    }
}


// ==========================
// Check Course Completion
// ==========================
function checkCompletion() {
    if (completedVideos.length === videos.length) {

        addDownloadButton();

        if (!certificateShown) {
            certificateWrapper.style.display = "flex";
            localStorage.setItem("certificateShown", "true");
        }
    }
}

// ==========================
// Add Sidebar Download Button
// ==========================
function addDownloadButton() {
    if (!document.getElementById("sidebarDownloadBtn")) {
        const btn = document.createElement("button");
        btn.id = "sidebarDownloadBtn";
        btn.innerText = "⬇ Download Certificate";
        btn.style.marginTop = "20px";
        btn.style.padding = "10px";
        btn.style.background = "#D35628";
        btn.style.borderRadius="10px"
        btn.style.color = "white";
        btn.style.border = "none";
        btn.style.cursor = "pointer";
        btn.onclick = function () {
            window.location.href = "/course";
        };


        document.querySelector(".sidebar").appendChild(btn);
    }
}


// ==========================
// Close Certificate
// ==========================
function closeCertificate() {
    certificateWrapper.style.display = "none";
}


// ==========================
// On Page Load
// ==========================
document.addEventListener("DOMContentLoaded", () => {
    renderSidebar();
    checkCompletion();
});