function wait(time) {
    return new Promise(resolve => {
        setTimeout(resolve, time);
    });
}
const genRandom = async ( bool ) => {
    let arr = document.getElementsByClassName('color-block');
    
    for(let i = 0 ; i < arr.length ; i++) arr[i].style.height = (bool) ? (Math.floor(Math.random()*60) + "vh") : "60vh";
}

let loop = false;
const start = async () => {
    loop = true;
    while(loop) {
        genRandom(true);
        await wait(1200);
    }
}
const stop = () => {
    loop = false;
}
const reset = () => {
    stop();
    genRandom(false);
}