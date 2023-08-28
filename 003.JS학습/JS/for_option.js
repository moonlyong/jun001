// 로딩 구역
window.addEventListener("load", function () {
    // 로드 확인
    // console.log("Loading");

    // 1. 대상선정
    // 이벤트대상
    let btns = document.querySelectorAll("button");

    // console.log("대상:", btns);

    // 2. 이벤트 셋팅
    // for(시작,한계,증가)
    // 한계값을 위한 버튼 개수
    let cnt = btns.length;
    for (let i = 0; i < btns.length; i++) {
        // console.log("순번:", i);
        btns.item(i).onclick = showNum;
    }
    /**************************************************
            함수명: showNum
            기능: for문으로 숫자이미지 보이기
     **************************************************/
    function showNum() {
        // console.log("버튼:", this);
        // 클릭된 버튼의 요소 데이터 읽기
        let txt = this.innerText;
        // console.log("내용:", txt);
        // 클릭된 버튼요소의 부모는?
        // DOM 요소 선택법
        // parentElement (부모요소)
        // 이미지 넣을 대상 선정
        let trg = this.parentElement.querySelector(".forCls");
        // 버튼에서 div로 올라가고 아래자식요소중 forCls
         console.log("내용:", txt, "대상:", trg, "부모:", this.parentElement);

        

        // 대상 html 초기화
        trg.innerHTML =''

        // 3.for문으로 대상에 이미지 넣기
        for (let i = 1; i <= 10; i++) {
            // console.log("개수개수",i);

            // 4. 조건에 따른 for문 옵션
            // 4-1 4번과 7번빼고 돌리기
        if(txt=='for문옵션1'&&(i==4||i==7))continue;

        // continue 키워드
        // 해당 조건을 제외하고 for문을 진행시킴
        // for문에서 continue 를 만나면 증감항목으로 올라가고 
        // 아래쪽 코드가 실행되지않는다

        // 4-2 5번까지만 돌리기
        // break 키워드
        // 제어문을 빠져나옴
        if(txt=='for문옵션2'&&i==6) break;

        // 4-3 2~4,9빼고 돌리기
        if(txt=='for문옵션연습'&&((i>=2&&i<=4)||i==9)) continue;
        // && = (구간설정) 
        // || = (and)
        
        // 4-4 짝수만 빼고 돌리기
        if(txt=='홀수만'&&(i%2==0))continue
        // % = 나머지 연산

        // 4-5 홀수만 빼고 돌리기
        if(txt=='짝수만'&&(i%2!==0))continue
        // ! = ~아니면

            trg.innerHTML +=
            `<img src="./images/num/num_0${i}.png" alt="er">`
        } ////showNum함수/////
    }
});
