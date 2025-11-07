// Espera a que todo el contenido HTML esté cargado
document.addEventListener('DOMContentLoaded', () => {

    // Selecciona los elementos con los que interactuaremos
    const storyInput = document.getElementById('story-input');
    const outputArea = document.getElementById('story-output');
    
    const btnPictogram = document.getElementById('btn-pictogram');
    const btnAudio = document.getElementById('btn-audio');
    const btnText = document.getElementById('btn-text');

    // Añade "escuchadores" de clics a los botones
    btnPictogram.addEventListener('click', () => generateStory('pictogram'));
    btnAudio.addEventListener('click', () => generateStory('audio'));
    btnText.addEventListener('click', () => generateStory('text'));

    function generateStory(format) {
        const inputText = storyInput.value;

        // Validar que haya texto
        if (inputText.trim() === "") {
            outputArea.innerHTML = `
                <div class="placeholder">
                    <img src="right.png" alt="Touie señalando" class="mascot-waiting" style="width: 80px;">
                    <p style="color: var(--rojo-destacado);">¡Ups! Primero escribe tu idea arriba.</p>
                </div>
            `;
            return;
        }

        // 1. Mostrar estado de "Pensando..." con la mascota Touie
        showLoadingState();

        // 2. Simular un tiempo de espera (como si la IA estuviera trabajando)
        setTimeout(() => {
            // 3. Mostrar el resultado simulado
            showResult(format, inputText);
        }, 2000); // 2 segundos de espera
    }

    function showLoadingState() {
        outputArea.innerHTML = `
            <div class="loading">
                <img src="thinking.png" alt="Touie pensando" class="mascot-thinking">
                <p>¡Touie está creando tu historia!</p>
            </div>
        `;
    }

    function showResult(format, text) {
        let htmlResult = '';

        switch (format) {
            case 'pictogram':
                htmlResult = `
                    <h3>Tu Historia en Pictogramas</h3>
                    <p style="font-size: 28px;">👦 ➡️ 🏠  gặp 🐶 ➡️ 🌳 🌙</p>
                    <p>(Simulación de pictogramas basada en: "${text}")</p>
                `;
                break;
            case 'audio':
                htmlResult = `
                    <h3>Tu Historia en Audio</h3>
                    <p>¡Escucha tu increíble historia!</p>
                    <audio controls style="width: 100%; margin-top: 10px;">
                        <source src="" type="audio/mpeg">
                        Tu navegador no soporta audio.
                    </audio>
                    <p>(Simulación de audio de: "${text}")</p>
                `;
                break;
            case 'text':
                htmlResult = `
                    <h3>Tu Historia en Texto</h3>
                    <p>Había una vez, en un lugar muy lejano, ${text}. Y todos vivieron felices para siempre.</p>
                `;
                break;
        }
        
        outputArea.innerHTML = htmlResult;
    }
});