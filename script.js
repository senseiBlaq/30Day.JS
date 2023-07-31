function display_none () { // hides the hero section
    const container = document.querySelector('.hero--container');

    container.setAttribute('id', 'none');
}

function create_div () { // creates a numbered grid with lins to the projects
    const container = document.querySelector('#grid--container');

    for (let i = 0; i < 30; i++) {
        const div = document.createElement('div');
        div.classList.add('grid--items');
        div.classList.add('hover');
        div.innerHTML = `<a href = 'google.com' > ${i + 1} </a>`;
        container.appendChild(div);
    }
}