// 1. 전역변수 설정하기
// 1-1 페이지 변수
let pg_num = 0;
let sts_wheel = 0;
// 전체 페이지수
let total_page;

// 새로고침시 첫페이지로 리셋하기
// 브라우저 스크롤바 위치캐싱
setTimeout(() => window.scrollTo(0, 0), 500);

// 2. 이벤트 등록하기
// 대상: window
window.addEventListener("wheel", wheelFn);
window.addEventListener("DOMContentLoaded", loadFn);
// window.addEventListener('click',wheelFn)

// 이벤트 연결하기

// DOM선택함수
const qs = (x) => document.querySelector(x);
const qsa = (x) => document.querySelectorAll(x);

/**********************************************
        함수명 loadFn
        기능 html 로딩후 실핼 코드구역
**********************************************/

function loadFn() {
    console.log("로딩완료");

    total_page = qsa(".page").length;
    console.log("페이지수", total_page);

}

/******************************************** 
        함수명 wheelFn
        기능: 마우스 휠 작동시 페이지 이동
********************************************/

function wheelFn(e) {
    //이벤트 전달변수(자동)
    // 함수호출
    console.log("휠이벤스");

    // 광클금지
    if (sts_wheel) return;
    sts_wheel = 1; //
    setTimeout(() => (sts_wheel = 0), 800);
    // console.log('11')

    // 1. 휠방향에 따른 페이지변수 변경하기
    // 휠방향은 wheelDelta로 알아냄
    let delta = e.wheelDelta;
    console.log("윌델타", delta);

    // 음수 는 아랫방향 양수는 윗방향
    if (delta < 0) pg_num++;
    else pg_num--;
    // 페이지 번호 확인
    console.log("페이지번호는?", pg_num);

    // 제한주기(양끝페이지 고정)
    if (pg_num < 0) pg_num = 0;
    if (pg_num > total_page) pg_num = total_page - 1;

    // 2. 페이지 이동하기
    // scrollTo(x, y)
    // 세로방향이동은 두번째 값만 주면 된다
    // 스크롤 애니메이션은 html-behavior:smooth 로 처리
    // 화면단위로 이동하므로 윈도우 높이값을 기본값으로 처리
    // window.innerHeight -> window 높이값 구해온다

    window.scrollTo(0, window.innerHeight * pg_num);
}
