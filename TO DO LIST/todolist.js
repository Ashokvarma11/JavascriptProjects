let div = document.getElementById("div")
let add = document.getElementById("add")
let input = document.getElementById('input')
let span=document.createElement("span")
span.id="span"
let enteredText
input.addEventListener('input', function (e) {
    enteredText = e.target.value


})

add.addEventListener('click', function () {
    if (enteredText != undefined && enteredText != "") {

        var x = document.createElement("INPUT");
        x.setAttribute("type", "checkbox");
        x.addEventListener('click',function(){
            if(x.checked="on"){
                p.className="strikethrough"                 
            }
        })
        let p=document.createElement("p")
        p.textContent=enteredText
        p.style.width="250px"
        let childdiv=document.createElement("div")
        childdiv.className="flex"
        let edit=document.createElement("span")
        edit.innerHTML=`<i class="fa fa-edit" style="font-size:24px"></i>`
        //edit.textContent="edit"
      
        let del=document.createElement("span")
        del.innerHTML=`<i class="fa fa-trash-o" style="font-size:24px;color:red"></i>`
        
        
           del.addEventListener('click',function(){
            div.removeChild(childdiv)
        })
        edit.addEventListener('click',function(){
            let editedInput=document.createElement("input")
            editedInput.value=p.textContent
            editedInput.style.borderRadius="5px";
            p.textContent="";
            editedInput.focus()
            editedInput.addEventListener("change", () => {
                    p.innerHTML = editedInput.value;
                    editedInput.remove();
                });
                p.append(editedInput)
            })
            childdiv.append(x)
            childdiv.append(p)
            childdiv.append(edit)
            childdiv.append(del)
            div.append(childdiv)            
}
})
