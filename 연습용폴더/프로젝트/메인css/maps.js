// 요소선택함수 ////////
const qs = (x) => document.querySelector(x);
const qsa = (x) => document.querySelectorAll(x);
const clg = (x) => console.log(x);
// addEvent 함수
// ele - 요소, evt - 이벤트, fn - 함수
const addEvt = 
(ele, evt, fn) => ele.addEventListener(evt, fn);

// HTML태그 로딩후 loadFn함수 호출! ///
addEvt(window,"DOMContentLoaded", loadFn);
function loadFn(){
    clg('gg')
    const btn =qsa('.btn a')
    clg(btn)
}