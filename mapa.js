fetch('https://eligible-constant-wronged.ngrok-free.dev/webhook/mapa-incidentes')
.then(response => response.json())
.then(datos => {

    datos.forEach(reporte => {

        const lat = parseFloat(reporte.Latitud);
        const lng = parseFloat(reporte.Longitud);

        L.marker([lat, lng])
        .addTo(map)

        .bindTooltip(
            `
            <b>${reporte.Nombre}</b>
            `,
            {
                sticky: true,
                direction: "top"
            }
        )

        .bindPopup(
            `
            <h3>Reporte Ciudadano</h3>

            <b>Nombre:</b><br>
            ${reporte.Nombre}<br><br>

            <b>Descripción:</b><br>
            ${reporte.Descripción}<br><br>

            <b>Ticket:</b><br>
            ${reporte["Ticket ID"]}
            `
        );

    });

});