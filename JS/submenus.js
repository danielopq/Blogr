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
			document.getElementById('menu-product-arrow').setAttribute("class", "arrow-active");
			break;
		case 'menu-company':
			document.getElementById('submenu-company').setAttribute("style", "display:block;");
			document.getElementById('menu-company-arrow').setAttribute("class", "arrow-active");
			break;
		case 'menu-connect':
			document.getElementById('submenu-connect').setAttribute("style", "display:block;");
			document.getElementById('menu-connect-arrow').setAttribute("class", "arrow-active");
			break;
	}
}

/**
 * Hides all submenus and resets arrow directions.
 */
const resetMenu = () => {
	document.getElementById('submenu-product').setAttribute("style", "display:none;");
	document.getElementById('menu-product-arrow').setAttribute("class", "arrow-inactive");
	document.getElementById('submenu-company').setAttribute("style", "display:none;");
	document.getElementById('menu-company-arrow').setAttribute("class", "arrow-inactive");
	document.getElementById('submenu-connect').setAttribute("style", "display:none;");
	document.getElementById('menu-connect-arrow').setAttribute("class", "arrow-inactive");
}

/**
 * Expands or hides the mobile menu.
 */
const showMobileMenu = () => {
	if (document.getElementById("mobile-menu-icon").getAttribute("src") == "images/icon-hamburger.svg") {
		document.getElementById("mobile-menu-icon").setAttribute("src", "images/icon-close.svg");
		document.getElementById("menu-mobile-menu").style.display = "flex";
		resetMobileSubmenu();
	} else {
		document.getElementById("mobile-menu-icon").setAttribute("src", "images/icon-hamburger.svg");
		document.getElementById("menu-mobile-menu").style.display = "none";
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
			document.getElementById('mb-product-arrow').setAttribute("class", "arrow-active");
			break;
		case 'mb-company':
			document.getElementById('mb-subcompany').setAttribute("style", "display:block;");
			document.getElementById('mb-company-arrow').setAttribute("class", "arrow-active");
			break;
		case 'mb-connect':
			document.getElementById('mb-subconnect').setAttribute("style", "display:block;");
			document.getElementById('mb-connect-arrow').setAttribute("class", "arrow-active");
			break;
	}
}

/**
 * Hides all submenus and resets arrow directions (mobile version).
 */
const resetMobileSubmenu = () => {
	document.getElementById('mb-subproduct').setAttribute("style", "display:none;");
	document.getElementById('mb-product-arrow').setAttribute("class", "arrow-inactive");
	document.getElementById('mb-subcompany').setAttribute("style", "display:none;");
	document.getElementById('mb-company-arrow').setAttribute("class", "arrow-inactive");
	document.getElementById('mb-subconnect').setAttribute("style", "display:none;");
	document.getElementById('mb-connect-arrow').setAttribute("class", "arrow-inactive");
}

(() => {
	document.getElementById("menu-product").addEventListener('click', showMenu, false);
	document.getElementById("menu-company").addEventListener('click', showMenu, false);
	document.getElementById("menu-connect").addEventListener('click', showMenu, false);

	document.getElementById("mobile-menu-icon").addEventListener('click', showMobileMenu, false);
	document.getElementById("mb-product").addEventListener('click', showMobileSubMenu, false);
	document.getElementById("mb-company").addEventListener('click', showMobileSubMenu, false);
	document.getElementById("mb-connect").addEventListener('click', showMobileSubMenu, false);
})()

