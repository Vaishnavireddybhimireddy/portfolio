// Bhimireddy Vaishnavi Reddy's Portfolio Website

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Function to load project data from JSON file
async function loadProjects() {
    try {
        const response = await fetch('./data/projects.json');
        if (!response.ok) {
            throw new Error('Failed to load projects');
        }
        const data = await response.json();
        displayProjects(data.projects);
    } catch (error) {
        console.error('Error loading projects:', error);
        // Fallback projects display
        displayFallbackProjects();
    }
}

// Function to display projects on the page
function displayProjects(projects) {
    const projectsContainer = document.getElementById('projects-container');
    projectsContainer.innerHTML = ''; // Clear existing content
    
    projects.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.classList.add('project');
        
        let statusClass = `status-${project.status.toLowerCase().replace(' ', '-')}`;
        
        projectElement.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <p><strong>Status:</strong> <span class="${statusClass}">${project.status}</span></p>
            ${project.role ? `<p><strong>Role:</strong> ${project.role}</p>` : ''}
        `;
        projectsContainer.appendChild(projectElement);
    });
}

// Fallback projects if JSON fails to load
function displayFallbackProjects() {
    const fallbackProjects = [
        {
            title: "Solar Connect",
            description: "Platform promoting solar energy adoption through reliable information and service provider connections.",
            status: "In Progress"
        },
        {
            title: "Community-Centric Job Search and Recruitment System",
            description: "A platform connecting job seekers and employers within communities.",
            status: "Completed"
        },
        {
            title: "Crop Suggestion System",
            description: "Predictive application recommending crops based on soil and environmental conditions.",
            role: "Frontend Developer",
            status: "Completed"
        }
    ];
    displayProjects(fallbackProjects);
}

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', () => {
    loadProjects();
    
    // Add mobile menu functionality if needed
    const navLinks = document.querySelector('.nav-links');
    if (navLinks) {
        // Close menu after clicking a link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.style.display = 'flex';
            });
        });
    }
});
