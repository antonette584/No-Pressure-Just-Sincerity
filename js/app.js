
const yesButton = document.getElementById("yes");
const noButton = document.getElementById("no");
const message = document.getElementById("text");

const overlay = document.getElementById("letter-overlay");
const closeButton = document.getElementById("close-letter");

let noClicks = 0;
let yesSize = 1;

const messages = [
    "Are you sure? 🥺",
    "Please? Just a little message! 💗",
    "I worked hard on this! 😭",
    "Pretty please? 🥹💌",
    "Last chance to click No! 🙈"
];

// Clicking No makes Yes grow.
noButton.addEventListener("click", function () {
    noClicks++;

    yesSize += 0.35;
    yesButton.style.transform = `scale(${yesSize})`;

    if (noClicks <= messages.length) {
        message.textContent = messages[noClicks - 1];
    }

    // Remove No after five clicks.
    if (noClicks >= 5) {
        noButton.classList.add("hidden");

        message.textContent =
            "Okay, now you can open your message! 💌❤️";

        yesButton.style.transform = "scale(2)";
    }
});

// Clicking Yes opens the letter.
yesButton.addEventListener("click", function () {
    overlay.classList.add("show");
    document.body.style.overflow = "hidden";

    closeButton.focus();
});

// Close the letter using the X button.
function closeLetter() {
    overlay.classList.remove("show");
    document.body.style.overflow = "";

    yesButton.focus();
}

closeButton.addEventListener("click", closeLetter);

// Clicking outside the letter also closes it.
overlay.addEventListener("click", function (event) {
    if (event.target === overlay) {
        closeLetter();
    }
});

// Escape key closes the letter.
document.addEventListener("keydown", function (event) {
    if (
        event.key === "Escape" &&
        overlay.classList.contains("show")
    ) {
        closeLetter();
    }
});
