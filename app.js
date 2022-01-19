function getMousePosition(event) {
    // event.preventDefault();
    console.log(event.clientY, event.clientX);
    let cuadrado = document.getElementById("cuadrado");

    if (event.clientY <= 100) {
        cuadrado.style.top = `0`;
    } else {
        cuadrado.style.top = `calc(${event.clientY}px - 100px)`;
    }
}

document.addEventListener('click', getMousePosition);