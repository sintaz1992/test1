# Hazu remote todo list

Welcome to the Hazu remote todo list! This is a practical and lightweight todo list, with remote syncing so that you can bring your todo list with you to any computer.

## User instructions

- When you start the app, it will generate a unique random code for you, this is your list name! By copying this into another browser and clicking "Set name" you can always access your list!. Every time you make changes to the list it will save on our remote server, so you never lose anything.
- To add a TODO, fill in the input field, and click on "Add todo". This will add it to your todo list.
- To mark a TODO as done, click the check mark button next to the TODO. It will then go into the "done" list.
- To re-use an old todo, click the "recycle" button next to the todo in the "done" list, it will then go back to the top of the todo list.
- If you're done with a todo (and don't want to re-use it), click the "trashcan" button next to the todo in the "done" list. The todo will then be permanently deleted.

Have fun keeping track of your todo:s!

## Setting up your development environment

First, make sure you have [Node.js v. 16 (LTS)](https://nodejs.org/en/download/) installed on your machine. Then clone this repository and run

```
npm i
```

in the root of the repository to install all dependencies.

To edit the code you can use any editor, but we recommend [Visual Studio Code](https://code.visualstudio.com/Download)

## Development server

Run `npm run start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `npm run test` to execute the unit tests.
