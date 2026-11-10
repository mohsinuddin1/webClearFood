// Hold to open support for webviews and link tracking
(function () {
  var HOLD_MS = 550;

  document.querySelectorAll("[data-hold-link]").forEach(function (link) {
    var timer = null;
    var triggeredByHold = false;

    function start() {
      link.classList.add("pressing");
      timer = setTimeout(function () {
        triggeredByHold = true;
        link.classList.remove("pressing");
        window.location.href = link.href;
      }, HOLD_MS);
    }

    function cancel() {
      link.classList.remove("pressing");
      clearTimeout(timer);
    }

    link.addEventListener("click", function (e) {
      if (triggeredByHold) {
        e.preventDefault();
        triggeredByHold = false;
        return;
      }
    });
    link.addEventListener("pointerdown", start);
    link.addEventListener("pointerup", cancel);
    link.addEventListener("pointerleave", cancel);
    link.addEventListener("pointercancel", cancel);

    link.addEventListener("keydown", function (e) {
      if ((e.key === "Enter" || e.key === " ") && !timer) start();
    });
    link.addEventListener("keyup", cancel);
  });
})();
