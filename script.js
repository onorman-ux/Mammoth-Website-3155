/**
 * Toggles the display of an individual team member's bio
 * @param {string} bioId - The ID of the bio section to show or hide
 */
function toggleBio(bioId) {
    const bio = document.getElementById(bioId);
    const button = bio.previousElementSibling;

    if (bio.style.display === "block") {
        bio.style.display = "none";
        button.textContent = "Show Bio";
    } else {
        bio.style.display = "block";
        button.textContent = "Hide Bio";
    }
}

/**
 * Shows the specified section ('bios' or 'vision') and hides the other
 * @param {string} sectionId - The ID of the section to display
 */
function showSection(sectionId) {
    const biosSection = document.getElementById("bios");
    const visionSection = document.getElementById("vision");

    if (sectionId === "bios") {
        biosSection.style.display = "flex";
        visionSection.style.display = "none";
    } else {
        biosSection.style.display = "none";
        visionSection.style.display = "block";
    }
}