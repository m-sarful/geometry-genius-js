function ellipseCalculateArea(){
    const base = getInputValueById('ellipse-base');
    const height = getInputValueById('ellipse-height');

    const area = Math.PI * base * height;
     console.log(area);

     setInnerTextById('ellipse-area', area);
}