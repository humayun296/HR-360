// BEGIN FEATURE SECTION FOR STICKY AND CLICK TO VISIT THE TAB

document.addEventListener("DOMContentLoaded", () => {

  const featureTabs = document.querySelectorAll(".tab-title span");
  const featureSections = document.querySelectorAll(".features-section .right .box");

  if (featureTabs.length && featureSections.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const index = [...featureSections].indexOf(entry.target);

            featureTabs.forEach(tab => tab.classList.remove("active"));
            if (featureTabs[index]) {
              featureTabs[index].classList.add("active");
            }

            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.4 }
    );

    featureSections.forEach(section => observer.observe(section));

    featureTabs.forEach((tab, i) => {
      tab.addEventListener("click", () => {
        featureSections[i].scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      });
    });
  }

  // END FEATURE SECTION FOR STICKY AND CLICK TO VISIT THE TAB

// BEGIN ACCORDION SECTION FOR FAQ

const accordionHeaders = document.querySelectorAll(".accordion-header");
const MAX_HEIGHT = 500;
if (accordionHeaders.length) {
  accordionHeaders.forEach(header => {
    header.addEventListener("click", () => {
      const body = header.nextElementSibling;
      const isOpen = header.classList.contains("active");

      accordionHeaders.forEach(h => {
        h.classList.remove("active");
        h.nextElementSibling.style.maxHeight = null;
        h.nextElementSibling.style.padding = "0 20px";
      });

      if (!isOpen) {
        header.classList.add("active");
        const height = Math.min(body.scrollHeight, MAX_HEIGHT);
        body.style.maxHeight = height + "px";
        body.style.padding = "12px 20px";
      }
    });
  });
  const firstHeader = accordionHeaders[0];
  const firstBody = firstHeader.nextElementSibling;
  firstHeader.classList.add("active");
  firstBody.style.maxHeight = Math.min(firstBody.scrollHeight, MAX_HEIGHT) + "px";
  firstBody.style.padding = "12px 20px";
}

// END ACCORDION SECTION FOR FAQ

// BEGIN TABS SECTION

  const tabBtns = document.querySelectorAll(".tab-btn");
  const tabContents = document.querySelectorAll(".tab-content");
  const tabSlider = document.getElementById("tab-slider");
  const contentWrapper = document.querySelector(".tab-contents");

  if (tabBtns.length && tabSlider && contentWrapper) {

    function moveTabSlider(tab) {
      tabSlider.style.width = tab.offsetWidth + "px";
      tabSlider.style.left = tab.offsetLeft + "px";
    }

    function setWrapperHeight(el) {
      const extraSpace = 40;
      contentWrapper.style.height = (el.offsetHeight + extraSpace) + "px";
    }

    const activeTab = document.querySelector(".tab-btn.active");
    const activeContent = document.querySelector(".tab-content.active");

    if (activeTab && activeContent) {
      moveTabSlider(activeTab);
      setWrapperHeight(activeContent);
    }

    tabBtns.forEach((tab, index) => {
      tab.addEventListener("click", () => {
        if (tab.classList.contains("active")) return;

        tabBtns.forEach(t => t.classList.remove("active"));
        tabContents.forEach(c => c.classList.remove("active"));

        tab.classList.add("active");
        tabContents[index].classList.add("active");

        moveTabSlider(tab);
        setWrapperHeight(tabContents[index]);
      });
    });

    window.addEventListener("resize", () => {
      const active = document.querySelector(".tab-btn.active");
      if (active) moveTabSlider(active);
    });
  }

  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

});

// END TABS SECTION

// BEGIN MOBILE MENU TOGGLE

const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-menu-container");

if (hamburger && mobileMenu) {
  hamburger.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
  });
}
// END MOBILE MENU TOGGLE