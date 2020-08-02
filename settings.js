function getInputValue(id) {
	return document.getElementById(id).value;
}





$(`#dropContent`).html(`<div class="item"> <a href="/hydrogen-framework/index.html">Hydrogen</a> </div>`+
		      `<div class="item"> <a href="/winclassic/index.html">WinClassic</a> </div>`+
		      `<div class="item"> <a href="/settings/index.html">Settings</a> </div>`)

$(`#settingsIndex`).html(`<a href="/settings/index.html">General</a><br>`+
			`<a href="/settings/themes.html">Themes</a>`)





function changeAccent(newColor) {
	if (newColor == `DEFAULT_ACCENT`) {
		loadColor(`--accentHilight`, `var(--DEFAULT_ACCENT_HILIGHT)`);
		console.log(`changeAccent: setting default accent-hilight of var(--DEFAULT_ACCENT_HILIGHT)`);
		
		loadColor(`--accent`, `var(--DEFAULT_ACCENT`);
		console.log(`changeAccent: setting default accent of var(--DEFAULT_ACCENT)`)
	}
	else if (newColor.startsWith(`#`)) {
		loadColor(`--accentHilight`, `${newColor}`);
		console.log(`changeAccent: setting custom accent-hilight of ${newColor}`)
		
		loadColor(`--accent`, `${newColor}`);
		console.log(`changeAccent: setting custom accent of ${newColor})`)
	}
	else {
		loadColor(`--accentHilight`, `var(--${newColor}Hilight)`);
		console.log(`changeAccent: setting accent-hilight of var(--${newColor}Hilight)`)
		
		loadColor(`--accent`, `var(--${newColor}`);
		console.log(`changeAccent: setting accent of var(--${newColor})`)
	}
}
		
function saveAccent(newColor) {
	changeAccent(newColor);
	console.log(`saveAccent: accent set...`)

	localStorage.setItem(`accentColor`, newColor);
	console.log(`saveAccent: ...and saved`)
}




function changeHilight(newColor) {
	if (newColor == `DEFAULT_HILIGHT`) {
		loadColor(`--hilightHilight`, `var(--DEFAULT_HILIGHT_HILIGHT)`);
		console.log(`changeAccent: setting default hilight-hilight of var(--DEFAULT_HILIGHT_HILIGHT)`);
		
		loadColor(`--hilight`, `var(--DEFAULT_HILIGHT`);
		console.log(`changeAccent: setting default hilight of var(--DEFAULT_HILIGHT)`)
	}
	else if (newColor.startsWith(`#`)) {
		loadColor(`--hilightHilight`, `${newColor}`);
		console.log(`changeAccent: setting custom hilight-hilight of ${newColor}`)
		
		loadColor(`--hilight`, `${newColor}`);
		console.log(`changeAccent: setting custom hilight of ${newColor})`)
	}
	else {
		loadColor(`--hilightHilight`, `var(--${newColor}Hilight)`);
		console.log(`changeAccent: setting hilight-hilight of var(--${newColor}Hilight)`)
		
		loadColor(`--hilight`, `var(--${newColor}`);
		console.log(`changeAccent: setting hilight of var(--${newColor})`)
	}
}
		
function saveHilight(newColor) {
	changeHilight(newColor);
	console.log(`saveHilight: hilight set...`)

	localStorage.setItem(`hilightColor`, newColor);
	console.log(`saveHilight: ...and saved`)
}





function changeSelect(newColor) {
	if (newColor.startsWith(`#`)) {
		loadColor(`--selectionBackground`, `${newColor}`);
		console.log(`changeSelect: setting custom selection background of ${newColor})`)
	}
	else {
		loadColor(`--selectionBackground`, `var(--${newColor}`);
		console.log(`changeSelect: setting selection background of var(--${newColor})`)
	}
}
		
function saveSelect(newColor) {
	changeSelect(newColor);
	console.log(`saveSelect: selection background set...`)

	localStorage.setItem(`selectColor`, newColor);
	console.log(`saveSelect: ...and saved`)
}






function loadColorSchemeHelper(linkElement) {
	
	if (!!($(`head link#colourscheme`).length)) {
		document.head.getElementsByTagName(`link`)[1].href = linkElement.replace(`<link rel="stylesheet" href="`, ``).replace(`">`, ``);
		console.log(`loadThemeHelper: theme href is now ${document.head.getElementsByTagName(`link`)[1].href}`)
	}
	else {
		document.head.innerHTML += linkElement
		console.log(`loadThemeHelper: theme added to html`)
	}
}

function loadColorScheme(theme) {
	
	console.log(`loadColorScheme: loading theme "${theme}"`)
	
	// I'm using non-jQuery methods for now.
	if (!theme) {
		loadColorSchemeHelper(localStorage.colorSchemeToLoad)
	}
	else if (theme == `default`) {
		if (document.head.getElementsByTagName(`link`)[1]) {
			document.head.getElementsByTagName(`link`)[1].href = ``;
			console.log(`loadColorScheme: theme href is now ${document.head.getElementsByTagName(`link`)[1].href}`)
		}
	}
	else {
		loadColorSchemeHelper(theme)
	}
}

function saveColorScheme(theme) {
	if (theme == `default`) {
		localStorage.setItem(`colorSchemeToLoad`, ``)
		console.log(`default theme saved`)
	}
	
	else if (theme.startsWith(`/`)) {
		localStorage.setItem(`colorSchemeToLoad`, `<link rel="stylesheet" href="${theme}">`)
		console.log(`${theme} theme saved`)
	}
	
	if (theme == `default`) {
		loadColorScheme(`default`)
	}
	else {
		loadColorScheme()
	}
}








function saveAnimationState(animStateBool) {
	if (animStateBool == `true`) {
		console.log(`saveAnimationState: animStateBool is a valid string, normalized it to a boolean`)
		animStateBool = true
	};
	if (animStateBool == `false`) {
		console.log(`saveAnimationState: animStateBool is a valid string, normalized it to a boolean`)
		animStateBool = false
	};
	
	loadAnimationState(animStateBool);
	
	localStorage.setItem(`animationState`, `${animStateBool}`)
	console.log(`saveAnimationState: saved animation state of ${animStateBool}`)
}

function loadAnimationState(animStateBool) {
	if (animStateBool == `true`) {
		console.log(`animStateBool is a valid string, normalized it to a boolean`)
		animStateBool = true
	};
	if (animStateBool == `false`) {
		console.log(`animStateBool is a valid string, normalized it to a boolean`)
		animStateBool = false
	};
	
	if (animStateBool == true) {
		console.log(`loadAnimationState: turning animations on`)
		document.documentElement.style.setProperty(`--animationDuration`, `var(--animationDuration)`);
		document.documentElement.style.setProperty(`--animationDurationFade`, `var(--animationDurationFade)`);
		document.documentElement.style.setProperty(`--animationDurationSlide`, `var(--animationDurationSlide)`);
	}
	else if (animStateBool == false) {
		console.log(`loadAnimationState: turning animations off`)
		document.documentElement.style.setProperty(`--animationDuration`, `0`);
		document.documentElement.style.setProperty(`--animationDurationFade`, `0`);
		document.documentElement.style.setProperty(`--animationDurationSlide`, `0`);
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

if (!localStorage.hilightColor) {
	saveHilight(`DEFAULT_HILIGHT`);
	console.log(`default hilight set and saved as there wasn't one`)
}
else {
	changeHilight(localStorage.getItem(`hilightColor`))
	console.log(`hilight retrieved and used`)
}

if (!localStorage.selectColor) {
	saveSelect(`DEFAULT_SELECTION_BG`);
	console.log(`default selection color set and saved as there wasn't one`)
}
else {
	changeSelect(localStorage.getItem(`selectColor`))
	console.log(`selection color retrieved and used`)
}

// Make sure that an empty string doesn't cause the color scheme to be reset, just in case
if (!localStorage.colorSchemeToLoad && localStorage.colorSchemeToLoad !== ``) {
	saveColorScheme(`default`);
	console.log(`default color scheme saved as there wasn't one`)
}
else {
	loadColorScheme(localStorage.getItem(`colorSchemeToLoad`))
	console.log(`color scheme loaded`)
}

if (!localStorage.animationState) {
	saveAnimationState(`true`);
	console.log(`default animation state and saved as there wasn't one`)
}
else {
	loadAnimationState(localStorage.getItem(`animationState`))
	console.log(`animation state retrieved and used`)
}


function addCSS(cssToAdd) {
	if (!document.head.getElementsByTagName(`style`)[0]) {
		document.head.innerHTML += `<style></style>`;
	}
	document.head.getElementsByTagName(`style`)[0].innerHTML += addCSS
}

function getColor(variableToUse) {
	getComputedStyle(document.documentElement).getPropertyValue(variableToUse)
}

function loadColor(variableToUse, newColor, cssSelector) {
	if (newColor) {
		if (cssSelector) {
			addCSS(`${cssSelector} {${variableToUse}: ${newColor}}`)
		}
		else {
			document.documentElement.style.setProperty(variableToUse, newColor);
		}
	}
	else {
		document.documentElement.style.setProperty(variableToUse, localStorage[`custom ${variableToUse.replace(`--`,``)}`])
	}
}

function saveColor(variableToUse, newColor, cssSelector) {
	if (newColor) {
		if (cssSelector) {
			loadColor(variableToUse, newColor, cssSelector)
			localStorage.setItem(variableToUse.replace(`--`, `custom ${cssSelector} `), newColor);
		}
		else {
			loadColor(variableToUse, newColor, cssSelector)
			localStorage.setItem(variableToUse.replace(`--`, `custom `), newColor);
		}
	}
	else {
		loadColor(variableToUse)
		localStorage.setItem(variableToUse.replace(`--`, `custom `), getColor(variableToUse));
	}
}

function resetColor(variableToUse, cssSelector) {
	if (cssSelector) {
		localStorage.removeItem(`custom ${cssSelector} ${variableToUse.replace(`--`, ``)}`)
	}
	else {
		localStorage.removeItem(`custom ${variableToUse.replace(`--`, ``)}`)
	}
}

function setUpColor(variableToUse, cssSelector) {
	
	if (cssSelector) {
		if (      !localStorage[`custom ${cssSelector} ${variableToUse.replace(`--`,``)}`]
		    
		    //     ...or it's an empty string...
			|| localStorage[`custom ${cssSelector} ${variableToUse.replace(`--`,``)}`] == ``
		    
		    //     ...or it's a string containing "undefined" 
			|| localStorage[`custom ${cssSelector} ${variableToUse.replace(`--`,``)}`] == `undefined`) {
			
			// just do nothing and have the previous CSS define the colour
			
			// it's not often that I just put up something like "if A, do X; else if B, no-op; else Z".
		}
		else {
			addCSS(`${cssSelector} {${variableToUse}: }`)
		}
	} else {
		//         if we have no custom colour...
		if (      !localStorage[`custom ${variableToUse.replace(`--`,``)}`]
		    
		    //     ...or it's an empty string...
			|| localStorage[`custom ${variableToUse.replace(`--`,``)}`] == ``
		    
		    //     ...or it's a string containing "undefined" 
			|| localStorage[`custom ${variableToUse.replace(`--`,``)}`] == `undefined`) {
			
			// just do nothing and have the previous CSS define the colour
			
			// it's not often that I just put up something like "if A, do X; else if B, no-op; else Z".
		}
		else {
			loadColor(`${variableToUse}`)
		}
	}
}

setUpColor(`--background`);
setUpColor(`--backgroundHilight`);
setUpColor(`--backgroundFaint`);
setUpColor(`--foreground`);
setUpColor(`--foregroundHilight`);
setUpColor(`--foregroundFaint`);
setUpColor(`--border`);
setUpColor(`--borderTop`);
setUpColor(`--borderLeft`);
setUpColor(`--borderRight`);
setUpColor(`--borderBottom`);

setUpColor(`--gray`);
setUpColor(`--red`);
setUpColor(`--orange`);
setUpColor(`--yellow`);
setUpColor(`--lime`);
setUpColor(`--green`);
setUpColor(`--aquagreen`);
setUpColor(`--cyan`);
setUpColor(`--skyblue`);
setUpColor(`--blue`);
setUpColor(`--purple`);
setUpColor(`--pink`);
setUpColor(`--hotpink`);

setUpColor(`--grayMuted`);
setUpColor(`--redMuted`);
setUpColor(`--orangeMuted`);
setUpColor(`--yellowMuted`);
setUpColor(`--limeMuted`);
setUpColor(`--greenMuted`);
setUpColor(`--aquagreenMuted`);
setUpColor(`--cyanMuted`);
setUpColor(`--skyblueMuted`);
setUpColor(`--blueMuted`);
setUpColor(`--purpleMuted`);
setUpColor(`--pinkMuted`);
setUpColor(`--hotpinkMuted`);

setUpColor(`--grayHilight`);
setUpColor(`--redHilight`);
setUpColor(`--orangeHilight`);
setUpColor(`--yellowHilight`);
setUpColor(`--limeHilight`);
setUpColor(`--greenHilight`);
setUpColor(`--aquagreenHilight`);
setUpColor(`--cyanHilight`);
setUpColor(`--skyblueHilight`);
setUpColor(`--blueHilight`);
setUpColor(`--purpleHilight`);
setUpColor(`--pinkHilight`);
setUpColor(`--hotpinkHilight`);

setUpColor(`--grayFaint`);
setUpColor(`--redFaint`);
setUpColor(`--orangeFaint`);
setUpColor(`--yellowFaint`);
setUpColor(`--limeFaint`);
setUpColor(`--greenFaint`);
setUpColor(`--aquagreenFaint`);
setUpColor(`--cyanFaint`);
setUpColor(`--skyblueFaint`);
setUpColor(`--blueFaint`);
setUpColor(`--purpleFaint`);
setUpColor(`--pinkFaint`);
setUpColor(`--hotpinkFaint`);

setUpColor(`--DEFAULT_ACCENT`);
setUpColor(`--DEFAULT_ACCENT_HILIGHT`);
setUpColor(`--DEFAULT_HILIGHT`);
setUpColor(`--DEFAULT_HILIGHT`);
setUpColor(`--DEFAULT_HILIGHT`);
setUpColor(`--DEFAULT_SELECTION_BG`);
setUpColor(`--selectionForeground`);
