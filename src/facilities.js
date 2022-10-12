
let facilities = function(facilities) {

    let element = document.createElement('section')
    element.classList.add('makingSection')
    
    element.innerHTML = `
            <h1 class="">${facilities.headline}</h1>
        <div>
            <img src="${facilities.icon}" alt="">
            <h2 class="">${facilities.headline}</h2>
            <p class="">${facilities.text}</p>
            <p><a href="#">Show me more</a></p>
        </div>

    `
    
    return element
    }
    
    export default facilities
