// Original media (assets/images, assets/fonts, assets/audio) is not present in
// this copy of the project. Swap any element that fails to load for a small
// text placeholder instead of leaving a broken-image icon or dead audio player.
(function () {
  function placeholder(text) {
    var span = document.createElement("span");
    span.className = "missing-asset";
    span.textContent = text || "[missing asset]";
    span.style.cssText =
      "display:inline-block;padding:2px 6px;font-size:0.75em;" +
      "color:#888;border:1px dashed #ccc;border-radius:4px;";
    return span;
  }

  document.addEventListener(
    "error",
    function (e) {
      var el = e.target;
      if (el.tagName === "IMG") {
        el.replaceWith(placeholder(el.getAttribute("alt")));
      } else if (el.tagName === "SOURCE" && el.parentElement && el.parentElement.tagName === "AUDIO") {
        el.parentElement.replaceWith(placeholder("(audio unavailable)"));
      }
    },
    true
  );
})();
