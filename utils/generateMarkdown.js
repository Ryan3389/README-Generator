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
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
