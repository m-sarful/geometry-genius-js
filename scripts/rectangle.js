function rectangularCalculateArea(){
    // rectangle width
    const rectangleWidth = document.getElementById('rectangle-width');
    const rectangleWidthInput = rectangleWidth.value;
    const width = parseFloat(rectangleWidthInput);

    // rectangle length
    const rectangleLength = document.getElementById('rectangle-length');
    const rectangleLengthInput = rectangleLength.value;
    const length = parseFloat(rectangleLengthInput);

    // rectangle Area

     const rectangleArea = width * length;
      console.log(rectangleArea);

       // result show the display

    const displayArea = document.getElementById('rectangle-area');
    displayArea.innerText = rectangleArea;
}