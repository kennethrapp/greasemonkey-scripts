// ==UserScript==
// @name         open links in tabs
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  open links in tabs and add heat gradient
// @author       Shameem Gafoor
// @match        https://news.ycombinator.com/*
// @grant        none
// @require      https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js
// ==/UserScript==
/* jshint -W097 */
'use strict';

$('tr.athing td.title a').attr("target","_blank");
$('.title').attr("style", "font-size: 12pt");

var pts = [];
$('td.subtext span.score').each(function() { 
	var pt = $(this).text().split(' ')[0]
  pts.push(parseInt(pt))
});

var max = Math.max(...pts)
$('td.subtext').each(function() {
	var pt = $(this).children().first().text().split(' ')[0]
  var heat = pt/max
  console.log( "Heat:" + heat + ";: " + $(this).children().first().text() );
  $(this).css('background-image', 'linear-gradient(to right, rgba(255,0,0,0), rgba(255,0,0,' + heat + '))');
});
