const { fetchJson } = require('../utils/fetcher')

const brainly = (tanya) => new Promise((resolve, reject)=> {
    console.log('Get metadata from =>', tanya)
    const tanyaUri = tanya.replace(/ /g, "%20");
    fetchJson('https://smsh2h.net/api/brainly?query=' + tanyaUri )
        .then((result) => {
            if (result.code != 200) return resolve(result.code)
            const { result: [ { title, url } ] } = result
            const resultText = `🧠 Brainly

Pertanyaan: ${title}

KlikDisini: ${url}`
            resolve(resultText)
            }).catch((err) => {
              console.error(err)
              reject(err)
            })
})

const wiki = (q) => new Promise((resolve, reject) => {
    console.log('Get metadata from =>', q)
    const query = q.replace(/ /g, "%20");
    fetchJson('https://api.kry9ton.tech/v1/wiki?q=' + query)
        .then((hasil) => {
            if (hasil.status != 200) return resolve(hasil.status)
            const jawaban = hasil.result

            resolve(jawaban)
            }).catch((err) => {
                console.error(err)
                reject(err)
            })
})

module.exports = {
    brainly,
    wiki
}
