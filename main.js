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

	'[[SONIC_DOESNT_CARE]]':      `<div class="card" style="text-align: center"><blockquote><p style="color: var(--blue);">Woah! That's interesting, but I sure don't care!</p><footer><p>— Sonic</p></footer></blockquote><p>While this page may have some interesting content, it's not part of the main stuff here.</p></div>`,
	'[[THIS_IS_HAPPENIN]]':       `<div class="card" style="text-align: center"><blockquote><p style="color: var(--blue);">Aw yeah!  This is happenin'!</p><footer><p>— Sonic</p></footer></blockquote><p>[will fill out the text later]</p></div>`,
	
	'[[AU_SCARY]]':               `<div class="card" style="text-align: center"><blockquote><p style="color: var(--orange);">[cream is scared]</p><footer><p>— Cream</p></footer></blockquote><p>This is one of those horror-themed AUs.  If you don't like them, consider leaving.</p></div>`,
	'[[AU_SCARY_VERY]]':          `<div class="card" style="text-align: center"><blockquote><p style="color: var(--orange);">[cream is scared for her life]</p><footer><p>— Cream</p></footer></blockquote><p>This AU is essentially nothing but horror.  Only the bravest should continue.</p></div>`,
	'[[AU_ERROR_WEAKNESS]]':      `<div class="card" style="text-align: center"><blockquote><p style="color: var(--pink);">[i have yet to come up with a quote]</p><footer><p>— Aoz0ra/p></footer></blockquote><p>Error Sonic is weak to this AU </p></div>`,
	
	'[[NO_ONLINE_PRESENCE]]':     `<div class="card" style="text-align: center"><blockquote><p style="color: var(--skyblue);">...Where is everyone?</p><footer><p>— Silver</p></footer></blockquote><p>This has no online presence other than this very page.</p></div>`,
	'[[CONJECTURAL_NAME]]':       `<div class="card" style="text-align: center"><blockquote><p style="color: var(--red);">I need to find the Chaos Emeralds to reveal the secrets about my past...</p><footer><p>— Shadow</p></footer></blockquote><p>The real name of this is unknown, and as such this temporary name is being used instead.</p></div>`,
	'[[STUB]]':                   `<div class="card" style="text-align: center"><blockquote><p style="color: var(--orange);">There's not a whole lot of information on this right now...</p><footer><p>— Tails</p></footer></blockquote><p>This page is a stub.  Please help by expanding it!</p></div>`,
	
	'[[CANCELLED]]':              `<div class="card" style="text-align: center"><blockquote><p style="color: var(--gray);">*silence*</p><footer><p>— many characters in Dark Mobius</p></footer></blockquote><p>This is cancelled and won't receive any more updates.</p></div>`,
	'[[ABANDONED]]':              `<div class="card" style="text-align: center"><blockquote><p style="color: var(--rainbow);">Honey the Cat?  Haven't seen her in a while.</p><footer><p>— anyone</p></footer></blockquote><p>This has been abandoned and, unless revived, likely won't be seeing any updates in the future.</p></div>`,
	'[[ON_HIATUS]]':              `<div class="card" style="text-align: center"><blockquote><p style="color: var(--blue);"></p><footer><p>— Sonic</p></footer></blockquote><p>This is currently on hiatus and will receive few, if any, updates right now.</p></div>`,
	
	'[[APRIL_FOOLS]]':            `<div class="card" style="text-align: center"><blockquote><p style="color: var(--blue);">*laughs*</p><footer><p>— Sonic</p></footer></blockquote><p>This was an April Fools joke and is not meant to be taken seriously.</p></div>`,
	'[[KEPT_FOR_HUMOR]]':         `<div class="card" style="text-align: center"><blockquote><p style="color: var(--blue);">*laughs*</p><footer><p>— Sonic</p></footer></blockquote><p>This is kept for humourous purposes.</p></div>`,
	
	'[[DELETE_THIS]]':            `<div class="card" style="text-align: center"><blockquote><p style="color: var(--gray);">The strong will always vanquish the weak!</p><footer><p>— Infinite, Sonic Forces</p></footer></blockquote><p>This page is being considered for deletion.  Consider checking what links to this page and migrating its content elsewhere.</p></div>`,
	'[[KEPT_FROM_DELETION]]':     `<div class="card" style="text-align: center"><blockquote><p style="color: var(--pink);">[i have yet to add a quote]</p><footer><p>— Aoz0ra</p></footer></blockquote><p>This page was considered for deletion but, as you're seeing, ended up being kept.</p></div>`,
	'[[SPEEDY_DELETE]]':          `<div class="card" style="text-align: center"><blockquote><p style="color: var(--red);">The sun will fall upon you all...  BOOM.  The end.</p><footer><p>— Eggman</p></footer></blockquote><p>This page is being considered for <i>speedy deletion</i>.  Migrate the content and links now!</p></div>`,
	
	'[[MAJOR_EDIT]]':             `<div class="card" style="text-align: center"><blockquote><p style="color: var(--orange);">Hold on, I'm still working on this.</p><footer><p>— Tails</p></footer></blockquote><p>This is currently undergoing a major edit.</p></div>`,
	'[[EDIT_PERMISSION_NEEDED]]': `<div class="card" style="text-align: center"><blockquote><p style="color: var(--blue);">S.F.P.D, pending background check!  Paws in the air!</p><footer><p>— Donut Lord, Sonic The Hedgehog (Paramount)</p></footer></blockquote><p>Do not edit this without Aoz0ra's permission.</p></div>`,
	'[[EDIT_PERMISSION_DENIED]]': `<div class="card" style="text-align: center"><blockquote><p style="color: var(--purple);">Move aside!</p><footer><p>— Blaze, Team Sonic Racing</p></footer></blockquote><p>Only Aoz0ra can edit this page.</p></div>`,
	'[[I_NEED_HELP]]':            `<div class="card" style="text-align: center"><blockquote><p style="color: var(--orange);">Sonic, HELP ME!!</p><footer><p>— Tails, Sonic Forces</p></footer></blockquote><p></p></div>`,

}

var finishedPageHTML = JSON.stringify($(`div.page`).html()).findReplace(`\\n`, ``).findReplace(`\\t`, ``).findReplace(`\\"`, `"`)



for (const templateToReplace of Object.keys(templates)) {
	finishedPageHTML = finishedPageHTML.findReplace(templateToReplace, templates[templateToReplace])
}

finishedPageHTML = finishedPageHTML.substring(1, finishedPageHTML.length - 1)

$(`div.page`).html(finishedPageHTML)
