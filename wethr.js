#! /usr/bin/env node
const got = require('got')
const ora = require('ora')
const getEmoji = require('./get-emoji.js')
const chalk = require('chalk')

const API_KEY = '315bfb21a64943c67a92e2da0022fdbe'

const args = process.argv.slice(2)
let isMetric = true

if (args[0] === '--imperial') {
  isMetric = false
}

const spinner = ora('Detecting your location').start()

function getLocation () {
  return got('http://ip-api.com/json').then(response => {
    const body = JSON.parse(response.body)
    return [body.city, body.countryCode]
  })
  .catch(error => {
    spinner.stop()

    console.log(chalk.red('Error talking with http://ip-api.com/.'))
    console.log(chalk.red('Try running:\n\n $ curl http://ip-api.com/json\n\n'))
    console.log(error)
  })
}

function getTemperature ([city, country]) {
  spinner.color = 'yellow'
  spinner.text = 'Loading weather'

  const units = isMetric ? 'metric' : 'imperial'
  const weatherURL = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}&units=${units}`

  return got(weatherURL).then(response => {
    spinner.stop()

    const body = JSON.parse(response.body)
    const temperature = body.main.temp
    const units = isMetric ? 'C' : 'F'
    const emoji = getEmoji(body.weather[0].description)

    console.log(`${city}, ${country}: ${temperature}${units} ${emoji}`)
  }).catch(error => {
    spinner.stop()

    console.log(chalk.red('Error talking with http://api.openweathermap.org/.'))
    console.log(chalk.red(`Try running:\n\n $ curl ${weatherURL}\n\n`))
    console.log(error)
  })
}

getLocation().then(getTemperature)
