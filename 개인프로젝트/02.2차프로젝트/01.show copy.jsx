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


