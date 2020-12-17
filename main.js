
console.log(`started executing main.js`)







$(`#dropContent`).html(`<div class="item"> <a href="/aoz0ra.github.io/hydrogen-framework/index.html">Hydrogen</a> </div>`+
                       `<div class="item"> <a href="/aoz0ra.github.io/winclassic/index.html">WinClassic</a> </div>`+
                       `<div class="item"> <a href="/aoz0ra.github.io/sonic-stuff/index.html">Sonic stuff</a> </div>`+
                       `<div class="item"> <a href="/aoz0ra.github.io/settings/index.html">Settings</a> </div>`+
                       `<div class="item"> <a href="/aoz0ra.github.io/featuretest.html">Feature Test</a> </div>`+
					   `<div class="item"> <a href="/aoz0ra.github.io/locl/list.html">In other languages...</a> </div>`)

if (localStorage.prefersNoCSS != `true`) {
	document.head.innerHTML += `<link rel="stylesheet" href="/aoz0ra.github.io/hydrogen-framework/hydrogen.css">`+
							`<link rel="stylesheet" href="/aoz0ra.github.io/hydrogen-extensions.css">`+
							`<meta name="viewport" content="width=device-width, initial-scale=1.0">`;
}





// Will find a string and replace it with another. Can be case-sensitive.

function findReplace(find, replace, caseSensitiveBool, string, failsafeBool) {

  if (caseSensitiveBool === false) {
    var esc = find.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    var reg = new RegExp(esc, 'ig');
    
    var result = string.replace(reg, replace);
  } else {
    if (string.search(find) === -1 && failsafeBool === true) {
      return 'No matches found.'
    }

    var result = string.split(find).join(replace);
  }

//  console.log(`findReplace(${find}, ${replace}, ${caseSensitiveBool}, ` +
//              `${string}, ${failsafeBool}) was called. It returned ${result}.`)

  return result;
}

// Find/replace right on a string
String.prototype.findReplace = function(find, replace, caseSensitiveBool, failsafeBool) {
  return findReplace(find, replace, caseSensitiveBool, this, failsafeBool);
}




var templates = {
	'[[TEST_TEMPLATE]]':          `<button>Congratulations, this test template works.</button>`,
	'[[WINDOWS_XP_BUTTON]]':      `<button onclick="loadStyle('/aoz0ra.github.io/hydrogen-framework/styles/aoz0ras-experience.css'); loadColorScheme('/aoz0ra.github.io/hydrogen-framework/colourschemes/aoz0ras-luna.css'); var winXPStartup = new Audio('https://www.myinstants.com/media/sounds/windows-xp-startup_1ph012N.mp3'); winXPStartup.play();"><img src="https://png2.cleanpng.com/sh/f75b0e8e310c1ab40c8a56aa1fb18cb1/L0KzQYm3WMAzN6hwgpH0aYP2gLBuTgdqdpV0jAU2eICwfbrqkv90d5d5RdV4coDygrL7if9vNZ5ueAR4c3BphH7Aif5ld6h4RdlydD3pfLL6iL1ud5YyTdQBM3LpdbO4hcgyPmczTKQ5MUO0RIm4VcM0Omc4UKc6MUK4PsH1h5==/kisspng-windows-xp-microsoft-corporation-microsoft-windows-git-flash-moe-5b63bfeb1e8166.420131481533263851125.png" style="width: 128px;"></button>`,

	'[[SONIC_DOESNT_CARE]]':      `<div class="card" style="text-align: center"><blockquote><p style="color: var(--blue);">Woah! That's interesting, but I sure don't care!</p><footer><p>— Sonic, Sonic Adventure</p></footer></blockquote><p>While this page may have some interesting content, it's not part of the main stuff here.</p></div>`,
	'[[THIS_IS_HAPPENIN]]':       `<div class="card" style="text-align: center"><blockquote><p style="color: var(--blue);">Aw yeah!  This is happenin'!</p><footer><p>— Sonic, Sonic Adventure</p></footer></blockquote><p>[will fill out the text later]</p></div>`,
	
	'[[SCARY]]':                  `<div class="card" style="text-align: center"><blockquote><p style="color: var(--grey);">.......Do I even need to tell you?!</p><footer><p>— Manfred von Karma, Phoenix Wright: Ace Attorney</p></footer></blockquote><p>This has some of those horror themes in it.  If you don't like the darker themes, please consider leaving.</p></div>`,
	'[[SCARY_VERY]]':             `<div class="card" style="text-align: center"><blockquote><p style="color: var(--pink);"><sup>Meep!!!!!</sup></p><footer><p>— Fluttershy</p></footer></blockquote><p>This AU is essentially nothing but horror.  Only the bravest should continue...  scroll down if you dare.</p></div><div style="height=200vh"></div>`,
	'[[ERROR_WEAKNESS]]':         `<div class="card" style="text-align: center"><blockquote><p style="color: var(--blue);">Awww, it's so cute!!  Can I keep it??</p><footer><p>— Sonic, Sonic the Hedgehog (Paramount)</p></footer></blockquote><p>Error Sonic is weak to this.</p></div>`,
	
	'[[NO_ONLINE_PRESENCE]]':     `<div class="card" style="text-align: center"><blockquote><p style="color: var(--skyblue);">...Where is everyone?</p><footer><p>— Silver</p></footer></blockquote><p>what's shown here has no online presence other than this very page.  Consider spreading the word!</p></div>`,
	'[[CONJECTURAL_NAME]]':       `<div class="card" style="text-align: center"><blockquote><p style="color: var(--red);">I need to find the Chaos Emeralds to reveal the secrets about my past...</p><footer><p>— Shadow</p></footer></blockquote><p>The real name of this is unknown, and as such this temporary name is being used instead.</p></div>`,
	'[[STUB]]':                   `<div class="card" style="text-align: center"><blockquote><p style="color: var(--orange);">There's not a whole lot of information on this right now...</p><footer><p>— Tails</p></footer></blockquote><p>This page is a stub.  Please help by expanding it!</p></div>`,
	
	'[[CANCELLED]]':              `<div class="card" style="text-align: center"><blockquote><p style="color: var(--gray);">*silence*</p><footer><p>— many characters in Dark Mobius</p></footer></blockquote><p>This is cancelled and won't receive any more updates.  If anyone wants to revive it, go ahead!</p></div>`,
	'[[ABANDONED]]':              `<div class="card" style="text-align: center"><blockquote><p style="color: var(--rainbow);">Honey the Cat?  Haven't seen her in a while.</p><footer><p>— anyone</p></footer></blockquote><p>This has been abandoned and, unless revived, likely won't be seeing any updates in the future.</p></div>`,
	'[[ON_HIATUS]]':              `<div class="card" style="text-align: center"><blockquote><p style="color: var(--blue);">Sorry, I'm takin' a chill pill right now.</p><footer><p>— Sonic</p></footer></blockquote><p>This is currently on hiatus and will receive few, if any, updates right now.</p><p>Sorry about that.</p></div>`,
	'[[ABANDONED_UNKNOWN]]':      `<div class="card" style="text-align: center"><blockquote><p style="color: var(--pink);">...Anyone home?</p><footer><p>— Journey</p></footer></blockquote><p>This seems to have been abandoned, but we don't know for sure if it's died off, cancelled, or just on hiatus.</p></div>`,

	'[[ANOTHER_UNIVERSE]]':       `<div class="card" style="text-align: cetner"><blockquote><p style="color: var(--blue);">Wait, there's another universe in addition to <i>us</i>?!</p><footer>— Sonica</footer></blockquote><p>There's another version of this that's not to be confused with the one shown here.</p></div>`,

	'[[DUBIOUS_CANON]]':          `<div class="card" style="text-align: center"><blockquote><p style="color: var(--orange);">Looks like someone or something sucked all the life and colour out of it!</p><footer><p>— Tails, Sonic Generations</p></footer></blockquote><p>Some content here is dubiously canon — we don't know if it truly is or not — so take everything here lightly.</p></div>`,
	
	'[[APRIL_FOOLS]]':            `<div class="card" style="text-align: center"><blockquote><p style="color: var(--blue);">*laughs*</p><footer><p>— Sonic</p></footer></blockquote><p>This was an April Fools joke and is not meant to be taken seriously.</p></div>`,



//	MANAGEMENT TEMPLATES:

	'[[KEPT_FOR_HUMOR]]':         `<div class="card" style="text-align: center"><blockquote><p style="color: var(--blue);">*laughs*</p><footer><p>— Sonic</p></footer></blockquote><p>This is kept for humourous purposes.</p></div>`,
	
	'[[DELETE_THIS]]':            `<div class="card" style="text-align: center"><blockquote><p style="color: var(--gray);">The strong will always vanquish the weak!</p><footer><p>— Infinite, Sonic Forces</p></footer></blockquote><p>This page is being considered for deletion.  Consider checking what links to this page and migrating its content elsewhere.</p></div>`,
	'[[KEPT_FROM_DELETION]]':     `<div class="card" style="text-align: center"><blockquote><p style="color: var(--pink);">[i have yet to add a quote]</p><footer><p>— Aoz0ra</p></footer></blockquote><p>This page was considered for deletion but, as you're seeing, ended up being kept.</p></div>`,
	'[[SPEEDY_DELETE]]':          `<div class="card" style="text-align: center"><blockquote><p style="color: var(--red);">The sun will fall upon you all...  BOOM.  The end.</p><footer><p>— Eggman</p></footer></blockquote><p>This page is being considered for <i>speedy deletion</i>.  Migrate the content and links now!</p></div>`,
	
	'[[MAJOR_EDIT]]':             `<div class="card" style="text-align: center"><blockquote><p style="color: var(--orange);">Hold on, I'm still working on this.</p><footer><p>— Tails</p></footer></blockquote><p>This is currently undergoing a major edit.</p></div>`,
	'[[EDIT_PERMISSION_NEEDED]]': `<div class="card" style="text-align: center"><blockquote><p style="color: var(--blue);">S.F.P.D, pending background check!  Paws in the air!</p><footer><p>— Donut Lord, Sonic The Hedgehog (Paramount)</p></footer></blockquote><p>Do not edit this without Aoz0ra's permission.</p></div>`,
	'[[EDIT_PERMISSION_DENIED]]': `<div class="card" style="text-align: center"><blockquote><p style="color: var(--purple);">Move aside!</p><footer><p>— Blaze, Team Sonic Racing</p></footer></blockquote><p>Only Aoz0ra can edit this page.</p></div>`,
	'[[I_NEED_HELP]]':            `<div class="card" style="text-align: center"><blockquote><p style="color: var(--orange);">Sonic, HELP ME!!!</p><footer><p>— Tails, Sonic Forces</p></footer></blockquote><p>I'll need help with completing this page.</p></div>`,

	'[[WORK_IN_PROGRESS]]':       `<div class="card" style="text-align: center"><blockquote><p style="color: var(--pink);">It's not done yet.  Expect more soon!</p><footer><p>— Journey</p></footer></blockquote><p>I'm still working on this.</p></div>`,

	'[[MERGE_CONSIDERED]]':       `<div class="card" style="text-align: center"><blockquote><p style="color: var(--foreground);">thank. thank. thank. thank. thank. thank. thank. thank. thank. thank. thank. thank. thank. thank. thank. thank. </p><footer><p>— Flowey's I.T. in HELP_tale</p></footer></blockquote><p>The content here is under consideration for a merge with `,
	'[[/MERGE_CONSIDERED]]':           `.</p></div>`,
	'[[MERGE_CONSIDERED/]]':       `<div class="card" style="text-align: center"><blockquote><p style="color: var(--foreground);">thank. thank. thank. thank. thank. thank. thank. thank. thank. thank. thank. thank. thank. thank. thank. thank. </p><footer><p>— Flowey's I.T. in HELP_tale</p></footer></blockquote><p>The content here is under consideration for being merged into another page.</p></div>`


}

var finishedPageHTML = JSON.stringify($(`div.page`).html()).findReplace(`\\n`, ``).findReplace(`\\t`, ``).findReplace(`\\"`, `"`)



for (const templateToReplace of Object.keys(templates)) {
	finishedPageHTML = finishedPageHTML.findReplace(templateToReplace, templates[templateToReplace])
}

finishedPageHTML = finishedPageHTML.substring(1, finishedPageHTML.length - 1)

$(`div.page`).html(finishedPageHTML)

// document.body.innerHTML += `<script src="/aoz0ra.github.io/settings.js"></script>`
