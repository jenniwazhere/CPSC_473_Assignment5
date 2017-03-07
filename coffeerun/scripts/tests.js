QUnit.test("DataStore", function(assert) {
  var ds = new App.DataStore();
  //undefined
  ds.add('m@bond.com', 'tea');
  //undefined
  ds.add('james@bond.com', 'eshpressho');
  //undefined

  var expected = object {james@bond.com: "eshpressho", m@bond.com: "tea"};
  var actual = object {james@bond.com: "eshpressho", m@bond.com: "tea"};
  assert.deepEqual(actual, expected, "Items are deeply equal");
});

  //Object {james@bond.com: "eshpressho", m@bond.com: "tea"}

/*ds.remove('james@bond.com');
ds.getAll();
ds.get('m@bond.com');
ds.get('james@bond.com');*/
