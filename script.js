document.addEventListener("DOMContentLoaded", function () {
  // Initialize page
  console.log("CV Website loaded successfully");

  // Smooth scrolling for any anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  // Print functionality
  setupPrintHandlers();

  // Optional: Add keyboard shortcut for printing (Ctrl+P or Cmd+P)
  document.addEventListener("keydown", function (e) {
    if ((e.ctrlKey || e.metaKey) && e.key === "p") {
      e.preventDefault();
      window.print();
    }
  });
});

/**
 * Setup print-related event handlers
 */
function setupPrintHandlers() {
  // Before print event
  window.addEventListener("beforeprint", function () {
    console.log("Preparing to print...");
    // Pre-print preparations
    optimizeForPrint();
  });

  // After print event
  window.addEventListener("afterprint", function () {
    console.log("Print dialog closed");
    // Restore any changes made for printing
    restoreAfterPrint();
  });
}

/**
 * Optimize content for printing
 */
function optimizeForPrint() {
  // Expand all collapsed sections if any exist
  const collapsibleElements = document.querySelectorAll(
    '[data-collapsed="true"]'
  );
  collapsibleElements.forEach((el) => {
    el.setAttribute("data-was-collapsed", "true");
    el.removeAttribute("data-collapsed");
  });

  // Ensure all project boxes are fully visible
  document.querySelectorAll(".project-box").forEach((box) => {
    box.style.pageBreakInside = "avoid";
  });
}

/**
 * Restore content after printing
 */
function restoreAfterPrint() {
  // Restore collapsed state if needed
  const previouslyCollapsed = document.querySelectorAll(
    '[data-was-collapsed="true"]'
  );
  previouslyCollapsed.forEach((el) => {
    el.setAttribute("data-collapsed", "true");
    el.removeAttribute("data-was-collapsed");
  });
}
