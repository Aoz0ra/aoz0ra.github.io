
console.log(`started executing settings.js`)

function getInputValue(id) {
	return document.getElementById(id).value;
}






//                  ACCENT COLOUR:

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
		
		loadColor(`--accent`, `var(--${newColor})`);
		console.log(`changeAccent: setting accent of var(--${newColor})`)
	}
}
		
function saveAccent(newColor) {
	changeAccent(newColor);
	console.log(`saveAccent: accent set...`)

	localStorage.setItem(`accentColor`, newColor);
	console.log(`saveAccent: ...and saved`)
}

if (!localStorage.accentColor) {
	saveAccent(`DEFAULT_ACCENT`);
	console.log(`default accent set and saved as there wasn't one`)
}
else {
	changeAccent(localStorage.getItem(`accentColor`))
	console.log(`accent retrieved and used`)
}









//                  HILIGHT COLOUR:

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
		
		loadColor(`--hilight`, `var(--${newColor})`);
		console.log(`changeAccent: setting hilight of var(--${newColor})`)
	}
}
		
function saveHilight(newColor) {
	changeHilight(newColor);
	console.log(`saveHilight: hilight set...`)

	localStorage.setItem(`hilightColor`, newColor);
	console.log(`saveHilight: ...and saved`)
}

if (!localStorage.hilightColor) {
	saveHilight(`DEFAULT_HILIGHT`);
	console.log(`default hilight set and saved as there wasn't one`)
}
else {
	changeHilight(localStorage.getItem(`hilightColor`))
	console.log(`hilight retrieved and used`)
}











//            SELECTION COLOUR:

function changeSelect(newColor) {
	if (newColor.startsWith(`#`)) {
		loadColor(`--selectionBackground`, `${newColor}`);
		console.log(`changeSelect: setting custom selection background of ${newColor})`)
	}
	else {
		loadColor(`--selectionBackground`, `var(--${newColor})`);
		console.log(`changeSelect: setting selection background of var(--${newColor})`)
	}
}
		
function saveSelect(newColor) {
	changeSelect(newColor);
	console.log(`saveSelect: selection background set...`)

	localStorage.setItem(`selectColor`, newColor);
	console.log(`saveSelect: ...and saved`)
}

if (!localStorage.selectColor) {
	saveSelect(`DEFAULT_SELECTION_BG`);
	console.log(`default selection color set and saved as there wasn't one`)
}
else {
	changeSelect(localStorage.getItem(`selectColor`))
	console.log(`selection color retrieved and used`)
}














//            COLOUR SCHEMES:

function loadColorSchemeHelper(linkElement) {
	
	if ($(`head link#colourscheme`).length) {
		document.getElementById(`colourscheme`).href = linkElement.replace(`<link rel="stylesheet" id="colourscheme" href="`, ``).replace(`">`, ``);
		console.log(`loadColorSchemeHelper: color scheme href is now ${document.head.getElementsByTagName(`link`)[1].href}`)
	}
	else {
		document.head.innerHTML += linkElement
		console.log(`loadColorSchemeHelper: color scheme added to html`)
	}
}

function loadColorScheme(theme) {
	
	console.log(`loadColorScheme: loading "${theme}"`)
	
	
	if (!theme) {
		console.log(`no theme specified, loading from storage`)
		loadColorSchemeHelper(localStorage.colorSchemeToLoad)
	}
	else if (theme == `default`) {
		console.log(`default theme specified, loading the standard`)
		loadColorSchemeHelper(`<link rel="stylesheet" id="colourscheme" href="/hydrogen-framework/hydrogen-colours${localStorage.themePolarity}.css">`)
	}
	else {
		loadColorSchemeHelper(theme)
	}
}

function saveColorScheme(theme) {
	if (theme == `default`) {
		localStorage.setItem(`colorSchemeToLoad`, ``)
		console.log(`default color scheme saved`)
	}
	
	else if (theme.startsWith(`/`)) {
		localStorage.setItem(`colorSchemeToLoad`, `<link rel="stylesheet" id="colourscheme" href="${theme}">`)
		console.log(`${theme} color scheme saved`)
	}
	
	if (theme == `default`) {
		loadColorScheme(`default`)
	}
	else {
		loadColorScheme()
	}
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









//               THEME POLARITY:

function savePolarity(polarity) {
  saveColorScheme(localStorage.colorSchemeToLoad.replace(`<link rel="stylesheet" id="colourscheme" href="`, ``).replace(`">`, ``).replace(localStorage.themePolarity, polarity))

  localStorage.setItem(`themePolarity`, polarity);
}
if (!localStorage.themePolarity) {
	savePolarity(`-dynamic`)
}








//                 WEBSITE STYLE:

function loadStyleHelper(linkElement) {
	
	if ($(`head link#style`).length) {
		document.getElementById(`style`).href = linkElement.replace(`<link rel="stylesheet" id="style" href="`, ``).replace(`">`, ``);
		console.log(`loadStyleHelper: style href is now ${document.head.getElementsByTagName(`link`)[1].href}`)
	}
	else {
		document.head.innerHTML += linkElement
		console.log(`loadStyleHelper: style added to html`)
	}
}

function loadStyle(theme) {
	
	console.log(`loadStyle: loading "${theme}"`)
	
	
	if (!theme) {
		loadStyleHelper(localStorage.styleToLoad)
	}
	else if (theme == `default`) {
		console.log(`default theme specified, loading the standard`)
		loadStyleHelper(`<link rel="stylesheet" id="colourscheme" href="/hydrogen-framework/hydrogen-styles.css">`)
	}
	else {
		loadStyleHelper(theme)
	}
}

function saveStyle(theme) {
	if (theme == `default`) {
		localStorage.setItem(`styleToLoad`, ``)
		console.log(`default style saved`)
	}
	
	else if (theme.startsWith(`/`)) {
		localStorage.setItem(`styleToLoad`, `<link rel="stylesheet" id="style" href="${theme}">`)
		console.log(`${theme} style saved`)
	}
	
	if (theme == `default`) {
		loadStyle(`default`)
	}
	else {
		loadStyle()
	}
}

// Make sure that an empty string doesn't cause the color scheme to be reset, just in case
if (!localStorage.styleToLoad && localStorage.styleToLoad !== ``) {
	saveStyle(`default`);
	console.log(`default style saved as there wasn't one`)
}
else {
	loadStyle(localStorage.getItem(`styleToLoad`))
	console.log(`style loaded`)
}








//   ACCESSIBILITY SETTINGS

// I firmly believe that not only the Internet, but electronic devices too, should be accessible to anyone and everyone.
// And thus I add these settings.

var colourFiltersToApply = ``;
var extraStyles = ``;


function doAccessibilitySettings() {
	
	colourFiltersToApply = ``;
	extraStyles = ``;
	
	// COLOURS
	
	// Some people can't stand highly-saturated colours
	if (!localStorage.prefersDesaturatedColours) {
		localStorage.setItem(`prefersDesaturatedColours`, ``);
		console.log(`no preference for desaturated colours yet, so assume the user likes the full range`)
	}
	else if (localStorage.prefersDesaturatedColours == `true`) {
		colourFiltersToApply += `saturate(40%)`
		console.log(`desaturating the colours`)
	}
	
	// some can't stand even desaturated colours and instead head for greyscale themes
	if (!localStorage.prefersGreyscale) {
		localStorage.setItem(`prefersGreyscale`, ``);
		console.log(`no preference for greyscale usage yet, so assume the user likes having colours`)
	}
	else if (localStorage.prefersGreyscale == `true`) {
		colourFiltersToApply += `saturate(0%)`
		console.log(`greyscale'ing the colours`)
	}
	
	// some don't like blue that much or can't deal with colder colours
	if (!localStorage.prefersWarmerColours) {
		localStorage.setItem(`prefersWarmerColours`, ``);
		console.log(`no preference for warmer colours yet, so assume the user likes the standard colour temperature`)
	}
	else if (localStorage.prefersWarmerColours == `true`) {
		colourFiltersToApply += `contrast(80%) sepia(50%)`
		console.log(`warming up the colours`)
	}
	
	// some prefer more vivid colours
	if (!localStorage.prefersExtraSaturation) {
		localStorage.setItem(`prefersExtraSaturation`, ``);
		console.log(`no preference for extra saturation yet, so assume the user likes the normal range`)
	}
	else if (localStorage.prefersExtraSaturation == `true`) {
		colourFiltersToApply += `saturate(150%)`
		console.log(`increasing the saturation`)
	}
	
	// some prefer higher contrast without a custom theme.  easily, but cheaply, make high-contrast variants of themes
	if (!localStorage.prefersIncreasedContrast) {
		localStorage.setItem(`prefersIncreasedContrast`, ``);
		console.log(`no preference for increased contrast yet`)
	}
	else if (localStorage.prefersIncreasedContrast == `true`) {
		colourFiltersToApply += `saturate(90%) contrast(130%)`
		console.log(`increasing the contrast`)
	}
	
	// some prefer lower contrast without a custom theme.  again, this is cheap but it works out better
	if (!localStorage.prefersDecreasedContrast) {
		localStorage.setItem(`prefersDecreasedContrast`, ``);
		console.log(`no preference for decreased contrast yet, so assume the user likes the standard range`)
	}
	else if (localStorage.prefersDecreasedContrast == `true`) {
		colourFiltersToApply += `saturate(90%) contrast(60%)`
		console.log(`decreasing the contrast`)
	}
	
	
	// READING
	
	// some need higher contrast not in colour usage, but in hilighting things
	if (!localStorage.prefersHilightedHeaders) {
		localStorage.setItem(`prefersHilightedHeaders`, ``);
		console.log(`no preference for hilighted headers`)
	}
	else if (localStorage.prefersHilightedHeaders == `true`) {
		extraStyles += `h1, h2, h3, h4, h5, h6 {outline: 1px var(--accentHilight) solid}`
		console.log(`hilighting the headers`)
	}
	
	// ...
	if (!localStorage.prefersHilightedLinks) {
		localStorage.setItem(`prefersHilightedLinks`, ``);
		console.log(`no preference for hilighted links`)
	}
	else if (localStorage.prefersHilightedLinks == `true`) {
		extraStyles += `a {outline: 1px var(--accentHilight) solid}`
		console.log(`hilighting the links`)
	}
	
	
	
	// some don't like having images
	if (!localStorage.prefersHiddenImages) {
		localStorage.setItem(`prefersHiddenImages`, ``);
		console.log(`no preference for hidden images`)
	}
	else if (localStorage.prefersHiddenImages == `true`) {
		extraStyles += `img {display: none}`
		console.log(`hiding the images`)
	}
	
	// some need thicker fonts to read
	if (!localStorage.prefersBoldFonts) {
		localStorage.setItem(`prefersBoldFonts`, ``);
		console.log(`no preference for bold fonts`)
	}
	else if (localStorage.prefersBoldFonts == `true`) {
		extraStyles += `* {font-weight: 700 !important}`
		console.log(`thickening the fonts`)
	}
	
	// some need more linear, single-column layouts
	if (!localStorage.prefersSingleColumn) {
		localStorage.setItem(`prefersSingleColumn`, ``);
		console.log(`no preference for single column`)
	}
	else if (localStorage.prefersSingleColumn == `true`) {
		extraStyles += `.col-xs-1,.col-xs-2,.col-xs-3,.col-xs-4,.col-xs-5,.col-xs-6,.col-xs-7,.col-xs-8,.col-xs-9,.col-xs-10,.col-xs-11,.col-xs-12 {width: 100% !important;}`
		console.log(`linearising the layout`)
	}
	
	// some need header numbers for ease of navigation
	if (!localStorage.prefersHeaderNumbers) {
		localStorage.setItem(`prefersHeaderNumbers`, ``);
		console.log(`no preference for header numbers`)
	}
	else if (localStorage.prefersHeaderNumbers == `true`) {
	//	$(`head`).append(`<style>body {counter-reset: levelone;}h1 {counter-reset: leveltwo;}h2 {counter-reset: levelthree;}h3 {counter-reset: levelfour;}h4 {counter-reset: levelfive;}h5 {counter-reset: levelsix;}h2::before {counter-increment: leveltwo;content: counter(leveltwo) " - ";}h3::before {counter-increment:levelthree;content:counter(leveltwo) "." counter(levelthree) " - ";}h4::before {counter-increment: levelfour;content: counter(leveltwo) "." counter(levelthree) "." counter(levelfour) " - ";}h5::before {counter-increment: levelfive;content: counter(leveltwo) "." counter(levelthree) "." counter(levelfour) "." counter(levelfive) " - ";}h6::before {counter-increment: levelsix;content: counter(leveltwo) "." counter(levelthree) "." counter(levelfour) "." counter(levelfive) "." counter(levelsix) " - ";}</style>`)
		console.log(`applying the header numbers... or I would if the CSS were finalised`)
	}
	
	// some need alternating paragraph colours
	if (!localStorage.prefersParagraphBackgrounds) {
		localStorage.setItem(`prefersParagraphBackgrounds`, ``);
		console.log(`no preference for single column`)
	}
	else if (localStorage.prefersParagraphBackgrounds == `true`) {
		extraStyles += `div.page div.row div > p:nth-of-type(even) {background: #8881;}`
		console.log(`shading the paragraphs`)
	}
	
	
	// USING
	
	// some need larger targets to reach for
	if (!localStorage.prefersReachableTargets) {
		localStorage.setItem(`prefersReachableTargets`, ``);
		console.log(`no preference for reachable targets`)
	}
	else if (localStorage.prefersReachableTargets == `true`) {
		extraStyles += `* {min-width: 44px; min-height: 44px}`
		console.log(`enlarging the targets`)
	}
	
	
	
	
	// NON-ACCESSIBILITY, BUT RATHER OTHER USEFUL TWEAKS
	
	if (!localStorage.prefersSwitchCheckboxes) {
		localStorage.setItem(`prefersSwitchCheckboxes`, ``);
		console.log(`no preference for switches over checkboxes`)
	}
	else if (localStorage.prefersSwitchCheckboxes == `true`) {
		extraStyles += `input[type="checkbox"]{width:6em !important;height:3em !important;background: linear-gradient(to bottom,var(--backgroundBottom),var(--backgroundTop)) !important;}input[type="checkbox"]:before{content:" ";width: 2.5em !important;height:2.5em !important;background:linear-gradient(to bottom,var(--backgroundTop),var(--backgroundBottom)) !important;opacity:1 !important;position:relative !important;left:0.25em !important;transform:none !important;border:var(--borderWidth) var(--border) solid !important;border-radius:var(--borderRadius);box-shadow:0 1px 2px #0008;transition:var(--animationDuration) var(--animationFunction, ease);}input[type="checkbox"]:checked{background:linear-gradient(to bottom,var(--accent),var(--accentHilight)) !important;}input[type="checkbox"]:checked:before{content:" ";width:2.5em !important;height:2.5em !important;left:3.25em !important;transition:var(--animationDuration) var(--animationFunction, ease);}`
		console.log(`switching the checkboxes`)
	}
	
	
	
	// COMMIT
	
	if ($(`head style#colourfilters`).get(0)) {
		$(`head style#colourfilters`).text(`:root {filter: ${colourFiltersToApply}; backdrop-filter: ${colourFiltersToApply}}`)
	}
	else {
		$(`head`).append(`<style id="colourfilters">html {filter: ${colourFiltersToApply}; backdrop-filter: ${colourFiltersToApply}}</style>`)
	}
	
	if ($(`head style#extrastyles`).get(0)) {
		$(`head style#extrastyles`).text(extraStyles);
	}
	else {
		$(`head`).append(`<style id="extrastyles">${extraStyles}</style>`)
	}
}
doAccessibilitySettings();

// ################################################


/*


//                 NAVBAR LAYOUT:

function loadNavLayoutHelper(linkElement) {
	
	if ($(`head link#navlayout`).length) {
		document.getElementById(`navlayout`).href = linkElement.replace(`<link rel="stylesheet" id="navlayout" href="`, ``).replace(`">`, ``);
		console.log(`loadNavLayoutHelper: nav layout href is now ${document.head.getElementsByTagName(`link`)[1].href}`)
	}
	else {
		document.head.innerHTML += linkElement
		console.log(`loadNavLayoutHelper: style added to html`)
	}
}

function loadNavLayout(theme) {
	
	console.log(`loadNavLayout: loading "${theme}"`)
	
	
	if (!theme) {
		loadNavLayoutHelper(localStorage.styleToLoad)
	}
	else if (theme == `default`) {
		console.log(`default theme specified, loading the standard`)
		loadNavLayoutHelper(`<link rel="stylesheet" id="colourscheme" href="#">`)
	}
	else {
		loadNavLayoutHelper(theme)
	}
}

function saveNavLayout(theme) {
	if (theme == `default`) {
		localStorage.setItem(`navLayoutToLoad`, ``)
		console.log(`default nav layout saved`)
	}
	
	else if (theme.startsWith(`/`)) {
		localStorage.setItem(`navLayoutToLoad`, `<link rel="stylesheet" id="navlayout" href="${theme}">`)
		console.log(`${theme} nav layout saved`)
	}
	
	if (theme == `default`) {
		loadStyle(`default`)
	}
	else {
		loadStyle()
	}
}

// Make sure that an empty string doesn't cause the color scheme to be reset, just in case
if (!localStorage.navLayoutToLoad && localStorage.navLayoutToLoad !== ``) {
	saveNavLayout(`default`);
	console.log(`default nav layout saved as there wasn't one`)
}
else {
	loadNavLayout(localStorage.getItem(`navLayoutToLoad`))
	console.log(`nav layout loaded`)
}







//              FLOATING NAVBAR

var floatingNavbarLocation = `<link rel="stylesheet" id="navlayout" href="/hydrogen-framework/navbar-styles/floating-navbar.css">`;

function loadFloatbarHelper(linkElement) {
	
	if ($(`head link#floatbar`).length) {
		document.getElementById(`floatbar`).href = linkElement.replace(`<link rel="stylesheet" id="floatbar" href="`, ``).replace(`">`, ``);
		console.log(`loadFloatbarHelper: nav layout href is now ${document.head.getElementsByTagName(`link`)[1].href}`)
	}
	else {
		document.head.innerHTML += linkElement
		console.log(`loadFloatbarHelper: style added to html`)
	}
}

function loadFloatbar(theme) {
	
	console.log(`loadFloatbar: loading "${theme}"`)
	
	if (theme == true) {
		loadFloatbarHelper(floatingNavbarLocation)
	}
	
	else if (theme == false) {
		loadFloatbarHelper(`<link rel="stylesheet" id="floatbar" href="#">`)
	}
	
	else {
		loadFloatbarHelper(`<link rel="stylesheet" id="floatbar" href="#">`)
	}
	
}

function saveFloatbar(theme) {
	if (theme == true) {
		localStorage.setItem(`floatingNavbar`, floatingNavbarLocation)
		console.log(`${theme} floating nav bar saved`)
	}
	
	else if (theme == false) {
		localStorage.setItem(`floatingNavbar`, ``)
		console.log(`floating nav bar off and saved`)
	}
	
	else {
		localStorage.setItem(`floatingNavbar`, ``)
		console.log(`floating nav bar off and saved`)
	}
	
	loadFloatbar(localStorage.floatingNavbar)
}

// Make sure that an empty string doesn't cause the color scheme to be reset, just in case
if (!localStorage.floatingNavbar && localStorage.floatingNavbar !== ``) {
	saveFloatbar(`default`);
	console.log(`default floatbar setting saved as there wasn't one`)
}
else {
	loadFloatbar(localStorage.getItem(`floatingNavbar`))
	console.log(`nav layout loaded`)
}

*/






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
		document.documentElement.style.removeProperty(`--animationDuration`);
		document.documentElement.style.removeProperty(`--animationDurationFade`);
		document.documentElement.style.removeProperty(`--animationDurationSlide`);
	}
	else if (animStateBool == false) {
		console.log(`loadAnimationState: turning animations off`)
		document.documentElement.style.setProperty(`--animationDuration`, `0`);
		document.documentElement.style.setProperty(`--animationDurationFade`, `0`);
		document.documentElement.style.setProperty(`--animationDurationSlide`, `0`);
	}
}




if (!localStorage.animationState) {
	saveAnimationState(`true`);
	console.log(`default animation state and saved as there wasn't one`)
}
else {
	loadAnimationState(localStorage.getItem(`animationState`))
	console.log(`animation state retrieved and used`)
}










//                             CUSTOM COLOURS

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

setUpColor(`--hcLight`);
setUpColor(`--hcDark`);

setUpColor(`--DEFAULT_ACCENT`);
setUpColor(`--DEFAULT_ACCENT_HILIGHT`);
setUpColor(`--DEFAULT_HILIGHT`);
setUpColor(`--DEFAULT_HILIGHT`);
setUpColor(`--DEFAULT_HILIGHT`);
setUpColor(`--DEFAULT_SELECTION_BG`);
setUpColor(`--selectionForeground`);

setUpColor(`--fontSize`);
setUpColor(`--fontSizeH1`);
setUpColor(`--fontSizeH2`);
setUpColor(`--fontSizeH3`);
setUpColor(`--fontSizeH4`);
setUpColor(`--fontSizeH5`);
setUpColor(`--fontSizeH6`);

setUpColor(`--sansSerifFont`);
setUpColor(`--lineHeight`);
setUpColor(`--letterSpacing`);
setUpColor(`--wordSpacing`);

setUpColor(`--pagePaddingTop`);
setUpColor(`--pagePaddingLeft`);
setUpColor(`--pagePaddingRight`);
setUpColor(`--pagePaddingBottom`);

setUpColor(`--headerPaddingTop`);
setUpColor(`--headerPaddingLeft`);
setUpColor(`--headerPaddingRight`);
setUpColor(`--headerPaddingBottom`);




if (!localStorage.floatingSettings) {
	localStorage.setItem(`floatingSettings`, ``);
	console.log(`no preference for having a floating settings page`)
}
else if (localStorage.floatingSettings == `true` && !window.location.href.includes(`/settings/`)) {
	$(`<div id="floatingsettings"><iframe src="/aoz0ra.github.io/settings/index.html"></iframe></div><style>#floatingsettings {position: fixed;bottom: 6px;left: 9px;overflow: hidden;width: 1em;height: 1em;}#floatingsettings:hover, #floatingsettings iframe {width: calc(100px + 33vw);height: calc(100vh - 12px - 2em);}</style>`).appendTo(`body`)
	console.log(`and the floating settings are added`)
}





//                   LOCALISATION

/*
if (!localStorage.localization) {
  localStorage.setItem(`localization`, `UK`)
}

var BritishToAmericanSpellings = {
	'colour':          `color`,
	'localis':         `localiz`,
}

var finishedPageHTML = JSON.stringify($(`div.page`).html()).findReplace(`\\n`, ``).findReplace(`\\t`, ``).findReplace(`\\"`, `"`)



for (const templateToReplace of Object.keys(templates)) {
	finishedPageHTML = finishedPageHTML.findReplace(templateToReplace, templates[templateToReplace])
}

finishedPageHTML = finishedPageHTML.substring(1, finishedPageHTML.length - 1)

$(`div.page`).html(finishedPageHTML)
*/
