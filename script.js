// jQuery interactions for the multi-page portfolio.
$(function () {
  $("#year").text(new Date().getFullYear());

  $(".menu-toggle").on("click", function () {
    const isOpen = $(".nav").hasClass("open");
    $(".nav").toggleClass("open");
    $(this).attr("aria-expanded", String(!isOpen)).text(isOpen ? "☰" : "✕");
  });

  $(".nav a").on("click", function () {
    $(".nav").removeClass("open");
    $(".menu-toggle").attr("aria-expanded", "false").text("☰");
  });

  // Gentle entrance reveal that also respects reduced-motion preferences.
  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    $(".stat-card, .panel, .doc-section, .side-card").each(function (index) {
      $(this).css({ "animation-delay": (index * 55) + "ms" }).addClass("reveal-in");
    });
  }
});
