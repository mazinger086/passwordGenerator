(function () {

    /*-----------------------------------*/
    /* Variables y Objetos Generales*/
    /*-----------------------------------*/

    var app = document.querySelector('#app');
    var inputCaracteres = document.querySelector('#numero-caracteres');
    var btnSimbolos = document.querySelector('#btn-simbolos');
    var btnNumeros = document.querySelector('#btn-numeros');
    var btnMayusculas = document.querySelector('#btn-mayusculas');


    var configuracion = {
        caracteres: parseInt(inputCaracteres.value), //lo convertimos a Int
        simbolos: true,
        numeros: true,
        mayusculas: true,
        minusculas: true
    }

    var caracteres = {
        numeros: '0 1 2 3 4 5 6 7 8 9',
        simbolos: '! @ # $ ^ & * ( ) _ - + = { [ ] } ; : < , > . ? /',
        mayusculas: 'A B C D E F G H I J K L M N Ñ O P Q R S T U V W X Y Z',
        minusculas: 'a b c d e f g h i j k l m n ñ o p q r s t u v w x y z'
    }




    /*-----------------------------------*/
    /* Eventos */
    /*-----------------------------------*/

    //Evento para que la app haga submit
    app.addEventListener('submit', function (e) {
        e.preventDefault();
    });

    app.elements.namedItem('btn-mas-uno').addEventListener('click', function () {
        if (configuracion.caracteres < 12) {
            configuracion.caracteres++;
            inputCaracteres.value = configuracion.caracteres;
        }

    });

    app.elements.namedItem('btn-menos-uno').addEventListener('click', function () {
        if (configuracion.caracteres > 1) {
            configuracion.caracteres--;
            inputCaracteres.value = configuracion.caracteres;
        }

    });

    app.elements.namedItem('btn-simbolos').addEventListener('click', function () {
        btnToggle(this);
        configuracion.simbolos = !configuracion.simbolos;
        // console.log("Simbolos Activados:"+ configuracion.simbolos);


    });

    app.elements.namedItem('btn-numeros').addEventListener('click', function () {
        btnToggle(this);
        configuracion.numeros = !configuracion.numeros;
        // console.log("Numeros Activados:"+ configuracion.numeros);

    });

    app.elements.namedItem('btn-mayusculas').addEventListener('click', function () {
        btnToggle(this);
        configuracion.mayusculas = !configuracion.mayusculas;
        // console.log("Mayusculas Activados:"+ configuracion.mayusculas);

    });

    app.elements.namedItem('btn-generar').addEventListener('click', function () {
        generarPassword();
    });

    app.elements.namedItem('input-password').addEventListener('click', function () {
        copiarPassword();
    })



    /*-----------------------------------*/
    /*Usamos un ciclo para  acortar el codigo */
    /*-----------------------------------*/

    // var botones = [btnSimbolos,btnNumeros,btnMayusculas];
    // botones.forEach(e => {
    //    e.addEventListener('click', function(){
    //        btnToggle(this);

    //    })

    // });

    /*-----------------------------------*/
    /* Funciones */
    /*-----------------------------------*/

    function btnToggle(elemento) {
        elemento.classList.toggle('false');// agrega la clase false para interactuar con los estilos
        elemento.childNodes[0].classList.toggle('fa-check'); // toggle entre clases de font awesome
        elemento.childNodes[0].classList.toggle('fa-times');

    }

    function generarPassword() {
        var caracteresFinales = '';
        var password = '';

        for (propiedad in configuracion) {
            if (configuracion[propiedad] == true) {
                caracteresFinales += caracteres[propiedad] + " ";


            }

        }


        caracteresFinales = caracteresFinales.trim();// nos quita el espaciado al ppio y al final

        caracteresFinales = caracteresFinales.split(' ');//nos hace el string a array

        for (let i = 0; i < configuracion.caracteres; i++) {
            password += caracteresFinales[Math.floor(Math.random() * caracteresFinales.length)];

        }

        app.elements.namedItem('input-password').value = password;







    }

    function copiarPassword() {
        var alerta = document.querySelector('.alerta-copiado');
        app.elements.namedItem('input-password').select();
        document.execCommand('copy');
        alerta.classList.add('active');

        setTimeout(function(){
            alerta.classList.remove('active');
        }, 2000);

    }

    generarPassword();

}());