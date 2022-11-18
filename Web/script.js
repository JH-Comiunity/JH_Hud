window.addEventListener('message', function (event) {
    let data = event.data
    if(data.armour > 0){
        $('.escudo').show()
    }else {
        $('.escudo').hide()
    }   
        $('#nivelescudo').html("🦺 " +Math.round(data.armour))
        $('.nivelcomida').html("🍗 " + Math.round(data.food))
        $('.nivelagua').html("🧴 " + Math.round(data.thirst))
    if(data.health < 50 ){
        $('.salud').show()
        if (data.health != -100){
            $('#nivelsalud').html("🤍 " + Math.round( data.health))
        }else if(data.health == -100){
            $('#nivelsalud').html("☠")
        }
    }else {
        $('.salud').hide()
    }
});