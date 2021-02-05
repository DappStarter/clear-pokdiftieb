require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom glimpse flame tone strike dash pulse minor grid person flock series'; 
let testAccounts = [
"0x176a419f29c501198710283756cb43a032d67b7c931e417adcac2562d35f6367",
"0x6daaeea1867af608321f8c6ccc8742e4c796b489c759e4a010ea4f7e7ef27bce",
"0x6f445b27bd20840c165a39f45eb9c1d563319e00916391b1cd78c92b2a6c286f",
"0x9041109243bcaff696c9855b55b603097df4c0c8e2439d3627b6bc8c28b3e12c",
"0xe361802c1fecc9c5e41b527c6b7080614802297c3cf3a29bde8bb6913583b1bd",
"0x1b2fe7ee97a54d839fddeae7542d472ee9c19176c83ddd49a71a27cd4bd3edef",
"0x04186eb00c82bbdb9e6c28e847d09ae0a8f8269828bea3de958aed5bd19e9cf2",
"0xda9e45e5c92882f0d4ca960daf50922761309c07bbbd12720e846dd1568f7b6b",
"0x56b1a113f5b48a5ae84afa3cc118d041f566e95c926eac85415a8209829fd47a",
"0xfcb467c523efb8f8a40c5db781061e50e549e602a53107e10109c49e715f752d"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
