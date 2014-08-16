var assert = require('assert');
var dom = require('dom');
var range = require('selection-range');
var within = require('cursor-within');

describe('cursor-within', function () {
  var $el, el;

  beforeEach(function () {
    $el = dom('<div><p><span>hi there what up eh</span></p></div>').appendTo(document.body);
    el = $el[0];
  });

  afterEach(function () {
    $el.remove();
  });

  it('should match the first el which matches', function () {
    range(el, {start: 3});
    assert(within('p') == $el.find('p')[0]);
    assert(within('span') == $el.find('span')[0]);
  });

  it('should match first el when no match specified', function () {
    range(el, {start: 3});
    assert(within() == $el.find('span')[0]);
  })

});
