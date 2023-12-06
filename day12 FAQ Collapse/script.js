{
  {
    const toggles = document.querySelectorAll(".faq-toggle");

    toggles.forEach((toggle) => {
      toggle.addEventListener("click", () => {
        toggle.parentNode.classList.toggle("active");
      });
    });

    function randomSelect() {
      const times = 30;

      const interval = setInterval(() => {
        const randomTag = pickRandomTag();
        highlightTag(randomTag);
        setTimeout(() => {
          unhighlightTag(randomTag);
        }, 100);
      }, 100);
      setTimeout(() => {
        clearInterval(interval);
        setTimeout(() => {
          const randomTag = pickRandomTag();
          highlightTag(randomTag);
        }, 100);
      }, times * 100);

      function pickRandomTag() {
        const tags = document.querySelectorAll(".tag");
        return tags[Math.floor(Math.random() * tags.length)];
      }

      function highlightTag(tag) {
        tag.classList.add("highlight");
      }

      function unhighlightTag(tag) {
        tag.classList.remove("highlight");
      }
    }
  }
}
