
document.addEventListener("DOMContentLoaded", () => {

    /* ================= NAVBAR ================= */

    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }

    });


    /* ================= MOBILE MENU ================= */

    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".nav-menu");

    menuToggle.addEventListener("click", () => {

        navMenu.classList.toggle("active");

    });


    document.querySelectorAll(".nav-menu a").forEach(link => {

        link.addEventListener("click", () => {

            navMenu.classList.remove("active");

        });

    });


    /* ================= TYPING EFFECT ================= */

    const typingElement = document.querySelector(".typing-text");

    const words = [
        "Web Developer",
        "Python Developer",
        "Django Developer",
        "Frontend Developer",
        "Programming Instructor"
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

        setTimeout(
            typeEffect,
            deleting ? 50 : 90
        );

    }

    typeEffect();


    /* ================= SCROLL REVEAL ================= */

    const revealElements =
        document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("active");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: .12
        }
    );

    revealElements.forEach(element => {

        observer.observe(element);

    });


    /* ================= COUNTERS ================= */

    const counters =
        document.querySelectorAll(".counter");

    const counterObserver =
        new IntersectionObserver(
            (entries) => {

                entries.forEach(entry => {

                    if (!entry.isIntersecting) {
                        return;
                    }

                    const counter = entry.target;

                    const target =
                        Number(counter.dataset.target);

                    let current = 0;

                    const duration = 1200;

                    const increment =
                        target / (duration / 20);

                    const timer =
                        setInterval(() => {

                            current += increment;

                            if (current >= target) {

                                current = target;

                                clearInterval(timer);

                            }

                            counter.textContent =
                                Math.floor(current);

                        }, 20);

                    counterObserver.unobserve(counter);

                });

            },
            {
                threshold: .8
            }
        );

    counters.forEach(counter => {

        counterObserver.observe(counter);

    });


    /* ================= CURSOR ================= */

    const cursor =
        document.querySelector(".cursor");

    const follower =
        document.querySelector(".cursor-follower");

    let mouseX = 0;
    let mouseY = 0;

    let followerX = 0;
    let followerY = 0;

    document.addEventListener("mousemove", event => {

        mouseX = event.clientX;
        mouseY = event.clientY;

        cursor.style.left = mouseX + "px";
        cursor.style.top = mouseY + "px";

    });


    function animateCursor() {

        followerX +=
            (mouseX - followerX) * .15;

        followerY +=
            (mouseY - followerY) * .15;

        follower.style.left =
            followerX + "px";

        follower.style.top =
            followerY + "px";

        requestAnimationFrame(animateCursor);

    }

    animateCursor();


    /* ================= HOVER CURSOR ================= */

    const interactiveElements =
        document.querySelectorAll(
            "a, button, input, textarea, .service-card, .project-card"
        );

    interactiveElements.forEach(element => {

        element.addEventListener("mouseenter", () => {

            follower.style.width = "50px";
            follower.style.height = "50px";

        });

        element.addEventListener("mouseleave", () => {

            follower.style.width = "30px";
            follower.style.height = "30px";

        });

    });


    /* ================= PARALLAX ================= */

    const heroVisual =
        document.querySelector(".hero-visual");

    document.addEventListener("mousemove", event => {

        if (!heroVisual) return;

        const x =
            (window.innerWidth / 2 - event.clientX) / 60;

        const y =
            (window.innerHeight / 2 - event.clientY) / 60;

        heroVisual.style.transform =
            `translate(${x}px, ${y}px)`;

    });


    /* ================= SMOOTH ANCHORS ================= */

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function(event) {

            const target =
                document.querySelector(
                    this.getAttribute("href")
                );

            if (!target) return;

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    });


    /* ================= FORM ================= */

    const form =
        document.querySelector(".contact-form");

    if (form) {

        form.addEventListener("submit", event => {

            /*
             * این قسمت را بعداً می‌توانی
             * به Django View وصل کنی.
             *
             * فعلاً اجازه submit معمولی
             * داده می‌شود.
             */

        });

    }

});

