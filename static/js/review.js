const reviews = [
  {
    studentname: "Kishan Patel",
    caption: "Frontend Developer",
    profile: "https://imgs.search.brave.com/OgptViEgEyb2u1FuwVbXC9dlKqnAkZqP47IDKXE-Kvw/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzQxL2U1/LzA0LzQxZTUwNDkx/MTg2NTkyN2RhNGU2/MDU1YjU4ZTVmZjY1/LmpwZw",
    rate: "5",
    stars: "⭐⭐⭐⭐⭐",
    reviewmessage: "LearnHub is a very useful platform to study different programming courses with practical examples."
  },
  {
    studentname: "Aarav Shah",
    caption: "Web Developer",
    profile: "https://imgs.search.brave.com/84SMSLPUglQdIWmspEjmqRkblR0-1y0Xp6JpoSo24cE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQz/NjkyMDEwOC9waG90/by9pbmRpYW4tdGVl/bmFnZS1ib3ktdXNp/bmctbGFwdG9wLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1y/TDlRb0UtSUtYN01p/dFlvYTNyN3pBYl9G/eE0waWpLOHhHTlp1/U1E3T0pZPQ",
    rate: "5",
    stars: "⭐⭐⭐⭐⭐",
    reviewmessage: "The course structure is well planned and easy to understand. Highly recommended for beginners."
  },
  {
    studentname: "Riya Mehta",
    caption: "UI/UX Designer",
    profile: "https://imgs.search.brave.com/Cq-4bvsJFCr99Mx_-6xs5K8csCcbto3uPJHs9o9tVGM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9waG90/b3N3YWxhLm5ldC93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyNS8w/NC9jdXRlLWdpcmwt/cGljLV8zMy5qcGc",
    rate: "4.5",
    stars: "⭐⭐⭐⭐⭐",
    reviewmessage: "I loved the design-focused approach. The explanations are simple and very clear."
  },
  {
    studentname: "Mohit Verma",
    caption: "JavaScript Developer",
    profile: "https://imgs.search.brave.com/-wtlycczI4zDN7KGxZyVJ8xRMq53OUldtebykftSxEA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzc0LzU0/L2Y0Lzc0NTRmNDhj/YTM4MGVmZTYzMTUx/Y2M0NzhhZWU4ZjAx/LmpwZw",
    rate: "5",
    stars: "⭐⭐⭐⭐⭐",
    reviewmessage: "This platform helped me improve my JavaScript concepts with real-world projects."
  },
  {
    studentname: "Sneha Patel",
    caption: "Computer Science Student",
    profile: "https://imgs.search.brave.com/hpGXLLX7Ckiu6QvgQlZ5LVTT1uz_llMsYjZMgZpYFp0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9waG90/b3N3YWxhLm5ldC93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyNS8w/NC9jdXRlLWdpcmwt/cGljLV80Mi5qcGc",
    rate: "4.5",
    stars: "⭐⭐⭐⭐⭐",
    reviewmessage: "The instructors explain concepts in a very friendly way. Learning feels easy here."
  },
  {
    studentname: "Rahul Singh",
    caption: "Backend Developer",
    profile: "https://imgs.search.brave.com/Df3jMSLuaqut0NguqS4000csH9p00SB97Wk8J3SZo90/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2NiL2U1/LzM1L2NiZTUzNTIx/MTg0YWExOTc3ODBh/ZjBlMWEyZTUzY2Vl/LmpwZw",
    rate: "5",
    stars: "⭐⭐⭐⭐⭐",
    reviewmessage: "Backend courses are detailed and practical. Perfect for building strong fundamentals."
  },
  {
    studentname: "Neha Joshi",
    caption: "Full Stack Learner",
    profile: "https://imgs.search.brave.com/3UQ30Ks5P8I3FkAYh-9j4_MGr9ghISSnyYSbAzJ36kI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9waG90/b3NsaW5rLmluL3dw/LWNvbnRlbnQvdXBs/b2Fkcy9pbnN0YWdy/YW0tY3V0ZS1naXJs/LXBpYy1pbWFnZXNf/NTMud2VicA",
    rate: "5",
    stars: "⭐⭐⭐⭐⭐",
    reviewmessage: "LearnHub helped me understand both frontend and backend in a structured manner."
  },
  {
    studentname: "Kishan Patel",
    caption: "Frontend Developer",
    profile: "https://imgs.search.brave.com/OgptViEgEyb2u1FuwVbXC9dlKqnAkZqP47IDKXE-Kvw/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzQxL2U1/LzA0LzQxZTUwNDkx/MTg2NTkyN2RhNGU2/MDU1YjU4ZTVmZjY1/LmpwZw",
    rate: "5",
    stars: "⭐⭐⭐⭐⭐",
    reviewmessage: "LearnHub is a very useful platform to study different programming courses with practical examples."
  },
  {
    studentname: "Aarav Shah",
    caption: "Web Developer",
    profile: "https://imgs.search.brave.com/84SMSLPUglQdIWmspEjmqRkblR0-1y0Xp6JpoSo24cE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQz/NjkyMDEwOC9waG90/by9pbmRpYW4tdGVl/bmFnZS1ib3ktdXNp/bmctbGFwdG9wLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1y/TDlRb0UtSUtYN01p/dFlvYTNyN3pBYl9G/eE0waWpLOHhHTlp1/U1E3T0pZPQ",
    rate: "5",
    stars: "⭐⭐⭐⭐⭐",
    reviewmessage: "The course structure is well planned and easy to understand. Highly recommended for beginners."
  },
  {
    studentname: "Riya Mehta",
    caption: "UI/UX Designer",
    profile: "https://imgs.search.brave.com/Cq-4bvsJFCr99Mx_-6xs5K8csCcbto3uPJHs9o9tVGM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9waG90/b3N3YWxhLm5ldC93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyNS8w/NC9jdXRlLWdpcmwt/cGljLV8zMy5qcGc",
    rate: "4.5",
    stars: "⭐⭐⭐⭐⭐",
    reviewmessage: "I loved the design-focused approach. The explanations are simple and very clear."
  },
  {
    studentname: "Mohit Verma",
    caption: "JavaScript Developer",
    profile: "https://imgs.search.brave.com/-wtlycczI4zDN7KGxZyVJ8xRMq53OUldtebykftSxEA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzc0LzU0/L2Y0Lzc0NTRmNDhj/YTM4MGVmZTYzMTUx/Y2M0NzhhZWU4ZjAx/LmpwZw",
    rate: "5",
    stars: "⭐⭐⭐⭐⭐",
    reviewmessage: "This platform helped me improve my JavaScript concepts with real-world projects."
  },
  {
    studentname: "Sneha Patel",
    caption: "Computer Science Student",
    profile: "https://imgs.search.brave.com/hpGXLLX7Ckiu6QvgQlZ5LVTT1uz_llMsYjZMgZpYFp0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9waG90/b3N3YWxhLm5ldC93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyNS8w/NC9jdXRlLWdpcmwt/cGljLV80Mi5qcGc",
    rate: "4.5",
    stars: "⭐⭐⭐⭐⭐",
    reviewmessage: "The instructors explain concepts in a very friendly way. Learning feels easy here."
  },
  {
    studentname: "Rahul Singh",
    caption: "Backend Developer",
    profile: "https://imgs.search.brave.com/Df3jMSLuaqut0NguqS4000csH9p00SB97Wk8J3SZo90/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2NiL2U1/LzM1L2NiZTUzNTIx/MTg0YWExOTc3ODBh/ZjBlMWEyZTUzY2Vl/LmpwZw",
    rate: "5",
    stars: "⭐⭐⭐⭐⭐",
    reviewmessage: "Backend courses are detailed and practical. Perfect for building strong fundamentals."
  },
  {
    studentname: "Neha Joshi",
    caption: "Full Stack Learner",
    profile: "https://imgs.search.brave.com/3UQ30Ks5P8I3FkAYh-9j4_MGr9ghISSnyYSbAzJ36kI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9waG90/b3NsaW5rLmluL3dw/LWNvbnRlbnQvdXBs/b2Fkcy9pbnN0YWdy/YW0tY3V0ZS1naXJs/LXBpYy1pbWFnZXNf/NTMud2VicA",
    rate: "5",
    stars: "⭐⭐⭐⭐⭐",
    reviewmessage: "LearnHub helped me understand both frontend and backend in a structured manner."
  },
  {
    studentname: "Kishan Patel",
    caption: "Frontend Developer",
    profile: "https://imgs.search.brave.com/OgptViEgEyb2u1FuwVbXC9dlKqnAkZqP47IDKXE-Kvw/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzQxL2U1/LzA0LzQxZTUwNDkx/MTg2NTkyN2RhNGU2/MDU1YjU4ZTVmZjY1/LmpwZw",
    rate: "5",
    stars: "⭐⭐⭐⭐⭐",
    reviewmessage: "LearnHub is a very useful platform to study different programming courses with practical examples."
  },
  {
    studentname: "Aarav Shah",
    caption: "Web Developer",
    profile: "https://imgs.search.brave.com/84SMSLPUglQdIWmspEjmqRkblR0-1y0Xp6JpoSo24cE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQz/NjkyMDEwOC9waG90/by9pbmRpYW4tdGVl/bmFnZS1ib3ktdXNp/bmctbGFwdG9wLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1y/TDlRb0UtSUtYN01p/dFlvYTNyN3pBYl9G/eE0waWpLOHhHTlp1/U1E3T0pZPQ",
    rate: "5",
    stars: "⭐⭐⭐⭐⭐",
    reviewmessage: "The course structure is well planned and easy to understand. Highly recommended for beginners."
  },
  {
    studentname: "Riya Mehta",
    caption: "UI/UX Designer",
    profile: "https://imgs.search.brave.com/Cq-4bvsJFCr99Mx_-6xs5K8csCcbto3uPJHs9o9tVGM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9waG90/b3N3YWxhLm5ldC93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyNS8w/NC9jdXRlLWdpcmwt/cGljLV8zMy5qcGc",
    rate: "4.5",
    stars: "⭐⭐⭐⭐⭐",
    reviewmessage: "I loved the design-focused approach. The explanations are simple and very clear."
  },
  {
    studentname: "Mohit Verma",
    caption: "JavaScript Developer",
    profile: "https://imgs.search.brave.com/-wtlycczI4zDN7KGxZyVJ8xRMq53OUldtebykftSxEA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzc0LzU0/L2Y0Lzc0NTRmNDhj/YTM4MGVmZTYzMTUx/Y2M0NzhhZWU4ZjAx/LmpwZw",
    rate: "5",
    stars: "⭐⭐⭐⭐⭐",
    reviewmessage: "This platform helped me improve my JavaScript concepts with real-world projects."
  },
  {
    studentname: "Sneha Patel",
    caption: "Computer Science Student",
    profile: "https://imgs.search.brave.com/hpGXLLX7Ckiu6QvgQlZ5LVTT1uz_llMsYjZMgZpYFp0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9waG90/b3N3YWxhLm5ldC93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyNS8w/NC9jdXRlLWdpcmwt/cGljLV80Mi5qcGc",
    rate: "4.5",
    stars: "⭐⭐⭐⭐⭐",
    reviewmessage: "The instructors explain concepts in a very friendly way. Learning feels easy here."
  },
  {
    studentname: "Rahul Singh",
    caption: "Backend Developer",
    profile: "https://imgs.search.brave.com/Df3jMSLuaqut0NguqS4000csH9p00SB97Wk8J3SZo90/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2NiL2U1/LzM1L2NiZTUzNTIx/MTg0YWExOTc3ODBh/ZjBlMWEyZTUzY2Vl/LmpwZw",
    rate: "5",
    stars: "⭐⭐⭐⭐⭐",
    reviewmessage: "Backend courses are detailed and practical. Perfect for building strong fundamentals."
  },
  {
    studentname: "Neha Joshi",
    caption: "Full Stack Learner",
    profile: "https://imgs.search.brave.com/3UQ30Ks5P8I3FkAYh-9j4_MGr9ghISSnyYSbAzJ36kI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9waG90/b3NsaW5rLmluL3dw/LWNvbnRlbnQvdXBs/b2Fkcy9pbnN0YWdy/YW0tY3V0ZS1naXJs/LXBpYy1pbWFnZXNf/NTMud2VicA",
    rate: "5",
    stars: "⭐⭐⭐⭐⭐",
    reviewmessage: "LearnHub helped me understand both frontend and backend in a structured manner."
  },
  {
    studentname: "Kishan Patel",
    caption: "Frontend Developer",
    profile: "https://imgs.search.brave.com/OgptViEgEyb2u1FuwVbXC9dlKqnAkZqP47IDKXE-Kvw/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzQxL2U1/LzA0LzQxZTUwNDkx/MTg2NTkyN2RhNGU2/MDU1YjU4ZTVmZjY1/LmpwZw",
    rate: "5",
    stars: "⭐⭐⭐⭐⭐",
    reviewmessage: "LearnHub is a very useful platform to study different programming courses with practical examples."
  },
  {
    studentname: "Aarav Shah",
    caption: "Web Developer",
    profile: "https://imgs.search.brave.com/84SMSLPUglQdIWmspEjmqRkblR0-1y0Xp6JpoSo24cE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQz/NjkyMDEwOC9waG90/by9pbmRpYW4tdGVl/bmFnZS1ib3ktdXNp/bmctbGFwdG9wLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1y/TDlRb0UtSUtYN01p/dFlvYTNyN3pBYl9G/eE0waWpLOHhHTlp1/U1E3T0pZPQ",
    rate: "5",
    stars: "⭐⭐⭐⭐⭐",
    reviewmessage: "The course structure is well planned and easy to understand. Highly recommended for beginners."
  },
  {
    studentname: "Riya Mehta",
    caption: "UI/UX Designer",
    profile: "https://imgs.search.brave.com/Cq-4bvsJFCr99Mx_-6xs5K8csCcbto3uPJHs9o9tVGM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9waG90/b3N3YWxhLm5ldC93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyNS8w/NC9jdXRlLWdpcmwt/cGljLV8zMy5qcGc",
    rate: "4.5",
    stars: "⭐⭐⭐⭐⭐",
    reviewmessage: "I loved the design-focused approach. The explanations are simple and very clear."
  },
  {
    studentname: "Mohit Verma",
    caption: "JavaScript Developer",
    profile: "https://imgs.search.brave.com/-wtlycczI4zDN7KGxZyVJ8xRMq53OUldtebykftSxEA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzc0LzU0/L2Y0Lzc0NTRmNDhj/YTM4MGVmZTYzMTUx/Y2M0NzhhZWU4ZjAx/LmpwZw",
    rate: "5",
    stars: "⭐⭐⭐⭐⭐",
    reviewmessage: "This platform helped me improve my JavaScript concepts with real-world projects."
  },
  {
    studentname: "Sneha Patel",
    caption: "Computer Science Student",
    profile: "https://imgs.search.brave.com/hpGXLLX7Ckiu6QvgQlZ5LVTT1uz_llMsYjZMgZpYFp0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9waG90/b3N3YWxhLm5ldC93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyNS8w/NC9jdXRlLWdpcmwt/cGljLV80Mi5qcGc",
    rate: "4.5",
    stars: "⭐⭐⭐⭐⭐",
    reviewmessage: "The instructors explain concepts in a very friendly way. Learning feels easy here."
  },
  {
    studentname: "Rahul Singh",
    caption: "Backend Developer",
    profile: "https://imgs.search.brave.com/Df3jMSLuaqut0NguqS4000csH9p00SB97Wk8J3SZo90/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2NiL2U1/LzM1L2NiZTUzNTIx/MTg0YWExOTc3ODBh/ZjBlMWEyZTUzY2Vl/LmpwZw",
    rate: "5",
    stars: "⭐⭐⭐⭐⭐",
    reviewmessage: "Backend courses are detailed and practical. Perfect for building strong fundamentals."
  },
  {
    studentname: "Neha Joshi",
    caption: "Full Stack Learner",
    profile: "https://imgs.search.brave.com/3UQ30Ks5P8I3FkAYh-9j4_MGr9ghISSnyYSbAzJ36kI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9waG90/b3NsaW5rLmluL3dw/LWNvbnRlbnQvdXBs/b2Fkcy9pbnN0YWdy/YW0tY3V0ZS1naXJs/LXBpYy1pbWFnZXNf/NTMud2VicA",
    rate: "5",
    stars: "⭐⭐⭐⭐⭐",
    reviewmessage: "LearnHub helped me understand both frontend and backend in a structured manner."
  }
];
const reviewcontainer = document.querySelector(".moving-review");
let clutter = ""
reviews.map((element,index)=>{
    clutter += `<div class="review-card" id="${index}">
                    <div class="review-header">
                        <img src="${element.profile}" alt="">
                        <div class="user-info">
                            <h3>${element.studentname}</h3>
                            <p>${element.caption}</p>
                        </div>
                    </div>
                    <hr />
                    <div class="rating">
                        <span class="score">${element.rate}</span>
                        <span class="stars">${element.stars}</span>
                    </div>
                    <p class="review-text">
                        ${element.reviewmessage}
                    </p>
                </div>`
})
reviewcontainer.innerHTML = clutter;