// Requires
require("babel/polyfill");
const Pixelation = require('./scripts/pixelation.js');
var pixelation = new Pixelation();

jQuery(document).ready(function($) {
  pixelation.run();
});
