function changeAccent(newColor) {
	if (newColor == `DEFAULT_ACCENT`) {
		document.documentElement.style.setProperty(`--accentHilight`, `var(--DEFAULT_ACCENT_HILIGHT)`);
		console.log(`changeAccent: setting default accent-hilight of var(--DEFAULT_ACCENT_HILIGHT)`)
	}
	else if (newColor.startsWith(`#`)) {
		document.documentElement.style.setProperty(`--accentHilight`, `var(--newColor)`);
		console.log(`changeAccent: setting custom hilight of var(--${newColor})`)
	}
	else {
		document.documentElement.style.setProperty(`--accentHilight`, `var(--${newColor}Hilight)`);
		console.log(`changeAccent: setting accent-hilight of var(--${newColor}Hilight)`)
	}
	document.documentElement.style.setProperty(`--accent`, `var(--${newColor}`);
	console.log(`changeAccent: setting accent of var(--${newColor})`)
	document.documentElement.style.setProperty(`--hilight`, `var(--${newColor}`);
	console.log(`changeAccent: setting hilight of var(--${newColor})`)
}
		
function saveAccent(newColor) {
	changeAccent(newColor);
	console.log(`saveAccent: accent set...`)

	localStorage.setItem(`accentColor`, newColor);
	console.log(`saveAccent: ...and saved`)
}

function loadTheme(theme) {
	
	
	// I'm using non-jQuery methods for now.
	if (!theme) {
		if (document.getElementsByTagName(`head`)[0].getElementsByTagName(`link`)[1]) {
			document.getElementsByTagName(`head`)[0].getElementsByTagName(`link`)[1].href = localStorage.themeToLoad;
		}
		else {
			document.getElementsByTagName(`head`)[0].innerHTML += `${localStorage.themeToLoad}`
		}
	}
	else if (theme == `default`) {
		if (document.getElementsByTagName(`head`)[0].getElementsByTagName(`link`)[1]) {
			document.getElementsByTagName(`head`)[0].getElementsByTagName(`link`)[1].href = ``;
		}
	}
	else {
		if (document.getElementsByTagName(`head`)[0].getElementsByTagName(`link`)[1]) {
			document.getElementsByTagName(`head`)[0].getElementsByTagName(`link`)[1].href = theme.replace(`<link rel="stylesheet" href="`, ``).replace(`">`, ``);
		}
		else {
			document.getElementsByTagName(`head`)[0].innerHTML += `${theme}`
		}
	}
}

function saveTheme(theme) {
	if (theme == `default`) {
		localStorage.setItem(`themeToLoad`, ``)
		console.log(`default theme saved`)
	}
	
	else if (theme == `Solarized`) {
		localStorage.setItem(`themeToLoad`, `<link rel="stylesheet" href="/hydrogen-framework/themes/aoz0ras-solarized-dark.css">`)
		console.log(`solarized theme saved`)
	}
	
	if (theme = `default`) {
		loadTheme(`default`)
	}
	else {
		loadTheme()
	}
}






if (!localStorage.accentColor) {
	saveAccent(`DEFAULT_ACCENT`);
	console.log(`default accent set and saved as there wasn't one`)
}
else {
	changeAccent(localStorage.getItem(`accentColor`))
	console.log(`accent retrieved and used`)
}

// Make sure that an empty string doesn't cause the theme to be reset, just in case
if (!localStorage.themeToLoad && localStorage.themeToLoad !== ``) {
	saveTheme(`default`);
	console.log(`default theme saved as there wasn't one`)
}
else {
	loadTheme(localStorage.getItem(`themeToLoad`))
	console.log(`theme loaded`)
}


// for now i'm overriding all transition times with 0.  sorry if this bothers you.

document.documentElement.style.setProperty(`--animationDuration`, `0`);
document.documentElement.style.setProperty(`--animationDurationFade`, `0`);
document.documentElement.style.setProperty(`--animationDurationSlide`, `0`)
console.log(`transition times overridden with 0`)
