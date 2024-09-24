// let link = document.getElementById('link');
  


document.querySelector(".icon img").style.display = "none";

document.querySelector(".icon ").addEventListener("click", () => {// basically hum select kr rahe ha .icon ko to humara icon or img hi show  ek time me ek hi thing so hum i pr click krenge to sidebar show hoga and img pr click krenge to sidebargo chlega or i show ho jayega 
    document.querySelector('.sidebar').classList.toggle('sidebargo');

    if (document.querySelector('.sidebar').classList.contains('sidebargo')) {//ya sidebar ja chuka ha 
        document.querySelector('.icon i').style.display = 'inline';
        document.querySelector('.icon img').style.display = 'none';
            document.querySelector('.main2').style.zIndex='0';// for get the .main2 greater than sidebar index;

    }
    else {//yeha sidebar  ha 


        setTimeout(() => {
            document.querySelector('.icon img').style.display = 'inline';
        }, 350//isse cross img thoda late show hoga 4ms baad 
        )
        document.querySelector('.icon i').style.display = 'none';
       document.querySelector('.main2').style.zIndex='-1';// sidebar index is greater than .main2 ka index;
    }
})



 


