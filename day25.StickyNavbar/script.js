const header = document.getElementById("header");
const title = document.getElementById("title");
const excerpt = document.getElementById("excerpt");
const profile_img = document.getElementById("profile_img");
const name = document.getElementById("name");
const date = document.getElementById("date");

const animated_bgs = document.querySelectorAll(".animated-bg");
const animated_bg_texts = document.querySelectorAll(".animated-bg-text");
setTimeout(getData, 2500);

function getData() {
  header.innerHTML =
    '<img src="https://plus.unsplash.com/premium_photo-1702910931866-2642eee270b1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />';
  title.innerHTML = "LOREM IPSUM DOLOR SIT AMET";
  excerpt.innerHTML =
    "lOREM IPSUM DOLOR SIT AMET ASDHAJKSDJAKSDHAJKDHAJKDHAJKDHAHD";
  profile_img.innerHTML = (
    <img src="http://randomuser.me/api/portraits.men/45.jpg" alt="" />
  );
  name.innerHTML = "jOHN DOE";
  date.innerHTML = "Dec 27, 2020";

  animated_bgs.forEach((bg) => bg.classList.remove("animated-bg"));
  animated_bgs.forEach((bg) => bg.classList.remove("animated-bg-text"));
}
