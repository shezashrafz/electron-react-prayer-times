 //"start": "concurrently \"cross-env BROwSER=none npm run react-start\" \"wait-on http://localhost:3000 && electron .\""
 
used this to create react app with electron

use this to set up project
use this https://www.youtube.com/watch?v=Cdu2O6o2DCg
also usefful

https://medium.com/@impaachu/how-to-build-a-react-based-electron-app-d0f27413f17f


https://www.youtube.com/watch?v=zq-XcnjLpXI

dont use below any more had issue - templat enot created after this ran
##create-react-app react-project
https://icetutor.com/question/template-not-provided-using-create-react-app/
had to uninstall global create react app

npm unistall -g create-react-app
yarn global remove create-react-app

npm and yarm


then use 
npm init react-app my-app

cd into new project
npm install concurrently electron electron-builder wait-on

npm install --save cross-env electron-is-dev

npm run build
add to package.json
"main": "public/electron.js",

replace scripts with

"scripts": {
    "react-start": "react-scripts start",
    "react-build": "react-scripts build",
    "react-test": "react-scripts test",
    "react-eject": "react-scripts eject",
    "electon-build": "electron-builder",
    "build": "npm run react-build && npm run electron-build",
    "start": "concurrently \"cross-env BROwSER=none npm run react-start\" \"wait-on http://localhost:3000 && electron .\""
  },



