# i2x Project

Project based on React/Redux architeture, Webpack for the tooling and Express for dev server.

## Live demo

It hosted in Heroku<br>
https://i2x-project.herokuapp.com/login

### Authentication
To access the restrict area use the user
```
email: challenge@i2x.ai
password: pass123
```

### Routes
- `/login` - Authentication screen
- `/records` - List of records

## Try it out
1. Clone this project
```
git clone git@github.com:ivanbanov/i2x-project.git
```

2. Install all dependencies
```
npm install
```

3. Run the dev server
```
npm start
```

Then access [http://localhost:3000/](http://localhost:3000/)

##  Features
### User
- Full login authentication with fields validation
- Restrict access to authenticated routes
- Responsive and mobile first

### Dev
- It's a React SPA ❤
- React Helmet for title, favicon and meta tags
- React Router for routing
- Redux to control the state of the application
- Axios for data fetching
- UI components configs synced with the style files
- All UI components are tested with Jest/Enzyme
- Unit test for validators
- Components for Grid, Col with semantic gutters
- SVG sprite icons
- Project full linted with eslint
- Flowtype FTW
- Webpack to control all the tooling
- Continuous integration with SemaphoreCI

## Tooling

All the tooling is developed with Webpack, it will automate all the process of bundling and generate a static `index.html` with the bundle and styles injected.

It's configured to run a dev server with HMR and compile all the project.

### What is configured for
- **Styles:** CSSModules, Stylus and PostCss for prefixes
- **Scripts:** Parse all ES6, import of image files and use `./src` as path for global modules import

## Tests
All the tests are available in the `__tests__` folders around the project. There is unit tests for the validators and snapshot tests for the components.

To run the tests use:
```
npm run tests
```

## Tasks
Compile and start the server on `http://localhost:3000/`

```
npm start
```

Build production bundle
```
npm run build-prod
```

Build development bundle
```
npm run build-dev
```

Run the ESLint
```
npm run lint
```

Run tests

```
npm run tests
```

## Deploy
The deploy is fired by the SemaphoreCI, it's synced with the `master` branch.
So, to deploy a new feature just merge your branch and push the master.

You can see the deploys here: [https://semaphoreci.com/ivanbanov/i2x-project](https://semaphoreci.com/ivanbanov/i2x-project)
