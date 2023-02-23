// Julius Caesar protected his confidential information by encrypting it using a cipher. Caesar's cipher shifts each letter by a number of letters. If the shift takes you past the end of the alphabet, just rotate back to the front of the alphabet. In the case of a rotation by 3, w, x, y and z would map to z, a, b and c.
// Original alphabet:      abcdefghijklmnopqrstuvwxyz
// Alphabet rotated +3:  defghijklmnopqrstuvwxyzabc
// Example
// There’s-a-starman
// k=3
// The alphabet is rotated by  3, matching the mapping above. The encrypted string is
// Wkhuh’v-d-vwdupdq
// Input:
// s=There’s-a-starman
// k=3
// Output:
// Wkhuh’v-d-vwdupdq

function caesarCipherEncrypt(s, k) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const shiftedAlphabet = alphabet.slice(k) + alphabet.slice(0, k); // create shifted alphabet
  
    // use replace method with regex to map each character in s to its shifted counterpart
    const encrypted = s.replace(/[a-z]/gi, function (char) {
      const index = alphabet.indexOf(char.toLowerCase());
      const shiftedIndex = (index + k) % 26;
      const shiftedChar = shiftedAlphabet[shiftedIndex];
      return char.toUpperCase() === char ? shiftedChar.toUpperCase() : shiftedChar;
    });
  
    return encrypted;
  }
  