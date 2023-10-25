// 보그 PJ 메인 페이지 JS - main.js

import dFn from "./dom.js";
// 부드러운 스크롤 모듈
import { startSS, setPos } from "./smoothScroll23.js";


// [1] 부드러운 스크롤 적용 //////////
startSS();

// [1] 메인 페이지 등장액션 클래스 넣기
// 대상: .main-area section
const hideBox = $('.main-area section');
const topArea= $('#top-area')
const tbtn = $('.tbtn')

// 첫번째 박스 빼고 모두 숨김클래스 넣기
// hideBox.forEach((ele,idx)=>{
//     if(idx!=0) ele.classList.add('scAct');
// }); ////////// forEach /////////// JS용 코드
// 제이쿼리 사용 each((idx,ele)=>{코드})
hideBox.each((idx,ele)=>{
    if(idx!=0)$(ele).addClass('scAct');
})


// 스크롤 액션 제이쿼리로 구현해보기
// 대상 window
// 이벤트:scroll
// 등장액션 대상 hideBox
let winH = $(window).height()/3*2;
// console.log(winH);
$(window).scroll(()=>{
    let scTop = $(window).scrollTop();
    // console.log('스크롤',scTop)
    if(scTop > 150)topArea.addClass('on')
    else topArea.removeClass('on')
    if(scTop > 300)tbtn.addClass('on')
    else tbtn.removeClass('on')


    hideBox.each((idx,ele)=>{
        // console.log(`대상요소 top값[${idx}]`,dFn.getBCR(ele))
        // if(idx!=0){
        //     let val = dFn.getBCR(ele)
        //     // if (val < 1000)$(ele).addClass('on')
        //     if (val < winH)$(ele).addClass('on')
        // }
        if(idx!=0){
            let val = dFn.getBCR(ele)
            // if (val < 1000)$(ele).addClass('on')
            if (val < winH)$(ele).addClass('on')
        }
    })
    // if(hideBox.top<1000)$(ele).removeClass('scAct')

})

// 상단이동 버튼 클릭시
// 부드러운 스크롤 사용하므로 그쪽함수로 이용함
tbtn.click((e)=>{
    e.preventDefault()
    // 부드러운 스크롤 위치값 변경
    setPos(0)
    console.log('ss')

})
