function pentagonCalculateArea(){
    const peri = getInputValueById('pentagon-base');
    const base = getInputValueById('pentagon-height');

    const area = 0.5 * peri * base;
   console.log(area);

     setInnerTextById('pentagon-area', area);
}