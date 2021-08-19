$(document).ready(function () {
    var currentFloor=02; //текущий этаж
    var counterUp=$(".counter-up");//каждый отдельный класс в svg
    var counterDown=$(".counter-down");//увеличение этажа
    var floorPath = $(".home-image path");//уменьгение этажа
    
    //функция при наведении мишью на этаж 
    floorPath.on("mouseover", function(){
        floorPath.removeClass("current-floor");//удаление активного класса у этажей
        currentFloor=$(this).attr('data-floor');//получение значения текущего этажа
        $(".counter").text(currentFloor);//запись значения этажа в счетчик справа
    });

    //отслеживание клика по кнопке вверх
    counterUp.on("click", function(){
        if(currentFloor<18){
            currentFloor++;
            usCurrentFloor=currentFloor.toLocaleString('en-US',{minimumIntegerDigits:2,useGrouping:false}); //форматирование на 00
            $(".counter").text(usCurrentFloor);//запись значения этажа в счетчик справа
            floorPath.removeClass("current-floor");//удаление активного класса у этажей
            $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor');//подсветка текущего этажа
        }
    })

    counterDown.on("click", function(){
        if(currentFloor>2){
            currentFloor--;
            usCurrentFloor=currentFloor.toLocaleString('en-US',{minimumIntegerDigits:2,useGrouping:false});//форматирование на 00
            $(".counter").text(usCurrentFloor);//запись значения этажа в счетчик справа
            floorPath.removeClass("current-floor");//удаление активного класса у этажей
            $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor');//подсветка текущего этажа
        }
    })
});