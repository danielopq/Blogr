/**
 * Shows subsection menus depending on the clicked button (desktop version).
 * @param {Event} event 
 */
const showMenu = (event) => {
	let subMenuSource = event.target.attributes["id"].value;
	resetMenu();
	switch (subMenuSource) {
		case 'menu-product':
			document.getElementById('submenu-product').setAttribute("style", "display:block;");
			document.getElementById('menu-product').setAttribute("class", "menuSectionBt arrow-active");
			break;
		case 'menu-company':
			document.getElementById('submenu-company').setAttribute("style", "display:block;");
			document.getElementById('menu-company').setAttribute("class", "menuSectionBt arrow-active");
			break;
		case 'menu-connect':
			document.getElementById('submenu-connect').setAttribute("style", "display:block;");
			document.getElementById('menu-connect').setAttribute("class", "menuSectionBt arrow-active");
			break;
	}
}

/**
 * Hides all submenus and resets arrow directions.
 */
const resetMenu = () => {
	document.getElementById('submenu-product').setAttribute("style", "display:none;");
	document.getElementById('menu-product').setAttribute("class", "menuSectionBt arrow-inactive");
	document.getElementById('submenu-company').setAttribute("style", "display:none;");
	document.getElementById('menu-company').setAttribute("class", "menuSectionBt arrow-inactive");
	document.getElementById('submenu-connect').setAttribute("style", "display:none;");
	document.getElementById('menu-connect').setAttribute("class", "menuSectionBt arrow-inactive");
}

/**
 * Expands or hides the mobile menu.
 */
const showMobileMenu = () => {
	if (document.getElementById("mobile-menu-icon").getAttribute("src") == "images/icon-hamburger.svg") {
		document.getElementById("mobile-menu-icon").setAttribute("src", "images/icon-close.svg");
		document.getElementById("menuMobile").style.display = "flex";
		resetMobileSubmenu();
	} else {
		document.getElementById("mobile-menu-icon").setAttribute("src", "images/icon-hamburger.svg");
		document.getElementById("menuMobile").style.display = "none";
	}
}

/**
 * Shows subsection menus depending on the clicked button (mobile version).
 * @param {Event} event 
 */
const showMobileSubMenu = (event) => {
	let subMenuSource = event.target.attributes["id"].value;
	resetMobileSubmenu();
	switch (subMenuSource) {
		case 'mb-product':
			document.getElementById('mb-subproduct').setAttribute("style", "display:block;");
			document.getElementById('mb-product').setAttribute("class", "menuSectionBt-mb arrow-active-mb");
			break;
		case 'mb-company':
			document.getElementById('mb-subcompany').setAttribute("style", "display:block;");
			document.getElementById('mb-company').setAttribute("class", "menuSectionBt-mb arrow-active-mb");
			break;
		case 'mb-connect':
			document.getElementById('mb-subconnect').setAttribute("style", "display:block;");
			document.getElementById('mb-connect').setAttribute("class", "menuSectionBt-mb arrow-active-mb");
			break;
	}
}

/**
 * Hides all submenus and resets arrow directions (mobile version).
 */
const resetMobileSubmenu = () => {
	document.getElementById('mb-subproduct').setAttribute("style", "display:none;");
	document.getElementById('mb-product').setAttribute("class", "menuSectionBt-mb arrow-inactive-mb");
	document.getElementById('mb-subcompany').setAttribute("style", "display:none;");
	document.getElementById('mb-company').setAttribute("class", "menuSectionBt-mb arrow-inactive-mb");
	document.getElementById('mb-subconnect').setAttribute("style", "display:none;");
	document.getElementById('mb-connect').setAttribute("class", "menuSectionBt-mb arrow-inactive-mb");
}

(() => {
	document.getElementById("menu").addEventListener('mouseleave', resetMenu, false);
	document.getElementById("mobile-menu-icon").addEventListener('click', showMobileMenu, false);
	document.getElementById("menu-product").addEventListener('mouseenter', showMenu, false);
	document.getElementById("menu-company").addEventListener('mouseenter', showMenu, false);
	document.getElementById("menu-connect").addEventListener('mouseenter', showMenu, false);

	document.getElementById("mb-product").addEventListener('mouseenter', showMobileSubMenu, false);
	document.getElementById("mb-company").addEventListener('mouseenter', showMobileSubMenu, false);
	document.getElementById("mb-connect").addEventListener('mouseenter', showMobileSubMenu, false);
	
})()

