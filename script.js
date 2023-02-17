let penColor = "black";

let sliderValue = document.getElementById("slider");

function update( e ) {
    console.log( e.target.value );
    makeRows(e.target.value, e.target.value);
}

sliderValue.addEventListener("input", update);

const container = document.getElementById("container");

makeRows(16, 16);

function makeRows(rows, cols) {
    //this while removes the old grid 
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);

    // calculate the new cell size based on the slider value
    const cellSize = 600 / cols;

    // update the --cell-size variable
    container.style.setProperty('--cell-size', `${cellSize}px`);

    for (i = 0; i < (rows * cols); i++) {
        let cell = document.createElement("div"); 
        //this adds the color        
        cell.addEventListener("mouseenter", function (event) {
            // event.target.style.backgroundColor = penColor;
            if (penColor === "rainbow") {
                event.target.style.backgroundColor = getRandomColor();
            } else {
                event.target.style.backgroundColor = penColor;
            }
    });
    
    // cell.innerText = (i + 1);
    container.appendChild(cell).className = "grid-item";
  };
};


const clearBtn = document.getElementById('clear');
clearBtn.addEventListener('click', function() {
  const cells = document.querySelectorAll('.grid-item');
  cells.forEach(cell => {
    cell.style.backgroundColor = 'white';
  });
});

const eraserBtn = document.getElementById('eraser');
eraserBtn.addEventListener('click', function() {
  penColor = 'white';
});


const colorBtn = document.getElementById('color');
colorBtn.addEventListener('click', function() {
  const color = prompt('Choose a color:');
  if (color) {
    penColor = color;
  }
});


const rainbowButton = document.getElementById("rainbow-mode");

function toggleRainbowMode() {
  if (penColor !== "rainbow") {
    penColor = "rainbow";
  } else {
    penColor = "black";
  }
}

rainbowButton.addEventListener("click", toggleRainbowMode);

function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}






