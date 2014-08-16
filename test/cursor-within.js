var assert = require('assert');
var dom = require('dom');
var range = require('selection-range');
var within = require('cursor-within');

describe('cursor-within', function () {

  beforeEach(function () {
    this.$el = dom('<div><p><span>hi there what up eh</span></p></div>').appendTo(document.body);
    this.el = this.$el[0];
  });

  afterEach(function () {
    this.$el.remove();
  });

  it('should match the first el which matches', function () {
    range(this.el, {start: 3});
    assert(within('p') == this.$el.find('p')[0]);
    assert(within('span') == this.$el.find('span')[0]);
  });

  it('should match first el when no match specified', function () {
    range(this.el, {start: 3});
    assert(within() == this.$el.find('span')[0]);
  })

});
