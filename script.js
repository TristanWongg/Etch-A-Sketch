const container = document.querySelector('#container');
const btn = document.querySelector('button.btn');

function makeGrid(dimension){
    while(container.firstChild)
        container.removeChild(container.firstChild);    
    
    for (let i=0; i<dimension; i++){
        for (let j=0; j<dimension; j++){
            let gridItem = document.createElement('div');
            gridItem.classList = 'grid-item';
            gridItem.style.border = "thin solid black";

            // let colors = ['#ff0000', '#00ff00', '#0000ff'];
            // let random_color = colors[Math.floor(Math.random() * colors.length)];

            let colors = '#' + (0x1000000 + Math.random() * 0xFFFFFF).toString(16).substr(1,6);
            gridItem.addEventListener("mouseover", () => {
                gridItem.style.backgroundColor = `${colors}`;
            });

            gridItem.addEventListener("mousedown", () => {
                gridItem.style.backgroundColor = "white";
            });

            container.appendChild(gridItem);
            container.style.gridTemplateRows = `repeat(${dimension}, 1fr)`;
            container.style.gridTemplateColumns = `repeat(${dimension}, 1fr)`;
        }
    }
}

makeGrid(16);

btn.addEventListener('click', () => {
    let dimension = prompt("Enter new grid dimension: ");
    makeGrid(dimension);
})