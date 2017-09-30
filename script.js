var hamster = document.querySelector('.menu-hamster'),
    info_item = document.querySelector('.info-item'),
    skills_item = document.querySelector('.skills-item'),
    contacts_item = document.querySelector('.contacts-item'),
    block = document.querySelector('.block'),
    menu = document.querySelector('.menu'),
    bar = document.querySelector('.bar .section-name'),
    little_hamster = document.querySelector('.little-hamster');


window.setTimeout(function() {
    change_hamster('turn out');
}, 700);

window.setTimeout(function() {
    change_hamster('stand square');
    block.style.opacity = 0;
}, 1400);

window.setTimeout(function() {
    block.style.zIndex = -1;
}, 1700);

info_item.onmouseover  = function(event) {
    change_hamster('info')
};

skills_item.onmouseover = function(event) {
    change_hamster('skills')
};

contacts_item.onmouseover = function(event) {
    change_hamster('contacts')
};

info_item.onmouseout = skills_item.onmouseout = contacts_item.onmouseout = function(event) {
    change_hamster('stand square')
};

info_item.onclick = skills_item.onclick = contacts_item.onclick = function(event) {
    var location = event.target.className.replace(/-item/gi,'');
    change_location(location);
};

little_hamster.onclick = function() {
    open_menu();
};

function change_hamster(position) {
    switch(position) {
        case 'turn out':
            hamster.style.backgroundPosition = '32% 0';
            break;
        case 'info':
            hamster.style.backgroundPosition = '68% 108%';
            break;
        case 'skills':
            hamster.style.backgroundPosition = '99% 108%';
            break;
        case 'contacts':
            hamster.style.backgroundPosition = '0 108%';
            break;
        case 'stand square':
            hamster.style.backgroundPosition = '64% 0';
            break;
        case 'waiting':
            hamster.style.backgroundPosition = '97% 0';
            break;
    }
}

function change_location(location) {
    change_hamster('waiting');
    menu.style.opacity = 0;
    ['info', 'skills', 'contacts'].forEach(function(item){
        document.querySelector('.' + item).style.display = 'none';
    });
    document.querySelector('.' + location).style.display = 'block';

    bar.innerHTML = location;
    setTimeout(function(){
        menu.style.zIndex = -1;
    }, 1000)
}

function open_menu() {
    menu.style.zIndex = 1;
    menu.style.opacity = 1;
}