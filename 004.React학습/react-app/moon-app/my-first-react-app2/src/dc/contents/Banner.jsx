// DC.com 배너 컴포넌트

// 배너데이터
import { banData } from "../data/banner";

// 배너CSS
import "../../css/banner.css";
import { useEffect } from "react";
import $ from 'jquery'
import 'jquery-ui-dist/jquery-ui'
function slideFn(){
  const sldBox =$('.slider')
  // function A_Set(x,y){
  //   sldBox.animate({
  //     left:(x)
  //   },600,"easeInOutQuint",(y))
  // }
// 이동버튼 클릭시
$('.abtn').click(function(){
  let isR = $(this).is('.rb')
  if(isR){
    // A_Set("-100%",()=>{
    //     sldBox.append(sldBox.find('li').first())
    //     .css({left: '0'})})
    sldBox.animate({
      // 수치조정필요
      left:'-100%'
    },600,"easeInOutQuint",()=>{
      // 콜백함수(애니후)
      // 맨앞 li 맨뒤로 이동
      sldBox.append(sldBox.find('li').first())
      // left 값은 0 으로 초기화
      .css({left: '0'})
    })
  }
  else{
    
    sldBox.prepend(sldBox.find('li').last()).css({left: '-100%'})
    .animate({
      // 수치조정필요
      left:'0'
    },600,"easeInOutQuint")
  }
})
}//////슬라이드 함수

// 배너 컴포넌트 //
export function Banner(props) {
    // category - 카테고리 분류명(베너 데이터선택)
    // 페이지 랜더링후 실행구역
    useEffect(() => {
        console.log("랜더링후~!");
        // 슬라이드 기능구현함수 호출
        slideFn()
    });
    // 리스트만들기 함수
    const makeList = (data) => {
        console.log(data);
        return data.map((v, i) => (
            <li key={i}>
                <img src={v.src} alt="ㅎㅎ" />
            </li>
        ));
    };
    // 선택데이터
    const selData = banData[props.category];

    // 코드리턴 ////////////////
    return (
        <div className="banner">
            {/* 이동슬라이드 */}
            <ul className="slider">{makeList(selData)}</ul>
            {/* 이동버튼 + 슬라이드 블릿 */}

            {
                // 조건식이 true일때 출력
                selData.length > 1 && (
                    <>
                        {/* 양쪽이동 버튼 */}
                        <button className="abtn lb">＜</button>
                        <button className="abtn rb">＞</button>
                        {/* 블릿 인디케이터 */}
                        <ol className="indic">
                            {selData.map((v, i) => (
                                <li className={i == 0 ? "on" : ""} key={i}></li>
                            ))}
                        </ol>
                    </>
                )
            }
        </div>
    );
} ////////// Banner 컴포넌트 //////////
