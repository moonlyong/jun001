// 미니언즈 좀비 탈출 애니 구현 JS - main.js

    /*********************************** 
        [ 요구사항정리 ]
        1. 버튼을 클릭하여 미니언즈가
        순서대로 특정위치로 이동하며
        메시지를 보여준다
        2. 각 위치별 좀비를 등장시킨다
        3. 맨윗층에서 탈출할때 헬기를 사용한다

        [ 변경대상 ]
        1. 주인공 미니언즈
        2. 좀비 미니언즈들
        3. 주사기
        4. 헬기

        [ 이벤트와 이벤트대상  ]
        1. 이벤트 : 클릭이벤트
        2. 이벤트대상 : 버튼들
        3. 기능구분 : 버튼글자(지시사항)

    ***********************************/

// 0.주인공들 변수에 할당
// 1-미니언즈
const mi =$('.mi')
// 2-건물
const room = $('.building li')
// 3-버튼들
const btns = $('.btns button')
// 4-메시지 박스
const msg = $('.msg')
// 5-좀비 주사기 요소변수
let mz1 = `<img src="./images/mz1.png" alt="" class="mz">`;
let mz2 = `<img src="./images/mz2.png" alt="" class="mz">`;
let zom = `<img src="./images/zom.png" alt="" class="mz">`;
let inj = `<img src="./images/inj.png" alt="" class="inj">`;
// console.log(mi,room,btns,msg)

// 1.건물 각 방에 번호넣기 + 좀비/주사기 넣ㄷ기
// 대상 room
// 사용 제이쿼리 메서드
// 1-each((순서,요소)=>{}) : 요소의 갯수만큼 순서대로 돌아줌
// 2-append(요소) : 선택요소 내부에 자식요소 추가
room.each((idx,ele)=>{
    // console.log(idx,ele);
    // 1- 각방에 숫자로 순번넣기
    $(ele).text(idx)
    // 2- 좀비 주사위 넣기
    switch(idx){
        case 9:$(ele).append(mz1);
        break
        case 7:$(ele).append(mz2);
        break
        case 2:$(ele).append(inj);
        break
        case 1:$(ele).append(zom);
        break

    }
})
// 좀비는 모두 숨기기
$('.mz').hide()

// 버튼세팅하기
btns.hide().first().show()
// 버튼들.숨겨.첫번째.보여

// 3.미니언즈 공통기능 함수
// 1-ele 클릭된 버튼요소
// 2-seq 순번
// 3-fn 이동후 실행할 코드
const actMini =(ele,seq,fn)=>{

}
// 들어가기 버튼 클릭시
btns.first()
    .click(function(){
        // 메시지 숨기기
        msg.fadeOut(300)
        // 이동하기
        // 원리 : 이동할방 li위치값을 읽은후 이동함
        let myRoom = room.eq(8)
        // 위치값 배열변수
        let pos = []
        pos[0]=myRoom.offset().top
        pos[1]=myRoom.offset().left
        console.log(pos[0],pos[1])
        mi.animate({
            top : pos[0]+'px',
            left : pos[1]+'px'
        },800,"easeOutElastic")
        // 메시지 변경
        msg.html(`와~! 아늑하다! 옆방으로 가보자!`).delay(1000).fadeIn(300)
        // 메시지 보이기
        
    })