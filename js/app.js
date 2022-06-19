// Dom7
var $$ = Dom7;

// Init App
var app = new Framework7({
  	id: 'com.app',
  	root: '#app',
	theme: 'md',
	view: {
        pushState: true
    },
	cache:false,
	cacheDuration: 0,
	modalTitle: 'App Framework7',
	panel: {
		swipe: true,
	},
  	routes: [
		{
		path: '/home/',
    	url: 'index.html',
    	name: 'home',
  		},
		{
		path: '/favoritos/',
    	url: 'favoritos.html',
    	name: 'favoritos',
  		},
		{
		path: '/propios/',
    	url: 'propios.html',
    	name: 'propios',
  		},
		{
		path: '/buscar/',
    	url: 'buscar.html',
    	name: 'buscar',
  		},
		{
		path: '/subir/',
    	url: 'subir.html',
    	name: 'subir',
  		},
		{
		path: '/notificaciones/',
    	url: 'notificaciones.html',
    	name: 'notificaciones',
  		},
		{
		path: '/acerca/',
    	url: 'acerca.html',
    	name: 'acerca',
  		},
		{
		path: '/perfil/',
    	url: 'perfil.html',
    	name: 'perfil',
  		},

	],
	dialog: {
		title: 'ArtFol App',
		buttonOk: 'Aceptar',
  	},
	popup: {
		closeOnEscape: true,
		backdrop : false
	},
	sheet: {
		closeOnEscape: true,
	},
	popover: {
		closeOnEscape: true,
	},
	actions: {
		closeOnEscape: true,
	}
});



$$('#btnLogin').on('click', function (e) {
	e.preventDefault();
	
	var $valid = $$('#form-login')[0].checkValidity();
	if ($valid){
        $$('#form-login').trigger('reset');	
        app.loginScreen.close('#modal-login');
		
		app.dialog.alert('¡ Bienvenido a la App !');
    }
	
});



$$(document).on('click', '#btnCheckout', function (e) {
	e.preventDefault();

	
	app.dialog.confirm('¿Seguro desea finalizar su compra?', function () {

		//app.dialog.alert('Great!');
		
		var notification = app.notification.create({
		 icon: '<i class="material-icons">check</i>',
		 title: 'Order',
		 titleRightText: '',
		 subtitle: '',
		 text: "Your order has been received.",
		 closeTimeout: 3000,
		});
		notification.open();

	});



});


