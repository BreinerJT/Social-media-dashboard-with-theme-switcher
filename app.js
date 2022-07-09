const toggleBtn = document.querySelector(".toggle-btn")

let isDark = localStorage.getItem("dark-theme")

const enableDarkMode = () => {
    document.body.classList.add("dark-theme")
    localStorage.setItem("dark-theme", "enabled")
}

const disableDarkMode = () => {
    document.body.classList.remove("dark-theme")
    localStorage.setItem("dark-theme", null)
}

if(isDark === "enabled") document.body.classList.add("dark-theme")

toggleBtn.addEventListener("click", () => {
    isDark = localStorage.getItem("dark-theme")
    if(isDark !== "enabled") enableDarkMode()
    else disableDarkMode()
})