const profileImg = document.querySelector("img#profile");
const backgroundImg = document.querySelector("img#background");
const h1Elem = document.querySelector("h1");

["load", "resize"].forEach((evt) => {
  window.addEventListener(evt, () => {
    console.log("a");
    profileImg.style.bottom = profileImg.offsetWidth / 2 + "px";
  })
})
