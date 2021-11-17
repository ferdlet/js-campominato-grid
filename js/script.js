const container = document.querySelector('.container');

const buttonGioca = document.getElementById('gioca');

buttonGioca.addEventListener("click", function () {
    
    let items = '';

    const difficulty = document.getElementById('difficulty').value;
    console.log(difficulty);

    switch (difficulty) {
        case "easy":
            for (let i = 1; i <= 100; i++) {
                items += `
                <div class="square easy"><span>${i}</span></div>
            `;
            }
            container.innerHTML = items;
            break;
        case "hard":
            for (let i = 1; i <= 81; i++) {
                items += `
                <div class="square hard"><span>${i}</span></div>
            `;
            }
            container.innerHTML = items;
            break;
        case "expert":
            for (let i = 1; i <= 49; i++) {
                items += `
                <div class="square expert"><span>${i}</span></div>
            `;
            }
            container.innerHTML = items;
            break;
    }
});

const square = document.getElementsByClassName('sqare');

// for (i = 1; i <= 100; i++) {
//     square[i].addEventListener("click", function(){

//     })
// }