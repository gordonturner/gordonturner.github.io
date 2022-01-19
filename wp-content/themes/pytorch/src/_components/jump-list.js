const jumpLists = document.querySelectorAll(".jump-list");
const blockLinks = document.querySelectorAll("a");
const mainHeaderHeight =
  (document.querySelector(".mainHeader") && document.querySelector(".mainHeader").clientHeight) || 0;
const desktopWidth = 1220;

for (let jumpList of jumpLists) {
  const jumpListToggles = jumpList.querySelectorAll(".jump-list-toggle");
  const jumpListLinks = jumpList.querySelectorAll("a");
  const jumpListMobileHeading = jumpList.parentNode.querySelector(".jump-list-mobile-heading-container");
  const jumpListParentMenus = jumpList.querySelectorAll(".jump-list-parent");
  const jumpListSingleItems = jumpList.querySelectorAll(".jump-list-single");
  const jumpListHeight = parseInt(jumpListMobileHeading.clientHeight) || 0;
  let isMobileOpen = false;

  for (let toggle of jumpListToggles) {
    toggle.addEventListener("click", (event) => {
      toggle.parentElement.classList.toggle("open");
    });
  }

  for (let link of jumpListLinks) {
    const backButton = link.parentNode.querySelector(".jump-list-mobile-back");
    const targetBlock = document.querySelector(link.dataset.blockid);
    const offsetTop = targetBlock ? targetBlock.getBoundingClientRect().top + window.scrollY : 0;

    link.addEventListener("click", (event) => {
      event.preventDefault();

      if (!isMobileOpen || window.innerWidth >= desktopWidth) {
        window.scrollTo({
          top: offsetTop - mainHeaderHeight,
          behavior: "smooth",
        });
      } else {
        if (link.classList.contains("level-2") || link.parentNode.classList.contains("jump-list-single")) {
          window.scrollTo({
            top: offsetTop - mainHeaderHeight - jumpListHeight,
            behavior: "smooth",
          });
          closeMobileMenu();
        } else if (link.classList.contains("level-1")) {
          if (link.parentNode.classList.contains("open")) {
            window.scrollTo({
              top: offsetTop - mainHeaderHeight - jumpListHeight,
              behavior: "smooth",
            });
            closeMobileMenu();
          } else {
            resetMobileMenu();
            for (let parentMenu of jumpListParentMenus) {
              parentMenu.classList.add("hidden");
            }
            for (let parentMenu of jumpListSingleItems) {
              parentMenu.classList.add("hidden");
            }

            link.parentNode.classList.add("open");
            link.parentNode.classList.remove("hidden");
          }
        }
      }
    });

    if (backButton) backButton.addEventListener("click", resetMobileMenu);
  }

  highlightLinks(jumpListLinks);

  document.addEventListener("scroll", highlightLinks);

  function resetMobileMenu() {
    for (let parentMenu of jumpListParentMenus) {
      parentMenu.classList.remove("open");
      parentMenu.classList.remove("hidden");
    }
    for (let singleItem of jumpListSingleItems) {
      singleItem.classList.remove("open");
      singleItem.classList.remove("hidden");
    }
  }

  function closeMobileMenu() {
    resetMobileMenu();
    jumpList.parentNode.classList.remove("open");
    isMobileOpen = false;
  }

  function highlightLinks(jumpListLinks) {
    let activeLink = false;

    for (let link of jumpListLinks) {
      const targetBlock = document.querySelector(link.dataset.blockid);
      const offsetTop = targetBlock ? targetBlock.getBoundingClientRect().top : 0;

      link.classList.remove("active", "child-active");

      if (offsetTop < 0) continue;

      if (!activeLink) {
        link.classList.add("active");
        activeLink = true;

        if (
          !link.parentNode.classList.contains("jump-list-parent") &&
          !link.parentNode.classList.contains("jump-list-single")
        ) {
          const parentLink = link.parentNode.parentNode.parentNode.querySelector(".level-1");
          if (parentLink) parentLink.classList.add("active", "child-active");
        }
      }
    }
  }

  if (jumpListMobileHeading)
    jumpListMobileHeading.addEventListener("click", () => {
      jumpListMobileHeading.parentNode.classList.toggle("open");
      isMobileOpen = true;
    });
}

for (let link of blockLinks) {
  if (link.href.indexOf("#block-") > 0 && !link.classList.contains("jump-link")) {
    const targetBlockId = link.href.slice(link.href.indexOf("#block-"), link.href.length);
    const targetBlock = document.querySelector(targetBlockId);
    link.addEventListener("click", (target) => {
      const offsetTop = targetBlock
        ? targetBlock.getBoundingClientRect().top + window.pageYOffset - mainHeaderHeight
        : 0;
      target.preventDefault();

      if (window.innerWidth >= desktopWidth) {
        jumpListHeight = 0;
      } else {
        jumpListHeight = document.querySelector(".jump-list-container").clientHeight;
      }

      window.scrollTo({
        top: offsetTop - jumpListHeight,
        behavior: "smooth",
      });
    });
  }
}
