export default function ({ $axios, redirect }, inject) {

  const dataApi = $axios.create({
    baseURL: "https://L01TEZ2IQT-dsn.algolia.net/1/indexes/",
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'X-Algolia-API-Key': '95d4e7809e6fe45949cf7f0ba78727ed',
      'X-Algolia-Application-Id': 'L01TEZ2IQT'
    }
  })

  inject('dataApi', dataApi)

  $axios.onRequest(config => {
    console.log('Making request to ' + config.url)
  })

  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status)
    if (code === 400) {
      redirect('/400')
    }
  })
}