function triangleCalculateArea(){
    // triangle base
    const triangleBase = document.getElementById('triangle-base');
    const triangleBaseInput = triangleBase.value;
    const base = parseFloat(triangleBaseInput);
     
    
    // triangle height
    const triangleHeight = document.getElementById('triangle-height');
    const triangleHeightInput = triangleHeight.value;
    const height = parseFloat(triangleHeightInput);
     
    const triangleArea = 0.5 * height * base;
    // console.log(triangleArea);

    // result show the display
    const displayArea = document.getElementById('triangle-area');
    displayArea.innerText = triangleArea
}