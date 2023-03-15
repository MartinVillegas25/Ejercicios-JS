

const key = document.querySelectorAll('.key');






    

      window.addEventListener('keydown', (e)=>{
         key.forEach(k=>{
            let num = k.getAttribute('data-key');
            const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
            
  
            if(e.keyCode == num){
                k.classList.add('playing');
                audio.play();
                setTimeout(() => {
                    k.classList.remove('playing');
                }, 200);
                
            }else{
                console.log('no esta');
            }
            
        })
   })
    
        



 
