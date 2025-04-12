#!/bin/bash

# Crear directorios si no existen
mkdir -p public/images/testimonios

# Descargar imágenes de testimonio
curl "https://placehold.co/150x150/FF5722/white/png?text=Testimonio+1" -o public/images/testimonios/testimonio1.png
curl "https://placehold.co/150x150/009688/white/png?text=Testimonio+2" -o public/images/testimonios/testimonio2.png
curl "https://placehold.co/150x150/673AB7/white/png?text=Testimonio+3" -o public/images/testimonios/testimonio3.png

echo "Descarga de testimonios completada!" 