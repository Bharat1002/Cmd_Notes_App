# Cmd_Notes_App
This is a Command line based Notes App with [yargs](https://www.npmjs.com/package/yargs) package.

## setup
Use below command to clone repo in your system
```
git clone https://github.com/Bharat1002/Cmd_Notes_App.git
```

run below command to download dependencies

```
npm i
```


## Commands For Notes App

For adding Note with title and body
```
node .\app.js add --title="Title of Note" --body="Content of note"
```
For Note Removal with title
```
node .\app.js remove --title="Title of Note"
```
To Display List of Notes (Titles only)
```
node .\app.js list
```
To read a particular note with given title 
```
node .\app.js read --title="Title of Note"
```


Note : --title and --body are required commands, if you won't use it then it will throw errors.