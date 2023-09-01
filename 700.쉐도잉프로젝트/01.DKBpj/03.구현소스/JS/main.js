// 로딩구역 호출설정
window.addEventListener('DOMContentLoaded', loadFn)

const qs = (x) => document.querySelector(x);
const qsa = (x) => document.querySelectorAll(x);

// 로딩구역

function loadFn(){
console.log('load')
// 부드러운 스크롤 적용
startSS()

// ss때문에 마우스 휠 이벤트 막기가 적용되어
// 이벤트 버블링을 막아줘야함
// event.stopPropagation() stop =그만 propagation=퍼트려
let descbx = qsa('.desc-box')
descbx.forEach(ele=>{//ele는 요소 자신
    ele.onwheel = e => e.stopPropagation()
});
}
// 로드 함수