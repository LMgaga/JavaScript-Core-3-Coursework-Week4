const passwordVerifier = (password) => {
    if (password == null || password.length < 8) {
        return 'Password rejected'
    }

    let characters = password.split('')
    const result = characters.filter(character => character === character.toUpperCase())
    if (result.length == 0) {
         return 'Password rejected'
    }

     const numbers = characters.filter(character => !isNaN(character))
     if (numbers.length == 0) {
         return 'Password rejected'
    }
    return 'Password correct'
}

module.exports = passwordVerifier;