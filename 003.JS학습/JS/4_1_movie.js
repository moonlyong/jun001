
window.addEventListener("DOMContentLoaded", loadFn);
function loadFn() {
/********************************************************* 
                [내가만든 객체 활용하기]
                1. 주제 : 영화정보
                2. 조건 : 객체의 변수명을 자신만의 이름으로 작성
                        단. 속성명은 동일하게함
                3. 객체를 썜과 모두에게 공유하기
             *********************************************************/
    // 자신만의 오브젝트
    const Moon_Obj = {};
    // 오브젝트 형만 만들고 할당은 아래서
    // 1. 영화제목
    Moon_Obj.title = "어바웃 타임";
    // 2. 감독
    Moon_Obj.director = "리처드 커티스";
    // 3. 출연배우
    Moon_Obj.actor = "도널 글리슨, 레이첼 맥아담스";
    // 4. 장르
    Moon_Obj.genre = "로맨스";
    // 5. 관람가
    Moon_Obj.ratings = "15세";
    // 6. 예고편
    Moon_Obj.trailer = function () {
        console.log("예고편", "Ugmu8HOdpdo");
        playMovie("Ugmu8HOdpdo");
    };

    // 객체 확인
    console.log("나의객체:", Moon_Obj);
    // 화면에 정보를 보여주는 함수
    const showMovieInfo = function () {
        console.log("영화정보");
        // 줄간격 조정
        target[5].style.lineHeight = "34px";
        // 손가락 표시
        target[5].style.cursor = "pointer";
        // 글자 크기
        target[5].style.fontSize = "14px";
        // 1. 대상선정 5
        // 2. 내용넣기
        target[5].innerHTML = `
        ♣ 영화명 : ${Moon_Obj.title}
        ♣ 감독 : ${Moon_Obj.director} <br>
        ♣ 배우 : ${Moon_Obj.actor}
        ♣ 장르 : ${Moon_Obj.genre}
        ♣ 등급 : ${Moon_Obj.ratings}
                `;

        // 툴팁보이기
        target[5].title = `클릭하시면 ${Moon_Obj.title}예고편을 보실수 있습니다`;
        target[5].onclick = Moon_Obj.trailer;
    };

    // 최초 호출
    showMovieInfo();

    /****************************************************************************
        함수명 : playMovie
        기능 : 영화 예고편 화면 띄우기

    ****************************************************************************/
    function playMovie(mcode) {
        // mcode -영화 아이디
        console.log("난진짜야", mcode);
        // 동영상 박스 대상 : #mvbox
        let mvbox = document.querySelector("#mvbox");
        // 영화박스에 아이프레임 넣기
        mvbox.innerHTML = `<div id="mv">
        <iframe width="1280" height="720" 
        src="https://www.youtube.com/embed/${mcode}?autoplay=1" allow="autoplay">
        </iframe>
        <button class="cbtn">x</button>
        </div>`;
    }}