/* ====================================
   REVEAL ON SCROLL
==================================== */

const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {

    revealElements.forEach((element) => {

        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            element.classList.add("active");
        }

    });

}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

/* ====================================
   BACK TO TOP BUTTON
==================================== */

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

/* ====================================
   CONTACT FORM DEMO
==================================== */

function sendMessage(event) {

    event.preventDefault();

    const message = document.getElementById("formMessage");

    message.innerHTML =
        "✅ Message sent successfully! (Demo Portfolio Form)";

    message.style.color = "#00FF9D";

    event.target.reset();

}

/* ====================================
   CYBERSECURITY TYPEWRITER
==================================== */

const typingElement = document.getElementById("typing");

const words = [

    "Cybersecurity Student",
    "Future Security Analyst",
    "Ethical Hacking Enthusiast",
    "Network Security Learner",
    "Threat Detection Researcher",
    "Digital Forensics Enthusiast"

];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingElement.textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1800);

            return;

        }

    } else {

        typingElement.textContent =
            currentWord.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {

                wordIndex = 0;

            }

        }

    }

    setTimeout(typeEffect, deleting ? 50 : 90);

}

typeEffect();

/* ====================================
   ACTIVE NAVIGATION HIGHLIGHT
==================================== */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active-link");

        if (
            link.getAttribute("href")
            .includes(current)
        ) {

            link.classList.add("active-link");

        }

    });

});

/* ====================================
   SMOOTH SECTION TRANSITIONS
==================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target =
            document.querySelector(this.getAttribute("href"));

        target.scrollIntoView({

            behavior: "smooth"

        });

    });

});

/* ====================================
   PROFILE CARD HOVER EFFECT
==================================== */

const profileCard =
    document.querySelector(".profile-card");

if (profileCard) {

    profileCard.addEventListener("mousemove", (e) => {

        const rect =
            profileCard.getBoundingClientRect();

        const x =
            e.clientX - rect.left;

        const y =
            e.clientY - rect.top;

        const rotateY =
            ((x / rect.width) - 0.5) * 10;

        const rotateX =
            ((y / rect.height) - 0.5) * -10;

        profileCard.style.transform =
            `perspective(1000px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)`;

    });

    profileCard.addEventListener("mouseleave", () => {

        profileCard.style.transform =
            "perspective(1000px) rotateX(0) rotateY(0)";

    });

}

/* ====================================
   CONSOLE EASTER EGG
==================================== */

console.log(`
╔══════════════════════════════════╗
║      CYBERSECURITY PORTFOLIO     ║
║      Abdalfatah Salhab           ║
╚══════════════════════════════════╝

Status: Seeking Internship
Focus: Cybersecurity
Skills: Python | Security | Networking

`);