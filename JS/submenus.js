/**
 * @fileoverview Contains the primary functions to show or hide submenu items 
 * based on the user's selection in both desktop and mobile versions.
 * @author Daniel Martinez Duque
 * @date 2024-08-04
 */

/**
 * Displays the appropriate submenu for the selected section (desktop version).
 * Highlights the selected menu item and adjusts the arrow icon to indicate
 * an active submenu.
 * @param {Event} event - The click event triggered by a section button.
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
 * Hides all desktop submenus and resets the menu item classes and arrow directions.
 * This function ensures no submenu is visible when switching between main sections.
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
 * Displays the appropriate submenu for the selected section (mobile version).
 * Highlights the selected menu item and changes the arrow icon to indicate
 * an active submenu.
 * @param {Event} event - The click event triggered by a mobile section button.
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
 * Hides all mobile submenus and resets the menu item classes and arrow icons.
 * This ensures no submenu is visible when switching between main sections on mobile.
 */
const resetMobileSubmenu = () => {
	document.getElementById('mb-subproduct').setAttribute("style", "display:none;");
	document.getElementById('mb-product').setAttribute("class", "menuSectionBt-mb arrow-inactive-mb");
	document.getElementById('mb-subcompany').setAttribute("style", "display:none;");
	document.getElementById('mb-company').setAttribute("class", "menuSectionBt-mb arrow-inactive-mb");
	document.getElementById('mb-subconnect').setAttribute("style", "display:none;");
	document.getElementById('mb-connect').setAttribute("class", "menuSectionBt-mb arrow-inactive-mb");
}

/**
 * Toggles the visibility of the mobile menu. Adjusts the menu icon between 
 * hamburger and close icons and disables page scroll when the menu is open.
 */
const showMobileMenu = () => {
	const visible = document.getElementById("mobile-menu-icon").getAttribute("src") === "images/icon-hamburger.svg";
	document.getElementById("mobile-menu-icon").setAttribute("src", visible ? "images/icon-close.svg" : "images/icon-hamburger.svg");
	document.getElementById("menuMobile").style.display = visible ? "flex" : "none";
	visible && resetMobileSubmenu();
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

