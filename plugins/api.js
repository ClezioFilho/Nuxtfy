export default function(context, inject) {
  const appId = 'L01TEZ2IQT'
  const apiKey = '95d4e7809e6fe45949cf7f0ba78727ed'
  const headers = {
    'X-Algolia-API-Key': apiKey,
    'X-Algolia-Application-Id': appId
  }

  inject('dataApi', {
    getHome,
    getReviewsbyHomeId,
  })

  async function getHome(homeId) {
    try{
      return unWrap(await fetch(`https://${appId}-dsn.algolia.net/1/indexes/homes/${homeId}`, { headers }))
    } catch(error) {
      return getErrorResponse(error)
    }
  }

  async function getReviewsbyHomeId(homeId) {
    try {
      return unWrap(await fetch(`https://${appId}-dsn.algolia.net/1/indexes/reviews/query`, {
        headers,
        method: 'POST',
        body: JSON.stringify({
          filters: `homeId:${homeId}`,
          hitsPerPage: 6,
          attributesToHighlight: [],
        }) 
      }))
    } catch(error) {
      return getErrorResponse(error)
    }
  }

  async function unWrap(response) {
    const json = await response.json()
    const {ok, status, statusText} = response
    return {
      json,
      ok,
      status,
      statusText
    }
  }

  function getErrorResponse(error) {
    return {
      ok: false,
      status: 500,
      statusText: error.message,
      json: {}
    }
  }
}
