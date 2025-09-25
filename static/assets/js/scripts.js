document.addEventListener("DOMContentLoaded", function () {
const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");
const drawer = document.getElementById("drawer");
const closeBtn = document.getElementById("closeBtn");
const overlay = document.getElementById("overlay");

// Open Sidebar
menuBtn.addEventListener("click", () => {
sidebar.classList.remove("hidden");
setTimeout(() => {
    drawer.classList.remove("-translate-x-full");
}, 50);
});

// Close Sidebar function
function closeSidebar() {
drawer.classList.add("-translate-x-full");
setTimeout(() => {
    sidebar.classList.add("hidden");
}, 300); // match transition duration
}

// Close with closeBtn
closeBtn.addEventListener("click", closeSidebar);

// Close with overlay
overlay.addEventListener("click", closeSidebar);
});



// slider
  document.addEventListener("DOMContentLoaded", () => {
    const slider = document.getElementById("slider");
    const slides = slider.children;
    const totalSlides = slides.length;
    let index = 0;
    let interval;

    const dotsContainer = document.getElementById("dots");
    for (let i = 0; i < totalSlides; i++) {
      const dot = document.createElement("div");
      dot.classList = "w-4 h-4 rounded-full bg-gray-300 cursor-pointer transition";
      dot.addEventListener("click", () => goToSlide(i));
      dotsContainer.appendChild(dot);
    }

    function updateDots() {
      [...dotsContainer.children].forEach((dot, i) => {
        dot.classList = i === index 
          ? "w-4 h-4 rounded-full bg-indigo-600 scale-110 transition" 
          : "w-4 h-4 rounded-full bg-gray-300 cursor-pointer transition";
      });
    }

    function goToSlide(i) {
      index = (i + totalSlides) % totalSlides;
      slider.style.transform = `translateX(-${index * 100}%)`;
      updateDots();
    }

    function nextSlide() { goToSlide(index + 1); }
    function prevSlide() { goToSlide(index - 1); }

    document.getElementById("nextBtn").addEventListener("click", nextSlide);
    document.getElementById("prevBtn").addEventListener("click", prevSlide);

    function startAutoSlide() {
      interval = setInterval(nextSlide, 5000); // 5 sec auto-slide
    }
    function stopAutoSlide() {
      clearInterval(interval);
    }

    slider.addEventListener("mouseenter", stopAutoSlide);
    slider.addEventListener("mouseleave", startAutoSlide);

    // Init
    goToSlide(0);
    startAutoSlide();
  });
  document.addEventListener("DOMContentLoaded", () => {
  // Reveal on scroll animation
  const aboutSection = document.getElementById("about");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        aboutSection.classList.add("animate-fadeInUp");
      }
    });
  }, { threshold: 0.2 });

  observer.observe(aboutSection);
});
 
 
 // Gallery click event
  document.querySelectorAll('#gallery .group').forEach(card => {
    card.addEventListener('click', () => {
      const imgSrc = card.querySelector('img').src;
      document.getElementById('popupImg').src = imgSrc;
      document.getElementById('popup').classList.remove('hidden');
    });
  });

  // Close popup
  document.getElementById('closePopup').addEventListener('click', () => {
    document.getElementById('popup').classList.add('hidden');
  });

  // Close popup on outside click
  document.getElementById('popup').addEventListener('click', (e) => {
    if (e.target.id === 'popup') {
      document.getElementById('popup').classList.add('hidden');
    }
  });
  // Floating Action Box (FAB) Animation

  const fabBox = document.getElementById("fabBox");
  const cube = document.getElementById("cube");
  const boxContent = document.getElementById("boxContent");
  const closeBox = document.getElementById("closeBox");
  const openBox = document.getElementById("openBox");
  const fabItems = document.querySelectorAll(".fab-item");

  const animations = [
    "animate-bounce",
    "animate-shake",
    "animate-pulse",
    "animate-rotate",
    "animate-wiggle",
    "animate-zoom",
    "animate-glow",
    "animate-swing",
    "animate-flip",
    "animate-tada"
  ];

  function randomAnimation(btn) {
    animations.forEach(anim => btn.classList.remove(anim));
    const newAnim = animations[Math.floor(Math.random() * animations.length)];
    btn.classList.add(newAnim);
  }

  // Page load → Cube unfolds into Box
  window.addEventListener("load", () => {
    fabBox.classList.remove("translate-x-full","opacity-0","scale-0");
    fabBox.classList.add("animate-cubeUnfold");
    setTimeout(() => {
      cube.style.display = "none";
      boxContent.classList.remove("hidden");

      // Start infinite random animations
      setInterval(() => {
        fabItems.forEach(btn => randomAnimation(btn));
      }, 3000);

    }, 1000);
  });

  // Close → shrink back to cube
  closeBox.addEventListener("click", () => {
    boxContent.classList.add("hidden");
    cube.style.display = "flex";
    cube.classList.remove("animate-cubeUnfold");
    cube.classList.add("animate-cubeFold");
    setTimeout(() => {
      fabBox.style.display = "none";
      openBox.classList.remove("hidden");
    }, 800);
  });

  // Reopen → Cube reappears then unfold
  openBox.addEventListener("click", () => {
    fabBox.style.display = "block";
    cube.style.display = "flex";
    boxContent.classList.add("hidden");

    cube.classList.remove("animate-cubeFold");
    cube.classList.add("animate-cubeUnfold");

    setTimeout(() => {
      cube.style.display = "none";
      boxContent.classList.remove("hidden");
      openBox.classList.add("hidden");
    }, 1000);
  });

  // Convert 24h to 12h format
  function formatAMPM(hours, minutes) {
    let ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // 0 ko 12 banao
    minutes = minutes < 10 ? '0'+minutes : minutes;
    return hours + ':' + minutes + ' ' + ampm;
  }

  function updateCallStatus() {
    const callStatus = document.getElementById("callStatus");
    const officeHours = document.getElementById("officeHours");


      // Animations list
        const animations = [
        "animate-bounce","animate-shake","animate-pulse","animate-rotate","animate-wiggle",
        "animate-zoom","animate-glow","animate-swing","animate-flip","animate-tada"
        ];

        // Random animation assign
        function randomAnim(btn) {
        animations.forEach(anim => btn.classList.remove(anim));
        const newAnim = animations[Math.floor(Math.random()*animations.length)];
        btn.classList.add(newAnim);
        }

    // Current time
    const now = new Date();
    const currentHour = now.getHours();

    // Office hours (10:00 AM – 7:00 PM)
    const startHour = 10;
    const endHour = 24; // 7 PM in 24h format

    // Show office hours in AM/PM
    officeHours.innerText = `Office Hours: ${formatAMPM(startHour, 0)} – ${formatAMPM(endHour, 0)}`;

    if (currentHour >= startHour && currentHour < endHour) {
      callStatus.innerHTML = `Available Now – 😊📞`;
      callStatus.classList.remove("text-red-300");
      callStatus.classList.add("text-green-200");
    } else {
      callStatus.innerHTML = `Not Available – 😔`;
      callStatus.classList.remove("text-green-200");
      callStatus.classList.add("text-red-300");
    }
  }

  // Run on page load
  updateCallStatus();
  // Update every 1 min
  setInterval(updateCallStatus, 60000);

