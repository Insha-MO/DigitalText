document.addEventListener("DOMContentLoaded", () => {

  // ===== SCROLL REVEAL =====
  const revealEls = document.querySelectorAll(
    ".fragment, .contract-wrap, .sen-reveal"
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -30px 0px" }
  );

  revealEls.forEach((el) => observer.observe(el));


  // ===== SECOND CONTRACT: SNAP "Chihiro" TO "Sen" =====
  const contractName = document.getElementById("contract-name");
  const secondContract = document.querySelector(".contract-second");

  let hasChanged = false;

  const snapToSen = () => {
    if (hasChanged || !contractName) return;
    hasChanged = true;

    setTimeout(() => {
      contractName.textContent = "Sen";
      contractName.classList.add("changed", "snap");
      setTimeout(() => contractName.classList.remove("snap"), 300);
    }, 1800);
  };

  if (secondContract && contractName) {
    const secondObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            snapToSen();
            secondObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.6 }
    );
    secondObserver.observe(secondContract);
  }

});
