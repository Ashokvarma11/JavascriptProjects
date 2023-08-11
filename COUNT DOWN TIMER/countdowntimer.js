let timer=document.getElementById("input")
let totaltime
timer.addEventListener("change",function(e){
    totaltime=e.target.value
})
let h1=document.getElementById("h1")
let start=document.getElementById("start")
let res=document.getElementById("res")
let pause=document.getElementById("pause")
let alert=document.getElementById("alert")
let seconds=60
let exacthours=totaltime
    let min=exacthours
    let hour=parseInt(totaltime/60)
    let mins=59
    let mintues=totaltime%60
    count=0
start.addEventListener('click',function(){ 
    if(count==0){
     exacthours=totaltime
     min=exacthours
     console.log(min)
     hour=parseInt(totaltime/60)
     mins=59
     mintues=totaltime%60}
     else{
        min=min
        mintues=mintues
        mins=mins
     }
    myInterval=setInterval(function(){
        if(hour==0){
            alert.textContent=""
            h1.innerHTML=`00:${min-1}:${seconds}`
            if(min>0){
                seconds--
                if(seconds==0){
                    min--
                    console.log(min)
                    seconds=60
                }
                
            }
            else if(hour==0&& min==0){
                alert.textContent="Your time is Up"
                alert.style.color="red"
                h1.innerHTML=`00:00:00`

            }
            pause.addEventListener('click',function(){
                h1.innerHTML=`00:${min-1}:${seconds}` 
                count++
                clearInterval(myInterval)              
                 
            }) 
            res.addEventListener('click',function(){
    
                h1.innerHTML=`00:00:00`
                
                clearInterval(myInterval)
            }) 
        }
        else if(exacthours%60==0){
            alert.textContent=""
            h1.innerHTML=`${hour-1}:${mins}:${seconds}`
            console.log(min)
            if(mins>0){
                seconds--
                if(seconds==0){
                    mins--
                    seconds=60
                }
            }
            else if(mins==0){
                hour--
            }
            else if(hour==0 && mins==0){
                alert.textContent="Your time is Up"
                alert.style.color="red"
                h1.innerHTML=`00:00:00`

            }
            pause.addEventListener('click',function(){
                h1.innerHTML=`${hour-1}:${mins}:${seconds}`
                count++
                clearInterval(myInterval) 
            })  
            res.addEventListener('click',function(){
                h1.innerHTML=`00:00:00`
                clearInterval(myInterval)
            }) 
        }
        else {
            alert.textContent=""
            h1.innerHTML=`${hour}:${mintues}:${seconds}`
            if(hour>0){
                if(mintues>0){
                    seconds--
                    if(seconds==0){
                        mintues--
                        seconds=60
                    }
                }
                else if(mintues==0){
                    hour--
                    mintues=59
                }
                
            }
            else if(hour==0 && mintues==0){
                alert.textContent="Your time is Up"
                alert.style.color="red"
                h1.innerHTML=`00:00:00`

            }
            pause.addEventListener('click',function(){
                h1.innerHTML=`${hour}:${mintues}:${seconds}`
                count++
                clearInterval(myInterval) 
            })
            res.addEventListener('click',function(){
    
                h1.innerHTML=`00:00:00`
                clearInterval(myInterval)
            })
        }   
    },1000)
})

























// start.addEventListener('click',function(){
//     myInterval=setInterval(function(){
//         if(time>0 && time<=10){
//             p.textContent=""
//             h1.innerHTML=`00:0${time-1}:${seconds}`
//             if(time>=0){
//                 seconds--
//                 if(seconds==-1){
//                     time--
//                     seconds=60
//                 }
//             }
//             if(time==0){
//                 p.textContent="your time is up"
//                 p.style.color="red"
//                 clearInterval(myInterval)
//             }
           
//         }else if(time>10){
//             p.textContent=""
//             h1.innerHTML=`00:${time-1}:${seconds}`
//             if(time>=0){
//                 seconds--
//                 if(seconds==-1){
//                     time--
//                     seconds=60
//                 }
//             }
//             if(time==0){
//                 p.textContent="your time is up"
//                 p.style.color="red"
//                 clearInterval(myInterval)
//             }
//         }
//         else{
//             h1.innerHTML=`00:00:00`
//         }
       
//     },1000)
   
// })
// res.addEventListener('click',function(){
    
//     h1.innerHTML=`00:00:00`
//     time=1
//     seconds=0
//     p.textContent=""
//     clearInterval(myInterval)
// })
// pause.addEventListener('click',function(){
//         h1.innerHTML=`00:0${time-1}:${seconds}`
    
//     clearInterval(myInterval) 
// })