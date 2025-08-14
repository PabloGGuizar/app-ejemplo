# Maestría en Conectores

¡Bienvenido a Maestría en Conectores! Una aplicación web interactiva diseñada para ayudarte a mejorar tu dominio de los conectores del español a través de una serie de quizzes progresivos.

## ✨ Live Demo

Puedes probar la aplicación en vivo aquí: **[https://pablogguizar.github.io/app-ejemplo/](https://pablogguizar.github.io/app-ejemplo/)**

## 🚀 Características

- **Quizzes Progresivos:** Desbloquea nuevos niveles a medida que completas los anteriores.
- **Contenido Específico:** Cada nivel se enfoca en un tipo diferente de conector (Aditivos, Reformulativos, Argumentativos).
- **Sistema de Vidas:** ¡Tienes 3 vidas para superar cada quiz! Si las pierdes, deberás intentarlo de nuevo.
- **Recompensas Visuales:** Gana medallas (🏅) por cada nivel completado y un trofeo (🏆) al conquistar el último desafío.
- **Selector de Tema:** Personaliza tu experiencia con un selector de tema que incluye modos claro, oscuro y de sistema (💻/☀️/🌙).
- **Diseño Moderno:** Una interfaz amigable y juguetona construida con React y Vite.

## 🛠️ Cómo Ejecutar Localmente

Si deseas ejecutar este proyecto en tu propia máquina, sigue estos pasos:

1.  **Clona el repositorio:**
    ```bash
    git clone https://github.com/PabloGGuizar/app-ejemplo.git
    cd app-ejemplo
    ```

2.  **Instala las dependencias:**
    ```bash
    npm install
    ```

3.  **Inicia el servidor de desarrollo:**
    ```bash
    npm run dev
    ```

¡Y listo! La aplicación debería estar corriendo en `http://localhost:5173` (o el puerto que indique Vite).

## 🔧 Despliegue

Este proyecto utiliza `gh-pages` para un despliegue sencillo en GitHub Pages. Para desplegar tu propia versión, asegúrate de configurar el campo `homepage` en tu `package.json` y luego ejecuta:

```bash
npm run deploy
```