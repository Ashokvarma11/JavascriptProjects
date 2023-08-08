let quote = document.getElementById("quote")
let author = document.getElementById("author")
let fetchData = async function () {
    let quotesResponse = await fetch('https://type.fit/api/quotes', {
        method: 'GET'
    })
    let data = await quotesResponse.json()
    let click = document.getElementById("click")
    click.addEventListener('click', function () {
        let randomnum = Math.ceil(Math.random() * 15)
        console.log(randomnum)

        quote.textContent = `"${data[randomnum].text}"`
        author.textContent = `-${data[randomnum].author}`

    })
}

fetchData()


