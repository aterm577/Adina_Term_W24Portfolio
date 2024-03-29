function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function openProjectModal(projectId) {
  var modal = document.getElementById('project-modal');
  var title = document.getElementById('project-title');
  var description = document.getElementById('project-description');
  var image = document.getElementById('project-image');

  // Set project details
  title.textContent = "Project Title " + projectId;
  description.querySelector('p').textContent = "Description of Project " + projectId + ". Lorem ipsum dolor sit amet.";
  image.src = "./assets/project-" + projectId + ".png"; // Replace with the actual image path

  modal.style.display = 'block';
}

function closeProjectModal() {
  var modal = document.getElementById('project-modal');
  modal.style.display = 'none';
}
