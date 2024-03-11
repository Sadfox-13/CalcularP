
function carregar(){
    var msg = document.getElementById('msg')
    var manha = document.getElementById('manha')
    var data = new Date()
    var hora = data.getHours()
    
    
    if(hora >= 0 && hora <= 12){
        document.body.style.background='rgb(196, 166, 47)'
        manha.src='Manha.png'
        msg.innerText=`Agora são ${hora}:00 horas Bom Dia!`
        
    }else if(hora >=12 && hora <=18){
        document.body.style.background='rgb(46, 46, 102)'
        manha.src='tarde.png'
        msg.innerText=`Agora são ${hora}:00 horas Boa Tarde!`
        
    }else{
        document.body.style.background='rgb(31, 31, 45)'
        manha.src='noite.png'
        msg.innerText=`Agora são ${hora}:00 horas Boa Noite!`
}



}