# Getting started
install the folloing s/w

- nodejs
- nodemon
- mysql

open the project folder in VS Code and in terminal run
`npm install` - to install the dependencies from the package.json file.

> In line 14 in app.js you have to replace the "password" with the password that you gave during installation of mysql. And, you may need to change the user from "root" to other if "root" is not the user for your case during installatino of mysql.
Then open mysql CLI for client and run the following sql query seperately -

```
create database join_us;
```
```
use join_us;
```
```
CREATE TABLE users (
    email VARCHAR(255) PRIMARY KEY,
    created_at TIMESTAMP DEFAULT NOW()
);
```

After the above steps run in the vs code terminal
```
nodemon app.js
```
and open the app @'localhost:3000'
