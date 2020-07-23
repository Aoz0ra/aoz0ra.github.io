function changeAccent(newColor) {
	if (newColor == `DEFAULT_ACCENT`) {
		document.documentElement.style.setProperty(`--accentHilight`, `var(--DEFAULT_ACCENT_HILIGHT)`);
	}
	else {
		document.documentElement.style.setProperty(`--accentHilight`, `var(--${newColor}Hilight)`);
	}
	document.documentElement.style.setProperty(`--accent`, `var(--${newColor})`);
	document.documentElement.style.setProperty(`--hilight`, `var(--${newColor})`);
}
		
function saveAccent(newColor) {
	changeAccent(newColor);

	localStorage.setItem(`accentColor`, newColor);
}

if (!localStorage.accentColor) {
	saveAccent(`DEFAULT_ACCENT`);
}
else {
	changeAccent(localStorage.getItem(`accentColor`))
}
