import test from 'ava'
import getEmoji from '../get-emoji'

test('clear sky', t => {
  t.is(getEmoji('clear sky'), '☀️')
})

test('few clouds', t => {
  t.is(getEmoji('few clouds'), '⛅')
})

test('scattered clouds', t => {
  t.is(getEmoji('scattered clouds'), '☁️')
})

test('broken clouds', t => {
  t.is(getEmoji('broken clouds'), '☁️☁️')
  t.is(getEmoji('overcast clouds'), '☁️☁️')
})

test('rain', t => {
  ['light rain', 'moderate rain',
    'heavy intensity rain', 'very heavy rain', 'extreme rain',
    'freezing rain', 'light intensity shower rain', 'shower rain',
    'heavy intensity shower rain', 'ragged shower rain'].forEach((term) => {
      t.is(getEmoji(term), '🌧')
    })
})

test('thunderstorm', t => {
  ['thunderstorm with light rain', 'thunderstorm with rain',
    'thunderstorm with heavy rain', 'light thunderstorm', 'thunderstorm',
    'heavy thunderstorm', 'ragged thunderstorm', 'thunderstorm with light drizzle',
    'thunderstorm with drizzle', 'thunderstorm with heavy drizzle'].forEach((term) => {
      t.is(getEmoji(term), '⛈')
    })
})

test('snow', t => {
  ['light snow', 'snow',
    'heavy snow', 'sleet', 'shower sleet',
    'light rain and snow', 'rain and snow', 'light shower snow',
    'shower snow', 'heavy shower snow'].forEach((term) => {
      t.is(getEmoji(term), '🌨')
    })
})

test('mist', t => {
  ['mist', 'smoke',
    'haze', 'sand, dust whirls', 'fog',
    'sand', 'dust', 'volcanic ash',
    'squalls'].forEach((term) => {
      t.is(getEmoji(term), '🌫')
    })
})

test('tornado', t => {
  ['tornado', 'hurricane',
    'tropical storm'].forEach((term) => {
      t.is(getEmoji(term), '🌪')
    })
})
