let but = document.getElementsByClassName('button')
let para = document.getElementById('winner')
let reset=document.getElementById('reset')
count = 2
for (let i = 0; i < but.length; i++) {
    but[i].addEventListener('click', function () {
        if (count % 2 == 0) {
            count++
            but[i].textContent = "x"
            but[i].style.color = "#3c2803"
            but[i].style.fontSize = "x-large"
            if ((but[0].textContent == "x" && but[1].textContent == "x" && but[2].textContent == "x") || (but[3].textContent == "x" && but[4].textContent == "x" && but[5].textContent == "x") || (but[6].textContent == "x" && but[7].textContent == "x" && but[8].textContent == "x") || (but[0].textContent == "x" && but[3].textContent == "x" && but[6].textContent == "x") || (but[1].textContent == "x" && but[4].textContent == "x" && but[7].textContent == "x") || (but[2].textContent == "x" && but[5].textContent == "x" && but[8].textContent == "x") || (but[0].textContent == "x" && but[4].textContent == "x" && but[8].textContent == "x") || (but[2].textContent == "x" && but[4].textContent == "x" && but[6].textContent == "x")) {
                para.textContent = "Player1 wins"
                para.style.color = "#3c2803"
                para.style.fontWeight = "bold"

            }
            else if ((but[0].textContent == "o" && but[1].textContent == "o" && but[2].textContent == "o") || (but[3].textContent == "o" && but[4].textContent == "o" && but[5].textContent == "o") || (but[6].textContent == "o" && but[7].textContent == "o" && but[8].textContent == "o") || (but[0].textContent == "o" && but[3].textContent == "o" && but[6].textContent == "o") || (but[1].textContent == "o" && but[4].textContent == "o" && but[7].textContent == "o") || (but[2].textContent == "o" && but[5].textContent == "o" && but[8].textContent == "o") || (but[0].textContent == "o" && but[4].textContent == "o" && but[8].textContent == "o") || (but[2].textContent == "o" && but[4].textContent == "o" && but[6].textContent == "o")) {
                para.textContent = "Player2 wins"
                para.style.color = "white"
                para.style.fontWeight = "bold"
            }
            else if (count == 11) {
                para.textContent = "Its a draw"
                para.style.fontWeight = "bold"
            }
        }
        else {
            count++
            but[i].textContent = "o"
            but[i].style.color = "white"
            but[i].style.fontSize = "x-large"

            if ((but[0].textContent == "x" && but[1].textContent == "x" && but[2].textContent == "x") || (but[3].textContent == "x" && but[4].textContent == "x" && but[5].textContent == "x") || (but[6].textContent == "x" && but[7].textContent == "x" && but[8].textContent == "x") || (but[0].textContent == "x" && but[3].textContent == "x" && but[6].textContent == "x") || (but[1].textContent == "x" && but[4].textContent == "x" && but[7].textContent == "x") || (but[2].textContent == "x" && but[5].textContent == "x" && but[8].textContent == "x") || (but[0].textContent == "x" && but[4].textContent == "x" && but[8].textContent == "x") || (but[2].textContent == "x" && but[4].textContent == "x" && but[6].textContent == "x")) {
                para.textContent = "Player1 wins"
                para.style.color = "#3c2803"
                para.style.fontWeight = "bold"

            }
            else if ((but[0].textContent == "o" && but[1].textContent == "o" && but[2].textContent == "o") || (but[3].textContent == "o" && but[4].textContent == "o" && but[5].textContent == "o") || (but[6].textContent == "o" && but[7].textContent == "o" && but[8].textContent == "o") || (but[0].textContent == "o" && but[3].textContent == "o" && but[6].textContent == "o") || (but[1].textContent == "o" && but[4].textContent == "o" && but[7].textContent == "o") || (but[2].textContent == "o" && but[5].textContent == "o" && but[8].textContent == "o") || (but[0].textContent == "o" && but[4].textContent == "o" && but[8].textContent == "o") || (but[2].textContent == "o" && but[4].textContent == "o" && but[6].textContent == "o")) {
                para.textContent = "Player2 wins"
                para.style.color = "white"
                para.style.fontWeight = "bold"

            }
            else if (count == 11) {
                para.textContent = "Its a draw"
                para.style.fontWeight = "bold"
            }

        }

    })
}
reset.addEventListener('click',function(){
    count=2
    for (let i = 0; i < but.length; i++){
        but[i].textContent=""
        para.textContent=""
    }
})



