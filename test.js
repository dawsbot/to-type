/* eslint no-new-wrappers:0 */
import test from 'ava';
import toType from './';

test('valid args', t => {
  t.pass();
  t.throws(() => {
    toType();
  }, Error);
  t.throws(() => {
    toType(false, false);
  }, Error);
});

test('title', t => {
  t.is(toType('myArg1'), 'string');
  t.is(toType({}), 'object');
  t.is(toType({a: 4}), 'object');
  t.is(toType([1, 2, 3]), 'array');
  t.is(toType(new ReferenceError()), 'error');
  t.is(toType(new Date()), 'date');
  t.is(toType(/a-z/), 'regexp');
  t.is(toType(Math), 'math');
  t.is(toType(JSON), 'json');
  t.is(toType(new Number(4)), 'number');
  t.is(toType(new String('abc')), 'string');
  t.is(toType(new Boolean(true)), 'boolean');
});
