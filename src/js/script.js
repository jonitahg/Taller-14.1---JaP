//* ====== NavMenu ====== *//

// Elementos HTML

const toggleNav = document.querySelector('.navbar-toggle'),
	openNavBtn = document.querySelector('.open-navbar'),
	closeNavBtn = document.querySelector('.close-navbar'),
	navMenu = document.querySelector('.navmenu');

const navMenuToggle = () => {
	if (openNavBtn.style.display != 'none') {
		openNavBtn.style.display = 'none';
		closeNavBtn.style.display = 'block';
		navMenu.style.display = 'block';
	} else {
		closeNavBtn.style.display = 'none';
		openNavBtn.style.display = 'block';
		navMenu.style.display = 'none';
	}
};

toggleNav.addEventListener('click', navMenuToggle);

// Dropdown navmenu

const dropdownBtn = document.querySelector('.dropdown-link'),
	dropdownList = document.querySelector('.dropdown'),
	arrowDown = document.querySelector('.arrow-down');

const dropdownAction = () => {
	if (dropdownList.style.display !== 'none') {
		dropdownList.style.display = 'none';
		arrowDown.classList.remove('arrow-down-animation');
		arrowDown;
	} else {
		dropdownList.style.display = 'block';
		arrowDown.classList.add('arrow-down-animation');
	}
};

dropdownBtn.addEventListener('click', dropdownAction);

// Efecto subtitulo

const subtitle = document.querySelector('.subtitle');
const subtitlesArr = ['Estoy Feliz...', 'Estoy Triste...', 'Estoy casi Feliz...'];
let index = 0;

function cambiarTexto() {
	subtitle.textContent = subtitlesArr[index];
	index = (index + 1) % subtitlesArr.length;
}

cambiarTexto(); // Cambia el texto inicialmente

setInterval(cambiarTexto, 2000);

// Dropdown navbar

const dropdownNavbarBtn = document.querySelector('.dropdown-link-navbar'),
	dropdownNavbarList = document.querySelector('.list-navbar__dropdown');

const dropdownActionNavbar = () => {
	if (dropdownNavbarList.style.display !== 'none') {
		dropdownNavbarList.style.display = 'none';
		arrowDown.classList.remove('arrow-down-animation');
	} else {
		dropdownNavbarList.style.display = 'flex';
		arrowDown.classList.add('arrow-down-animation');
	}
};

dropdownNavbarBtn.addEventListener('click', dropdownActionNavbar);
