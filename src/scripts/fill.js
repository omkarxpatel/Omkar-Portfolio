document.addEventListener('DOMContentLoaded', function() {
  // Select all the skills bars
  var bars = document.querySelectorAll('.percent-bar');

  // Function to handle the intersection observer callback
  function fillSkills(entries, observer) {
    entries.forEach(function(entry) {
      // If the skill bar is intersecting or the intersection ratio is greater than 0
      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        // Get the percentage value from the data attribute
        var percentage = entry.target.dataset.percentage;
        
        // Set the width of the bar to the specified percentage
        entry.target.style.width = percentage;
      }
    });
  }

  // Create a new intersection observer
  var observer = new IntersectionObserver(fillSkills, {
    threshold: 0.2 // Adjust the threshold value as per your requirement
  });

  // Observe each skills bar
  bars.forEach(function(bar) {
    observer.observe(bar);
  });
});
