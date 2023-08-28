/// 로딩구역  //////////////
window.addEventListener("DOMContentLoaded", loadFn);
// DOMContentLoaded 이벤트 : html DOM 로딩후발생

/******************************************** 
                        [ 객체(Object) 란? ]

                - 일반적으로 JS에서 객체란 속성과 메서드를
                가지는 프로그램 단위체
                - 속성은 명사적 특징, 메서드는 동사적 특징
                객체예)
                https://www.w3schools.com/js/js_objects.asp
                - 자동차의 명사적특징: 핸들, 백미러, 트렁크, 바퀴 등
                - 자동차의 동사적특징: 운전하다, 멈추다, 주차하다 등

                (참고: 브라우저에 이미 만들어져 있는 객체들)
                -> 내장객체라고함!
                -> 브라우저 내장객체-> 봄(BOM:Browser Object Model)
                -> https://www.w3schools.com/js/js_window.asp

                window : 윈도우(브라우저화면) 표시 관련객체
                document : 문서구조에 관련된 객체
                Array : 배열객체
                Object : 객체를 만들기 위한 객체
                Date : 날짜객체
                Math : 수학객체
                ___________________________________

                ->>> 내장객체 중 객체를 만들기위한 객체인 Object를
                사용하여 객체를 만들어보자!

                [ 객체의 선언의 2가지 방식 ]
                1. new 키워드 선언방식
                - new Object()

                2. 리터럴 선언방식(객체리터럴)
                - 변수 = {}

                [ 객체의 할당 ]
                - 중괄호{}를 사용하여 할당코딩을 함
                - {속성명:값,속성명:값,...}
                - 여러값을 셋팅할때 콤마로 구분한다
                - 배열과 비교해서 이해하기 쉽고 호출하기 쉽다!
                - 객체 스타일로 데이터 구조를 만들고
                이런 파일로 DB와 데이터 통신을 한다!
                이 파일의 이름은? 제이슨(JSON:확장자.json)

                [ 객체의 호출 ]
                - 객체명[속성명]
                또는
                - 객체명.속성명

            ********************************************/

/******************************************** 
    함수명 : loadFn
    기능 : 로딩후 실행함수
********************************************/
function loadFn() {
    // 1. 호출확인
    console.log("로딩완료!");

    // 2. 출력대상 : .cont
    let target = document.querySelectorAll(".cont");

    console.log("타겟:", target);

    /********************************************** 
    [ 배열(Array) 변수란? ]

    - 여러개의 데이터를 묶음으로 변수하나에 저장함
    - 장점: 데이터를 취급하고 다루는데 편의성 제공
    - 각 데이터를 하나의 이름으로 구분하여 호출할
    수 있는 메모리공간이다!
    (예: 계란한판, 아파트 등)

    [ 배열의 선언의 2가지 방식 ]

    1. new 키워드 선언방식
    - new Array()
    객체를 실제로 메모리안에 생성하는 방법을 제공
    이를 인스턴스(instance)라고 함!

    2. 리터럴 선언방식 (배열리터럴)
    - 변수 = []


    - 객체란 속성과 메서드를 가지고 있는 프로그램 단위체
    - 객체는 독립된 특성을 가지고 있어야함!

    예컨데 자동차, 볼펜, 물통, 가방 등
    독립된 별도의 기능이 있어야하고 명사적특징과
    동사적 특징이 모두 있어야 객체다!

**********************************************/

    // 3. 내용 출력하기 ///////

    // 3-1. new 키워드와 함께 배열 선언,할당하기
    const arr1 = new Array(
        "1993년 10월 12일",
        "183cm",
        "65kg",
        "너도 인간이니?,치인트",
        4567,
        "서강준",
    );

    // new키워드로 선언과 할당을 동시에 할 수 있다
    // 소괄호안에 콤마로 값을 구분하여 사용함

    // 배열변수에 할당한 데이터 불러오기
    // 호출방법 : 배열변수명[순번] -> 순번은 0부터

    console.log("arr1:", arr1, typeof arr1);

    // 출력대상 : target[0]
    target[0].innerHTML =
        "이름 : " +
        arr1[5] +
        " / 키 : " +
        arr1[1] +
        " / 몸무게 : " +
        arr1[2] +
        " / 대표작 : " +
        arr1[3];

    // 3-2. 배열리터럴 방식의 선언과 할당
    // 배열변수명 = [값1,값2,값3,...]
    // new 키워드 없이 바로 쓸 수 있는 객체를
    // 정적객체(Static Object)라고 함!

    const arr2 = [
        "삼일절",
        "태극기",
        1919,
        function () {
            alert("대한독립만세!!!");
            console.log(this);
            // 배경이미지 넣기!
            // this는 호출한 요소 자신!
            this.style.background = `url(https://blog.kakaocdn.net/dn/H4k8p/btqUUqx7TLT/VAMfjsV79wqyKIfOGXn5P0/img.jpg) repeat-x 0/auto 100%`;
            this.style.transition = "2s ease-in-out";
            this.style.transform = "scale(1.5) rotate(720deg)";
        },
    ]; //// arr2 ////

    // function(){} 익명함수 - 이름없고 코드만 저장
    // -> 배열값으로 문자,숫자,배열,객체,함수 등 사용가능!!

    // 배열확인
    console.log("arr2배열:", arr2);

    // 출력대상 : target[1]
    target[1].innerHTML = `
        ${arr2[0]}은 ${arr2[2]}년에 일제에 항거하여 ${arr2[1]}를 들고 일어난 민중봉기를 기념하는 날이다!
    `;

    // 툴팁 띄우기
    target[1].title = "만세를 하시려면 클릭하세요!";

    // 손가락모양 커서
    target[1].style.cursor = "pointer";

    // 배열의 함수를 클릭이벤트에 연결하기
    target[1].onclick = arr2[3];

    // 3-3. 배열을 미리 생성하여 각각 할당하기
    // 배열변수명 = [] -> 배열리터럴!
    // 배열변수명.length = 숫자 -> 숫자만큼 배열이 생성
    // 배열변수명.length 는 배열개수를 읽기/쓰기 모두 가능함!

    const arr3 = [];
    // const 상수로 리터럴 선언,할당 후
    // 배열값을 변경은 자유롭다~!!!
    // 배열형을 변경못함!! 그래서 상수임!

    // 배열개수 미리셋팅하기
    arr3.length = 8;
    // 배열개수를 셋팅했어도 더 추가가 얼마든지 가능하다!

    console.log("arr3배열변수:", arr3);

    // 각 배열주소에 값을 할당함!
    arr3[0] = "산";
    arr3[1] = "할아버지";
    arr3[2] = "구름모자";
    arr3[3] = "썼네~!";
    arr3[4] = "나비같이";
    arr3[5] = "훨훨";
    arr3[6] = "훠얼훨";
    arr3[7] = "날아서~!";

    // 배열값 전체값 찍기 : valueOf()
    console.log("arr3배열전체값:", arr3.valueOf());
    // 참고로 변수만 찍어도 브라우저가 valueOf()를 찍어줌!

    // 변수 전체찍기에서 사이에 구분자 변경하기
    // join(구분자) -> 구분자를 넣고 문자값생성
    console.log("arr3배열 구분자로 문자찍기:", arr3.join("^"));
    // DB에 데이터를 하나로 만들어 넣을때
    // 많이 사용되기도 함!

    // 배열값 뒤에 동적으로 배열값 추가하기!
    // push(값) -> 배열맨뒤에 값을 추가하는 메서드
    arr3.push("김창완작사");

    // 배열값 사이에 별(★)을 넣어서 출력하기!
    // 출력대상 : target[2]
    target[2].innerHTML = arr3.join("★");

    // -> 배열메서드는 중요하므로 별로롤 훈련함~!!^^

    // 객체선언해서 생성해보자
    // new Object() 사용
    // 배열과 마찬가지로 객체는 형식이 변경되지않도록
    // let 보다는 const를 많이쓴다

    const SSG = new Object({
        "너의 이름은?": "손석구",
        생일: "1983/02/07",
        키: "178cm",
        몸무게: "80kg",
        혈액형: "C형",
        성별: "남성",
        대표작: "나의 해방일지,범죄도시2",
        소속사: "셋별당엔터",
        비밀번호: 7777,
        팬레터: function () {
            // 변경대상.style
            let mycss = target[3].style;
            // 1. 메시지 띄우기
            alert("상남자 오빠! 지금뭐해?");
            // 2. 배경이미지 넣기
            mycss.background =
                "url(https://file.mk.co.kr/meet/neds/2022/05/image_readtop_2022_456627_16533579475052374.jpeg) repeat-x top/auto 100%";
            // 3. 글자색
            mycss.color = "#fff";
            // 4. 글자 그림자
            mycss.textShadow = "0 0 5px #000";
            // 5. 글자 내용 변경
            target[3].innerText = "손석구 최고!!";
            // 6. 줄간격
            mycss.lineHeight = "84px";
            // 7. 박스 크게하기
            mycss.transform = "scale(1.2)";
            // 8 트랜지션
            mycss.transition = "1s ease-out 1s";
        },
    });

    // 객체확인
    console.log("손석구:", SSG);

    // 출력하기
    // 출력대상 : target[3]
    target[3].innerHTML = `
            당신이 좋아하는 남자배우는? ${SSG["너의 이름은?"]}/
            대표작은?${SSG["대표작"]}
            `;
    // 객체에 셋팅된 함수를 보통 매서드 라고 부른다
    // 매서드를 호출해보자
    target[3].onclick = SSG["팬레터"];

    // title 속성넣기
    target[3].title = `여기를 클릭하여 ${SSG["너의 이름은?"]} 팬레터를 확인하세요!`;

    // 손가락 표시
    target[3].style.cursor = "pointer";

    /*************************************** 
                [ new 키워드 없이 바로 객체 생성하기 ] 
                -> 객체 리터럴 (추천방식!)

                - 방법: 변수 선언 후 이퀄 뒤에 바로 중괄호 사용!
                예) let obj = {속성명:값,속성명:값,...};

                [ 객체의 속성 셋팅시 문자형 또는 변수형 사용하기 ]
                
                1. 문자형 속성 - 따옴표로 싸는 방법

                예) let obj = {"나는나":"호호호","너는너":"하하하"}
                -> 문자형 속성의 객체 호출시
                객체명[문자형속성명]
                예) obj["나는나"]

                2. 변수형 속성 - 따옴표로 안싸는 방법
                예) let obj = {name:"김수현",tall:"186cm"};
                -> 변수형 속성의 객체 호출시
                객체명.속성명
                예) obj.name

                또는

                객체명["속성명"]
                예) obj["name"]
                -> 반드시 변수형 속성명을 따옴표로 싸서
                문자형으로 표시해야함!
                obj[name] -> 에러남!

                -> 만약 문자형으로 설정된 경우에도
                변수형으로 사용될 수 있는 문자면 변수형호출가능!
                예) var obj = {"하하하":"나나나"}
                    obj["하하하"] 또는 obj.하하하

            ***************************************/

    // 객체 생성하기 - 객체 리터럴
    const GU = {
        name: "공유",
        tall: "184cm",
        weight: "74kg",
        work: "도깨비,부산행,오징어게임",
        // txt:'저랑 게임 한판 하시겟습니까?',
        msgFn: function (txt) {
            // 1.메세지 띄우기
            alert("팬레터:" + txt);
            // alert에 콤마  x
            let mycss = target[4].style;
            mycss.background =
                "url(https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Gong_Yoo_%28Sep_2016%29.png/250px-Gong_Yoo_%28Sep_2016%29.png) repeat-x top/auto 100%";
            // 3. 글자색
            mycss.color = "#fff";
            // 4. 글자 그림자
            mycss.textShadow = "0 0 5px #000";
            // 5. 글자 내용 변경
            target[4].innerText = "공유 최고!!";
            // 6. 줄간격
            mycss.lineHeight = "84px";
            // 7. 박스 크게하기
            mycss.transform = "scale(1.2)";
            // 8 트랜지션
            mycss.transition = "1s ease-out 1s";
        },
    };
    console.log("GU", GU);

    // 출력대상 4
    target[4].style.lineHeight = "45px";
    // 내용출력
    target[4].innerHTML = `저는 ${GU.name}입니다. 키는 ${GU.tall} 몸무게는 ${GU.weight}
            입니다 <br/>대표작은 ${GU.work}이있습니다 <br/>
            `;
    //  호출하기
    target[4].onclick = function () {
        // 실행코드 구역에서 객체 매서드를 호출
        // 전달값도 여기서 보내준다
        GU.msgFn("저랑 게임 한판 하시겟습니까?");
    };

    // title 속성넣기
    target[4].title = `여기를 클릭하여 ${GU.name} 팬레터를 확인하세요!`;

    // 손가락 표시
    target[4].style.cursor = "pointer";

    /********************************************************* 
                [내가만든 객체 활용하기]
                1. 주제 : 영화정보
                2. 조건 : 객체의 변수명을 자신만의 이름으로 작성
                        단. 속성명은 동일하게함
                3. 객체를 썜과 모두에게 공유하기
             *********************************************************/
    // 자신만의 오브젝트
    let Moon_Obj = {};
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
        // 툴팁 보이기
        target[5].title = `클릭하시면 ${Moon_Obj.title} 예고편을 보실 수 있습니다!`;

        // 예고편 메서드 호출!
        target[5].onclick = Moon_Obj.trailer;
    };

    // 영화 초이스 객체 ///// object.js

    // 이조은 초이스! //////////////////////
    const zoe_obj = {};
    // 오브젝트 형만 만들고 객체내용은 아래에서!
    // 1. 영화제목
    zoe_obj.title = "이터널 션샤인";
    // 2. 감독
    zoe_obj.director = "미셸 공드리";
    // 3. 배우
    zoe_obj.actor = "짐캐리, 케이트 윈슬렛";
    // 4. 장르
    zoe_obj.genre = "로맨스";
    // 5. 관람가
    zoe_obj.ratings = "12세";

    // 6. 예고편
    zoe_obj.trailer = function () {
        console.log("예고편:", "07-QBnEkgXU");
        // 플레이어함수 호출!
        playMovie("07-QBnEkgXU");
    }; ////// trailer 함수 ////////

    // 이동엽 초이스! //////////////////////
    const nick_obj = {};
    // 오브젝트 형만 만들고 객체내용은 아래에서!

    // 1. 영화제목
    nick_obj.title = "공조2:인터내셔날";

    // 2. 감독
    nick_obj.director = "이석훈";

    // 3. 배우
    nick_obj.actor = "현빈, 유해진, 윤아, 다니엘 헨리, 진선규";

    // 4. 장르
    nick_obj.genre = "액션,코미디";

    // 5. 관람가
    nick_obj.ratings = "15세";

    // 6. 예고편
    nick_obj.trailer = function () {
        console.log("예고편:", "fzUKUfHeIYA");
        // 플레이어함수 호출!
        playMovie("fzUKUfHeIYA");
    }; ///////////// trailer 함수 ///////////////

    // 신용진 초이스! //////////////////////
    const shin_Obj = {};
    // 오브젝트 형만 만들고 할당은 아래에서
    // 1. 영화제목
    shin_Obj.title = "말아톤";
    // 2. 감독
    shin_Obj.director = "정윤철";
    // 3. 배우
    shin_Obj.actor = "조승우,김미숙";
    // 4. 장르
    shin_Obj.genre = "드라마";
    // 5. 관람가
    shin_Obj.ratings = "전체 관람가";
    // 6. 예고편
    shin_Obj.trailer = function () {
        console.log("예고편", "mGgYQOiUq4s");
        // 플레이어함수 호출
        playMovie("mGgYQOiUq4s");
    }; /////////////trailer함수////////////////

    // 최수진 초이스! //////////////////////
    const csj_obj = {};

    // 오브젝트 형만 만들고 객체내용은 아래에서!
    // 1. 영화제목
    csj_obj.title = "가디언즈오브갤럭시vol.3";
    // 2. 감독
    csj_obj.director = "제임스건";
    // 3. 배우
    csj_obj.actor = "크리스프랫,조샐다나";
    // 4. 영화장르
    csj_obj.genre = "SF코미디어드벤처";
    // 5. 관람가
    csj_obj.ratings = "12세";
    // 6. 예고편
    csj_obj.trailer = function () {
        console.log("예고편:", "XyHr-s3MfCQ");

        // 플레이어함수 호출!!
        playMovie("XyHr-s3MfCQ");
    }; ////////////// trailer 함수 ////////////////////

    // 최초호출!
    showMovieInfo();

    /*************************************** 
                       함수명 : playMovie
                       기능: 영화예고편 화면 띄우기
                   ***************************************/
    function playMovie(mcode) {
        // mcode - 영화아이디
        // 함수호출 및 전달값 확인
        console.log("난진짜야~!", mcode);

        // 1. 동영상 박스 대상선정 : #mvbox
        let mvbox = document.querySelector("#mvbox");

        // 2. 영화박스에 아이프레임 넣기
        mvbox.innerHTML = `
                <div id="mv">
                <!--유튜브 아이프레임-->
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/${mcode}?autoplay=1" allow="autoplay"></iframe>
                <!--닫기버튼-->
                <button class="cbtn">×</button>
                </div>
                `;

        // 3. 삽입된 동영상 박스 CSS설정하기
        let mv = document.querySelector("#mv");
        let css = mv.style;

        css.position = "fixed";
        css.top = "50%";
        css.left = "50%";
        css.transform = "translate(-50%,-50%)";
        css.width = "700px";
        css.height = "450px";
        css.backgroundColor = "#000";

        // 4. 닫기버튼 CSS 셋팅하기
        let cbtn = document.querySelector(".cbtn");
        // console.log(cbtn);
        // style.cssText는
        // css를 직접 style속성값으로 넣음!
        cbtn.style.cssText = `
                position : absolute;
                top : 0;
                right : -70px;
                width : 50px;
                height : 50px;
                border : none;
                color : #fff;
                background-color : blue;
                font-size : 40px;
                font-weight : bold;
                border-radius: 50%;
                cursor : pointer;
                line-height : 50px;
                `;

        // 아이프레임 보더 없앰
        mv.querySelector("iframe").style.border = "none";

        // 5. 닫기버튼 클릭시 #mv 제거하기
        cbtn.onclick = function () {
            mv.remove();
            // remove() 는 DOM 메서드로
            // 선택요소를 제거함!

            // body에 클래스 on 제거하기
            document.body.classList.remove("on");
        }; /////// click이벤트 함수 ///////

        // 6. body요소에 클래스 on 주기
        // 동영상 배경 암전효과
        document.body.classList.add("on");
    } //////////////// playMovie 함수 ////////////
    //////////////////////////////////////////////

    // 초이스버튼 링크걸기

    // 대상선정 : .choice button
    let choice = document.querySelectorAll(".choice button");
    console.log("초이스:", choice);

    // 초이스 개수
    let choice_cnt = choice.length;

    // for문으로 버튼들을 click이벤트 설정함!
    // for(시;한;증){코드}
    for (let i = 0; i < choice_cnt; i++) {
        choice[i].onclick = function () {
            // 1. 버튼텍스트
            let btxt = this.innerText;
            console.log("난누구?", btxt);

            // 할당전 이전 영화객체
            console.log(Moon_Obj, zoe_obj);

            // 2. 버튼텍스트에 해당하는 객체를
            // 기존 객체에 덮어쓰기
            switch (btxt) {
                case "조은초이스":
                    Moon_Obj = zoe_obj;
                    break;
                case "동엽초이스":
                    Moon_Obj = nick_obj;
                    break;
                case "용진초이스":
                    Moon_Obj = shin_Obj;
                    break;
                case "수진초이스":
                    Moon_Obj = csj_obj;
                    break;
                case "조은초이스":
                    Moon_Obj = zoe_obj;
                    break;
            } //////// switch case ////////

            // 3. 객체 셋팅함수 호출!
            showMovieInfo();
        }; /////////// click 이벤트함수 /////
    } ////////////// for //////////////
} //////////////// loadFn 함수 //////////////
/////////////////////////////////////////////
