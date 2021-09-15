import "./styles/style.scss";

const projects = document.querySelector('.projects');
const experience = document.querySelector('.experience');
const experienceLink = document.querySelector('#experience-link');
const projectsLink = document.querySelector('#projects-link');

experienceLink.addEventListener('click', e => {
    e.preventDefault();
    projects.style.display = 'none';
    experience.style.display = 'block';
    experienceLink.classList.add('active');
    projectsLink.classList.remove('active');
    experience.classList.add('active');
    projects.classList.remove('active');
})

projectsLink.addEventListener('click', e => {
    e.preventDefault();
    experience.style.display = 'none';
    projects.style.display = 'block';
    projectsLink.classList.add('active');
    experienceLink.classList.remove('active');
    projects.classList.add('active');
    experience.classList.remove('active');
})

window.addEventListener('resize', (e) => {
    document.querySelector('.content.active').style.height = '100%'
    document.querySelector('.content.active').style.height = '-webkit-fill-available'
    console.log('resize')
})