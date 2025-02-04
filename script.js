function initEventListener() {
    const buttons = document.getElementsByClassName('button');
        buttons.forEach (button => {
            button.addEventListener('click', (event) => {
                alert('Button %s clicked', event.target.id);
        })
    })
}

function initWindowDisplay() {
   const body = document.getElementsByTagName('body')[0];
   // TODO: create and append div elements to body
   const elements = ['div', 'div', 'div'];
    elements.forEach(element => {
        const div = document.createElement(element);
        body.appendChild(div);
    })
}
