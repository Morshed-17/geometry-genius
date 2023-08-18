function calculateTriangleArea(){
    // get triangle base value
    const baseField = document.getElementById('triangle-base')
    const baseValueText = baseField.value
    const base = parseFloat(baseValueText)
    
    console.log(base);

    // get triangle height value
    const heightField = document.getElementById('triangle-height')
    const heightValueText = heightField.value
    const height = parseFloat(heightValueText)
    console.log(height);

    const area = 0.5 * base * height
    console.log(area);

    // show triangle area
    const areaSpan = document.getElementById('triangle-area')
    areaSpan.innerText = area
}

// calculate rectangle Area

function calculateRectangleArea(){
    // get reactangle width
    const widhtField = document.getElementById('rectangle-width')
    const widthValueText = widhtField.value
    const width = parseFloat(widthValueText)
    console.log(width);

    // get rectangle length
    const lengthField = document.getElementById('rectangle-length')
    const lengthValueText = lengthField.value
    const length = parseFloat(lengthValueText)
    
    // calculate area
    const area = width * length

    // show rectangle area
    const rectangleAreaSpan = document.getElementById('rectangle-area')
    rectangleAreaSpan.innerText = area
}
