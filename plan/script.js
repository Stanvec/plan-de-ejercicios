document.addEventListener('DOMContentLoaded', () => {
    // Definimos el plan semanal como un objeto.
    // Esto hace que sea fácil de modificar y expandir en el futuro.
    const planSemanal = {
        Lunes: {
            focus: "Tren Superior (Empuje) y Core",
            ejercicios: [
                { nombre: "Flexiones", series: "3", reps: "Al fallo (máximas posibles)", gif: "https://i.giphy.com/media/eH8hxf2qO0aTDM2uc3/giphy.gif" },
                { nombre: "Fondos en Silla (Dips)", series: "3", reps: "10-15", gif: "https://hips.hearstapps.com/hmg-prod/images/workouts/2016/03/tricepdip-1457642294.gif" },
                { nombre: "Flexiones Inclinadas (manos en silla)", series: "3", reps: "12-15", gif: "https://i.makeagif.com/media/9-22-2015/J4xIgr.gif" },
                { nombre: "Plancha (Plank)", series: "3", reps: "30-60 segundos", gif: "https://hips.hearstapps.com/hmg-prod/images/workouts/2016/03/plank-1457102222.gif" },
                { nombre: "Crunches Abdominales", series: "3", reps: "15-20", gif: "https://media.tenor.com/Sti4r7JWeL4AAAAC/abs-crunches.gif" },
            ]
        },
        Martes: {
            focus: "Tren Inferior (Piernas y Glúteos)",
            ejercicios: [
                { nombre: "Sentadillas (Squats)", series: "4", reps: "15-20", gif: "https://i.pinimg.com/originals/de/a3/6c/dea36c55760a3949439345e627441512.gif" },
                { nombre: "Zancadas (Lunges)", series: "3", reps: "12 por pierna", gif: "https://media.tenor.com/D_A0J_3iB5wAAAAC/lunge-exercise.gif" },
                { nombre: "Puente de Glúteos", series: "3", reps: "15-20", gif: "https://hips.hearstapps.com/hmg-prod/images/workouts/2016/03/glutebridge-1457102144.gif" },
                { nombre: "Sentadilla Búlgara (pie en silla)", series: "3", reps: "10-12 por pierna", gif: "https://media.tenor.com/b9L8h6_3GecAAAAC/bulgarian-split-squat-exercise.gif" },
                { nombre: "Elevación de Talones", series: "4", reps: "20-25", gif: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3kwZ2tpb2QxdDF5OHV1eXRqZG5mNTZid2N5cDV5bnhucGhqajd3eiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/LzIXmDbA6d2da/giphy.gif" }
            ]
        },
        Miércoles: {
            focus: "Tren Superior (Tirón) y Core",
            ejercicios: [
                { nombre: "Remo con Toalla", series: "3", reps: "12-15 (tira fuerte!)", gif: "https://i.ytimg.com/vi/eWj_A2d-1yA/maxresdefault.jpg" },
                { nombre: "Superman", series: "3", reps: "15", gif: "https://media.tenor.com/s6nbl6VO8XAAAAAC/superman-exercise.gif" },
                { nombre: "Flexiones Diamante (o con manos juntas)", series: "3", reps: "Al fallo", gif: "https://media.tenor.com/TFY7go4jJhoAAAAC/diamond-pushups.gif" },
                { nombre: "Elevación de Piernas (acostado)", series: "3", reps: "15-20", gif: "https://media.tenor.com/0o0k3G3gQWAAAAAC/leg-raises.gif" },
                { nombre: "Plancha Lateral", series: "3", reps: "30 seg por lado", gif: "https://www.spotebi.com/wp-content/uploads/2014/10/side-plank-exercise-illustration.gif" }
            ]
        },
        Jueves: {
            focus: "Descanso Activo o Cardio Ligero",
            descanso: true,
            mensaje: "Día de recuperación. Sal a caminar 30-45 minutos, haz estiramientos suaves o una sesión de yoga ligera. ¡El músculo crece cuando descansa!"
        },
        Viernes: {
            focus: "Full Body (Cuerpo Completo)",
            ejercicios: [
                { nombre: "Burpees (sin salto si es muy difícil)", series: "3", reps: "10", gif: "https://media.tenor.com/QG5v_42b3-AAAAAC/burpee-exercise.gif" },
                { nombre: "Sentadillas con Salto", series: "3", reps: "12", gif: "https://media.tenor.com/y1_mYzaDbJgAAAAC/jump-squat.gif" },
                { nombre: "Flexiones", series: "3", reps: "Al fallo", gif: "https://i.giphy.com/media/eH8hxf2qO0aTDM2uc3/giphy.gif" },
                { nombre: "Alpinistas (Mountain Climbers)", series: "3", reps: "45 segundos", gif: "https://media.tenor.com/SO3n14F2w5AAAAAC/mountain-climbers.gif" },
                { nombre: "Puente de Glúteos", series: "3", reps: "20", gif: "https://hips.hearstapps.com/hmg-prod/images/workouts/2016/03/glutebridge-1457102144.gif" }
            ]
        },
        Sábado: {
            focus: "Descanso Total",
            descanso: true,
            mensaje: "¡Relájate! Tu cuerpo necesita recuperarse por completo para estar listo para la próxima semana. ¡Buen trabajo!"
        },
        Domingo: {
            focus: "Descanso Total",
            descanso: true,
            mensaje: "¡Disfruta tu día! Hidrátate bien y prepárate mentalmente para empezar una nueva semana de progreso."
        }
    };

    const planContainer = document.getElementById('plan-container');

    // Itera sobre cada día del plan y crea su tarjeta en la web
    for (const dia in planSemanal) {
        const diaData = planSemanal[dia];
        const diaCard = document.createElement('div');
        diaCard.classList.add('dia-card');

        const titulo = document.createElement('h3');
        titulo.textContent = `${dia}: ${diaData.focus}`;
        diaCard.appendChild(titulo);

        if (diaData.descanso) {
            diaCard.classList.add('descanso');
            const mensaje = document.createElement('p');
            mensaje.textContent = diaData.mensaje;
            diaCard.appendChild(mensaje);
        } else {
            const listaEjercicios = document.createElement('ul');
            listaEjercicios.classList.add('ejercicios-lista');

            diaData.ejercicios.forEach(ejercicio => {
                const item = document.createElement('li');

                const nombreSpan = document.createElement('span');
                nombreSpan.classList.add('ejercicio-nombre');
                nombreSpan.textContent = ejercicio.nombre;

                const repsSpan = document.createElement('span');
                repsSpan.classList.add('ejercicio-reps');
                repsSpan.textContent = `${ejercicio.series} x ${ejercicio.reps}`;
                
                const gifSpan = document.createElement('span');
                gifSpan.classList.add('ejercicio-gif');
                const linkGif = document.createElement('a');
                linkGif.href = ejercicio.gif;
                linkGif.textContent = "Ver GIF";
                linkGif.target = "_blank"; // Abre en una nueva pestaña
                gifSpan.appendChild(linkGif);
                
                item.appendChild(nombreSpan);
                item.appendChild(repsSpan);
                item.appendChild(gifSpan);
                listaEjercicios.appendChild(item);
            });
            diaCard.appendChild(listaEjercicios);
        }

        planContainer.appendChild(diaCard);
    }
});