window.data = ()=>{
  let idTarjeta;
  fetch(`_http://bip.franciscocapone.com/api/getSaldo/{idTarjeta}`)
		.then(response => response.json()) //aca viene la respuesta
		.then(data => {
			console.log(data);
			renderInfo(data);//esto me muestra en el dom la respuesta
		})
}