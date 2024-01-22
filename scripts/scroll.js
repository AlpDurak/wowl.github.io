const $scrollIndicator = document.querySelector(".scrollDown");

// Fivem Section
const $fivemSection = document.querySelector("section.fivem");
const $fivemBackground = document.querySelector("section.bg-green");

window.addEventListener("scroll", () => {
  // Scroll Indicator
  if (window.scrollY > 200) {
    $scrollIndicator.style.opacity = 0;
  } else {
    $scrollIndicator.style.opacity = 0.8;
  }

  // FiveM Section
  if (window.scrollY > 300) {
    $fivemSection.style.paddingTop = "0px";
    $fivemBackground.classList.add("active")
  } else if ($fivemSection.style.paddingTop === "0px") {
    $fivemSection.style.paddingTop = "200px";
    $fivemBackground.classList.remove("active")
  }
});
