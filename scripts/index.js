'use strict';

/* global shoppingList, Item, $ */

$(document).ready(function() {
  shoppingList.bindEventListeners();
  shoppingList.render();
});