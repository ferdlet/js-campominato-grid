const container = document.querySelector('.container');

const buttonGioca = document.getElementById('gioca');

container.innerHTML = '';

for (let i = 0; i < 100; i++) {
    const cell = document.createElement('div');
    cell.className = 'square easy';
    cell.innerHTML = i + 1;
    cell.addEventListener('click', function () {
        cell.classList.add('clicked-true');
    });
    container.appendChild(cell);
}

buttonGioca.addEventListener("click", function () {

    container.innerHTML = '';

    const difficulty = document.getElementById('difficulty').value;

    switch (difficulty) {
        case "easy":
            for (let i = 0; i < 100; i++) {
                const cell = document.createElement('div');
                cell.className = 'square easy';
                cell.innerHTML = i + 1;
                cell.addEventListener('click', function () {
                    cell.classList.add('clicked-true');
                });
                container.appendChild(cell);
            }
            break;
        case "hard":
            for (let i = 0; i < 81; i++) {
                const cell = document.createElement('div');
                cell.className = 'square hard';
                cell.innerHTML = i + 1;
                cell.addEventListener('click', function () {
                    cell.classList.add('clicked-true');
                });
                container.appendChild(cell);
            }
            break;
        case "expert":
            for (let i = 0; i < 49; i++) {
                const cell = document.createElement('div');
                cell.className = 'square expert';
                cell.innerHTML = i + 1;
                cell.addEventListener('click', function () {
                    cell.classList.add('clicked-true');
                });
                container.appendChild(cell);
            }
            break;
    }
});