function getInputValue(id) {
	return document.getElementById(id).value;
}











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
	
	if (document.getElementsByTagName(`head`)[0].getElementsByTagName(`link`)[1]) {
		document.getElementsByTagName(`head`)[0].getElementsByTagName(`link`)[1].href = linkElement.replace(`<link rel="stylesheet" href="`, ``).replace(`">`, ``);
		console.log(`loadThemeHelper: theme href is now ${document.getElementsByTagName(`head`)[0].getElementsByTagName(`link`)[1].href}`)
	}
	else {
		document.getElementsByTagName(`head`)[0].innerHTML += linkElement
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
		if (document.getElementsByTagName(`head`)[0].getElementsByTagName(`link`)[1]) {
			document.getElementsByTagName(`head`)[0].getElementsByTagName(`link`)[1].href = ``;
			console.log(`loadColorScheme: theme href is now ${document.getElementsByTagName(`head`)[0].getElementsByTagName(`link`)[1].href}`)
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




function getColor(variableToUse) {
	getComputedStyle(document.documentElement).getPropertyValue(variableToUse)
}

function loadColor(variableToUse, newColor) {
	if (newColor) {
		document.documentElement.style.setProperty(variableToUse, newColor);
	}
	else {
		document.documentElement.style.setProperty(variableToUse, localStorage[`custom ${variableToUse.replace(`--`,``)}`])
	}
}

function saveColor(variableToUse, newColor) {
	if (newColor) {
		loadColor(variableToUse, newColor)
		localStorage.setItem(variableToUse.replace(`--`, `custom `), newColor);
	}
	else {
		loadColor(variableToUse)
		localStorage.setItem(variableToUse.replace(`--`, `custom `), getColor(variableToUse));
	}
}

function resetColor(variableToUse) {
	removeItem(`custom ${variableToUse.replace(`--`, ``)}`)
}

function setUpColor(variableToUse) {
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

setUpColor(`--background`);
