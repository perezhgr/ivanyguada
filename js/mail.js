$(document).ready(function() {
	//VERIFICA DE QUE SE ENVIO UN CORREO ELECTRONICO
	$( "#enviar" ).click(function() {
        
		swal({
			title: '¿ Estás seguro(a) que desea enviar la invitación?',
			type: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Aceptar'
		}).then(function () {
			$("#contact-form").submit(function(){

				$.ajax({
					url: "./mail.php",
					type: "POST",
					dataType: 'JSON',
					data:$("#contact-form").serialize(),
					success: function(data) {
						if(data.respuesta_ajax == true){
							swal(
								'Mensaje enviado!',
								'Tu correo ha sido enviado',
								'success'
								);
						}
                    }
       })
				return false;
			})
		})
	});

});

