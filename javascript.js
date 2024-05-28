document.querySelectorAll(".project-title").forEach(title => {
    title.addEventListener("click", () => {
        const projectDetails = title.nextElementSibling;

        if (getComputedStyle(projectDetails).display === "block") {
            projectDetails.style.display = "none"; // Hide the details
        } else {
            projectDetails.style.display = "block"; // Show the details
        }
    });
});