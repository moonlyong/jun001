// 리스트 페이지 JS - list.js

// 게시판 데이터 불러오기

import {updateList} from './update_list.js'

// console.log(bData);

// 데이터 idx의 내림차순으로 정렬변경하기!


// 리스트업데이트 함수 최초호출! : 1페이지
updateList(1);




// 데이터 태그 생성후 태그넣기
// board.html(
//     bData.map(v=>`
//         <tr>
//             <td>${addNum()}</td>
//             <td>${v.tit}</td>
//             <td>${v.writer}</td>
//             <td>${v.date}</td>
//             <td>${v.cnt}</td>
//         </tr>
//     `).join('')
// ); ///////// html //////////

// 데이터를 태그로 구성함
// 태그 구조: <tr><td></td>...</tr>
/* 
    [ 매칭 데이터 ]
    <tr>
        <td>번호 - idx</td>
        <td>글 제목 - tit</td>
        <td>글 쓴이 - writer</td>
        <td>등록일자 - date</td>
        <td>조회수 - cnt</td>
    </tr>
*/