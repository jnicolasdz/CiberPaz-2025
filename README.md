# Cuentista para autistas

Cuentista para autistas es una aplicación diseñada como una herramienta educativa interactiva que adapta cualquier texto a las necesidades sensoriales y cognitivas de niños con autismo y problemas de atención, utilizando opciones personalizables para el ritmo, el tono y el contenido de las historias. Además de permitir seleccionar el método de salida (texto, voz, pictogramas)

## Características principales

- **Interactividad con el usuario**: Permite a los niños o a sus acompañantes seleccionar opciones que influyen en la narrativa.
- **Selección de salida**: Ofrece diferentes métodos de presentación de la historia, como texto, voz o pictogramas, para adaptarse a las preferencias del usuario o a sus necesidades sensoriales.
- **Interfaz amigable**: Diseñada para ser intuitiva y fácil de usar, con un enfoque en la accesibilidad para niños.

## Planteamiento del problema

De cada 36 niños, 1 es diagnosticado con Trastorno del Espectro Autista (TEA). Muchos de estos niños enfrentan desafíos en la comunicación y la interacción social, lo que puede dificultar su participación en actividades narrativas tradicionales. Cuetista para autistas busca proporcionar una herramienta que facilite la narración de historias adaptadas a sus necesidades, promoviendo el desarrollo del lenguaje y la imaginación de una manera accesible y atractiva. Al ofrecer opciones personalizables y métodos de salida variados, la aplicación ayuda a superar las barreras sensoriales y cognitivas que pueden impedir que estos niños disfruten plenamente de las historias.

## Uso

### Requerimientos

Se requiere que el equipo tenga descargado con anterioridad docker

### Instalación

Para instalar y utilizar Cuentista para autistas, sigue estos pasos:

1. **Clona el repositorio**:

   ```bash
   git clone <URL_DEL_REPOSITORIO>
   ```

2. **Crea la imagen del proyecto**:

   ```bash
   cd CiberPaz-2025
   sudo docker build -t cuentista . 
   ```

3. **Genera un contenedor de la imagen**:

   ```bash
   sudo docker run -p 8000:8000 cuentista:latest
   ```

4. **Accede a la aplicación**:
   Abre tu navegador web y ve a `http://localhost:8000/` para interactuar con la aplicación.
