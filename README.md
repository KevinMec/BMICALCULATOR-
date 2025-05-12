# 🧮 Calculadora de Índice de Masa Corporal (IMC)

Esta es una aplicación web desarrollada con React que te permite calcular fácilmente tu Índice de Masa Corporal (IMC) a partir de tu altura y peso. Además, te proporciona una tabla clara con la clasificación del IMC para que puedas interpretar tus resultados de manera sencilla.

📸 **Vista previa**

[![Captura de pantalla de la calculadora de IMC](https://play.google.com/store/apps/details?id=com.tools.screenshot&hl=es_EC)](https://play.google.com/store/apps/details?id=com.cy8018.livetv&hl=es_AR)
*(Reemplaza la URL de la imagen con una captura real de tu aplicación para darle un toque visual. Si tienes la aplicación desplegada, también puedes enlazar la imagen a la URL en vivo).*

✅ **Características principales**

* **Cálculo automático del IMC:** Ingresa tu altura y peso, y el IMC se calculará al instante.
* **Clasificación intuitiva:** El resultado del IMC se clasifica automáticamente según los estándares médicos en:
    * Bajo peso
    * Peso saludable
    * Sobrepeso
    * Obesidad
* **Tabla de referencia del IMC:** Una tabla informativa integrada te muestra los rangos del IMC y sus correspondientes clasificaciones.
* **Campos adicionales (preparados para el futuro):**
    * Edad
    * Sexo
    * Nivel de actividad física *(Esta funcionalidad está lista para ser implementada en futuras versiones).*

🛠️ **Tecnologías utilizadas**

* 💻 **Frontend:** [React.js](https://react.dev/)
* 🎨 **Estilos:** CSS puro (con estilos personalizados)
* 📦 **Entorno de desarrollo:** [Node.js](https://nodejs.org/) + [npm](https://www.npmjs.com/)

▶️ **¿Cómo ejecutar el proyecto localmente?**

Sigue estos sencillos pasos para tener la calculadora corriendo en tu máquina:

1.  **Clona el repositorio:**
    ```bash
    git clone [https://github.com/KevinMec/BMICALCULATOR-.git](https://github.com/KevinMec/BMICALCULATOR-.git)
    cd BMICALCULATOR-
    ```

2.  **Instala las dependencias:**
    ```bash
    npm install
    ```

3.  **Inicia la aplicación en modo desarrollo:**
    ```bash
    npm start
    ```
    Tu navegador se abrirá automáticamente en `http://localhost:3000`. ¡Empieza a calcular tu IMC!

📦 **Compilación para producción**

Para generar una versión optimizada de la aplicación lista para su despliegue:

```bash
npm run build
