const SvIcon = [
    {
        tit: "교통",
        imoz: "🚍",
    },
    {
        tit: "주유",
        imoz: "⛽",
    },
    {
        tit: "통신",
        imoz: "📱",
    },
    {
        tit: "마트",
        imoz: "🛒",
    },
    {
        tit: "쇼핑",
        imoz: "🎁",
    },
    {
        tit: "푸드",
        imoz: "🍛",
    },
    {
        tit: "카페",
        imoz: "☕️",
    },
    {
        tit: "의료",
        imoz: "🏥",
    },
    {
        tit: "자동차",
        imoz: "🚗",
    },
    {
        tit: "영화",
        imoz: "🎬",
    },
    {
        tit: "항공",
        imoz: "✈️",
    },
];
function IconSet(props) {
    return (
        <li id="icon">
            <span>
                {props.tit}{props.imoz}
            </span>
        </li>
    );
}

function IconList(props) {
    return (
        <React.Fragment>
            <div id="icon-box">
                <ul>
                    {SvIcon.map((x) => (
                        <IconSet tit={x.tit} imoz={x.imoz}></IconSet>
                    ))}
                </ul>
            </div>
        </React.Fragment>
    );
}
ReactDOM.render(<IconList />, document.querySelector("#root"));

dtg.forEach((ele) => goDrag(ele));
let Card = document.querySelector(".card-box");
console.log(Card);
Card.goDrag()
function goDrag(ele) {
    let drag = false;
    let fx, fy;
    let lx = 0,
        ly = 0;
    let mvx, mvy;
    let rx, ry;

    const dTrue = () => (drag = true);
    const dFalse = () => (drag = false);
    const dMove = () => {
        console.log(drag);
        if (drag) {
            mvx = event.pageX;
            mvy = event.pageY;
            rx = mvx - fx;
            ry = mvy - fy;
            ele.style.left = rx + lx + "px";
            ele.style.top = ry + ly + "px";
            dtg.forEach((ele) => (ele.style.zIndex = 0));
            ele.style.zIndex = 1;
            console.log(`mvx: ${mvx}mvy: ${mvy}`);
            console.log(`rx: ${rx}ry: ${ry}`);
        }
    };

    const firstPoint = () => {
        fx = event.pageX;
        fy = event.pageY;
    };
    const lastPoint = () => {
        lx += rx;
        ly += ry;
    };
    ele.addEventListener("mousedown", () => {
        dTrue();
        firstPoint();
    });
    ele.addEventListener("mouseup", () => {
        dFalse();
        lastPoint();
    });
    ele.addEventListener("mousemove", dMove);
    ele.addEventListener("mouseleave", dFalse);
}