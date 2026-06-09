const themeToggle = document.getElementById("themeToggle");
const WEBHOOK_URL ="https://eligible-constant-wronged.ngrok-free.dev/webhook-test/smartcity-report";

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeToggle.textContent = "☀️ Modo Claro";
    } else {
        themeToggle.textContent = "🌙 Modo Oscuro";
    }
});

const gpsButton = document.getElementById("gpsButton");

gpsButton.addEventListener("click", () => {

    if (!navigator.geolocation) {
        alert("Tu navegador no soporta geolocalización");
        return;
    }

    gpsButton.textContent = "Obteniendo ubicación...";

    navigator.geolocation.getCurrentPosition(
        (position) => {

            const lat = position.coords.latitude;
            const lon = position.coords.longitude;

            document.getElementById("latitud").value = lat;
            document.getElementById("longitud").value = lon;

            document.getElementById("latitudText").textContent =
                `Latitud: ${lat}`;

            document.getElementById("longitudText").textContent =
                `Longitud: ${lon}`;

            gpsButton.textContent = "✅ Ubicación obtenida";
        },

        (error) => {
            alert("No fue posible obtener la ubicación");
            gpsButton.textContent = "📍 Obtener Ubicación";
        }
    );
});

const reportForm = document.getElementById("reportForm");

reportForm.addEventListener("submit", async (e) => {

    e.preventDefault();

    const statusMessage =
        document.getElementById("statusMessage");

    statusMessage.textContent =
        "Enviando reporte...";

    try {

        const formData = new FormData();

        formData.append(
            "nombre",
            document.getElementById("nombre").value
        );
        
        formData.append(
            "documento",
            document.getElementById("documento").value
        );
        
        formData.append(
            "telefono",
            document.getElementById("telefono").value
        );
        
        formData.append(
            "descripcion",
            document.getElementById("descripcion").value
        );
        
        formData.append(
            "latitud",
            document.getElementById("latitud").value
        );
        
        formData.append(
            "longitud",
            document.getElementById("longitud").value
        );
        
        const foto =
            document.getElementById("foto").files[0];
        
        if (foto) {
            formData.append("foto", foto);
        }
        
        const response = await fetch(
            WEBHOOK_URL,
            {
                method: "POST",
                body: formData
            }
        );

        if (!response.ok) {
            throw new Error("Error al enviar");
        }

        statusMessage.textContent =
            "✅ Reporte enviado correctamente";

        reportForm.reset();

    } catch (error) {

        console.error(error);

        statusMessage.textContent =
            "❌ Error enviando reporte";
    }

});