/* =========================
   0rvse_ — MAIN JAVASCRIPT
========================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       MOBILE MENU
    ========================== */

    const menuBtn = document.querySelector(".menu-btn");
    const navLinks = document.querySelector(".nav-links");

    if (menuBtn && navLinks) {

        menuBtn.addEventListener("click", () => {

            navLinks.classList.toggle("mobile-open");

            const icon = menuBtn.querySelector("i");

            if (navLinks.classList.contains("mobile-open")) {
                icon.classList.remove("fa-bars");
                icon.classList.add("fa-xmark");
            } else {
                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");
            }

        });

        // Close menu after clicking a link
        navLinks.querySelectorAll("a").forEach(link => {

            link.addEventListener("click", () => {

                navLinks.classList.remove("mobile-open");

                const icon = menuBtn.querySelector("i");

                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");

            });

        });

    }


    /* =========================
       SCROLL REVEAL
    ========================== */

    const revealElements = document.querySelectorAll(
        ".glass-card, .stat-card, .skill-card, .project-card, .contact-box"
    );

    const revealObserver = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("reveal-show");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.12
        }
    );


    revealElements.forEach(element => {

        element.classList.add("reveal");

        revealObserver.observe(element);

    });


    /* =========================
       ACTIVE NAVIGATION
    ========================== */

    const sections = document.querySelectorAll("section[id]");
    const navItems = document.querySelectorAll(".nav-links a");

    const sectionObserver = new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    const currentId =
                        entry.target.getAttribute("id");

                    navItems.forEach(link => {

                        link.classList.remove("active");

                        if (
                            link.getAttribute("href") ===
                            `#${currentId}`
                        ) {
                            link.classList.add("active");
                        }

                    });

                }

            });

        },
        {
            threshold: 0.45
        }
    );


    sections.forEach(section => {

        sectionObserver.observe(section);

    });


    /* =========================
       TERMINAL TYPING EFFECT
    ========================== */

    const cursor = document.querySelector(".cursor");

    if (cursor) {

        const messages = [
            "learning...",
            "building...",
            "researching...",
            "creating..."
        ];

        let messageIndex = 0;

        const terminalText = document.createElement("span");

        terminalText.className = "typing-text";

        cursor.parentNode.insertBefore(
            terminalText,
            cursor
        );


        function typeMessage() {

            const message =
                messages[messageIndex];

            let characterIndex = 0;

            terminalText.textContent = "";

            const typing = setInterval(() => {

                terminalText.textContent +=
                    message[characterIndex];

                characterIndex++;

                if (
                    characterIndex >=
                    message.length
                ) {

                    clearInterval(typing);

                    setTimeout(() => {

                        deleteMessage();

                    }, 1200);

                }

            }, 80);

        }


        function deleteMessage() {

            const deleting = setInterval(() => {

                const current =
                    terminalText.textContent;

                terminalText.textContent =
                    current.slice(0, -1);

                if (current.length === 0) {

                    clearInterval(deleting);

                    messageIndex =
                        (messageIndex + 1) %
                        messages.length;

                    setTimeout(
                        typeMessage,
                        300
                    );

                }

            }, 45);

        }


        typeMessage();

    }


    /* =========================
       MOUSE GLOW
    ========================== */

    const glow = document.querySelector(".glow-1");

    if (glow && window.innerWidth > 800) {

        document.addEventListener("mousemove", event => {

            const x =
                event.clientX / window.innerWidth;

            const y =
                event.clientY / window.innerHeight;

            glow.style.transform =
                `translate(${x * -80}px, ${y * 60}px)`;

        });

    }


    /* =========================
       PROJECT CARD TILT
    ========================== */

    const cards =
        document.querySelectorAll(".project-card");

    if (window.innerWidth > 900) {

        cards.forEach(card => {

            card.addEventListener(
                "mousemove",
                event => {

                    const rect =
                        card.getBoundingClientRect();

                    const x =
                        event.clientX - rect.left;

                    const y =
                        event.clientY - rect.top;

                    const centerX =
                        rect.width / 2;

                    const centerY =
                        rect.height / 2;

                    const rotateX =
                        ((y - centerY) /
                        centerY) * -4;

                    const rotateY =
                        ((x - centerX) /
                        centerX) * 4;

                    card.style.transform =
                        `perspective(800px)
                         rotateX(${rotateX}deg)
                         rotateY(${rotateY}deg)
                         translateY(-5px)`;

                }
            );


            card.addEventListener(
                "mouseleave",
                () => {

                    card.style.transform = "";

                }
            );

        });

    }


    /* =========================
       CURRENT YEAR
    ========================== */

    const year =
        document.querySelector("#year");

    if (year) {

        year.textContent =
            new Date().getFullYear();

    }


    /* =========================
       CONSOLE SIGNATURE
    ========================== */

    console.log(
        "%c_0rvse",
        "color:#168cff;font-size:30px;font-weight:900;"
    );

    console.log(
        "%cWelcome to the system.",
        "color:#69bdff;font-size:14px;"
    );/* =========================
   PRELOADER
========================= */

window.addEventListener("load", () => {

    const preloader =
        document.getElementById("preloader");

    if (preloader) {

        setTimeout(() => {

            preloader.classList.add("loaded");

        }, 700);

    }

});


/* =========================
   CURSOR GLOW
========================= */

const cursorGlow =
    document.querySelector(".cursor-glow");

if (cursorGlow && window.innerWidth > 900) {

    document.addEventListener("mousemove", event => {

        cursorGlow.style.left =
            `${event.clientX}px`;

        cursorGlow.style.top =
            `${event.clientY}px`;

    });

}


/* =========================
   COMMAND PALETTE
   CTRL + K / CMD + K
========================= */

const commandOverlay =
    document.getElementById("commandOverlay");

const commandInput =
    document.getElementById("commandInput");

const commandItems =
    document.querySelectorAll(".command-items a");


function openCommandPalette() {

    if (!commandOverlay) return;

    commandOverlay.classList.add("open");

    setTimeout(() => {

        commandInput?.focus();

    }, 100);

}


function closeCommandPalette() {

    if (!commandOverlay) return;

    commandOverlay.classList.remove("open");

    if (commandInput) {
        commandInput.value = "";
    }

}


document.addEventListener("keydown", event => {

    if (
        (event.ctrlKey || event.metaKey) &&
        event.key.toLowerCase() === "k"
    ) {

        event.preventDefault();

        openCommandPalette();

    }


    if (event.key === "Escape") {

        closeCommandPalette();

    }

});


/* Close when clicking outside */

commandOverlay?.addEventListener(
    "click",
    event => {

        if (event.target === commandOverlay) {

            closeCommandPalette();

        }

    }
);


/* =========================
   COMMAND SEARCH
========================= */

commandInput?.addEventListener(
    "input",
    () => {

        const search =
            commandInput.value
                .toLowerCase()
                .trim();

        commandItems.forEach(item => {

            const text =
                item.textContent
                    .toLowerCase();

            item.style.display =
                text.includes(search)
                    ? "flex"
                    : "none";

        });

    }
);


/* Close palette after navigation */

commandItems.forEach(item => {

    item.addEventListener("click", () => {

        closeCommandPalette();

    });

});

});
