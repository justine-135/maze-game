window.addEventListener('load', ()=>{
    
    const start1 = document.querySelector('#lvl1start');
    const end1 = document.querySelector('#lvl1end');

    const start2 = document.querySelector('#lvl2start');
    const end2 = document.querySelector('#lvl2end');

    const start3 = document.querySelector('#lvl3start');
    const end3 = document.querySelector('#lvl3end');

    const lvl1 = document.querySelector('.lvl1');
    const lvl2 = document.querySelector('.lvl2');
    const lvl3 = document.querySelector('.lvl3');

    const scream = document.querySelector("#scary");
    const victory = document.querySelector('#victory');

    const rewardBtn = document.querySelector('.reward');
    const againBtn = document.querySelector('.playagain');

    lvl2.style.display = "none";
    lvl3.style.display = "none";

    let init = 0;

    document.querySelector('#gamestart1').addEventListener('mouseover', ()=>{
        init = 0;
    })

    document.querySelector('#gamestart2').addEventListener('mouseover', ()=>{
        init = 0;
    })

    document.querySelector('#gamestart3').addEventListener('mouseover', ()=>{
        init = 0;
    })

    document.querySelector('#stroke').addEventListener('mouseover', ()=>{
        if(init == 1){
            alert('Try again');
            init = 0;
        }
    })

    document.querySelector('#stroke2').addEventListener('mouseover', ()=>{
        if(init == 1){
            alert('Try again');
            init = 0;
        }
    })

    document.querySelector('#stroke3').addEventListener('mouseover', ()=>{
        if(init == 1){
            alert('Try again');
            init = 0;
        }
    })

    start1.addEventListener('mouseover', ()=>{
       init = 1    
    })

    end1.addEventListener('mouseover', ()=>{
        if(init == 1){
            lvl2.style.display = "block";
            lvl1.style.display = "none";
            init = 0;

        }
    })
    
    start2.addEventListener('mouseover', ()=>{
        init = 1;  
     })
 
     end2.addEventListener('mouseover', ()=>{
         if(init == 1){
             lvl3.style.display = "block";
             lvl2.style.display = "none";
             init = 0;
         }
     })

     start3.addEventListener('mouseover', ()=>{
        init = 1;  
     })
 
     end3.addEventListener('mouseover', ()=>{
         if(init == 1){
 
             init = 0;
             rewardBtn.style.display = "block";

        }
     })

     rewardBtn.addEventListener('click', ()=>{
        document.body.style.backgroundImage = "url('./img/victory.jpg')";
        lvl3.style.display = "none";
        rewardBtn.style.display = "none";
        victory.play();
        againBtn.style.display = "block"

     })

     againBtn.addEventListener('click', ()=>{
        document.body.style.backgroundImage = "url('./img/scary.jpg')";
        scream.play();
        victory.muted = true;
        againBtn.style.display = "none";

     })

     rewardBtn.style.display = "none";
     againBtn.style.display = "none";

})