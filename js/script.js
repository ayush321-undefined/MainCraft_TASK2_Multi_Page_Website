// ======================
// Theme Toggle
// ======================

const savedTheme = localStorage.getItem("theme") || "dark";

document.documentElement.setAttribute(
    "data-theme",
    savedTheme
);

const themeBtn = document.getElementById("themeToggle");

if (themeBtn) {

    themeBtn.textContent =
        savedTheme === "dark" ? "🌙" : "☀️";

    themeBtn.addEventListener("click", () => {

        const current =
            document.documentElement.getAttribute("data-theme");

        const next =
            current === "dark"
                ? "light"
                : "dark";

        document.documentElement.setAttribute(
            "data-theme",
            next
        );

        localStorage.setItem(
            "theme",
            next
        );

        themeBtn.textContent =
            next === "dark"
                ? "🌙"
                : "☀️";
    });
}

// ======================
// Navbar Scroll Effect
// ======================

window.addEventListener("scroll", () => {

    const navbar =
        document.getElementById("navbar");

    if (!navbar) return;

    navbar.classList.toggle(
        "scrolled",
        window.scrollY > 20
    );
});

// ======================
// Reveal Animation
// ======================

const observer =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "visible"
                    );

                    observer.unobserve(
                        entry.target
                    );
                }
            });
        },

        {
            threshold: 0.1
        }
    );

document
    .querySelectorAll(".reveal")
    .forEach(el => {

        observer.observe(el);
    });

// ======================
// Counter Animation
// ======================

const counters =
    document.querySelectorAll("[data-target]");

counters.forEach(counter => {

    const target =
        parseInt(counter.dataset.target);

    let count = 0;

    const step =
        target / 80;

    const timer =
        setInterval(() => {

            count += step;

            if (count >= target) {

                count = target;

                clearInterval(timer);
            }

            counter.textContent =
                Math.round(count).toLocaleString() + "+";

        }, 20);
});

// ======================
// Contact Form
// ======================

const contactForm =
    document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener(
        "submit",
        e => {

            e.preventDefault();

            const btn =
                document.getElementById(
                    "submitBtn"
                );

            const success =
                document.getElementById(
                    "successMsg"
                );

            btn.disabled = true;

            btn.textContent =
                "Sending...";

            setTimeout(() => {

                btn.textContent =
                    "Sent ✓";

                success.style.display =
                    "block";

                contactForm.reset();

                setTimeout(() => {

                    btn.disabled = false;

                    btn.textContent =
                        "Send Message";

                    success.style.display =
                        "none";

                }, 3000);

            }, 1200);
        }
    );
}