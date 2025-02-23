document.addEventListener('DOMContentLoaded', function () {
  const headings = document.querySelectorAll('.row.heading');

  headings.forEach((heading) => {
    heading.addEventListener('click', function () {
      const column = heading.closest('.column');
      column.classList.toggle('collapsed');
    });
  });
});
