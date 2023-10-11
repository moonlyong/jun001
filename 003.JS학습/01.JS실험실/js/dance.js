// DOM 함수 객체 //////////////
const domFn = {
    // 요소선택함수 ////////
    qs: (x) => document.querySelector(x),
    qsEl: (el, x) => el.querySelector(x),
    qsa: (x) => document.querySelectorAll(x),
    qsaEl: (el, x) => el.querySelectorAll(x),
  
    // 이벤트셋팅함수
    addEvt: (ele, evt, fn) => ele.addEventListener(evt, fn),
    // 바운딩 top값
    getBCR: ele => ele.getBoundingClientRect().top,
  }; /////// domFn 객체 /////////////
// 대상선정
  const sldepg = domFn.qs('.slidePg')
//   console.log(sldepg)
// 코드만들기
let hcode = ''

for(let i=0; i<7;i++){
    hcode +=
    `
    <li>
        <img src="./images/dance/${i+1}.jpg" alt="">
    </li>
    `
}
hcode = `<ul>${hcode}</ul>`

// console.log(hcode)
sldepg.innerHTML = hcode

///////////////////////////////////

//3번쨰 영역에 도달한경우 가로방향으로 이동

// 대상 이벤트종류 scroll
domFn.addEvt(window,'scroll',slidFn)
// 위치대상 .tpg - 스티키 박스를 싸고있는 부모박스
const tpg = domFn.qs('.tpg')
// 움직일 대상
const target = domFn.qs('.slidePg>ul')
// console.log(target)
function slidFn(){
    // 스크롤 위치값
    let scEle = domFn.getBCR(tpg)
    // console.log(scEle)
    // let scTop = window.scrollY
    // console.log('ss',domFn.getBCR(tpg))

    if (scEle<=0 && scEle >= -3000){
        target.style.left = scEle + 'px'
    }
    else if(scEle>0){
        target.style.left = '0px'
    }

}
////////////

// 추가기능 : 메뉴에 오버시 움직이는 배경

// 이벤트 대상 : .gnb li
// 변경대상 : .mbg
const gnblist = domFn.qsa('.gnb li')
const mbg = domFn.qs('.mbg')
// console.log(gnblist,mbg)
// 이벤트 종류 mouseover/mouseout
gnblist.forEach(ele=>{
    domFn.addEvt(ele,'mouseover',overFn)
    domFn.addEvt(ele,'mouseout',outFn)

})

function overFn(){
    // 오버된 li의 left위치값
    let posL = this.offsetLeft
    // console.log('위치',posL)
    mbg.style.opacity = 1
    mbg.style.left = posL + 'px'

}
function outFn(){
    // console.log('아웃',this)
    // 사라지기
    mbg.style.opacity = 0
}