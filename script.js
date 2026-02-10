// 1. SCROLL-ANIMATION (Ditt original)
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.project-card');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.8s ease-out';
        observer.observe(card);
    });
});

// 2. MODAL LOGIK (För längre texter)
const projectData = {
    modal1: {
        title: "Brand Platform: PRIX WORKSHOP",
        description: "Här kan du skriva en längre text om projektet. Till exempel om hur du genomförde SWOT-analysen, vilka slutsatser du drog och hur kampanjförslaget togs emot. Du kan använda <br> för radbryten."
    },
    modal2: {
        title: "Marketing Tech Stack: PRIX",
        description: "Beskriv hur du byggde stacken. Vilka verktyg valdes och varför? Här kan du förklara fördelarna med att koppla HubSpot till Zapier och hur det effektiviserade arbetet."
    },
    modal3: {
        title: "Wordpress Website: CapeUp",
        description: "Berätta om arbetet med CapeUp. Var det ett specifikt tema du använde? Hur tänkte du kring UX och användarresan för gig-arbetare?"
    }
};

function openModal(id) {
    const modal = document.getElementById("projectModal");
    const body = document.getElementById("modal-body");
    const data = projectData[id];
    
    body.innerHTML = `
        <h2 style="text-transform: uppercase; letter-spacing: 2px; font-weight: 300; margin-bottom: 15px;">${data.title}</h2>
        <div style="font-size: 0.9rem; color: #555;">${data.description}</div>
    `;
    
    modal.style.display = "block";
    document.body.style.overflow = "hidden"; 
}

function closeModal() {
    const modal = document.getElementById("projectModal");
    modal.style.display = "none";
    document.body.style.overflow = "auto";
}

window.onclick = function(event) {
    const modal = document.getElementById("projectModal");
    if (event.target == modal) { closeModal(); }
}
