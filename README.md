# Scarlet
> Scarlet is a React app with a provided Express API

This project is the final work to submit in order to pass the exam.

The given commands are suitable for the `DEV` environment.


## Installation

Scarlet is a mono-repo that provides both API and App.

You will need Yarn installed globally in order to install and run `scarlet-app`


OS X, Linux & Windows:

```sh
cd scarlet-api && npm i && cd ../scarlet-app && yarn
```

You also need to have Mongodb installed on your machine (so far docker isn't working, it's gonna be fixed later)

See the associated documentation to install the latest version : [here](https://docs.mongodb.com/v3.2/administration/install-community/)


## Usage example

First thing first, launch the mongodb service: 

```sh
sudo service mongodb start
```

Then, you simply have to start the api and the app in two separated shell terminal :

```sh
cd scarlet-api && npm run dev
```

```sh
cd scarlet-app && yarn start
```

## Development setup

In order to access the app you will need to create a `config.default.js` and set it in the root folder `Scarlet`, an example file is provided in the repo, simply fill it out with your own secret key / ENV var and you'll be ready to go !


## Release History

* 0.0.1
    * Work in progress

## Meta

[Nicolas Estezet](https://www.linkedin.com/in/nicolas-estezet/) – estezet.n@gmail.com

Henri Heymans

Distributed under the MIT license. See ``LICENSE`` for more information.
