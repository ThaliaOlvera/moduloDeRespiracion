# Módulo de Respiración

Este proyecto es un módulo de respiración que forma parte de una aplicación de meditación diseñada para guiar a los usuarios en ejercicios de respiración y relajación a través de diferentes sonidos y visualizaciones. El módulo permite al usuario seleccionar sonidos específicos para mejorar la experiencia de meditación y disfrutar de un ambiente de calma y concentración.

## Descripción

El módulo incluye:

- Una interfaz con botones que representan diferentes sonidos relajantes.
- Una animación de círculo de expansión que guía al usuario en un ejercicio de respiración (inhala, retén, exhala).
- Una recomendación en modal para usar audífonos, la cual puede cerrarse al hacer clic fuera del modal.
- La funcionalidad de reproducción de sonido asociada a cada botón, permitiendo pausar y reproducir sonidos específicos.
- La pausa de los sonidos y cierre de modal al hacer clic fuera de ellos.

## Funcionalidades

1. **Reproducción y Pausa de Audio**:
   - Cada botón permite reproducir o pausar un sonido.
   - Solo un sonido puede reproducirse a la vez.
2. **Animación de Círculo de Respiración**:
   - La animación del círculo se muestra cuando se reproduce un sonido y desaparece al detenerlo.
3. **Modal de Recomendación**:

   - Al cargar la aplicación, aparece un modal recomendando el uso de audífonos.
   - Se cierra al hacer clic fuera del modal.

4. **Control por Clic Externo**:
   - La reproducción de sonidos se detiene cuando se hace clic fuera del botón de audio o del modal.

## Tecnologías

- **HTML5**: Estructura del contenido.
- **CSS3**: Estilos visuales y animaciones.
- **JavaScript (ES6+)**: Lógica de interacción, control de audio y manejo del DOM.

## Requisitos

- Navegador moderno compatible con HTML5, CSS3 y JavaScript ES6.
- Archivos de audio en el directorio `src/sounds` con los nombres correctos para cada botón.

## Instalación y Uso

1. **Clonar el Repositorio**

   ```bash
   git clone https://github.com/tu-usuario/modulo-respiracion.git
   cd modulo-respiracion
   ```

2. **Estructura de Archivos**
   Asegúrate de tener los archivos de audio en `src/sounds/` con los nombres correspondientes:

   - `airwindmeditation.mp3`
   - `reikisounds.mp3`
   - `binaural.mp3`
   - `rain.mp3`
   - `waves.mp3`
   - `meditation.mp3`

3. **Abrir el Proyecto**
   - Abre `index.html` en tu navegador preferido.
   - Asegúrate de que los permisos de reproducción de audio están habilitados.

## Contribución

Este proyecto está abierto a mejoras y contribuciones. Si deseas contribuir, abre un PR o contacta al administrador del proyecto.

## Créditos

Desarrollado por **Ilse Thalia Olvera de la Rosa** - 2024.

## Licencia

Este proyecto está bajo la licencia MIT.

---
