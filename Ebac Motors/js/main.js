$(document).ready(function(){
            $('#carousel-imagens').slick({
                autoplay:true
            })

            $('.menu-hamburguer').click(function(){
                $('nav').slideToggle();
            })

            $('#telefone').mask('(00) 00000-0000', {
                placeholder: '(00) 00000-0000'
            })

            $('form').validate({
                rules: {
                    nome: {
                        required: true
                    },
                    email: {
                        required: true,
                        email: true
                    },
                    telefone: {
                        required: true
                    },
                    
                    veiculoDeInteresse: {
                        required: true
                    },

                    mensagem: {
                        required: true
                    }
                },
                messages: {
                    nome: "Por favor, insira seu nome.",
                    telefone: "Por favor, insira seu telefone.",
                    email: "Por favor, insira seu e-mail.",
                    veiculoDeInteresse: "Por favor, insira um veiculo.",
                    mensagem: "Por favor, insira sua mensagem.",
                },
                submitHandler: function(form) {
                    console.log(form)
                },
                invalidHandler: function(evendo, validador) {
                    let camposIncorretos = validador.numberOfInvalids();
                    if (camposIncorretos) {
                        alert(`Existem ${camposIncorretos} campos incorretos`)
                    }
                }
            })

            $('.lista-veiculos button').click(function() {
                const destino = $('#contato');
                const nomeVeiculo = $(this).parent().find('h3').text();

                $('#veiculo-interesse').val(nomeVeiculo);

                $('html').animate({
                    scrollTop: destino.offset().top
                }, 750)
            })
        })