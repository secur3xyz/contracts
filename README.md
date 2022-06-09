
![Logo](https://floorwaves-assets-public.s3.ap-south-1.amazonaws.com/logo02.png)


Secur3 is world's first decentralised 2FA solution for non-custodial wallets (Metamask, hardledger etc). Secur3 allows users to store assets with extra layer of security (one time password). In event of private key compromise, no one can withdraw the assets as long as 2FA (one time password) is secured. 

We are at a mission To provide 2FA security to users in decentralised/trustless manner for high value assets. Secure your assets now at [secure.xyz](https://www.secure.xyz)

Find more details on [secur3 gitbook](https://secur3.gitbook.io/secur3/).

## How does this work?

We provide dedicated vault to every user, here users can send or withdraw assets to this valut using the one time password stored in encrypted format on the blockchain. Whenever a user wants to deposit any asset (ETH, ERC20, ERC721, ERC1155) it does not require any password and user can send it from any source (During vault creation, initial password is taken). However, while withdrawing any of the asset back, the owner of the assets need to mention the last one time password that was set, a new password that will be used to withdraw assets next time. 

User is also required to provide backup wallet address, in case user's private key is then compromised the hacker still does not have access to assets present in the secure vault. The user then can trigger a transaction to move all their data to backup wallet, hence protecting all of their assets from the hacker.

Note that all interactions with secure vault can only be done by the owner who created this vault and secur3.xyz or anyone else do not have any access to interact with that vault.


## Contract Details

Secur3 2FA protocol is built in a decentralised and permissionless form on Ethereum blockchain. It uses “clone factory pattern” approach to generate new Secur3 Vault for user. Once Secur3 Vault is created, it can not be accessed by any user except owner. The owner can also never be changed once set to reduce security risk. 


The project consists of two self developed contracts: 
- TwoFactor.sol
- TwoFactorFactory.sol

We also have a customised ownable.sol, to ensure security of the users funds we have removed transferOwnership and renounceOwnership function. Since we want that the contract should always be linked to the user's account and prevent any possible scenarios of potential asset loss.

You may read more about the technical details [here](https://secur3.gitbook.io/secur3/technical/technical-details).


## Community 

Join our discord at: [link](https://discord.com/invite/wCNPDM3kTF)


## FAQ

#### Is the smart contract code audited?

Yes. The code has been audited by reputed 3rd party whose report can be found here. Also, the smart contract code contains minimal logic (keeping security perspective in mind) and all methods of contract can be accessed “only by owner” of the smart contract. So, in worst case, only owner of contract can exploit it (which is the owner of private keys itself :) ).

#### What happens if I lose my private key of wallet?

Well, can’t help much. That is the only caveat of holding our own wallet. You need your private keys and login in Metamask to transfer any asset.

#### What happens if I lose my one time password?

When you create your dedicated Secur3 vault, you have to provide backup address (generally your cold wallet) where you can transfer the assets in case your primary wallet gets compromised or 2FA gets lost.

#### Can hacker withdraw assets if one time password gets compromised?

No. As long as you have your private key safe with you, hacker can not get the assets.

#### What happens if my private key gets compromised?

As long as your 2FA is safe, good news is that hacker can not withdraw your assets. Whenever you get sense that private key is compromised, we suggest to quickly transfer assets from vault to your backup/cold wallet which was defined during vault creation.

#### Can Secur3 withdraw assets from my vault?

No. As mentioned lot of times above, Your keys and your 2FA. Read out more technical details here :)

#### Can hacker withdraw assets if he gets access to private key and 2FA both??

If both your private key and 2FA password gets compromised, that means hacker has control to the assets. Best is to immediately send your assets to backup wallet. Also, an advise is to keep both private key and 2FA separate to reduce chances of hack.

#### Is there Google Auth, phone or email mechanism for 2FA?

No. Given it is decentralised solution, there is no such mechanism for phone, email 2FA as we don't own your private keys/2FA password.

## Future Plans

We are looking to deploy Secur3 on other popular blockchains  and support other wallets soon. 

In addition, we are exploring more features that will provide more ease in managing one time password for Secur3 Vaults. 
Stay tuned by following us on [Twitter](https://twitter.com/SECUR3_) and joining our [Discord Server](https://discord.com/invite/wCNPDM3kTF)