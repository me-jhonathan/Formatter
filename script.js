document.getElementById('formatButton').addEventListener('click', function() {
    const inputText = document.getElementById('jsonInput').value;

    try {
        const parsedJson = JSON.parse(inputText);
        const formattedJson = JSON.stringify(parsedJson, null, 4); 
        document.getElementById('jsonOutput').textContent = formattedJson;

    } catch (error) {
        alert("Invalid JSON input!");
    }
});

document.getElementById('copyButton').addEventListener('click', function() {
    const formattedText = document.getElementById('jsonOutput').textContent;
    navigator.clipboard.writeText(formattedText)
        .then(() => {
            const copyButton = document.getElementById('copyButton');
            copyButton.classList.add('rainbow-effect');

            setTimeout(() => {
                copyButton.classList.remove('rainbow-effect');
            }, 1000); 
        })
        .catch(error => {
            alert('Copy failed! Please try again.'); 
        });
});

document.getElementById('flipButton').addEventListener('click', function() {
    const container = document.querySelector('.container');
    container.classList.toggle('horizontal'); 
});
