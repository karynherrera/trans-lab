window.data = ()=>{
  let idTarjeta;
  fetch(`_http://bip.franciscocapone.com/api/getSaldo/{idTarjeta}`)
		.then(response => response.json()) //aca viene la respuesta
		.then(data => {
			console.log(data);
			renderInfo(data);//esto me muestra en el dom la respuesta
		})
		/*Traemos los elementos del DOM*/
		//Elementos del navbar
		const btnNavSaldo = document.getElementById('navSaldo');
		const btnNavTarifa = document.getElementById('navTarifa');
		const btnNavPerfil = document.getElementById('navPerfil');
		const btnNavFqs = document.getElementById('navFqs');
		
		//Elementos de la sección botones
		const btnMenuSaldo = document.getElementById('verSaldo');
		const btnMenuTarifa = document.getElementById('menuCalcularTarifa');
		const btnMenuPerfil = document.getElementById('menuPerfil');
		const btnMenuFqs = document.getElementById('menuFqs');

		// Secciones
		const seccionBotones = document.getElementById('sectionButtons');
		const seccionPerfil = document.getElementById('sectionPerfil');
		const seccionFqs = document.getElementById('sectionFqs');

		//Eventos del Navbar
		btnNavPerfil.addEventListener('click', function(event) {
			//event.preventDefault();
			seccionBotones.classList.add('sectionHide');
		//	seccionPerfil.classList.remove('sectionHide');
		});
}
