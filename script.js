// ===== SISTEMA DE NAVEGAÇÃO =====


document.addEventListener("DOMContentLoaded", () => {


    const links = document.querySelectorAll("nav a");

    const secoes = document.querySelectorAll(
        "section, .content, .maior"
    );

    const header = document.querySelector("header");



    // ===== CLIQUE NOS BOTÕES =====


    links.forEach(link => {


        link.addEventListener("click", (evento) => {


            evento.preventDefault();


            const destino = document.querySelector(
                link.getAttribute("href")
            );



            if(destino){


                const alturaHeader = header.offsetHeight;


                const posicao =
                destino.offsetTop - alturaHeader;



                window.scrollTo({

                    top: posicao,

                    behavior:"smooth"

                });



                // ativa animação

                destino.classList.remove("mostrar");


                setTimeout(() => {

                    destino.classList.add("mostrar");

                },300);


            }


        });


    });





    // ===== ANIMAÇÃO AUTOMÁTICA AO APARECER =====


    const observador = new IntersectionObserver((entradas)=>{


        entradas.forEach(entrada=>{


            if(entrada.isIntersecting){


                entrada.target.classList.add("mostrar");


            }


        });


    },{


        threshold:0.2


    });



    secoes.forEach(secao=>{

        observador.observe(secao);

    });






    // ===== BOTÃO ATIVO NO MENU =====


    window.addEventListener("scroll",()=>{


        let atual = "";


        secoes.forEach(secao=>{


            const topo =
            secao.offsetTop - 150;



            if(window.scrollY >= topo){

                atual = secao.id;

            }


        });




        links.forEach(link=>{


            link.classList.remove("ativo");



            if(link.getAttribute("href") === "#" + atual){


                link.classList.add("ativo");


            }


        });



    });



});
