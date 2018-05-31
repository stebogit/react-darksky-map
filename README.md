react-darksky-map
==
DarkskyMap React component
--

<p align="left">
  <a href="https://circleci.com/gh/stebogit/react-darksky-map">
    <img src="https://img.shields.io/circleci/project/github/stebogit/react-darksky-map.svg" alt="Continuous Integration">
  </a>
  <a href="https://codecov.io/gh//react-darksky-map">
    <img src="https://codecov.io/gh//react-darksky-map/branch/master/graph/badge.svg" alt="Coverage Status">
  </a>
  <a href="https://npmjs.org/package/react-darksky-map">
    <img src="http://img.shields.io/npm/dt/react-darksky-map.svg?style=flat-square" alt="Downloads">
  </a>
  <a href="https://npmjs.org/package/react-darksky-map">
    <img src="http://img.shields.io/npm/v/react-darksky-map.svg?style=flat-square" alt="Version">
  </a>
  <a href="https://npmjs.com/package/react-darksky-map">
    <img src="https://img.shields.io/github/license/stebogit/react-darksky-map.svg" alt="License"></a>
  </a>
</p>

## Installation

    $ npm init
    $ npm install react-darksky-map --save
  
* * *

## Usage

1: Add this line near the top of your file (like ```src/App.js```):

```
import DarkskyMap from 'react-darksky-map';
```

__NOTE:__ DarkskyMap must be Capitalized or component won't render.

2: Somewhere in the middle of the __render__ method add this line:

```
<DarkskyMap />
```


* * *

## Testing

### Run the Tests

To test, go to the root folder and type (sans __$__):

    $ npm test
    
## Component Testing

### Prerequisite

If you've never installed __create-react-app__ (you may need to use ```sudo```):

```
$ npm install -g create-react-app
```

### Create a local npm link

In the original component folder (you may need to use ```sudo```):

```
$ npm link
```

### Create a test package

Create a root test folder and then do the following:

```
$ create-react-app react-darksky-map-test
$ cd react-darksky-map-test
$ npm link react-darksky-map
```

### Modify src/App.js

1: Add this line near the top:

```
import DarkskyMap from 'react-darksky-map';
```

__NOTE:__ DarkskyMap must be Capitalized or component won't render.

2: Somewhere in the middle of the __render__ method add this line:

```
<DarkskyMap />
```

### Run The Test App

```
$ npm start
```

### Cleanup

Remember to unlink when done.
   
* * *
 
## Repo(s)

* [bitbucket.org//react-darksky-map.git](https://bitbucket.org//react-darksky-map.git)
* [github.com/stebogit/react-darksky-map.git](https://github.com/stebogit/react-darksky-map.git)

* * *

## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style.
Add unit tests for any new or changed functionality. Lint and test your code.

* * *

## Version History

#### Version 0.1.0 

* initial release

* * *