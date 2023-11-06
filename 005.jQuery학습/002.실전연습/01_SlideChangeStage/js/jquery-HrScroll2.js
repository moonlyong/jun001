// 제이쿼리로 구현한 가로방향 스크롤 JS : jquery-HrScroll.js

// 로딩구역없이 함수로 구현함! /////

/****************************************** 
    대상 변수할당하기
******************************************/
// 전체 페이지번호
let wNum = 0;
$('html, body').on('wheel',()=>{
    // 휠방향 
    let dir = event.wheelDelta;
    
    if(dir<0) wNum +=100;
    else wNum -= 100;
    let winW = $(window).width()

    let limit = winW*7 - winW
    // 한계값
    if(wNum<0) wNum = 0;
    else if(wNum>limit) wNum = limit;
    // 휠방향
    // 델타값으로 알아냄(e.wheelDelta)

    // 가로스크롤
    // scrollLeft
    // stop(매서드로) 이전애니메이션을 지움

    $('html, body').stop().animate({
        scrollLeft:wNum + 'px'
    },4000,'easeOutQuint')
})