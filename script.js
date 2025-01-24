const Pic1=document.getElementById('Pic1');
const Pic2=document.getElementById('Pic2');
const Pic3=document.getElementById('Pic3');
const Pic4=document.getElementById('Pic4');
const thum1=document.getElementById('thumb1');
const thum2=document.getElementById('thumb2');
const thum3=document.getElementById('thumb3');
const thum4=document.getElementById('thumb4');
const Blurpage=document.getElementById('BlurPage');
const Close=document.getElementById('close2');
const decrease2=document.getElementById('decrease2');
const increase2=document.getElementById('increase2');

let Counter=1;
let Co=1;
thum1.addEventListener( 'click',()=>{
    Counter=1;
    Co=0;
    Pic1.style.display='block';
    Pic2.style.display='none';
    Pic3.style.display='none';
    Pic4.style.display='none';

    thum1.style.border='3px solid hsl(26, 100%, 55%)';
    thum2.style.border='none';
    thum3.style.border='none';
    thum4.style.border='none';

    thum1.style.opacity='.5';
    thum2.style.opacity='1';
    thum3.style.opacity='1';
    thum4.style.opacity='1';

    Counter=(Counter%4) +1;
    Co=(Co%3)+1;
})

thum2.addEventListener( 'click',()=>{
    Counter=2;
    Co=1;
    Pic1.style.display='none';
    Pic2.style.display='block';
    Pic3.style.display='none';
    Pic4.style.display='none';

    thum2.style.border='3px solid hsl(26, 100%, 55%)';
    thum1.style.border='none';
    thum3.style.border='none';
    thum4.style.border='none';

    thum2.style.opacity='.5';
    thum1.style.opacity='1';
    thum3.style.opacity='1';
    thum4.style.opacity='1';

    Counter=(Counter%4) +1;
    Co=(Co%3)+1;
})
thum3.addEventListener( 'click',()=>{
    Co=2;
    Counter=3;
    Pic1.style.display='none';
    Pic2.style.display='none';
    Pic3.style.display='block';
    Pic4.style.display='none';

    thum3.style.border='3px solid hsl(26, 100%, 55%)';
    thum2.style.border='none';
    thum1.style.border='none';
    thum4.style.border='none';

    thum3.style.opacity='.5';
    thum2.style.opacity='1';
    thum1.style.opacity='1';
    thum4.style.opacity='1';

    Counter=(Counter%4) +1;
    Co=(Co%3)+1;
})
thum4.addEventListener( 'click',()=>{
    Co=3;
    Counter=4;
    Pic1.style.display='none';
    Pic2.style.display='none';
    Pic3.style.display='none';
    Pic4.style.display='block';

    thum4.style.border='3px solid hsl(26, 100%, 55%)';
    thum2.style.border='none';
    thum3.style.border='none';
    thum1.style.border='none';

    thum4.style.opacity='.5';
    thum2.style.opacity='1';
    thum3.style.opacity='1';
    thum1.style.opacity='1';

    Counter=(Counter%4) +1;
    Co=(Co%3);

})
increase2.addEventListener( 'click', ()=> {

    if(Co==0){
        thum1.click();
    }
    else if(Co==1){
        thum2.click();
    }
    else if(Co==2){
        thum3.click();
    }
    else if(Co==3){
        thum4.click();
    }
})
decrease2.addEventListener('click', ()=> {
    if(Co==0){
        thum3.click();
    }
    else if(Co==1){
        thum4.click();
    }
    else if(Co==2){
        thum1.click();
    }
    else if(Co==3){
        thum2.click();
    }
})
    
Pic1.addEventListener( 'click', ()=> {
    Blurpage.style.display='flex';
    GetCount(1);
    
})
Pic2.addEventListener( 'click', ()=> {
    Blurpage.style.display='flex';
    GetCount(2);
})
Pic3.addEventListener( 'click', ()=> {
    Blurpage.style.display='flex';
    GetCount(3);
})
Pic4.addEventListener( 'click', ()=> {
    Blurpage.style.display='flex';
    GetCount(4);
})
Close.addEventListener( 'click',()=> {
    Blurpage.style.display='none';
})








// BlurMainpage 

const Pi1=document.getElementById('Pi1');
const Pi2=document.getElementById('Pi2');
const Pi3=document.getElementById('Pi3');
const Pi4=document.getElementById('Pi4');
const thu1=document.getElementById('thum1');
const thu2=document.getElementById('thum2');
const thu3=document.getElementById('thum3');
const thu4=document.getElementById('thum4');
const decrease=document.getElementById('decrease');
const increase=document.getElementById('increase');

function GetCount(Count){

    if(Count==1){
        thu1.click();
    }

    else if(Count==2){
        thu2.click();
    }

    else if(Count==3){
        thu3.click();
    }

    else if(Count==4){
        thu4.click();
    }

}    
    thu1.addEventListener( 'click',()=>{
        Count=1;

        Pi1.style.display='block';
        Pi2.style.display='none';
        Pi3.style.display='none';
        Pi4.style.display='none';
        
        thu1.style.border='3px solid hsl(26, 100%, 55%)';
        thu2.style.border='none';
        thu3.style.border='none';
        thu4.style.border='none';

        thu1.style.opacity='.5';
        thu2.style.opacity='1';
        thu3.style.opacity='1';
        thu4.style.opacity='1';

        Count=(Count%4) +1;
    })

    thu2.addEventListener( 'click',()=>{
        Count=2;

        Pi1.style.display='none';
        Pi2.style.display='block';
        Pi3.style.display='none';
        Pi4.style.display='none';
        
        thu2.style.border='3px solid hsl(26, 100%, 55%)';
        thu1.style.border='none';
        thu3.style.border='none';
        thu4.style.border='none';

        thu2.style.opacity='.5';
        thu1.style.opacity='1';
        thu3.style.opacity='1';
        thu4.style.opacity='1';

        Count=(Count%4) +1;
    })
    thu3.addEventListener( 'click',()=>{

        Count=3;
        Pi1.style.display='none';
        Pi2.style.display='none';
        Pi3.style.display='block';
        Pi4.style.display='none';
        
        thu3.style.border='3px solid hsl(26, 100%, 55%)';
        thu2.style.border='none';
        thu1.style.border='none';
        thu4.style.border='none';

        thu3.style.opacity='.5';
        thu2.style.opacity='1';
        thu1.style.opacity='1';
        thu4.style.opacity='1';

        Count=(Count%4) +1;
    })
    thu4.addEventListener( 'click',()=>{

        Count=4;
        Pi1.style.display='none';
        Pi2.style.display='none';
        Pi3.style.display='none';
        Pi4.style.display='block';
        
        thu4.style.border='3px solid hsl(26, 100%, 55%)';
        thu2.style.border='none';
        thu3.style.border='none';
        thu1.style.border='none';

        thu4.style.opacity='.5';
        thu2.style.opacity='1';
        thu3.style.opacity='1';
        thu1.style.opacity='1';

        Count=(Count%4) +1;
    })

    increase.addEventListener( 'click',()=> {
        if(Count==1){
            thu1.click();
        }
        else if(Count==2){
            thu2.click();
        }
        else if(Count==3){
            thu3.click();
        }
        else if(Count==4){
            thu4.click();
        }
    })

    decrease.addEventListener( 'click',()=> {
        if(Count==1){
            thu3.click();
        }
        else if(Count==2){
            thu4.click();
        }
        else if(Count==3){
            thu1.click();
        }
        else if(Count==4){
            thu2.click();
    }
})

    // Cart Work

    const Plus=document.getElementById('plus');
    const minus=document.getElementById('minus');
    const Ocount=document.getElementById('Ocount');
    const cartcountedno=document.getElementById('cartcountedno');
    const Cartbutton=document.getElementById('Cartbutton');
    const Cartimg=document.getElementById('Cartimg');
    const CartBox=document.getElementById('Cart');
    const emptycart=document.getElementById('emptycart');
    const item123=document.getElementById('item123');
    const Ocount2=document.getElementById('Ocount2');
    const Total=document.getElementById('Total');
    const deleter=document.getElementById('delete');
    const btn2=document.getElementById('bt2');

   
        let Oc=0;
    
    Plus.addEventListener( 'click' , ()=> {
        Oc++;
        Ocount.textContent=Oc;
    })
    minus.addEventListener('click',()=> {
        if(Oc==0){
            Oc=0;
        }
        else{
            Oc--;
        }
        Ocount.textContent=Oc;
        
    })

    Cartbutton.addEventListener( 'click', ()=> {
        if(Oc>0){
            cartcountedno.textContent=Oc;
            cartcountedno.style.display='flex'
        }
        else{
            cartcountedno.style.display='none';
        }
    })

    let summacount=0;
    Cartimg.addEventListener( 'click',()=> {
        if(Oc>0){
            emptycart.style.display='none';
            item123.style.display='block';
            Ocount2.textContent=Oc;
            Total.textContent=Oc*125;
        }
        if(summacount==0){
            CartBox.style.display='block';
            summacount=1;
        }
        else{
            CartBox.style.display='none';
            summacount=0;
        }
        
    })

    deleter.addEventListener('click',()=>{
  
            item123.style.display='none';
            emptycart.style.display='flex';
            Oc=0;
            Ocount.textContent=Oc;
            Ocount2.textContent=Oc;
            cartcountedno.textContent=Oc;
            cartcountedno.style.display='none';
            Total.textContent=Oc*125;
            CartBox.style.display='none';
    })


    btn2.addEventListener('click',()=>{
            item123.style.display='none';
            emptycart.style.display='flex';
            Oc=0;
            Ocount.textContent=Oc;
            Ocount2.textContent=Oc;
            cartcountedno.textContent=Oc;
            cartcountedno.style.display='none';
            Total.textContent=Oc*125;
            summacount3=1;
            CartBox.style.display='none';
        
    })


// CartNumber
