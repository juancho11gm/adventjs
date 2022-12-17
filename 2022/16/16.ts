import assert from 'assert';

// Remove spaces at the beginning and end of the prase
// .trim()

// Remove multiple spaces and leave only one
// .replace(/\s+/g, ' ')

// Leave a space after each comma and point
// .replace(/[.?,!]/g, match => match + ' ')

// Remove spaces before comma or point
// .replace(/\s+([,.?])/g, '$1')

// Questions must only end with a question mark
//  .replace(/\?+/g, '?')

// The first letter of each sentence must be capitalized
// .replace(/([.?!] \w)|(^\w)/g, match => {
//   return match.toUpperCase();
// })

// Put the word "Santa Claus" in uppercase if it appears in the letter
// .replace(/santa claus/gi, 'Santa Claus')

// Put a point at the end of the sentence if it does not have punctuation
// .replace(/^.*\w$/g, match => match + '.')

function fixLetter(letter: string) {
  return letter
    .trim()
    .replace(/[.?,!]/g, match => match + ' ')
    .replace(/\s+/g, ' ')
    .replace(/\s+([,.?])/g, '$1')
    .replace(/\?+/g, '?')
    .replace(/santa claus/gi, 'Santa Claus')
    .replace(/([.?!] \w)|(^\w)/g, match => {
      return match.toUpperCase();
    })
    .replace(/^.*\w$/g, match => match + '.')
    .trim();
}

try {
  assert.equal(
    fixLetter(` hello,  how are you??     do you know if santa claus exists?  i really hope he does!  bye  `),
    'Hello, how are you? Do you know if Santa Claus exists? I really hope he does! Bye.'
  );

  assert.equal(
    fixLetter("  Hi Santa claus. I'm a girl from Barcelona , Spain . please, send me a bike.  Is it possible?"),
    `Hi Santa Claus. I'm a girl from Barcelona, Spain. Please, send me a bike. Is it possible?`
  )

  assert.equal(fixLetter('  hi,santa claus.are you there ?   '),
    'Hi, Santa Claus. Are you there?'
  )
} catch (error) {
  console.log(error)
}

