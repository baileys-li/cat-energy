const navButton = document.querySelector(".nav-toggler");
navButton.hidden = false;
navButton.addEventListener("click", toggleNavigation);

function toggleNavigation() {
	const isClosed = navButton.ariaExpanded === "false";
	navButton.ariaExpanded = String(isClosed);
}
