const toggleBtn = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");
let isOpen = false;

toggleBtn.addEventListener("click", () => {
  isOpen = !isOpen;

  if (isOpen) {
    mobileMenu.classList.remove("hidden");
    setTimeout(() => {
      mobileMenu.classList.remove("opacity-0", "scale-95", "-translate-y-5");
      mobileMenu.classList.add("opacity-100", "scale-100", "translate-y-0");
    }, 10);
    toggleBtn.innerHTML = "✖";
  } else {
    mobileMenu.classList.remove("opacity-100", "scale-100", "translate-y-0");
    mobileMenu.classList.add("opacity-0", "scale-95", "-translate-y-5");
    toggleBtn.innerHTML = "☰";

    setTimeout(() => {
      if (!isOpen) {
        mobileMenu.classList.add("hidden");
      }
    }, 300); // match duration
  }
});

// for active link
const links = document.querySelectorAll(".nav-link");

links.forEach((link) => {
  link.addEventListener("click", () => {
    links.forEach((l) =>
      l.classList.remove(
        "bg-[#F6F5F9]",
        "py-2",
        "px-4",
        "xl:px-[50px]",
        "rounded-[23px]",
        "border-2",
        "border-[#602CD1]"
      )
    );
    link.classList.add(
      "bg-[#F6F5F9]",
      "py-2",
      "px-4",
      "xl:px-[50px]",
      "rounded-[23px]",
      "border-2",
      "border-[#602CD1]"
    );
  });
});

// for the aos
AOS.init();

// for swiper JS
const swiper = new Swiper(".swiper", {
  loop: true,
  autoplay: false,
  // autoplay: {
  //   delay: 5000,
  //   disableOnInteraction: false,
  // },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// counting feature
const counters = document.querySelectorAll(".count");

counters.forEach((counter) => {
  const target = parseFloat(counter.getAttribute("data-target"));
  let count = 0;

  const speed = 200; // Lower is faster
  const step = target / speed;

  const updateCount = () => {
    if (count < target) {
      count += step;
      counter.innerText = count.toFixed(2); // Show 2 decimal points
      requestAnimationFrame(updateCount);
    } else {
      counter.innerText = target.toFixed(2);
    }
  };

  updateCount();
});

// for the phone input filed
var input = document.querySelector("#phone");
window.intlTelInput(input, {});

// for handling auto reaload
const form = document.getElementById("myForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  window.scrollTo({
    top: 250,
    behavior: "smooth",
  });
  form.reset();
});
