// DC.com 로고 컴포넌트
import React from "react";
import { isrc } from "../data/imgSrc";
import { useNavigate } from "react-router-dom";

export const Logo = (props) => {
    // props.logoStyle : 상단,하단구분 로고코드

    // 라우터 이동메서드
    const goNav = useNavigate();
    // 반드시 useNavigate()를 변수에 담아 라우터주소를 쓰면 이동함
    // goNav('/#')
    // 이동주소는 대소문자 구분없음
    // 객체형 스타일 적용
    const myStyle = {
        top: {
            width: "45px",
            height: "45px",
            marginRight: "30px",
            borderRadius: "50%",
            cursor: "pointer",
        },

        bottom: {
            height: "80px",
        },
    };

    // 이미지 스타일 변경 객체
    const myStyleImg = {
        top: "45px",
        bottom: "80px",
    };

    // 자식컴포넌트 처리용함수
    const nayaLogo = (txt) => {
        goNav("/");
        console.log(txt);
    }; ///////// nayaLogo //////////

    // 코드 리턴 //////////////////////////
    return (
        <h1
            style={myStyle[props.logoStyle]}
            onClick={() => nayaLogo("나,로고야!")}
        >
            <img
                src={isrc.logo}
                alt="DC logo"
                style={{
                    width: myStyleImg[props.logoStyle],
                }}
            />
        </h1>
    );
}; ////////////// Logo ///////////////
