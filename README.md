# eCommerce Technical Task
This is an application which lists products and handles adding / updating / modifying products in the cart.

See more details at the Guides section.

# Prerequisites

## node version >= 18

It is mandatory to have node version 18 at least.

## yarn
It is strongly recommended to use yarn instead of npm.

Installation instructions: https://classic.yarnpkg.com/lang/en/docs/install

## Environment
Linux or Mac is strongly recommended (Any UNIX based OS).

# Installation
First clone the repository from github: https://github.com/kispali80/TechnicalTask
```
git clone git@github.com:kispali80/TechnicalTask.git
```
Next step is go to the TechnicalTask directory and run yarn install
```
yarn install
```

Final step is to run the project
```
yarn start
```

The project page will be loaded in the default browser. The application is ready to use from that point.

# Packages / Tools used on the project
## Create React App
This is the base of everything. It has preconfigured packages and is easy to create web page with React.
Also contains built-in testing functionality and compiler.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Craco (Create React App Configuration Override)
It is an easy and comprehensible configuration layer for Create React App.
It allows to add / extend configuration for Create React App.

See more details at https://github.com/dilanx/craco

## yarn
It controls the packages, dependencies. It is amazing!

## React Redux Toolkit
It is based on react redux but it is a lightweight version.
This is responsible for handling data in local storage and makes sure that it keeps the data until it is needed.

Also solving the caching strategy.

See more info: https://redux-toolkit.js.org/

## Typescript
Typescript is used on this project.

TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.

See more details at https://www.typescriptlang.org/

## React JS
React is used as a framework which is built-in with the Create React App.
See more details at https://react.dev/

## Tailwind CSS
It is easy and quick tool to style elements. 
Everything is styled by tailwind.
FYI no SASS related technology is used on this project.

See more info on https://tailwindcss.com/

## Linting
### eslint
Checking for javascript / typescript issues 

### stylelint
Checking for stylesheet related issues - No SASS file used currently on this project

### prettier
Checking for indentation , spacing issues in the code to get the best out of it.

FYI the ";" is removed and not set at the end of the lines as a requirement.
This is a basic configuration. See "semi" rule in .prettierrc.json.

https://prettier.io/docs/en/configuration.html

# Command line tools

## Available Scripts

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn lint`

Checks for linting issues including prettier rules.

### `yarn tailwind`

Generates a stylesheet which can be imported for other Tools like Storybook, etc

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

# Guides

This is an eCommerce application which is responsible for listing products and managing cart items.

## Acceptance Criteria

AC01: Create two different pages /products and /cart

AC02: The Product page lists all products and their information, and enables adding each individual product to cart in various amounts, with respect to minOrderAmount.

AC02.a: When product is added to cart its available amount should be decremented by the amount added. Adding more than the total amount should not be possible.

AC03: Cart page displays the products added to the cart: total amount currently added, total price.

## Home Page
