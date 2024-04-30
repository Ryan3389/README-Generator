// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    license = ''
  }
  return license
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseBadge = renderLicenseBadge(license)
  switch (licenseBadge) {
    case 'MIT':
      return `[MIT](https://opensource.org/license/mit)`
      break;
    case 'APACHE':
      return `[APACHE 2.0](https://www.apache.org/licenses/LICENSE-2.0)`
      break;
    case 'GPL':
      return `[GPL 3.0](https://www.gnu.org/licenses/gpl-3.0.en.html)`
      break;
    case 'BSD':
      return `[BSD 3](https://opensource.org/license/bsd-3-clause)`
      break;
    default:
      return ''
      break;
  }
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseLink = renderLicenseLink(license)

  return licenseLink
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let badgeImgSrc = ''
  let link = renderLicenseLink(data.license)

  switch (link) {
    case `[MIT](https://opensource.org/license/mit)`:
      badgeImgSrc = 'https://img.shields.io/badge/License-MIT-green.svg'
      break;
    case `[APACHE 2.0](https://www.apache.org/licenses/LICENSE-2.0)`:
      badgeImgSrc = 'https://img.shields.io/badge/License-Apache%202.0-blue.svg'
      break;
    case `[GPL 3.0](https://www.gnu.org/licenses/gpl-3.0.en.html)`:
      badgeImgSrc = 'https://img.shields.io/badge/License-GPL%203.0-blue.svg'
      break;
    case '`[BSD 3](https://opensource.org/license/bsd-3-clause)`':
      badgeImgSrc = 'https://img.shields.io/badge/License-BSD%203--Clause-blue.svg'
    default:
      badgeImgSrc = ''
      break;
  }
  return `
[License Badge](${badgeImgSrc})

# ${data.title}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Tests](#tests)
- [Questions](#questions)


## Installation
${data.installation}


## Usage
${data.usage}


## License
This project is licensed under the ${renderLicenseSection(data.license)}


## contributions
${data.contributions}


## Tests
${data.test}


## Questions
If you have any questions please contact:
GitHub: [${data.github}](https://github.com/${data.github})
Email: ${data.email}
`;
}

module.exports = generateMarkdown;
