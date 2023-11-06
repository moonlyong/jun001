
$(()=>{
    const mid = $('#mid')
    const mpw = $('#mpw')

    $('#sbtn').click(function(e){
        e.preventDefault()

        const groSpace = x => x.replace(/\s+/g,'')
        if(groSpace(mid.val())==''||groSpace(mpw.val())==''){
            alert('아이디 비번입력해야합니다 못된아이구나!')
            mid.val('').focus();
            mpw.val('')
        }
        else{
            // DB 조회후 결과는 아래와 같이 나누어짐..
            // 없는아이디
            // 비밀번호 틀림
            // if(
            //     //DB 조회우 아이디 
            // ){
            //     alert('존재하지않는 아이디입니다')
            // }
            // else(
            //     //DB 조회우 아이디 
            // ){
            //     alert('존재하지않는 아이디입니다')
            // }
            alert('로그인성공')
        }
    })

})