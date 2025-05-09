// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

//Phone numbers 

test('(909)101-2020 valid phone number', () => {
  expect(isPhoneNumber('(909)101-2020')).toBe(true);
});

test('909-101-2020 valid phone number', () => {
  expect(isPhoneNumber('909-101-2020')).toBe(true);
});

test('9091012020 invalid phone number', () => {
  expect(isPhoneNumber('9091012020')).toBe(false);
});

test('909 101 2020 invalid phone number', () => {
  expect(isPhoneNumber('909 101 2020')).toBe(false);
});

//Emails

test('person123@home.com valid email', () => {
  expect(isEmail('person123@home.com')).toBe(true);
});

test('person456@gmail.com valid email', () => {
  expect(isEmail('person456@gmail.com')).toBe(true);
});

test('person123@home@com invalid email', () => {
  expect(isEmail('person123@home@com')).toBe(false);
});

test('person123.home.com invalid email', () => {
  expect(isEmail('person123.home.com')).toBe(false);
});

//strong password

test('D_as_765 valid password', () => {
  expect(isStrongPassword('D_as_765')).toBe(true);
});

test('Abcd1234 valid password', () => {
  expect(isStrongPassword('Abcd1234')).toBe(true);
});

test('g invalid password', () => {
  expect(isStrongPassword('g')).toBe(false);
});

test('12345 invalid password', () => {
  expect(isStrongPassword('12345')).toBe(false);
});

// date

test('07/21/2023 valid date', () => {
  expect(isDate('07/21/2023')).toBe(true);
});

test('31/30/1999 valid date', () => {
  expect(isDate('31/30/1999')).toBe(true);
});

test('7/21/23 invalid date', () => {
  expect(isDate('7/21/23')).toBe(false);
});

test('15-32-2023 invalid date', () => {
  expect(isDate('15-32-2023')).toBe(false);
});

//hex color 

test('#FFFFFF valid hex', () => {
  expect(isHexColor('#000000')).toBe(true);
});

test('#FFFFFF valid hex', () => {
  expect(isHexColor('#FFFFFF')).toBe(true);
});

test('#GGGGGG invalid hex', () => {
  expect(isHexColor('#GGGGGG')).toBe(false);
});

test('#111 invalid hex', () => {
  expect(isHexColor('#11')).toBe(false);
});