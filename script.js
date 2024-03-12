
const skills = document.querySelectorAll('ul li');
skills.forEach(skill => {
    const rating = skill.textContent.trim().split(':')[1].trim();
    if (rating >= 4) {
        skill.style.color = 'green';
    } else if (rating >= 3) {
        skill.style.color = 'orange';
    } else {
        skill.style.color = 'red';
    }

   
    skill.addEventListener('click', () => {
        const description = skill.querySelector('p');
        if (description) {
            description.classList.toggle('show-description');
        }
    });
});


const footer = document.querySelector('footer');
footer.addEventListener('mouseenter', () => {
    footer.style.color = 'blue';
});

footer.addEventListener('mouseleave', () => {
    footer.style.color = '#777';
});
