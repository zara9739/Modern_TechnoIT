window.onload = function () {
  var body = document.getElementById("body");
  var themeToggle = document.getElementById("themeToggle");

  // Function to apply the theme based on the current selection
  function applyTheme(theme) {
    if (theme === "black") {
      body.className = "black";
      themeToggle.checked = true; // Set the switch to dark mode (checked)
    } else {
      body.className = "white";
      themeToggle.checked = false; // Set the switch to light mode (unchecked)
    }
  }

  // Event listener for the toggle switch
  themeToggle.addEventListener("change", function () {
    if (this.checked) {
      applyTheme("black");
      localStorage.setItem("theme", "black"); // Save black theme to localStorage
    } else {
      applyTheme("white");
      localStorage.setItem("theme", "white"); // Save white theme to localStorage
    }
  });

  // On page load, check localStorage for the saved theme
  var savedTheme = localStorage.getItem("theme") || "white";
  applyTheme(savedTheme);
};






//faqs

let answers = document.querySelectorAll(".accordion");
answers.forEach((event) => {
    event.addEventListener("click", () => {
        if (event.classList.contains("active")) {
            event.classList.remove("active");
        } else {
            event.classList.add("active");
        }
    });
});