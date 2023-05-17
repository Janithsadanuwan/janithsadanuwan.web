/* =================================== Toggler Stle Switcher ============================================== */
const styleSwitcherToggker = document.querySelector(".style-switcher-toggler");
styleSwitcherToggker.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
})
// Hide Style Switcher On Scroll
window.addEventListener("scroll", () => {
    if(document.querySelector(".style-switcher").classList.contains("open"))
    {
        document.querySelector(".style-switcher").classList.remove("open");
    }
})
/* =================================== Theme Colors ============================================== */
const alternateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color)
{
    alternateStyles.forEach((style) => {
        if(color === style.getAttribute("title"))
        {
            style.removeAttribute("disabled");
        }
        else
        {
            style.setAttribute("disabled","true");
        }
    })
}
/* =================================== Theme Light And Dark Mode ============================================== */
const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("fa-sun-o");
    dayNight.querySelector("i").classList.toggle("fa-moon-o");
    document.body.classList.toggle("dark")
})
window.addEventListener("load", () => {
    if(document.body.classList.contains("dark"))
    {
        dayNight.querySelector("i").classList.add("fa-sun-o");
    }
    else
    {
        dayNight.querySelector("i").classList.add("fa-moon-o");
    }
})