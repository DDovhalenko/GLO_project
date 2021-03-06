$(document).ready(function () {
    var currentFloor=2; //текущий этаж
    var counterUp=$(".counter-up");//увеличение этажа 
    var counterDown=$(".counter-down");//уменьшение этажа
    var viewFlats=$(".view-flats");//Смотреть квартиры на этаже
    var floorPath = $(".home-image path");//каждый отдельный класс в svg 
    var viewFlatsDialogContainer=$(".choose-flat-dialog-wrapper");
    var currentFlat = 40;
    var flatPath = $(".choose-flat-dialog__image path");
    var viewFlatsDialogList = $(".choose-flat-dialog__list");
    var viewFlatsDialogClose=$(".choose-flat-dialog__close > svg");
    
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
    });

    counterDown.on("click", function(){
        if(currentFloor>2){
            currentFloor--;
            usCurrentFloor=currentFloor.toLocaleString('en-US',{minimumIntegerDigits:2,useGrouping:false});//форматирование на 00
            $(".counter").text(usCurrentFloor);//запись значения этажа в счетчик справа
            floorPath.removeClass("current-floor");//удаление активного класса у этажей
            $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor');//подсветка текущего этажа
        }
    });

    viewFlats.on("click", function() {
        window.scrollTo(0,0);
        $("body").addClass("body__overflow-hidden");
        viewFlatsDialogContainer.addClass("choose-flat-dialog-wrapper__opened");
        viewFlatsDialogContainer[0].dataset.floor = currentFloor;
        $(".choose-flat-dialog__floor-number").text("Этаж "+currentFloor);

    });

    flatPath.on("mouseover", function(){
        flatPath.removeClass("flat__active");
        viewFlatsDialogList.children().removeClass("choose-flat-dialog__list-item_active");
        currentFlat=$(this).attr('data-flat');
        $(`ul [data-flat=${currentFlat}]`).addClass("choose-flat-dialog__list-item_active");
        $(this).addClass("flat__active");
    });

    viewFlatsDialogList.on("mouseover", function(event){
        viewFlatsDialogList.children().removeClass("choose-flat-dialog__list-item_active");
        flatPath.removeClass("flat__active");
        currentFlat = event.target.dataset.flat;
        $(`svg [data-flat=${currentFlat}]`).addClass("flat__active");
    });

    flatPath.on("click", function() {
        currentFlat = $(this).attr("data-flat");
        flatPath.removeClass("flat__active");
        viewFlatsDialogList.children().removeClass("choose-flat-dialog__list-item_active");
        $(`ul [data-flat=${currentFlat}]`).addClass("choose-flat-dialog__list-item_active");
        $(this).addClass("flat__active");
    });

    viewFlatsDialogList.on("click", function(event) {
        viewFlatsDialogList.children().removeClass("choose-flat-dialog__list-item_active");
        $(event.target).addClass("choose-flat-dialog__list-item_active");
        flatPath.removeClass("flat__active");
        currentFlat = event.target.dataset.flat;
        $(`svg [data-flat=${currentFlat}]`).addClass("flat__active");
        //viewFlatsDialogContainer.dataset.floor = floor
    });

    viewFlatsDialogClose.on("click", function() {
        viewFlatsDialogContainer.removeClass("choose-flat-dialog-wrapper__opened");
        $("body").removeClass("body__overflow-hidden");
    });
});