var dateInfo = new Date();
var hr = dateInfo.getHours() > 12 ? dateInfo.getHours() - 12 : dateInfo.getHours(),
    min = dateInfo.getMinutes(),
    sec = dateInfo.getSeconds(),
    millisec = dateInfo.getMilliseconds();

var hrAngle = hr * 30 + (min * 6 / 12),
    minAngle = min * 6 + (sec * 6 / 60),
    secAngle = sec * 6 + (millisec * 0.36 / 1000);

// set initial angles of the hand wrappers
function setAngle(wrapper, angle) {
    document.querySelector("." + wrapper).style.transform = "rotate(" + angle + "deg)";
}
setAngle("hr-hand", hrAngle);
setAngle("min-hand", minAngle);
setAngle("sec-hand", secAngle);

const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');

toggle.addEventListener('click',function(){
    this.classList.toggle('bi-moon');
    body.classList.add('darkmodecss');
    if(this.classList.toggle('bi-brightness-high-fill'))
    body.classList.remove('darkmodecss');
})