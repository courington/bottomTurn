var test = require('tape');

test('sample test', function (t) {
    // t.plan(2);

    t.deepEqual(typeof Date.now, 'function', 'it should be a function');
    t.equal('  2  '.trim(), '2', 'it should have same month');
    t.ok(1, 'it should be true');
    
    t.end();
});
