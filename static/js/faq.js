const faqs = [
    { question: "What is LearnHub?", answer: "LearnHub is an online learning platform designed to help students and professionals learn modern tech skills through structured courses, real-world projects, and easy-to-understand explanations." },
    { question: "Who can join LearnHub?", answer: "Anyone! Whether you are a beginner, a college student, or a working professional, LearnHub courses are designed to suit all learning levels." },
    { question: "Do I need prior coding experience?", answer: "No, most beginner-level courses start from the basics. You can learn step by step even if you have zero coding knowledge." },
    { question: "Are the courses recorded or live?", answer: "Currently, LearnHub offers recorded video courses so you can learn anytime at your own pace. Live sessions may be added in the future." },
    { question: "Can I access courses after completion?", answer: "Yes, once you enroll in a course, you get lifetime access to the course content, including future updates." },
    { question: "Will I get a certificate after completing a course?", answer: "Yes, you will receive a course completion certificate after successfully finishing all modules of the course." }
]
let clutters = ""
const faqcontainer = document.getElementById("faq-container");
faqs.map((element, index) => {
    clutters += `<div class="faq-item ${index == 0 ? 'active' : ''}" id="${index}">
                <button class="faq-question">
                    ${element.question}
                    <span class="arrow"><i class="ri-arrow-down-s-line"></i></span>
                </button>
                <div class="faq-answer">
                <hr>
                    <p>
                        ${element.answer}
                    </p>
                </div>
            </div>`
})
faqcontainer.innerHTML = clutters

const faqitem = document.querySelectorAll(".faq-item");
faqitem.forEach(element => {
    element.addEventListener("click", () => {
        element.classList.toggle("active")
    })
})