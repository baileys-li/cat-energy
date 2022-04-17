const navButton = document.querySelector(".nav-toggler");
navButton.hidden = false;
navButton.addEventListener("click", toggleNavigation);

function toggleNavigation() {
	const willBeOpened = navButton.ariaExpanded === "false";
	navButton.ariaExpanded = String(willBeOpened);
	navButton.ariaLabel = willBeOpened ? "Закрыть навигацию" : "Открыть навигацию"
}
