window.addEventListener('message', function (event) {
    let data = event.data
    if(data.armour > 0){
        $('.escudo').show()
    }else {
        $('.escudo').hide()
    }   
        $('#nivelescudo').html("๐ฆบ " +Math.round(data.armour))
        $('.nivelcomida').html("๐ " + Math.round(data.food))
        $('.nivelagua').html("๐งด " + Math.round(data.thirst))
    if(data.health < 50 ){
        $('.salud').show()
        if (data.health != -100){
            $('#nivelsalud').html("๐ค " + Math.round( data.health))
        }else if(data.health == -100){
            $('#nivelsalud').html("โ ")
        }
    }else {
        $('.salud').hide()
    }
});