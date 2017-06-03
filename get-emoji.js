module.exports = function getEmoji (description) {
  // Descriptions from http://openweathermap.org/weather-conditions
  switch (true) {
    case /clear sky/.test(description):
      return '☀️'
    case /few clouds/.test(description):
      return '⛅'
    case /scattered clouds/.test(description):
      return '☁️'
    case /broken clouds|overcast clouds/.test(description):
      return '☁️☁️'
    case /thunderstorm/.test(description):
      return '⛈'
    case /snow|sleet/.test(description):
      return '🌨'
    case /drizzle|rain/.test(description):
      return '🌧'
    case /mist|smoke|haze|fog|sand|dust|ash|squalls/.test(description):
      return '🌫'
    case /tornado|hurricane|tropical storm/.test(description):
      return '🌪'
    default:
      throw new Error(`emoji not found: ${description}`)
  }
}
