# Green Address Chrome Extension

This repository is for the chrome extension harness for http://greenaddress.it. This repository is not for the web assets used by the extension.

## Installing

You can just load the directory in Chrome extentions by enabling the developer mode.

See this video for an example on Debian with Chromium https://youtu.be/zF3Xar5hJ_0

The repository should at any point already contains built assets from the latest stable version of [GreenAddressWebFiles](https://github.com/greenaddress/GreenAddressWebFiles). If you wish to use a different version of the webfiles, you'll need to manually build it yourself. See the build instructions below for additional details.

## Configuration

For TESTNET run ./prepare.sh testnet

For MAINNET run ./prepare.sh mainnet

For REGTEST run ./prepare.sh regtest

To create a Chrome store zip for mainnet and testnet run ./makePackages.sh

## Contributing

This repository only contains the files exclusive to the Chrome extension and the build system for copying the correct assets out of [GreenAddressWebFiles](https://github.com/greenaddress/GreenAddressWebFiles). In almost every case you'll want to make your changes in that repository and not this one.

#### Working With Live GreenAddressWebFiles
This repository uses `npm` to fetch the web assets used. You can use `npm link` to instead point your WalletCrx working copy at a local version of `GreenAddressWebFiles`.

* First, go to your checked out `GreenAddressWebFiles`
  * If you haven't already cloned it get it [here](https://github.com/greenaddress/GreenAddressWebFiles)
* Within the web files directory,
  * `npm install`
  * `sudo npm link`
  * `npm run watch`
* Within the WalletCrx directory
  * `npm link greenaddress-webfiles`
  * `npm run watch`

Modify files and rejoice.

You can use that same `npm link` syntax with any other dependancy used by either project, allowing you to test modifications to underlying dependencies in a seamless way.

# License
LGPL-2.1