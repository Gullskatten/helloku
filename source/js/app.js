'use strict';
const $ = require('jquery');
const FadeIn = require('./modules/fadein');

$(document).ready(function(){
  const fadeItem = new FadeIn($('#login_text'));
  fadeItem.fadein();
})
