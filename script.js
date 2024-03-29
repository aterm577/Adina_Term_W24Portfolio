function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function toggleProjectDescription(element, projectId, width, height) {
  var description = document.getElementById("project-description-" + projectId);
  var isOpen = description && description.style.display !== "none";

  // Close all project descriptions except the clicked one
  var allDescriptions = document.querySelectorAll('.project-description');
  allDescriptions.forEach(function(desc) {
      if (desc !== description) {
          desc.style.display = 'none';
      }
  });

  // Toggle the display of the clicked project description
  if (!isOpen && description) {
      description.style.display = "block";
  } else if (description) {
      description.style.display = "none";
  } else {
      // If description doesn't exist, create it
      var newDescription = document.createElement("div");
      newDescription.id = "project-description-" + projectId;
      newDescription.className = "project-description";

      // Create and append project image
      var projectImage = document.createElement("img");
      projectImage.src = "./assets/project-" + projectId + ".png"; // Corrected image path
      projectImage.alt = "Project " + projectId;
      projectImage.className = "project-image";

      // Set custom width and height
      if (width && height) {
        projectImage.style.width = width + "px";
        projectImage.style.height = height + "px";
      }

      newDescription.appendChild(projectImage);

      // Create and append project description
      var projectDescription = document.createElement("p");
      projectDescription.textContent = "Description of Project " + projectId + ". Lorem ipsum dolor sit amet.";
      newDescription.appendChild(projectDescription);

      // Append the description to the DOM
      element.parentNode.insertBefore(newDescription, element.nextSibling);
  }
}
