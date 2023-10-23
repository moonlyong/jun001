import dFn from './dom.js'
// console.log(dFn)
   /*************************************************************** 
            [ JS 로컬스토리지 : localStorage ]
            - window하위객체 window.localStorage
            -> window는 주로 생략함!

            1. 정의 : 
                브라우저별 로컬 어플리케이션 영역에 저장되는 
                스트링데이터 저장소(JS API)
            2. 유지 : 같은 PC, 같은 브라우저(재설치없이사용) 일 경우 계속유지됨
                (단, 같은파일일 지라도 여는 경로에 따라 같은 변수도
                따로 관리된다! - 기준이 도메인경로/주소)
            3. 특징 : 모드 데이터는 키,값 쌍으로 구성되며 
                데이터값은 반드시 문자형으로 사용됨
            4. 응용 : 데이터로 배열/객체를 사용할 경우 문자형 변환하여 넣고
                        다시 객체형으로 파싱하여 사용한다!
                    (1) 입력시 : JSON.stringify(배열/객체)
                    (2) 사용시 : JSON.parse(문자형배열/객체)
                    -> JS의 제이슨 데이터 파싱 메서드 : 
                        JSON.parse()
                    -> JS의 제이슨 형식 데이터를 문자열로 변환하는 메서드:   
                        JSON.stringify()
            5. 사용메서드 : 
                (1) 값설정 : setItem(키명,값)
                (2) 값읽기 : getItem(키명)
                (3) 전체지우기 : clear()
                (4) 키번호읽기 : key(순번) -> 0부터 (키이름리턴)
                (5) 개별항목삭제 : removeItem(키명)
                (6) 개수 : length

            [ JS 세션 스토리지 : sessionStorage ]
            -> 로컬스토리지와 차이점은?
            -> 브라우저가 닫히면 데이터가 사라진다!
            (로컬세션의 개념은 서버세션과 달리 하나의 브라우저탭을
            단위로 한다!)
            -> 서버세션은 접속된 로그인정보세션을 서버에서 관리하는 단위임

            [ JS 로컬 스토리지 / 세션 스토리지 장단점 ]
            (1) 장점: 간단한 프론트엔드 데이터를 DB없이 테스트해보는데 탁월함
            (2) 단점: 데이터의 지속 보장이 없다!
                (그나마 로컬 스토리지는 브라우저 경로가 같고 PC가 같고
                브라우저종류가 같다면 지우기 전까지는 데이터를 유지한다!)


            -> w3 schools 참고
            https://www.w3schools.com/js/js_api_web_storage.asp
        ***************************************************************/

const btnlocal = dFn.qsa('.local-box button')
// 버튼에 이벤트 설정
btnlocal.forEach(ele=>{
    dFn.addEvt(ele,'click',localSFn)
})
// 개별삭제
dFn.qsa('.local ol li').forEach((ele,idx)=>{
    dFn.addEvt(ele,'click',()=>{
        const keyName = ["lname","lrole","lcat"]
        ele.onclick = function(){
            // console.log(keyName[idx])
            localStorage.removeItem(keyName[idx])
        }
    })
})
// 로컬스 처리함수
function localSFn(){
    // 버튼 텍스트 읽기
    let btxt = this.innerText
    console.log('dd',btxt)
    if(btxt == '처음'){
        // 로컬스토리지 읽기 :localStorage.getItem(키명)
        // console.log('로컬스',localStorage.getItem('lname'))
        // 만약 값이 셋팅이 안되있으면 null~~~~~~~
        localStorage.setItem('lname','이정재')
        localStorage.setItem('lrole','박평호역')
        localStorage.setItem('lcat','조직내 스파이를 색출하는 해외팀 안기부팀장')
        console.log('로컬스',localStorage.getItem('lname'))
        console.log('로컬스',localStorage.getItem('lrole'))
        console.log('로컬스',localStorage.getItem('lcat'))
    }
    else if (btxt == '전체삭제'){
        localStorage.clear()
        // 개별로 지우는 방법은 : removeItem(키명)
        // removeItem('lname)
    }
    else if(btxt == '보여줘'){
        dFn.qs('.local .nm').innerText = localStorage.getItem('lname')
        dFn.qs('.local .role').innerText = localStorage.getItem('lrole')
        dFn.qs('.local .cat').innerText = localStorage.getItem('lcat')
    }
    else if(btxt == '처리'){
        if(!localStorage.getItem('minfo'))makeObj()
        bindData()
    }
    
}
function makeObj(){
    let obj = [
        {
            idx:1,
            tit:'내가 왕이될 상인가?',
            cont:'이정재씨는 진정 왕이십니다~',
        }
    ]
    // 로컬스토리지는 문자형만 받아옴 객체형은 못넣음
    // 배열객체를 문자데이터화 해서 넣는다
    // JSON.stringify
    // 배열객체를 직접 넣기
    localStorage.setItem('minfo',JSON.stringify(obj))

}
function bindData(){
    let ldata = localStorage.getItem('minfo')
    let bindCode ='';
    if(ldata){
        // let ldata = (x) => localStorage.getItem('x')
        // console.log(typeof ldata,ldata)
        ldata = JSON.parse(ldata)
        console.log(typeof ldata,ldata)
        // 배열이니 맵 사용하여 태그만들기
        // 맵쬬잉 map().join('')
        bindCode = ldata.map((v,i)=>`
        <tr>
                <td>${v.idx}</td>
                <td>${v.tit}</td>
                <td>${v.cont}</td>
                <td>
                <a href="#" onclick="delRec(${i})">×</a>
                </td>
        </tr>
        `).join('');//태그를 연결자없는 배열전체로 저장
        console.log(bindCode);

    }
    // 화면에 바인딩함
    let hcode =`
        <table>
            <tr>
                <td>번호</td>
                <td>제목</td>
                <td>내용</td>
                <td>삭제</td>
                </tr>
                <!-- 데이터에따른 반복 바인딩 -->
                ${bindCode}
        </table>
    `
    dFn.qs('.board').innerHTML = hcode
}
function delRec(idx){
    
}


// 세션 스토리지

const btnSse = dFn.qsa('.session-box button')
// 버튼에 이벤트 설정
btnSse.forEach(ele=>{
    dFn.addEvt(ele,'click',sessionSFn)
})
// 개별삭제
dFn.qsa('.session ol li').forEach((ele,idx)=>{
    dFn.addEvt(ele,'click',()=>{
        const keyName = ["Sname","Srole","Scat"]
        ele.onclick = function(){
            // console.log(keyName[idx])
            sessionStorage.removeItem(keyName[idx])
        }
    })
})
// 로컬스 처리함수
function sessionSFn(){
    // 버튼 텍스트 읽기
    let btxt = this.innerText
    console.log('dd',btxt)
    if(btxt == '처음'){
        // 로컬스토리지 읽기 :sessionStorage.getItem(키명)
        // console.log('로컬스',sessionStorage.getItem('lname'))
        // 만약 값이 셋팅이 안되있으면 null~~~~~~~
        sessionStorage.setItem('Sname','정우성')
        sessionStorage.setItem('Srole','양아치')
        sessionStorage.setItem('Scat','조직내 국내 수금담당 양아치')
        console.log('로컬스',sessionStorage.getItem('Sname'))
        console.log('로컬스',sessionStorage.getItem('Srole'))
        console.log('로컬스',sessionStorage.getItem('Scat'))
    }
    else if (btxt == '전체삭제'){
        sessionStorage.clear()
        // 개별로 지우는 방법은 : removeItem(키명)
        // removeItem('lname)
    }
    else if(btxt == '보여줘'){
        dFn.qs('.session .nm').innerText = sessionStorage.getItem('Sname')
        dFn.qs('.session .role').innerText = sessionStorage.getItem('Srole')
        dFn.qs('.session .cat').innerText = sessionStorage.getItem('Scat')
    }

}