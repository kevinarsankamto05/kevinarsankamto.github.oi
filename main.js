/*===== Script ACTIVE =====*/
window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector(".header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};
/*===== ACTIVE END =====*/

/*===== NAVBAR =====*/
window.onscroll = () => {
  let header = document.querySelector(".header");

  header.classList.toggle("sticky", window.scrollY > 100);
};
/*===== NAVBAR END =====*/

let cart = document.querySelector(".cart");
let cartfield = document.querySelector(".cart-field");
let add = document.getElementsByClassName("add");

for (let but of add) {
  but.onclick = (e) => {
    let item = Number(cart.getAttribute("data-count") || 0);
    cart.setAttribute("data-count", item + 1);
    cart.classList.add("on");

    //animasi image
    let parent = e.target.parentNode.parentNode.parentNode;
    let image = parent.querySelector("img");
    let span = document.createElement("span");
    span.className = "image-carior";
    parent.insertBefore(span, parent.lastElementChild);

    let s_image = image.cloneNode(false);
    span.appendChild(s_image);
    span.classList.add("active");
    setTimeout(() => {
      span.classList.remove("active");
      span.removeChild(s_image);
    }, 500);

    //copy paste
    let clone = parent.cloneNode(true);
    clone.querySelector(".add").style.display = "none";
    clone.querySelector(".add").removeAttribute("class");
    cartfield.appendChild(clone);

    if (clone) {
      cart.onclick = () => {
        cartfield.classList.toggle("display");
      };
    }
  };
}

let span = document.getElementsByTagName("span");
let item = document.getElementsByClassName("item");
let item1 = document.getElementsByClassName("item1");
let item_page = Math.ceil(item.length / 4);
let item1_page = Math.ceil(item1.length / 4);
let l = 0;
let movePer = 25.34;
let maxMove = 203;

let mobile_view = window.matchMedia("(max-width: 768px)");
if (mobile_view.matches) {
  movePer = 50.36;
  maxMove = 504;
}

let right_mover = () => {
  l = l + movePer;
  if (item == 1) {
    l = 0;
  }
  for (const i of item) {
    if (l > maxMove) {
      l = l - movePer;
    }
    i.style.left = "-" + l + "%";
  }
};

let left_mover = () => {
  l = l - movePer;
  if (l <= 0) {
    l = 0;
  }
  for (const i of item) {
    if (item_page > 1) i.style.left = "-" + l + "%";
  }
  for (const i of item1) {
    if (item1_page > 1) i.style.left = "-" + l + "%";
  }
};

span[1].onclick = () => {
  right_mover();
};
span[0].onclick = () => {
  left_mover();
};

/*combo*/

/*COMBO*/
