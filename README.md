# Setup:

1. Make sure to have node installed.  
    Check by running in terminal:  
    `node -v`
    If a version number is not displayed, consult the internet to install node or contact Hayes Capers.  

2. Install npm packages.  
    While in the project root folder run `npm install` in the terminal  

# Usage:

1. Write code for each algorithm directly into the function in each algorithm file (the file without .solution or .test).
    - Files named with .solution.js contain the solution used for testing. If you edit these files it may change test results, so be careful.
    - Files named with .test.js contain the tests for each algorithm. You may add/edit tests if you wish to practice some TDD or learn Jest. (Jest Docs: https://jestjs.io/docs/getting-started)

2. In the terminal run `npm test <filename>` to test your answer.  
    - Ex. `npm test removeDuplicates` will run the test suite for the removeDuplicates algorithm.  
    - **Note:** the .js file extension is not required.
