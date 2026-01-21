(function(){
  const year = document.querySelector("[data-year]");
  if(year) year.textContent = new Date().getFullYear();

  // Active menu based on current path
  const path = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".menu a").forEach(a=>{
    const href = a.getAttribute("href") || "";
    if(href.endsWith(path)) a.classList.add("active");
    // projects pages
    if(path.includes(".html") && path !== "index.html" && path !== "contact.html"){
      if(href.includes("projects/")) a.classList.add("active");
    }
  });
})();

/* ========== DARK MODE TOGGLE ========== */

const toggleBtn = document.getElementById("themeToggle");
const root = document.documentElement;

// load saved theme
if(localStorage.getItem("theme") === "dark"){
  root.classList.add("dark");
  if(toggleBtn) toggleBtn.textContent = "☀️";
}

if(toggleBtn){
  toggleBtn.addEventListener("click", () => {
    root.classList.toggle("dark");
    const isDark = root.classList.contains("dark");
    toggleBtn.textContent = isDark ? "☀️" : "🌙";
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });
}

