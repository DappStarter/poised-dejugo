require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/lib/wallet-provider');


let mnemonic = 'idea kitten fresh skull drift rate noble exchange guess kangaroo army gesture'; 
let testAccounts = [
"0xe6dacd466eeafb51cefbec828b5fd301cb4d3f80eda4d556a6b6cf03b5883ca1",
"0xc67b83c249829d12b71e6694bde3d2c9e8e6ecd8373614bb6361c7db13495a80",
"0x27453b4736900eee9eb8c96390e9f09e826446b5600fd2158feba0018afcecd6",
"0xfd7b2ead6d3e468d93b314a59ad2059f92f6a8f1e894dfba08c211fc95a74735",
"0x27d5c4852a2c7c2c8447ea5d9506271a581b71b02ad7e2de1247e75e6ef71e30",
"0xeb54038ff3d9d5abb3e4ceafa297d48dedc56a51ff1181ac504b1a54fc7e081c",
"0x6d707f1e0f0cff2dee899c78e470604d2d0631ed789f319b9df8b6928d923439",
"0x85c923705fa1462a8c5384f5bb639ceb7ceeac1b9f04c731a3f6a62b6598ed31",
"0xaeb6e27d0115bfe5ed4d3667b522e66ee520bb1698bd835eacec24aa4cf757d9",
"0x27528628c5a4634102497b54ad67d078a7b699f31a0519aa68c2846d9a81bc1b"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

