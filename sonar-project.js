require('dotenv').config()
const sonarqubeScanner = require('sonarqube-scanner')

sonarqubeScanner({
  serverUrl: process.env.SONAR_UI_URL,
  options: {
    'sonar.login': process.env.SONAR_UI_LOGIN,
    'sonar.projectKey': process.env.SONAR_UI_KEY,
    'sonar.sources': 'src',
    'sonar.tests': 'src',
    'sonar.inclusions': 'src/**/*.ts,src/**/*.vue',
    'sonar.test.inclusions': 'src/**/*.test.ts',
  },
}, () => {
  // eslint-disable-next-line no-console
  console.log('Error Occurred while scanning')
})
