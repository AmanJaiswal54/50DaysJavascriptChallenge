let loader = document.getElementById('loader');
let bgImg = document.getElementById('bg-image');
let load = 0;

let loadInterval = setInterval(blurryLoading, 30);

function blurryLoading() {
    load++;
    loader.style.opacity = scale(load, 0, 100, 1, 0);
    loader.innerHTML = `${load}%`;
    bgImg.style.filter = `blur(${scale(load, 0, 100, 10, 0)}px)` // filter accept string of blur()
    if (load >=100) {
        clearInterval(loadInterval);
    }
}


// utility function
// link - https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

blurryLoading();