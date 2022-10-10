const API = 'https://api.giphy.com/v1/gifs/search?'
const key = 'api_key=VLo5atIVLxW3FteVWC7MCYh4BavEmLev'
const limit = '&limit='
const params = '&q='
const form = document.querySelector('form')
const input = document.getElementById('input')
const btn = document.getElementById('search')
const output = document.querySelector('.output')
const select = document.getElementById('count')

const searchGiphy = async () => {
    let url = API + key + limit + select.value + params + input.value
    let request = await fetch(url)
    let response = await request.json()
    render(response.data);
    input.value = ''
}

const render = (giff) => {
    output.innerHTML = ''
    giff.forEach(e => {
        console.log(e);
        const card = document.createElement('div')
        const title = document.createElement('h2')
        title.textContent = e.title
        const giphy = document.createElement('iframe')
        giphy.src = e.embed_url
        card.append(giphy, title)
        output.append(card)

    });
}

form.addEventListener('submit', (event) => {
    event.preventDefault()
    searchGiphy()
})

