// Will find a string and replace it with another. Can be case-sensitive.
function findReplace(find, replace, caseSensitiveBool, string, failsafeBool) {

  if (caseSensitiveBool === false) {
    var esc = find.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    var reg = new RegExp(esc, 'ig');
    
    // case-insensitive is fixed
    var result = string.replace(reg, replace);
  } else {
    if (string.search(find) === -1 && failsafeBool === true) {
      return 'No matches found.'
    }

    var result = string.split(find).join(replace);
  }
  console.log(`findReplace(${find}, ${replace}, ${caseSensitiveBool}, ` +
              `${string}, ${failsafeBool}) was called. It returned ${result}.`)
  return result;
}

// Find/replace right on a string
String.prototype.findReplace = function(find, replace, caseSensitiveBool, failsafeBool) {
  return findReplace(find, replace, caseSensitiveBool, this, failsafeBool);
}




var templates = {
	'[[TEST_TEMPLATE]]':      `<button>Congratulations, this test template works.</button>`,

	'[[SONIC_DOESNT_CARE]]':  `<div class="card" style="text-align: center"><p style="color: var(--blue);">Woah! That's interesting, but I sure don't care!</p><p>While this page may have some interesting content, it's not part of the main stuff here.</p></div>`,
	'[[THIS_IS_HAPPENIN]]':   `<div class="card" style="text-align: center"><p style="color: var(--blue);">Aw yeah!  This is happenin'!</p><p>[will fill out the text later]</p></div>`,
	'[[AU_SCARY]]':           `<div class="card" style="text-align: center"><p style="color: var(--orange);">[cream is scared]</p><p>[will fill out the text later]</p></div>`,
	'[[AU_SCARY_VERY]]':      `<div class="card" style="text-align: center"><p style="color: var(--orange);">[cream is scared for her life]</p><p>[will fill out the text later]</p></div>`,
	'[[NO_ONLINE_PRESENCE]]': `<div class="card" style="text-align: center"><p style="color: var(--skyblue);">...Where is everyone?</p><p>This AU has no online presence other than this very page.</p></div>`,
	'[[CONJECTURAL_NAME]]':   `<div class="card" style="text-align: center"><p style="color: var(--red);">I need to find the Chaos Emerald to reveal the secrets about my past...</p><p>The real name of this is unknown, and as such this temporary name is being used instead.</p></div>`,
	'[[DELETE_THIS]]':        `<div class="card" style="text-align: center"><p style="color: var(--gray);">The strong will always vanquish the weak</p><p>This page should be deleted.  Consider migrating its content elsewhere.</p></div>`,
}

var finishedPageHTML = JSON.stringify($(`div.page`).html()).findReplace(`\\n`, ``).findReplace(`\\t`, ``).findReplace(`\\"`, `"`)



for (const templateToReplace of Object.keys(templates)) {
	finishedPageHTML = finishedPageHTML.findReplace(templateToReplace, templates[templateToReplace])
}

finishedPageHTML = finishedPageHTML.substring(1, finishedPageHTML.length - 1)

$(`div.page`).html(finishedPageHTML)
