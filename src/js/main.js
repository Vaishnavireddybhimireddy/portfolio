// JavaScript code for Bhimireddy Vaishnavi Reddy's portfolio website

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Function to load project data from JSON file
async function loadProjects() {
    try {
        const response = await fetch('./data/projects.json');
        const projects = await response.json();
        displayProjects(projects);
    } catch (error) {
        console.error('Error loading projects:', error);
    }
}

// Function to display projects on the page
function displayProjects(projects) {
    const projectsContainer = document.getElementById('projects-container');
    projects.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.classList.add('project');
        projectElement.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <p>Status: ${project.status}</p>
        `;
        projectsContainer.appendChild(projectElement);
    });
}

// Initialize the portfolio
document.addEventListener('DOMContentLoaded', () => {
    loadProjects();
});