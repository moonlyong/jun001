const SvIcon = [
    {
        tit: "교통",
        imoz: "🚍",
        txt:"택시 버스 지하철 등 대중교통",
    },
    {
        tit: "주유",
        imoz: "⛽",
        txt:"주유소 전기차충전소 관련 ",
    },
    {
        tit: "통신",
        imoz: "📱",
        txt:"SKT KT LGU+ 요금할인",
    },
    {
        tit: "마트",
        imoz: "🛒",
        txt:"대형마트 편의점 전통시장",
    },
    {
        tit: "쇼핑",
        imoz: "🎁",
        txt:"면세점 백화점 홈쇼핑",
    },
    {
        tit: "푸드",
        imoz: "🍛",
        txt:"일반음식점 배달앱 패스트푸드 ",
    },
    {
        tit: "카페",
        imoz: "☕️",
        txt:"카페 베이커리",
    },
    {
        tit: "의료",
        imoz: "🏥",
        txt:"병원 약국",
    },
    {
        tit: "자동차",
        imoz: "🚘",
        txt:"보험 정비 하이패스",
    },
    {
        tit: "영화",
        imoz: "🎬",
        txt:"공연 전시 도서 영화",
    },
    {
        tit: "항공",
        imoz: "✈️",
        txt:"각종 항공사 항공마일리지",
    },
    {
        tit: "해외",
        imoz: "🌎",
        txt:"해외결제 환전수수료",
    },
];



function TopArea(props) {
    return (
        <React.Fragment>
        <h1 class="top-logo">
            <img src="./MLM.png" alt="" />
            MLM Card
        </h1>
        </React.Fragment>
    );
}
ReactDOM.render(<TopArea />, document.querySelector("#root1"))
function IconSet(props) {
    return (
        <li id="icon">
            <span>
                {props.tit}
            </span>
            <span>
                 {props.imoz}
            </span>
            <p>{props.txt}</p>
        </li>
    );
}

function IconList(props) {
    return (
        <React.Fragment>
            <div id="icon-box">
                <ul>
                    {SvIcon.map((x) => (
                        <IconSet tit={x.tit} imoz={x.imoz} txt={x.txt}></IconSet>
                    ))}
                </ul>
            </div>
            <div className="card-box">
                
            </div>
            {/* 담을박스 */}
        </React.Fragment>
    );
}
ReactDOM.render(<IconList />, document.querySelector("#root2"));


const dtg = document.querySelectorAll("#icon");
console.log(dtg)
// 드래그 설정하기
dtg.forEach(ele=>goDrag(ele))
           
function goDrag(ele) {
    //ele - 드래그 대상 요소
    // 2.변수세팅
    // (1) 드래그 상태 변수 : true =드래그중 false = 드래그 아님
    let drag = false;
    // (2) 첫번째 위치 포인트 first x, first y
    let fx, fy;
    // (3) 마지막 위치 포인트 last x, last y
    let lx = 0,
        ly = 0;
    // 마지막 위치로 부터 처음 작동하므로 초기값 0세팅
    // (4) 움직일때 위치포인트 move x, move y
    let mvx, mvy;
    // (5) 위치이동 차이 결과변수 result x, result y
    let rx, ry;

    // 3.함수만들기
    // (1) 드래그 상태 true로 변경 함수
    const dTrue = () => (drag = true);
    // (2) 드래그 상태 false로 변경 함수
    const dFalse = () => (drag = false);
    // (3) 드래그 작동함수
    const dMove = () => {
        console.log(drag);
        // 드래스 상태일때만 실행
        if (drag) {
            // 1. 드래그 상태에서 움직일때 위치값 mvx,mvy
            mvx = event.pageX;
            mvy = event.pageY;
            // 2. 움직일때 위치값-처음위치값 : rx ry
            rx = mvx - fx
            ry = mvy - fy;
            // 순수하게 움직인 거리
            // 3. x,y 움직인 위치값을 타겟 요소에 적용
            // 대상: 전달된 드래그요소 ->ele변수
             ele.style.left = (rx+lx)+'px'
             ele.style.top = (ry+ly)+'px'
            //  4. z-index 값을 드래그 대상만 높여주고 나머지는 지움
            dtg.forEach(ele=>ele.style.zIndex=0)
            ele.style.zIndex = 1;
            // 확인
            console.log(`mvx: ${mvx}mvy: ${mvy}`);
            console.log(`rx: ${rx}ry: ${ry}`);
        }
    }; ////dmove 함수

    // (4) 첫번째 위치 포인트 세팅 함수 :fx fy
    const firstPoint = () => {
        fx = event.pageX;
        fy = event.pageY;
    };
    // (5) 마지막 포인트 세팅함수 lx ly
    const lastPoint = () => {
        lx += rx;
        ly += ry;
    };
    // 4. 이벤트 등록하기
    // (1) 마우스 내려갈때 : 드래그 true + 첫번째 위치값 업데이트
    // 대상 :호출시 보내준 드래그 대상 요소 ->ele변수
    ele.addEventListener("mousedown", () => {
        dTrue();
        firstPoint();
    });
    // (2) 마우스 올라올때
    ele.addEventListener("mouseup", () => {
        dFalse();
        lastPoint();
    });
    // (3) 마우스 움직일때
    ele.addEventListener("mousemove", dMove)
    // (4) 마우스 벗어날때 : 드래그 상태 false 처리 함수 호출
    ele.addEventListener("mouseleave", dFalse)
}


