// 1번 컴포넌트
function MakeDev(){
    return <h1>나는 개발자야!</h1>;
} ////////// MakeDev 컴포넌트 //////////

// 2번 컴포넌트
function LostDev(){
    return <h1>개발자가 뭐지?</h1>;
} ////////// MakeDev 컴포넌트 //////////

// 3번 컴포넌트 : 이미지생성
function MakeImg(props){
    return <img 
        src={props.isrc}
        alt={props.ialt}
        title={props.itit} />;

} ////////// MakeImg 컴포넌트 ////////////

// 출력 메인 컴포넌트 /////
// 셋팅할 변수 : isDev, isrc, ialt, itit
function Developer(props){
    const isNow = props.isDev; //  true / false

    // 조건문
    if(isNow){
        return(
            <React.Fragment>
                {/* MakeDev 컴포는트 선택출력 */}
                <MakeDev />
                <MakeImg
                    isrc={props.isrc}
                    ialt={props.ialt}
                    title={props.itit} />
            </React.Fragment>
        );

    } ////////// if ////////////

    // if문에 걸리면 그 안에서 return됨
    // 안걸리면 else문 없이도 여기 return됨!
    return(
        <React.Fragment>
            {/* MakeDev 컴포는트 선택출력 */}
            <LostDev />
            <MakeImg
                isrc={props.isrc}
                ialt={props.ialt}
                itit={props.itit} />
        </React.Fragment>
    );

} ////////// Developer 컴포넌트 /////////
const devImg = [
    "https://cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/HYAONH6EGJBKIU5CJWWF343MKE.jpg",
    "https://img3.daumcdn.net/thumb/R658x0.q70/?fname=https://t1.daumcdn.net/news/202208/24/BoiledMovie/20220824133926904mopw.png"
];

ReactDOM.render(
<Developer 
isDev={true}
isrc={devImg[0]}
ialt="문룡이"
itit="나는 문룡이입니다"
/>,document.querySelector('#root1'))
ReactDOM.render(
<Developer 
isDev={false}
isrc={devImg[1]}
ialt="굴룡이"
itit="나는 굴룡이입니다"
/>,document.querySelector('#root2'))