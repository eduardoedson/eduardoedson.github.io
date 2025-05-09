function animate(text, element, cursor) {
    let i = 0;

    function add() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(add, 100);
        } else {
            setTimeout(() => {
                cursor.style.display = cursor.style.display === 'none' ? 'inline' : 'none';
                add();
            }, 500);
        }
    }

    add();
}

window.addEventListener('load', () => {
    const text = 'Eduardo Alves';
    const element = document.getElementById('my-name');
    const cursor = document.getElementById('cursor');
    animate(text, element, cursor);
});