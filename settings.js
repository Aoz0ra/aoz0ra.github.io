function changeAccent(newColor) {
	if (newColor == `DEFAULT_ACCENT`) {
		document.documentElement.style.setProperty(`--accentHilight`, `var(--DEFAULT_ACCENT_HILIGHT)`);
	}
	else if (newColor.startsWith(`#`)) {
		document.documentElement.style.setProperty(`--accentHilight`, newColor);
	}
	else {
		document.documentElement.style.setProperty(`--accentHilight`, `var(--${newColor}Hilight)`);
	}
	document.documentElement.style.setProperty(`--accent`, newColor);
	document.documentElement.style.setProperty(`--hilight`, newColor);
}
		
function saveAccent(newColor) {
	changeAccent(newColor);

	localStorage.setItem(`accentColor`, newColor);
}

function setTheme(theme) {
	if (theme == `default`) {
		localStorage.setItem(`themeToLoad`, ``)
	}
	
	else if (theme == `Solarized`) {
		localStorage.setItem(`themeToLoad`, `/hydrogen-framework/themes/aoz0ras-solarized-dark.css`)
	}
}

function loadTheme() {
	$(`head`).append(`<link rel="stylesheet" href="${localStorage.themeToLoad}">`)
}




if (!localStorage.accentColor) {
	saveAccent(`DEFAULT_ACCENT`);
}
else {
	changeAccent(localStorage.getItem(`accentColor`))
}
