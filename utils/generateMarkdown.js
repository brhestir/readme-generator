// generateMarkdown.js

// includes
const colors = require('colors');
const fetch = require('node-fetch');
colors.enable();  // Colorizable output

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = (license) => {
  if (license === "MIT") {
    return `https://img.shields.io/static/v1?label=Licence&message=${license}&color=brightgreen?style=plastic`;
  } else {
    return `()`;
  };
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = (license) => {
  if (license !== null) {
     return `https://raw.githubusercontent.com/brhestir/readme-generator/main/LICENSE`;
  } else {
    return `()`;
  };
};

// Function that returns the license section of README
// If there is no license, return an empty string


// Function to generate markdown for README
const generateMarkdown = function(response) {

  let mdResult = new String();
  let toc = tocFactory(response);

  // now iterate over the elements of the response object and compose the markdown return string
  for (var key in response) {
    switch (key) {
      case "title":
        mdResult = mdResult + `# ![https://github.com/brhestir/readme-generator/blob/main/README.md](https://badgen.net/badge/readme/generator/?icon=github&scale=5)\n`;
        //mdResult = mdResult + `# ${response[key]}\n`;
      break;
      case "description":
        mdResult = mdResult + "## TOC:\n" + toc + "\n";
        mdResult = mdResult + `## ${key}:\n${response[key]}\n`;
      break;
      case "licence":
        mdResult = mdResult + `## ${key}:\n`
        mdResult = mdResult + `### ${response[key]} ![` + renderLicenseLink(response[key].licence) + `](` + renderLicenseBadge(response[key]) +`)\n`;
mdResult = mdResult + `MIT License

Copyright (c) 2021 Brian Hestir

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.\n\n`;

// renderLicenceText("https://raw.githubusercontent.com/brhestir/readme-generator/main/LICENSE")
// .then(resp => { mdResult = `${mdResult}\n${resp}` } )
// .then(secondFunction)
// .then(textLicence => { return `${mdResult}` });


// function renderLicenceText(url) {               // 2
//   return fetch(url)
//             .then(function(resp) {
//                   return resp.text();
//             });
// };

// function secondFunction(textLicence) {
//   console.log(mdResult);
//   return new Promise(function(resolve, reject) {
//     setTimeout( () => {
//       mdResult = mdResult + textLicence;
//       resolve(textLicence);
//     }, 1500);

//   });
// };
      break;
      default:
        mdResult = mdResult + `## ${key}:\n${response[key]}\n`;
      break;
    };
  };
  return mdResult;
};

// Generates a table of contents markdown block for inclusion
const tocFactory = function(tocObject) {
  let tocResult = new String();
  for (const key in tocObject) {
    tocResult = tocResult + `- [${key}](#${key})\n`;    // returns a link to a markdown heading
  };
  return tocResult;    
};

const capFirstChar = function(str) {
  return str.charAt(0).toUpperCase() + String.slice(1);
}

module.exports.capFirstChar = capFirstChar;
module.exports.generateMarkdown = generateMarkdown;
