let leftbutton = document.querySelector('#left-change');
let rightbutton = document.querySelector('#right-change');
let header = document.querySelectorAll('.moving-screen');

leftbutton.addEventListener('click', () => {
    header.forEach((element) => {
    if (element.classList.contains('torightscreen')) {
        element.classList.replace('torightscreen', 'toleftscreen');
    }
    else if (element.classList.contains('torightscreen2')) {
        element.classList.replace('torightscreen2', 'toleftscreen2');
    }
    else if (element.classList.contains('toleftscreen2')) {
        element.classList.replace('toleftscreen2', 'toleftscreen');
    }
    else if (element.classList.contains('toleftscreen')) {
        null;
    }
    else {
        null;
    }
    });
});

rightbutton.addEventListener('click', () => {
    header.forEach((element) => {
    if (element.classList.contains('toleftscreen')) {
        element.classList.replace('toleftscreen', 'torightscreen');
    }
    else if (element.classList.contains('torightscreen')) {
        element.classList.replace('torightscreen', 'torightscreen2');
    }
    else if (element.classList.contains('torightscreen2')) {
        null;
    }
    else if (element.classList.contains('toleftscreen2')) {
        element.classList.replace('toleftscreen2', 'torightscreen2');
    }
    else {
        element.classList.add('torightscreen');
    }
});
});