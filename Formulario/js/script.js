
$(document).ready(function(){

$('#enviar').click(function(){

		var errores='';
		// Validando nombre
		if($('#nombres').val() == ''){
			errores += '<p><img src="img/error.png"> Escriba un nombre</p>'
			$('#nombres').css("border-color", "#F15B4B")

		}else{
			$('#nombres').css("border-color", "#D1D1D1")
		}

		// Validando correo
		if($('#correo').val() == ''){
			errores += '<p><img src="img/error.png"> Escriba un correo</p>'
			$('#correo').css("border-color", "#F15B4B");


		}else{
			$('#correo').css("border-color", "#D1D1D1")
		}

		// Validando mensaje
		if($('#mensaje').val() == ''){
			errores += '<p><img src="img/error.png"> Escriba un mensaje</p>'
			$('#mensaje').css("border-color", "#F15B4B")
		}else{
			$('#mensaje').css("border-color", "D1D1D1")
		}

		// Enviando mensaje
		if(errores== '' == false){
			var mensajeModal = '<div class="modal_wrap" >' + 
								'<div class="mensaje_modal p-4 text-white m-5 p-5 block-example border border-light" data-aos="flip-right"  data-aos-duration="1000">'+
								'<h3 class="text-center">Errores</h3>'+
									errores+
									'<span id="btnClose" class=" btn btn-danger block-example text-white btn-block">Cerrar</span>'+
									'</div>'+
								'</div>'
								$('body').append(mensajeModal);

		}

		// Cerrando modal

		$('#btnClose').click(function(){

			$('.modal_wrap').remove();
		});


	});
});