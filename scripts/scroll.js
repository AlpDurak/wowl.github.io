const $scrollIndicator = document.querySelector(".scrollDown");

// Fivem Section
const $fivemSection = document.querySelector("section.fivem");
const $fivemBackground = document.querySelector("section.bg-green");
const fivemStyle = getComputedStyle($fivemBackground);
const bgData = {
  w: parseInt(fivemStyle.getPropertyValue("--w")),
  h: parseInt(fivemStyle.getPropertyValue("--h")),
  o: parseFloat(fivemStyle.getPropertyValue("--o")),
};

console.log(JSON.stringify(bgData));

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    $scrollIndicator.style.opacity = 0;
  } else {
    $scrollIndicator.style.opacity = 0.8;
  }

  // FiveM Section
  const growPercent = 50;
  if (window.scrollY > 300) {
    $fivemSection.style.paddingTop = "0px";
    $fivemBackground.style.setProperty(
      "--w",
      `${bgData.w + (bgData.w * growPercent) / 100}px`
    );
    $fivemBackground.style.setProperty(
      "--h",
      `${bgData.h + (bgData.h * growPercent) / 100}px`
    );
    $fivemBackground.style.setProperty("--o", (bgData.o + 0.5).toString());
  } else if ($fivemSection.style.paddingTop === "0px") {
    $fivemSection.style.paddingTop = "200px";
    $fivemBackground.style.setProperty("--w", `${bgData.w}px`);
    $fivemBackground.style.setProperty("--h", `${bgData.h}px`);
    $fivemBackground.style.setProperty("--o", bgData.o.toString());
  }
});
