
function generateGrid(x) {
    for (let rows = 0; rows < x; rows++) {
        for (let columns = 0; columns < x; columns++) {
            $("#pixel-grids").append("<div class='grid'></div>");
        };
    };
    $(".grid").width(960/x);
    $(".grid").height(960/x);
};

generateGrid(30)

// Step 2: Choose Color & Change Current Color Palette
$(".palette").click(function () {
    let currentColor = $(this).css("background-color");

    $("#currentPalette").css("background-color", currentColor);
    drawPixels();
});

// Step 3: Choose mode of drawing
function drawPixels() {
    // let colorPicked = $('#colorPicker').val();
    const currentPalette = $("#currentPalette").css("background-color")
  
    $(".grid").click(function() {
        $(this).css("background-color", currentPalette);
    });
    // document.querySelector("#drawPixels").disabled =true;
    // document.querySelector("#drawBrush").disabled =false;
}
function drawBrush() {
    // let colorPicked = $('#colorPicker').val();
    const currentPalette = $("#currentPalette").css("background-color")

    $(".grid").mouseover(function() {
        $(this).css("background-color", currentPalette);
    });
    // document.querySelector("#drawBrush").disabled =true;
    // document.querySelector("#drawPixels").disabled =false;
}

document.addEventListener('keydown', (event) => {
    const keyName = event.key;
    if(event.shiftKey == true){
        drawBrush();
    }
});

function clearCanvas() {
    window.location.reload(false);
}