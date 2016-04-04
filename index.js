/**
 * Module dependencies
 */

var closest = require('closest');

var TEXT_NODE_TYPE = 3;

/**
 * Get the first matching element in which the
 * cursor is contained.
 *
 * @param  {String} selector
 * @return {Element}
 */

module.exports = function(selector){
  var selection = window.getSelection();
  var node;

  // good browsers
  if (selection.anchorNode) {
    var anchor = selection.anchorNode;
    node = anchor.nodeType === TEXT_NODE_TYPE
      ? anchor.parentNode
      : anchor;

  // Less good, good browsers.
  } else {
    node = selection
      .getRangeAt(0)
      .commonAncestorContainer
      .parentNode;
  }

  return selector
    ? closest(node, selector, true)
    : node;
};
