/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 *
 */
const SECTIONS = document.getElementsByTagName('section');
let curActiveSectionIndex = 0;
/*
  End Global Variables
  Start Helper Functions
 */

/**
 * @description a click Handler for navigation item
 * @param {Event} event
 */
const navClickHandler = event => {
	event.preventDefault();
	const activeSectionId = event.target.getAttribute('href');
	document.querySelector(activeSectionId).scrollIntoView({
		behavior: 'smooth'
	});
};
/**
 * @description create a navigation item with a menu link
 * @param  {String} text menu link text
 * @param  {String} href menu link heading when clicked
 * @returns {Element} li Element contains one anchor Element with text and href
 */
const createNavItem = (text, href) => {
	const menuLink = document.createElement('a');
	menuLink.href = href;
	menuLink.title = text;
	menuLink.innerText = text;
	menuLink.classList.add('menu__link');
	menuLink.addEventListener('click', navClickHandler);
	const listItem = document.createElement('li');
	listItem.id = href.slice(1, href.length) + '_nav';
	listItem.appendChild(menuLink);
	return listItem;
};
/**
 * @description set the section with the specified index as active section
 * @param {Number} activeSectionIdx 
 */
const setActiveSection = activeSectionIdx => {
	const activeSectionClass = 'active-section';
	const activeNavClass = 'menu__link-active';

	SECTIONS[curActiveSectionIndex].classList.remove(activeSectionClass);

	let activeNavId = SECTIONS[curActiveSectionIndex].id + '_nav';
	let activeNav = document.getElementById(activeNavId);
	activeNav.firstElementChild.classList.remove(activeNavClass);

	curActiveSectionIndex = activeSectionIdx;

	SECTIONS[curActiveSectionIndex].classList.add(activeSectionClass);

	activeNavId = SECTIONS[curActiveSectionIndex].id + '_nav';
	activeNav = document.getElementById(activeNavId);
	activeNav.firstElementChild.classList.add(activeNavClass);
};
/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav
/**
 * @description build the navigation menu based on the number of the sections on the page.
 */
const buildNav = () => {
	const listItemsFragment = document.createDocumentFragment();
	for (let section of SECTIONS) {
		const text = section.getAttribute('data-nav');
		const href = section.id;
		const menuItem = createNavItem(text, `#${href}`);
		listItemsFragment.appendChild(menuItem);
	}
	const navBarList = document.getElementById('navbar__list');
	navBarList.appendChild(listItemsFragment);
};

// build To Top Btn
/**
 * @description create a button in the bottom left corner that navigates to the page top when clicked
 */
const buildToTopBtn = () => {
	const toTopBtn = document.createElement('button');
	toTopBtn.id = 'to-top';
	toTopBtn.innerText = 'To Top';
	toTopBtn.style.cssText = `
	position: fixed;
	bottom: 20;
	right: 20;
	background: #fff;
	color: #000;
	padding: 5px;
	border: 2px solid #2e4d61;
	box-shadow: 0 2px 10px rgba(180, 180, 255 , 0.6);
	font-weight: bold;
	font-size: 1.1em;
	cursor: pointer;
	display: none;
	`;
	toTopBtn.addEventListener('click', () => {
		window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
	});
	document.body.appendChild(toTopBtn);
};

// build Collapsible Sections
/**
 * @description build the sections as a collapsible sections
 */
const buildCollapsibleSections = () => {
	for (let i = 0; i < SECTIONS.length; i++) {
		const sectionChildren = SECTIONS[i].firstElementChild.children; // get the h2 and the paragraphs
		// starting loop from 1 to bypass the heading
		for (let j = 1; j < sectionChildren.length; j++) {
			sectionChildren[j].style.display = 'none';
		}
		sectionChildren[0].style.cssText += `cursor: pointer;`;
		SECTIONS[i].addEventListener('click', () => {
			for (let j = 1; j < sectionChildren.length; j++) {
				if (sectionChildren[j].style.display === 'none') {
					sectionChildren[j].style.display = 'unset';
				} else {
					sectionChildren[j].style.display = 'none';
				}
			}
		});
	}
};

// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active
let timeout;
document.addEventListener('scroll', () => {
	const scrollY = window.scrollY;
	//-----------------Toggling to top Btn----------------
	const toTopBtn = document.getElementById('to-top');
	if (scrollY > 0.5 * window.outerHeight) {
		toTopBtn.style.display = 'unset';
	} else {
		toTopBtn.style.display = 'none';
	}
	//-----------------Header Fixed only when scrolling-----------
	const pageHeader = document.querySelector('.page__header');
	pageHeader.classList.add('fixed__header');
	clearTimeout(timeout); // This is for cleaning up
	timeout = setTimeout(() => {
		pageHeader.classList.remove('fixed__header');
	}, 1100);
	//-----------------Setting sections as active---------------
	// TODO: Performance Issue: loop every scroll move
	for (let i = 0; i < SECTIONS.length; i++) {
		const curSection = SECTIONS[i];
		const nextSection = SECTIONS[i + 1];
		if (
			scrollY >= curSection.offsetTop - 0.2 * window.outerHeight &&
			(i === SECTIONS.length - 1
				? true
				: scrollY < nextSection.offsetTop - 0.2 * window.outerHeight)
		) {
			setActiveSection(i);
		}
	}
	//------------------
});

//=========================== Callings =============================
buildNav();
setActiveSection(0);
buildToTopBtn();
buildCollapsibleSections();
