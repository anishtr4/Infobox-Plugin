Infobox_plugin
==============

Highly customizable Infobox Error message jquery plugin

you can use either with "jquery ui" library to get extra aniamtion effect on pop up or else you can also use only with "jquery" library
Any one who knows basic javascript or jquery can easily use this plugin 

below mentioned is the syntax 



    $("body").infobox({
    type        : 'sucess',    /*here you can define sucess, error ,normal*/

	tittle      : 'succes You made it',  /*here you can define error message tittle*/

    message     : 'You passed success fully',  /*here you can define error message*/

	overlay     : 'true',   /*here you can define "true' or "false" to hide overlay while pop*/

	effect      : 'on',     /*this is the one of the main part ,define "off" if u are not using jquery ui library*/

	anim        : 'slide',  /*here you can define diffrent animation like slide,fold,bounce,scale*/

	vposition   : 'right',  /*here you can define vertcal postion of pop up*/

	hposition   : 'bottom', /*here you can define horizontal postion of pop up*/

	timeout     : '4000',   /*here you can define timeout to hide the pop up*/
	});


	

