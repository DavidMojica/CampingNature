<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="ToastNotify.css">
    <script src="ToastNotify.js" defer></script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <title>ToastNotify</title>
</head>

<body>
    <div class="container mt-4">
        <h2 class="text-center my-5">ToastNotify</h2>
        <div class="row">
            <div class="col-md-3">
                <button class="btn btn-success" id="successo">Success</button>
            </div>
            <div class="col-md-3">
                <button class="btn btn-danger" id="errores">Error</button>
            </div>
            <div class="col-md-3">
                <button class="btn btn-warning" id="advertencia">Warning</button>
            </div>
            <div class="col-md-3">
                <button class="btn btn-info" id="informacion">Info</button>
            </div>
        </div>
    </div>

    <script>
    /*Metodo de uso 
    Creamos una nueva instancia y asignamos el tipo de evento
    ->success
    ->error
    ->warning
    ->info
    let options = {
            head: '¡success!',
            msg: 'We write the message that we want to notify',
            timer: 3000
    }
    let notify = new ToastNotify('success', options)
    */
    successo.addEventListener('click', (e) => {
        new ToastNotify('success', {
            head: '¡exito!',
            msg: 'Mensaje exitosamente a mostrar en la notificacion',
            timer: 3000
        });
    });
    errores.addEventListener('click', (e) => {
        new ToastNotify('error', {
            head: '¡error!',
            msg: 'Mensaje de error a mostrar en la notificacion',
            timer: 3000
        });
    });
    informacion.addEventListener('click', (e) => {
        new ToastNotify('info', {
            head: '¡info!',
            msg: 'Mensaje informativo a mostrar en la notificacion',
            timer: 3000
        });
    });    
    advertencia.addEventListener('click', (e) => {
        new ToastNotify('warning', {
            head: '¡warning!',
            msg: `Mensaje de advertencia ¿Acepta las condiciones? 
            prseione X para cerrar el ToastNotify/Denegar, 
            pusle el boton aceptar caso afirmativo
            <div class="row">
                <div class="col d-flex justify-content-end">
                  <button class="btn btn-light border btn-sm" onclick="accion()">acepto</button>
                </div>
            </div>          
            `
        });
    });
    function accion() {
        let t = document.querySelector('.toastflo');
        t.classList.add("hide");
        if (t.timeoutId) clearTimeout(t.timeoutId);
        setTimeout(() => {
            t.remove();
            setTimeout(() => {
                new ToastNotify('info', {
                    head: '¡info!',
                    msg: 'La accion aceptar a sido pulsada, continuemos',
                    timer: 2000
                });
            }, 250);
        }, 500);
    }
    </script>
</body>

</html>