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

function saveTheme(theme) {
	if (theme == `default`) {
		localStorage.setItem(`themeToLoad`, ``)
	}
	
	else if (theme == `Solarized`) {
		localStorage.setItem(`themeToLoad`, `<link rel="stylesheet" href="/hydrogen-framework/themes/aoz0ras-solarized-dark.css">`)
	}
}

function loadTheme() {
	$(`head`).append(`${localStorage.themeToLoad}`)
}




if (!localStorage.accentColor) {
	saveAccent(`DEFAULT_ACCENT`);
}
else {
	changeAccent(localStorage.getItem(`accentColor`))
}

// Make sure that an empty string doesn't cause the theme to be reset, just in case
if (!localStorage.themeToLoad && localStorage.themeToLoad !== ``) {
	saveTheme(`default`);
}
else {
	loadTheme(localStorage.getItem(`themeToLoad`))
}
