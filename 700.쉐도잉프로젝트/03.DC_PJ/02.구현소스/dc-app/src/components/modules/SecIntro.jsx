// 섹션 소개 모듈 가져오기
import { secIntroData } from "../data/sec_intro";

import "../../css/sec_intro.css";

// 링크이동을 위한 라우터
import { Link } from "react-router-dom";
// Root > section > img Box + title Box + button Box
export function SecIntro() {
    const selData = secIntroData;
    return (
        <>
            <section className="sec-intro">
                {selData.map((v, i) => (
                    <div key={i}>
                        {/* 이미지 박스 */}
                        <div className="imbx">
                            <img src={v.isrc} alt={v.tit} />
                        </div>
                        {/* 타이틀 박스 */}
                        <div className="titbx">
                            <h3>{v.tit.split('^')[0]}</h3>
                            <h2>{v.tit.split('^')[1].toUpperCase()}</h2>
                        </div>
                        {/* 버튼 박스 */}
                        <div className="btnbx">
                            <Link to={v.link}>
                            <button>{v.btn.toUpperCase()}</button>
                            </Link>
                        </div>
                    </div>
                ))}
            </section>
        </>
    );
}
