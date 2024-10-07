export function colorizeLens(canvas, src, color) {
    const ctx = canvas.getContext("2d");
    const img = new Image();

    img.src = src;
    img.onload = function() {
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpiar el canvas

        // Dibuja la imagen original
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

        // Convierte el color hexadecimal a RGB
        const rgbColor = hexToRgb(color);
        // console.log('Color RGB:', rgbColor); // Verifica el color RGB

        // Aplica el color con un estilo de mezcla
        ctx.globalCompositeOperation = 'source-atop'; // Mezcla el color con el contenido ya dibujado
        ctx.fillStyle = `rgba(${rgbColor.r}, ${rgbColor.g}, ${rgbColor.b}, 0.5)`; // Color con un poco de transparencia
        ctx.fillRect(0, 0, canvas.width, canvas.height); // Dibuja un rectángulo del mismo tamaño que el canvas

        // Restablece la propiedad para otros dibujos
        ctx.globalCompositeOperation = 'source-over';
    };

    img.onerror = function() {
        console.error('Error al cargar la imagen'); // Manejo de errores en la carga
    };
}



export function hexToRgb(hex) {
    const bigint = parseInt(hex.slice(1), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return { r, g, b };
}