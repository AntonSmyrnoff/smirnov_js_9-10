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

 $(document).ready(function() {
 	$('.jqueryCheck').each (
 		
 		function () {
 			changeCheckStart($(this));// меняем внешний вид при загрузке

 	})


 	$('.jqueryCheck').each(
 		
 		function () {
 			changeStatus($(this)); //обработчик кликов

 	})

  })


function changeCheckStart(el) { //функция изменения внешнего вида чекбокса
	var el = el,
		checkName = el.attr("name"),
		checkId = el.attr("id"),
		checkTab = el.attr("tabindex"),
		checkValue = el.attr("value"),
		checkChecked = el.attr("checked");
		checkDisabled = el.attr("disabled");

	if (checkChecked) //вставляем новый элемент с новым чекбоксом после исходного элемента 	
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
		el.next().addClass("jQueryCheckDisabled");
		el.next().find("input").attr("disabled","disabled");
	};

	el.remove(); //удаляем исходный элемент

}


function changeStatus(el) {
		var el = el,
			input = el.find('input');
		
		input.bind('change', function() { //при любом изменении инпута выполняется функция
			
			if (!input.attr("checked")) {
				el.addClass("jqueryChecked");
				input.attr("checked", true)
			} 
			else {
				el.removeClass("jqueryChecked");
				input.attr("checked", false)
			};

		})
}	


/*------- MENU--------*/
$(function () {
	var $links = $('.dropdown');
	
	$links.find('.dropdown>a').on('click', function(e) {
		e.preventDefault();
	});

	$links.on('mouseenter', function() {
					var $submenu = $(this).find('ul.submenu');
					$submenu.slideToggle(300);
				})
		   .on('mouseleave', function() {
					var $submenu = $(this).find('ul.submenu');
					$submenu.slideToggle(300);
				});

	
	var $links = $('.dropdown .dropdown');

	$links.on('mouseenter', function() {
					var $submenu = $(this).find('ul.submenu--secondLevel');
					$submenu.slideToggle(300);
				})
		   .on('mouseleave', function() {
					var $submenu = $(this).find('ul.submenu--secondLevel');
					$submenu.slideToggle(300);	
				});


})













                                            



































