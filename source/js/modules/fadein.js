'use strict';
const $ = require('jquery');

class FadeIn {
  constructor($elem) {
    this.$elem = $elem;
  }

  fadein() {
    return this.$elem.fadeIn();
  }
}

module.exports = FadeIn;
