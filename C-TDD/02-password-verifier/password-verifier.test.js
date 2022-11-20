let passwordVerifier = require("./password-verifier");

test("Must verify password characters", function () {
    const result = passwordVerifier('verifie')
    expect(result).toBe('Password rejected')
} )

test("Must verify password is not null", function () {
    const result = passwordVerifier(null)
    expect(result).toBe('Password rejected')
} )

test("Must verify password has uppercase", function () {
    const result = passwordVerifier('welcomeee')
    expect(result).toBe('Password rejected')
} )

test("Must verify password has uppercase", function () {
    const result = passwordVerifier('welcOmeee')
    expect(result).toBe('Password rejected')
} )

test("Must verify password has uppercase", function () {
    const result = passwordVerifier('welcOme33')
    expect(result).toBe('Password correct')
} )