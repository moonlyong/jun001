$(() => {
    const cbx = $(".cbx");

    for (let i = 1; i <= 50; i++) {
        cbx.append(`
        <img src="./360view/country${i}.jpg" alt="car image">
        `);
    }

    // 모든이미지 숨기고 첫번쨰 이미지만
    cbx.find("img").hide().first().show();
    let drag = 0;
    let point = 0;
    let protEvt = 0;
    cbx.on("mousemover", (e) => {
        let pos = e.pageX;
        if (drag) {
            let dir = point - pos < 0 ? 0 : 1;
            console.log(dir);
            rtCar(dir)
        }
    });
    cbx.on("mousedown", (e) => {
        drag = 1;
        point = e.pageX;
    });
    cbx.on("mouseup", (e) => {
        drag = 0;
    });
    let fnum = 0;

    const rtCar = (dir) => {
        if (dir) {
            fnum++;
            if (fnum == 50) fnum = 0;
        }
        else{
            fnum--;
            if (fnum == -1) fnum = 49;
        }
    };
});
