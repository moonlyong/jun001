// 01.공유신발 JSX
// import data from "./data.js";
import myData from "./data.js";
import myData2 from "./data2.js";
// 두개의 데이터를 배열로 구성
const twoData = [myData, myData2];
/************************************************* 
 * 서브 컴포넌트 2 : SubViewCode
 // 상품상세보기 html코드 구성 컴포넌트 ///////////
*************************************************/
function SubViewCode(props){
    // props.idx = 선택데이터 순번 (신발/드레스)
    // props.chgFn()함수로 사용가능 부모: chgSubView 호출
    // 프롭스다운 프롭스펑션 업/다운
    // props.itemNum
    const selData = twoData[props.idx]
    // 선택 전체데이터
    // 배열.find(v=>{if(조건)return true})
    const selItem = selData.find(v=>{
      if(v.idx == props.itemNum) return true
    })
    
  
    // 코드 리턴 파트
    return(
      <ol>
        <li>
          <img src={
            props.idx?
            "./images/gallery/"+selItem.idx+".jpg":
            "./images/vans/vans_"+selItem.idx+".jpg"
          } alt={props.idx?"드레스":"신발"} />
        </li>
        <li>상품명 : {selItem.gname} <br />
        가격 : {selItem.gprice}원 <br />
        <button onClick={()=>props.chgFn(0,0)}>리스트로 가기</button>
        </li>
      </ol>
    );
  }

  export {SubViewCode}