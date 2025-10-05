const sections = document.querySelectorAll('section')

function showSection(sectionId) {
    sections.forEach(sec => sec.classList.remove('active'))
    document.getElementById(sectionId).classList.add('active')
}

document.getElementById('nav-form').addEventListener('click', () => showSection('form-section'))
document.getElementById('nav-recipes').addEventListener('click', () => showSection('recipes-section'))
document.getElementById('nav-list').addEventListener('click', () => showSection('list-section'))