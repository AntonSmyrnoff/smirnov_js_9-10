$(function() {
    $('.jcarousel').jcarousel({
        wrap: 'circular',
    });

    $('.jcarousel-prev').jcarouselControl({
        target: '-=1'
    });

    $('.jcarousel-next').jcarouselControl({
        target: '+=1'
    });

    /*Навигация по карусели*/
    $('.jcarousel-pagination').jcarouselPagination({
        item: function(page) {
            return '<a href="#' + page + '">' + page + '</a>';
        }
    });

    $('.jcarousel-pagination').find('a:first-child').addClass('active');//при загрузке страницы присваиваем класс active 1-му элементу

    $('.jcarousel-pagination')
    .on('jcarouselpagination:active', 'a', function() {
        $(this).addClass('active');
    })
    .on('jcarouselpagination:inactive', 'a', function() {
        $(this).removeClass('active');
    });


});

$(document).ready(function() {
  $('select').niceSelect();
});


/*-----CHECKBOX-----*/

$(document).ready(function(){

    $(".niceCheck").mousedown(
    /* при клике на чекбоксе меняем его вид и значение */
    function() {
         changeCheck($(this));
    });

    $(".niceCheck").each(
    /* при загрузке страницы нужно проверить какое значение имеет чекбокс и в соответствии с ним выставить вид */
    function() {
         changeCheckStart($(this));
    });

});

function changeCheck(el) {
    /* 
        функция смены вида и значения чекбокса
        el - span контейнер дял обычного чекбокса
        input - чекбокс
    */

         var el = el,
              input = el.find("input").eq(0);
         if(!input.attr("checked")) {
            el.css("background-position","0 -17px");    
            input.attr("checked", true)
        } else {
            el.css("background-position","0 0");    
            input.attr("checked", false)
        }
         return true;
}

function changeCheckStart(el) {
/* 
    если установлен атрибут checked, меняем вид чекбокса
*/

    var el = el,
            input = el.find("input").eq(0);
          if(input.attr("checked")) {
            el.css("background-position","0 -17px");    
            }
         return true;
}



$(document).ready(function() {
    $(".niceCheck_1").each( /* при загрузке страницы меняем внешний вид чекбокса */
    
    function() {
         changeCheckStart_1($(this));
    });
})

function changeCheckStart_1(el) {
    var $el = el;
        $input = $el.find('input').eq(0);
        checkName = $input.attr("name");
        checkId = $input.attr("id");
        checkChecked = $input.attr("checked");
        checkDisabled = $input.attr("disabled");
        checkTab = $input.attr("tabindex");
        checkValue = $input.attr("value");

        $el.replaceWith('<span class="niceCheckJs">'+'<input type="checkbox" name="'+checkName+'" id="'+checkId+'" checked="'+checkChecked+'" tabindex="'+checkTab+'" value="'+checkValue+'">'+'</span>');

        if(checkChecked) {
            $('#'+checkId).closest('span').css("background-position","0 -17px");
        }

        if(checkDisabled) {
            $('#'+checkId).closest('span').addClass('niceCheckJsDisabled');
            $('#'+checkId).attr("disabled","disabled");
        }
        /*return true;*/

}




                                            



































