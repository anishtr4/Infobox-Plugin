Infobox Plugin
==============

Highly customizable light weight pop up plugin

You can incorporate extra animation effects on pop-ups using either the "jQuery UI" library or the regular "jQuery" library. This plugin is straightforward to use, making it accessible to all users.




![alt tag](https://raw.githubusercontent.com/anishtr4/Infobox-Plugin/master/infoboxnew.png)

## Basic usage

$("body").infobox({ type : 'sucess'});


## Settings

no need to change "body" 
 
    $("body").infobox({
 
    type        : 'sucess',    /*here you can define sucess, error ,normal*/
    
	tittle      : 'succes You made it',  /*here you can define error message tittle*/
	
    message     : 'You passed success fully',  /*here you can define error message*/
    

	overlay     : 'true',   /*here you can define "true' or "false" to hide overlay while pop up*/

	effect      : 'on',     /*this is the one of the main part ,define "off" if u are not using jquery ui library*/

	anim        : 'slide',  /*here you can define diffrent animation like slide,fold,bounce,scale  if you are uisng "jquery ui"*/

	vposition   : 'right',  /*here you can define vertcal postion of pop up*/

	hposition   : 'bottom', /*here you can define horizontal postion of pop up*/

	timeout     : '4000',   /*here you can define timeout to hide the pop up*/
	});


## License

Released under the MIT License.
