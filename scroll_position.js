// ==UserScript==
// @name         Scroll position
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Scroll to top and then return to the same position
// @require      http://code.jquery.com/jquery-latest.min.js
// @author       ivan25
// @match        http://www.youtube.com/*
// @match        https://www.youtube.com/*
// @grant        none
// @noframes
// @run-at document-body
// ==/UserScript==
/* jshint -W097 */
'use strict';

var set = false;
var scroll_height = 0;

document.body.insertAdjacentHTML('beforeend', "<div id='scroll_to_position'>");
$('#scroll_to_position').append('<span id="scroll_to_position_scroll">SCROLL TO TOP</span>');
$('#scroll_to_position').append('<span id="scroll_to_position_reset">reset</span>');

$('#scroll_to_position_scroll').click(function() {
	if (set == false) {
		set = true;
		scroll_height = window.pageYOffset;
		window.scrollTo(0, 0);
		$('#scroll_to_position_scroll').html('RETURN');
	} else {
		set = false;
		window.scrollTo(0, scroll_height);
		$('#scroll_to_position_scroll').html('SCROLL TO TOP');
	}
});

$('#scroll_to_position_reset').click(function() {
	set = false;
	$('#scroll_to_position_scroll').html('SCROLL TO TOP');
});

$('#scroll_to_position').css({
	'position': 'fixed',
	'bottom': '0',
	'left': '0',
	'background-color': 'black',
	'color': 'white',
	'font-weight': 'bold',
	'padding': '10px',
	'z-index': '100'
});

$('#scroll_to_position_scroll').css({
	'margin-right': '10px'
});
