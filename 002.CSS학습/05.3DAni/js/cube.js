// 큐브 애니 JS //////////////

/************************************* 
    [구현내용]
    - "돌아!"버튼을 클릭하면 멈춰있던
    큐브가 돌아감. 이때 버튼이 "멈춰!"
    버튼으로 변경되어 있음!
    - "멈춰!" 버튼을 클릭하면 돌고있던
    큐브가 멈춤. 이때 버튼이 "돌아!"
    버튼으로 변경되어 있음!

*************************************/
// 로드이벤트 호출
window.addEventListener('DOMContentLoaded',loadFn)
// DOM 선택함수
const qs = (x) => document.querySelector(x);
const qsa = (x) => document.querySelectorAll(x);
// 로딩함수/////
function loadFn(){
    // 호출확인
    console.log("호출~")

    // 대상선정 .btngo
    // 이벤트대상
    const btngo = qs('.btngo')
    console.log('대상:',btngo)
    // 변경대상
    const cu = qs('.cube')
    console.log('대상',cu)

    // 변경내용
    btngo.onclick =(e)=>{//e는 이벤트 전달변수
        console.log('돌아')
        // 변경내용
        // 클래스on 있으면 뺴고 없으면 넣기
        // classList.toggle(클래스명)
        cu.classList.toggle('on')

        // 텍스트 읽어오기
        let btxt = e.target.innerText
        console.log('화살표 함수에서 this',this,e.target,
        '현재 버튼 글자',btxt)

        // 버튼글자 변경함수
        e.target.innerText = btxt=='돌아'?'멈춰':'돌아'
        // 할당할 데이터를 삼항연산자로 결정
    }
    
}/////로딩함수///////