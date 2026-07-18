const menu = document.querySelector("#menu");
const nav = document.querySelector(".links");

const hireBtn = document.querySelector(".hire-btn");
const contactSection = document.querySelector("#contact");

const form = document.querySelector("#contact-form");
const successMessage = document.querySelector("#success-message");

if (form){
    form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = new FormData(form);

    try {
        const response = await fetch(form.action, {
        method: "POST",
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    });

    if (response.ok) {
        successMessage.style.display = "block";
        successMessage.style.color = "green";

        successMessage.innerHTML =
            "✓ Thank you for reaching out. Your message has been sent successfully. I appreciate your interest and will get back to you within 24 to 48 hours.";

        form.reset();

        setTimeout (() => {
            successMessage.textContent = "";
            successMessage.style.display = "none";
        }, 5000);

    } else {
        successMessage.textContent =
            "❌ Sorry, there was an error sending your message.";

            successMessage.style.color = "red";
        }
    } catch (error) {
        successMessage.textContent = "❌ Network error. Please check your internet connection and try again.";

        successMessage.style.display.color = "red";
        successMessage.style.display = "block";
    }
    });
}

menu.onclick = () => {
    menu.classList.toggle('bi-x');
    nav.classList.toggle('active');
};

hireBtn.onclick = () => {
    contactSection.scrollIntoView({
        behavior: "smooth"
    });
};