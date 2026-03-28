const dummyProfile = [
    {name: "Iida Niskanen",
     position: "Data Engineer",
     photo: "https://randomuser.me/api/portraits/women/67.jpg",
     text: "I can't express enough how valuable this platform has been for me. As someone deeply passionate about algorithms and data structures, I've found the diverse set of problems here both stimulating and enriching. The intuitive interface and seamless experience make it my go-to destination for honing my problem-solving skills."
     },
    {name:"Renee Sims",
     position: "Cloud engineer",
     photo: "https://randomuser.me/api/portraits/women/8.jpg",
     text: "If you're serious about excelling in competitive coding, look no further. This platform not only provides a comprehensive set of problems but also fosters a supportive community where you can exchange ideas and strategies. It's been instrumental in my journey towards becoming a better competitive coder.",
    },
    {name:"Sasha Ho",
     position:"Phd Student",
     photo:"https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?h=350&auto=compress&cs=tinysrgb",
     text:"I've tried numerous competitive programming platforms, but none come close to the quality and depth offered here. From beginner-friendly challenges to advanced algorithmic puzzles, there's something for everyone. The platform's commitment to excellence is evident in every aspect, making it my preferred choice for honing my coding skills."
    },
    {name:"Veeti Seppanen",
     position:"Frontend developer",
     photo:"https://randomuser.me/api/portraits/men/97.jpg",
     text:"As a seasoned programmer, I'm always on the lookout for platforms that challenge and inspire me. This platform exceeds all expectations with its vast array of problems and unparalleled learning resources. Whether you're a novice or a seasoned coder, you'll find endless opportunities to push your boundaries and elevate your skills."
    },
    {name:"June Cha",
     position:"Engineer",
     photo:"https://randomuser.me/api/portraits/women/44.jpg",
     text:"This guy is an amazing frontend developer that delivered the task exactly how we need it, do your self a favor and hire him, you will not be disappointed by the work delivered. He will go the extra mile to make sure that you are happy with your project. I will surely work again with him!"
    }
]
const nextBtn = document.getElementById("next");
const preBtn = document.getElementById("previous");

let idx = 0;
const $name = document.getElementById('testimonials-name');
const $position = document.getElementById('testimonials-position');
const $photo = document.getElementById('testimonials-photo');
const $text = document.getElementById('testimonials-text');

function render (i) {
    const p = dummyProfile[i];
    $name.textContent = p.name;
    $position.textContent = p.position;
    $photo.src = p.photo;
    $photo.alt = `${p.name} profile photo`;
    $text.textContent = p.text;
};

render(idx);

nextBtn.addEventListener('click', () => {
    idx = (idx + 1) % dummyProfile.length;
    render(idx);
});

preBtn.addEventListener('click',() => {
    idx = (idx - 1 + dummyProfile.length) % dummyProfile.length;
    render(idx);
})

setInterval(() => {
     idx = (idx + 1) % dummyProfile.length;
    render(idx);
},3000);

const year = new Date().getFullYear();
const dynamicYear = document.getElementById("dynamicyear");
dynamicYear.textContent = `© ${year} Your Competitive Programming Platform. All rights reserved.`

const form = document.getElementById("footer-container-form");
const inputs = document.querySelectorAll(".form-message");
const messages = document.querySelectorAll(".hidden-message");

form.addEventListener("submit", function(e) {
    let invalid = false;

    inputs.forEach((input, index) => {
        if (input.value.trim() === "") {
            e.preventDefault(); 
            messages[index].classList.remove("hidden");
            invalid = true;
        }
    });
});

inputs.forEach((input, index) => {
    input.addEventListener("focus", function() {
        messages[index].classList.add("hidden");
    });
});

const submitBtn = document.getElementById("submit-button")

submitBtn.addEventListener('click',(e) => {
  e.preventDefault();
  Swal.fire({
  title: "Good job!",
  text: "You clicked the button!",
  icon: "success"
});
})