function initEventListener() {
    const buttons = document.getElementsByClassName('button');
        buttons.forEach (button => {
            button.addEventListener('click', (event) => {
                alert('Button %s clicked', event.target.id);
        })
    })
}

function initTopNavBar() {
    const body = document.getElementsByTagName('body')[0];
    const topNavBar = document.createElement('div');

    // TODO: add child elements to topnav

    // TODO: append topnav to body
}

function initSideBar() {
    const body = document.getElementsByTagName('body')[0];
    const sideBar = document.createElement('div');

    // TODO: add child elements to sidebar
    
    // TODO: append sidebar to body
}

function initMainSection() {
    const body = document.getElementsByTagName('body')[0];
    const mainSection = document.createElement('div');

    // TODO: add child elements to main section

    // TODO: append main section to body

}

function initFooter() {
    const body = document.getElementsByTagName('body')[0];
    const footer = document.createElement('div');

    // TODO: add child elements to footer

    // TODO: append footer to body

}

function initWindowDisplay() {
  initTopNavBar();
  initSideBar();
  initMainSection();
  initFooter();
}
