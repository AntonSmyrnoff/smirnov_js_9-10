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


/*$(document).ready(function(){

	$(".niceCheck").each( //для каждого <span class = "niceCheck"> выполняется функция
		function() {
		     changeCheckStart($(this));
		}
	);
});*/
 
 $(document).ready(function() {
 	$('.jqueryCheck').each (
 		
 		function () {
 			changeCheckStart($(this));

 	})
 })


function changeCheckStart(el) {
	var el = el,
		checkName = el.attr("name"),
		checkId = el.attr("id"),
		checkTab = el.attr("tabindex"),
		checkValue = el.attr("value"),
		checkChecked = el.attr("checked");
		checkDisabled = el.attr("disabled");

	if (checkChecked) 	
		el.after("<span class='jqueryCheck jqueryChecked'><input type='checkbox'" + 
					" name='" + checkName + 
					"' id='" + checkId +
					"' tabindex='" + checkTab +
					"' value='" + checkValue +
					"' checked='" + checkChecked +
					"'></span");
	else 
		el.after("<span class='jqueryCheck'><input type='checkbox'" + 
					" name='" + checkName + 
					"' id='" + checkId +
					"' tabindex='" + checkTab +
					"' value='" + checkValue +
					"'></span");

	
	if (checkDisabled) {
		el.next().addClass("niceCheckDisabled");
		el.next().find("input").attr("disabled","disabled");
	};

	el.next().bind('click', function() {
		if (el.attr("checked")) {
			el.next().removeClass("jqueryChecked");
			el.find("input").attr("checked", false)
		} else {
			el.next().addClass("jqueryChecked");
			el.find("input").attr("checked", true)
		}
	})





	el.remove();




}









                                            



































