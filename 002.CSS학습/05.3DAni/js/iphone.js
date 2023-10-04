import dFn from './dom.js'

// 데이터 셋팅 : x,y축 회전각도를 배열에 셋팅
const iDeg = [
    [20,60],
    [20,30],
    [20,0],
    [20,-30],
    [20,-60],
    // 하단영역
    [-20,60],
    [-20,30],
    [-20,0],
    [-20,-30],
    [-20,-60],
]

const evtBox = dFn.qsa('.evt-box div')
const iphone = dFn.qs('.iphone')
console.log(evtBox, iphone)

evtBox.forEach(ele=>{
    dFn.addEvt(ele,'click',seeMe)
})

// 함수만들기

function seeMe() {
    
}