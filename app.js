// Animated Background Gradient
let curX = 0;
let curY = 0;
let tgX = 0;
let tgY = 0;

document.addEventListener("DOMContentLoaded", () => {
    const interBubble = document.querySelector(
        ".gradients__gradient_g_interactive"
    );

    function move() {
        curX += (tgX - curX) / 20;
        curY += (tgY - curY) / 20;
        interBubble.style.transform = `translate(${Math.round(
            curX
        )}px, ${Math.round(curY)}px)`;
        requestAnimationFrame(move);
    }

    window.addEventListener("mousemove", (event) => {
        tgX = event.clientX;
        tgY = event.clientY;
    });

    move();
});

// Custom Cursor
const cursorDot = document.querySelector(".cursor-dot");
const cursorOutline = document.querySelector(".cursor-outline");

// Hides Custom Cursor when Cursor Leaves Document
document.addEventListener("mouseleave", ()=> {
    cursorDot.style.display = "none";
    cursorOutline.style.display = "none";
})

// Displays Custom Cursor when Cursor Re-Enters Document
document.addEventListener("mouseenter", ()=> {
    cursorDot.style.display = "block";
    cursorOutline.style.display = "block";
})

window.addEventListener("mousemove", (event) => {
    curX = event.clientX;
    curY = event.clientY;

    cursorDot.style.left = `${curX}px`;
    cursorDot.style.top = `${curY}px`;

    // cursorOutline.style.left = `${curX}px`;
    // cursorOutline.style.top = `${curY}px`;

    cursorOutline.animate({
        left: `${curX}px`,
        top: `${curY}px`
    }, {duration: 500, fill: "forwards"});
});

document.addEventListener("mousedown", ()=> {
    cursorDot.classList.add("active");
});

document.addEventListener("mouseup", () => {
    cursorDot.classList.remove("active");
})
