const navButton = document.querySelector(".nav-toggler");
navButton.hidden = false;
navButton.addEventListener("click", toggleNavigation);

function toggleNavigation() {
	const willBeOpened = navButton.ariaExpanded === "false",
		message = willBeOpened ? "Закрыть навигацию" : "Открыть навигацию";
	navButton.ariaExpanded = String(willBeOpened);
	navButton.ariaLabel = message;
	navButton.title = message;
}
