// HEADER HERO <start>
const $heroDiv = document.querySelector("header.hero .mouse");
const $heroMouseBorder = document.querySelector("header.hero .captureMouse");

$heroMouseBorder.addEventListener("mousemove", (event) => {
  const [x, y] = [event.clientX, event.clientY];

  setTimeout(() => {
    $heroDiv.style.top = `${y + window.scrollY}px`;
    $heroDiv.style.left = `${x + window.scrollX}px`;
  }, 150);
});

$heroMouseBorder.addEventListener("mouseleave", () => {
  const size = 0;
  const maxSize = 200;

  let s = maxSize;
  const interval = setInterval(() => {
    s = s - 10;

    $heroDiv.style.opacity = s / maxSize;
    $heroDiv.style.width = `${s}px`;
    $heroDiv.style.height = `${s}px`;

    if (s === size) clearInterval(interval);
  }, 15);
});

$heroMouseBorder.addEventListener("mouseenter", () => {
  const size = 200;
  const minSize = 0;

  let s = minSize;
  const interval = setInterval(() => {
    s = s + 10;

    $heroDiv.style.opacity = s / size;
    $heroDiv.style.width = `${s}px`;
    $heroDiv.style.height = `${s}px`;

    if (s === size) clearInterval(interval);
  }, 15);
});
// HEADER HERO <end>

// FIVEM SECTION <start>
const $fivemDiv = document.querySelector(".scriptCard .mouse");
const $fivemMouseBorder = document.querySelector(".scriptCard .captureMouse");

$fivemMouseBorder.addEventListener("mousemove", (event) => {
  const [x, y] = [event.layerX, event.layerY];

  setTimeout(() => {
    $fivemDiv.style.top = `${y}px`;
    $fivemDiv.style.left = `${x}px`;
  }, 70);
});

$fivemMouseBorder.addEventListener("mouseleave", () => {
  const size = 0;
  const maxSize = 60;

  let s = maxSize;
  const interval = setInterval(() => {
    s = s - 10;

    $fivemDiv.style.opacity = s / maxSize;
    $fivemDiv.style.width = `${s}px`;
    $fivemDiv.style.height = `${s}px`;

    if (s === size) clearInterval(interval);
  }, 25);
});

$fivemMouseBorder.addEventListener("mouseenter", () => {
  const size = 60;
  const minSize = 0;

  let s = minSize;
  const interval = setInterval(() => {
    s = s + 10;

    $fivemDiv.style.opacity = s / size;
    $fivemDiv.style.width = `${s}px`;
    $fivemDiv.style.height = `${s}px`;

    if (s === size) clearInterval(interval);
  }, 25);
});
// FIVEM SECTION <end>
