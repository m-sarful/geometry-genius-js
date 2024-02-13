function parallelogramCalculateArea(){
    // parallelogram base
    const parallelogramBase = document.getElementById('parallelogram-base');
    const parallelogramBaseInput = parallelogramBase.value;
    const base = parseFloat(parallelogramBaseInput);
     
    
    // parallelogram height
    const parallelogramHeight = document.getElementById('parallelogram-height');
    const parallelogramHeightInput = parallelogramHeight.value;
    const height = parseFloat(parallelogramHeightInput);
     
    const parallelogramArea = height * base;
    // console.log(triangleArea);

    // result show the display

    const displayArea = document.getElementById('parallelogram-area');
    displayArea.innerText = parallelogramArea;
}