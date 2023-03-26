const showMoreBtn = document.querySelector('#show-more-btn');
const hiddenSkills = document.querySelectorAll('.hidden');

showMoreBtn.addEventListener('click', () => {
  hiddenSkills.forEach(skill => skill.classList.toggle('hidden'));
  if (showMoreBtn.textContent === 'Show More') {
    showMoreBtn.textContent = 'Show Less';
  } else {
    showMoreBtn.textContent = 'Show More';
  }
});
