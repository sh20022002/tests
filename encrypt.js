function encryptHashTable(){ 
    const alphabet = {};
    const alphaString = ' ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()';
    const numbers = '0123456789'
    function generateCharString(let){
        let res = '';
        const lengthOfHash = 8;
        for( let i = 0; i < lengthOfHash; i++){
            res += alphaString.charAt(Math.floor(Math.random()*lengthOfHash));
        };
        return res;
    };
    for (var letter of alphaString){
        alphabet[letter] = generateCharString(letter);

    };
    return alphabet
};

const hashTable = encryptHashTable();

function encrypt(string){
    var res = '';
    for(var let in string){
        res += hashTable[let];
    };
    return res;

};
var s = encrypt('helo world');
console.log(s);


    // Reverse the hash table
const reverseHashTable = {};
for (const key in hashTable) {
  const value = hashTable[key];
  reverseHashTable[value] = key;
}

// Function to decrypt
//dosnt work
function decrypt(text) {
  return text.split('').map(char => reverseHashTable[char] || char).join('');
}

// Example usage
const encryptedText = s;
console.log(encryptedText);
const decryptedText = decrypt(encryptedText);
console.log(decryptedText);
   

