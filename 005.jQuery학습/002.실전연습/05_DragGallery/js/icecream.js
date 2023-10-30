// 아이스크림

$(()=>{
    // 요구사항 아이스크림 갤러리를 드래그하여
    // 이동시키며 한계값 적용

    // 대상 #move
    const trsd = '.8s ease-out'
    const trsm = '.3s ease-out'
    const target = $('#move')
    target.draggable({
        axis :'x'
    }).css({
        transition:trsd
    });
    const updatawin = ()=> $(window).width();

    let winw = updatawin();
    $(window).resize(()=>{
        winw = updatawin();
        // console.log(winw)
    })
    if(winw < 500) target.css({
        transition:trsm
    })
    // console.log(winw)
    let fp = winw/3;
    let lp = target.width() - winw/3*2
    console.log(fp)

    // $('html,body').on('click mouseover keydown',()=>{
    $('html,body').on('mousedown mouseup mousemove',()=>{
        let tgpos = target.offset().left;
        if(tgpos > fp){
            target.css({
                left: fp + 'px' ,
            })
        }
        else if(tgpos < -lp){
            target.css({
                left:-lp + 'px'
            })
        }
        console.log('x',tgpos)
    })
  


})/////JQB////////