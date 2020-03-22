//Check specific Todos by clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});
//click on X to delete todo
$("ul").on("click", "span", function(boss){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	boss.stopPropagation();
});

$("input[type='text']").keypress(function(e){
	if(e.which === 13){
		//grabbig new todo text from input
		var todoText = $(this).val();
		$(this).val("");
		//create a new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</>");
	}
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();  
})