// ==UserScript==
// @name     GoogleSearch_LinkExposer
// @version  1
// @grant    none
// @match    https://www.google.com/search*
// ==/UserScript==

(function() {
	'use strict';

	window.addEventListener('load', function() {
		let list_results = document.getElementsByClassName('g');

		Array.from(list_results).forEach(function(elem) {
			let new_node = document.createElement('div'),
				url_googlesearch = elem.getElementsByClassName('r')[0].getElementsByTagName('a')[0].href;

			new_node.innerHTML = url_googlesearch;
			elem.parentElement.insertBefore(new_node, elem);
		});
	}, false);

})();
