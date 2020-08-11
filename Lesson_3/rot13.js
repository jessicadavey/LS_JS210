function rot13(string) {
  const UPPER_A_CHAR_CODE = 'A'.charCodeAt();
  const UPPER_M_CHAR_CODE = 'M'.charCodeAt();
  const UPPER_N_CHAR_CODE = 'N'.charCodeAt();
  const UPPER_Z_CHAR_CODE = 'Z'.charCodeAt();

  const LOWER_A_CHAR_CODE = 'a'.charCodeAt();
  const LOWER_M_CHAR_CODE = 'm'.charCodeAt();
  const LOWER_N_CHAR_CODE = 'n'.charCodeAt();
  const LOWER_Z_CHAR_CODE = 'z'.charCodeAt();

  function isAtoM(charCode) {
    return (charCode >= UPPER_A_CHAR_CODE && charCode <= UPPER_M_CHAR_CODE) ||
    (charCode >= LOWER_A_CHAR_CODE && charCode <= LOWER_M_CHAR_CODE);
  }

  function isNtoZ(charCode) {
    return (charCode >= UPPER_N_CHAR_CODE && charCode <= UPPER_Z_CHAR_CODE) ||
    (charCode >= LOWER_N_CHAR_CODE && charCode <= LOWER_Z_CHAR_CODE);
  }

  const CIPHER_OFFSET = 13;
  let result = '';

  for (let index = 0; index < string.length; index += 1) {
    let charCode = string.charCodeAt(index);

    if (isAtoM(charCode)) {
      charCode += CIPHER_OFFSET;
    } else if (isNtoZ(charCode)) {
      charCode -= CIPHER_OFFSET;
    }

    result += String.fromCharCode(charCode);
  }

  return result;
}

// Tests:

console.log(rot13('Teachers open the door, but you must enter by yourself.'));
// logs 'Grnpuref bcra gur qbbe, ohg lbh zhfg ragre ol lbhefrys.'

console.log(rot13('ABCDEFGHIJKLMNOPQRSTUVWXYZ'));
// logs 'NOPQRSTUVWXYZABCDEFGHIJKLM'

console.log(rot13('abcdefghijklmnopqrstuvwxyz'));
// logs 'nopqrstuvwxyzabcdefghijklm'

console.log(rot13(rot13('Teachers open the door, but you must enter by yourself.')));
// logs 'Teachers open the door, but you must enter by yourself.'