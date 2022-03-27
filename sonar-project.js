require('dotenv').config()
const sonarqubeScanner = require('sonarqube-scanner')

sonarqubeScanner({
  serverUrl: 'http://localhost:9000',
  options: {
    'sonar.login': 'c38e967c9740dba4b3fc58d1b50b37e9485ba371',
    'sonar.projectKey': 'ui-thunder-link',
    'sonar.sources': 'src',
    'sonar.tests': 'src',
    'sonar.inclusions': 'src/**/*.ts,src/**/*.vue',
    'sonar.test.inclusions': 'src/**/*.test.ts',
  },
}, () => {
  // eslint-disable-next-line no-console
  console.log('Error Occurred while scanning')
})
