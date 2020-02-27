# React Native's Template

A basic boilerplate with the common configuration to build a robust application with react native.

#### Main dependencies

- [React native v0.61.5](https://reactnative.dev/docs/tutorial)

- [React Navigation v3.11.0](https://reactnavigation.org/docs/en/getting-started.html)

- [TypeScript](https://www.typescriptlang.org/docs/home.html)

- [Redux](https://redux.js.org/)

## How to start

1. Clone repository.

- `git clone https://github.com/Guerrero25/react-native-boilerplate.git`

2. Install dependencies

- `cd react-native-boilerplate && npm install`

3. Run the project

- `react-native run-android` or `react-native run-ios`

## Structure

The project has the next structure

```
src/
	components/
    	UI/
	screens/
	redux/
	services/
types.ts

```

#### `src/components`

This folder is intended for all components that correspond to the application logic. As a recommendation, the components can be stored under the module to which they belong. e.g. `src/components/auth/login` where `auth` is the module and `login` is the component of the login form.

Inside this folder is the `UI/` folder. All the minimal and reusable components are supposed to be there. e.g. buttons, text components, titles, and so on.

#### `src/screens`

This folder allows to have an overview of routes of the application. All the components here **must not have any logic**. They must be in charged of organizing the screen with the logic components from the components folder described above.

#### `src/redux`

In this folder are all the redux store configuration.

#### `src/services`

All the modules to connect with external services should be in this folder. e.g. HTTP requests.

#### `types.ts`

All the typescript types are supposed to be here.

## Contributing

This is not a perfect project so any recommendation, bug report or correction to improve either the structure or project configuration is welcome in the [pull requests.](https://github.com/Guerrero25/react-native-boilerplate/pulls).
