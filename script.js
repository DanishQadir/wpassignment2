const NodeRSA = require('node-rsa');

const generateKeys = () => {
    const key = new NodeRSA({ b: 2048 });
    const publicKey = key.exportKey('public');
    const privateKey = key.exportKey('private');
    
    document.getElementById('publicKey').value = publicKey;
    document.getElementById('privateKey').value = privateKey;
};

const rsaEncrypt = (publicKey, plainText) => {
    const key = new NodeRSA(publicKey);
    const encryptedText = key.encrypt(plainText, 'base64');
    return encryptedText;
};

const rsaDecrypt = (privateKey, cipherText) => {
    const key = new NodeRSA(privateKey);
    const decryptedText = key.decrypt(cipherText, 'utf8');
    return decryptedText;
};

const encrypt = () => {
    const publicKey = document.getElementById('publicKeyEncrypt').value;
    const plainText = document.getElementById('plainTextEncrypt').value;
    
    if (!publicKey || !plainText) {
        alert('Please enter public key and plain text!');
        return;
    }
    
    const cipherText = rsaEncrypt(publicKey, plainText);
    document.getElementById('cipherText').value = cipherText;
};

const decrypt = () => {
    const privateKey = document.getElementById('privateKeyDecrypt').value;
    const cipherText = document.getElementById('cipherTextDecrypt').value;
    
    if (!privateKey || !cipherText) {
        alert('Please enter private key and cipher text!');
        return;
    }
    
    const decryptedText = rsaDecrypt(privateKey, cipherText);
    document.getElementById('decryptedText').value = decryptedText;
};
