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
	'[[TEST_TEMPLATE]]': `<button>Congratulations, this test template works.</button>`
}

var finishedPageHTML = JSON.stringify($(`div.page`).html()).findReplace(`\\n`, ``).findReplace(`\\t`, ``)

for (const templateToReplace of Object.keys(templates)) {
	finishedPageHTML = finishedPageHTML.findReplace(templateToReplace, templates[templateToReplace])
}

$(`div.page`).html(finishedPageHTML)
