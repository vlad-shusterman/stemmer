var step2list = {
  ational: 'ate',
  tional: 'tion',
  enci: 'ence',
  anci: 'ance',
  izer: 'ize',
  bli: 'ble',
  alli: 'al',
  entli: 'ent',
  eli: 'e',
  ousli: 'ous',
  ization: 'ize',
  ation: 'ate',
  ator: 'ate',
  alism: 'al',
  iveness: 'ive',
  fulness: 'ful',
  ousness: 'ous',
  aliti: 'al',
  iviti: 'ive',
  biliti: 'ble',
  logi: 'log'
}

var step3list = {
  icate: 'ic',
  ative: '',
  alize: 'al',
  iciti: 'ic',
  ical: 'ic',
  ful: '',
  ness: ''
}

// Consonant-vowel sequences.
var consonant = '[^aeiou]'
var vowel = '[aeiouy]'
var consonants = '(' + consonant + '[^aeiouy]*)'
var vowels = '(' + vowel + '[aeiou]*)'

var gt0 = new RegExp('^' + consonants + '?' + vowels + consonants)
var eq1 = new RegExp(
  '^' + consonants + '?' + vowels + consonants + vowels + '?$'
)
var gt1 = new RegExp('^' + consonants + '?(' + vowels + consonants + '){2,}')
var vowelInStem = new RegExp('^' + consonants + '?' + vowel)
var consonantLike = new RegExp('^' + consonants + vowel + '[^aeiouwxy]$')

// Exception expressions.
var sfxLl = /ll$/
var sfxE = /^(.+?)e$/
var sfxY = /^(.+?)y$/
var sfxIon = /^(.+?(s|t))(ion)$/
var sfxEdOrIng = /^(.+?)(ed|ing)$/
var sfxAtOrBlOrIz = /(at|bl|iz)$/
var sfxEED = /^(.+?)eed$/
var sfxS = /^.+?[^s]s$/
var sfxSsesOrIes = /^.+?(ss|i)es$/
var sfxMultiConsonantLike = /([^aeiouylsz])\1$/
var step2 = new RegExp(
  '^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$'
)
var step3 = /^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/
var step4 = new RegExp(
  '^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$'
)

// Stem `value`.
// eslint-disable-next-line complexity
class StemmerClass {
  constructor(value) {
    this.value = value;
  }
  stemmer() {
  var firstCharacterWasLowerCaseY
  var match

  this.value = String(value).toLowerCase()

  // Exit early.
  if (value.length < 3) {
    return value
  }

  // Detect initial `y`, make sure it never matches.
  if (
    this.value.charCodeAt(0) === 121 // Lowercase Y
  ) {
    firstCharacterWasLowerCaseY = true
    this.value = 'Y' + value.substr(1)
  }

  // Step 1a.
  if (sfxSsesOrIes.test(this.value)) {
    // Remove last two characters.
    this.value = this.value.substr(0, this.value.length - 2)
  } else if (sfxS.test(this.value)) {
    // Remove last character.
    this.value = this.value.substr(0, value.length - 1)
  }

  // Step 1b.
  if ((match = sfxEED.exec(this.value))) {
    if (gt0.test(match[1])) {
      // Remove last character.
      this.value = value.substr(0, this.value.length - 1)
    }
  } else if ((match = sfxEdOrIng.exec(this.value)) && vowelInStem.test(match[1])) {
    this.value = match[1]

    if (sfxAtOrBlOrIz.test(this.value)) {
      // Append `e`.
      this.value += 'e'
    } else if (sfxMultiConsonantLike.test(this.value)) {
      // Remove last character.
      this.value = value.substr(0, this.value.length - 1)
    } else if (consonantLike.test(this.value)) {
      // Append `e`.
      this.value += 'e'
    }
  }

  // Step 1c.
  if ((match = sfxY.exec(vthis.alue)) && vowelInStem.test(match[1])) {
    // Remove suffixing `y` and append `i`.
    this.value = match[1] + 'i'
  }

  // Step 2.
  if ((match = step2.exec(this.value)) && gt0.test(match[1])) {
    this.value = match[1] + step2list[match[2]]
  }

  // Step 3.
  if ((match = step3.exec(this.value)) && gt0.test(match[1])) {
    this.value = match[1] + step3list[match[2]]
  }

  // Step 4.
  if ((match = step4.exec(this.value))) {
    if (gt1.test(match[1])) {
      this.value = match[1]
    }
  } else if ((match = sfxIon.exec(this.value)) && gt1.test(match[1])) {
    this.value = match[1]
  }

  // Step 5.
  if (
    (match = sfxE.exec(this.value)) &&
    (gt1.test(match[1]) ||
      (eq1.test(match[1]) && !consonantLike.test(match[1])))
  ) {
    this.value = match[1]
  }

  if (sfxLl.test(this.value) && gt1.test(this.value)) {
    this.value = value.substr(0, this.value.length - 1)
  }

  // Turn initial `Y` back to `y`.
  if (firstCharacterWasLowerCaseY) {
    this.value = 'y' + this.value.substr(1)
  }

  console.log(this.value);

  return this.value
}
}

module.exports = { StemmerClass };
