let isDragging = false;
let startX, currentX;

document.querySelector('.scroll-thumb').addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.clientX;
    currentX = e.target.style.left ? parseInt(e.target.style.left) : 0;
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
});


// ... 기존 코드 유지 ...

let raisedBoxes = []; // 올라간 박스의 인덱스를 저장하는 배열

let previousPosition = 0; // 이전 스크롤 위치를 추적하기 위한 변수

// ... 기존 코드 유지 ...

function onMouseMove(e) {
    if (!isDragging) return;
    let deltaX = e.clientX - startX;
    let newPosition = currentX + deltaX;

    // 박스를 넘어가지 않도록 한계 설정
    let maxPosition = document.querySelector('.scrollbar-box').offsetWidth - document.querySelector('.scroll-thumb').offsetWidth;
    if (newPosition < 0) newPosition = 0;
    if (newPosition > maxPosition) newPosition = maxPosition;

    let boxes = document.querySelectorAll('.box');
    let thumbCenter = newPosition + document.querySelector('.scroll-thumb').offsetWidth / 2; // scroll-thumb의 중앙 위치 계산

    boxes.forEach((box, index) => {
        // 스크롤이 우측으로 이동 중이고, thumbCenter가 박스 내에 있을 때
        if (newPosition > previousPosition && thumbCenter >= box.offsetLeft && thumbCenter <= (box.offsetLeft + box.offsetWidth) && !raisedBoxes.includes(index)) {
            box.style.transform = "translateY(-100px)";
            raisedBoxes.push(index);
        }
        // 스크롤이 좌측으로 이동 중이고, thumbCenter가 박스 내에 있을 때
        else if (newPosition < previousPosition && thumbCenter >= box.offsetLeft && thumbCenter <= (box.offsetLeft + box.offsetWidth) && raisedBoxes.includes(index)) {
            box.style.transform = "translateY(0)";
            const idx = raisedBoxes.indexOf(index);
            if (idx > -1) {
                raisedBoxes.splice(idx, 1);
            }
        }
    });

    previousPosition = newPosition; // 현재 스크롤 위치를 이전 스크롤 위치로 업데이트
    document.querySelector('.scroll-thumb').style.left = `${newPosition}px`;
}

// ... 기존 코드 유지 ...


// ... 기존 코드 유지 ...


function onMouseUp() {
    isDragging = false;
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);

    let thumbPosition = parseInt(document.querySelector('.scroll-thumb').style.left);
    
    // 스크롤이 원래 위치에서 벗어난 경우
    if (thumbPosition !== 0) {
        let boxes = document.querySelectorAll('.box');
        let thumbCenter = thumbPosition + document.querySelector('.scroll-thumb').offsetWidth / 2; // scroll-thumb의 중앙 위치 계산
        
        boxes.forEach((box, index) => {
            if (thumbCenter >= box.offsetLeft && thumbCenter <= (box.offsetLeft + box.offsetWidth) && !raisedBoxes.includes(index)) {
                box.style.transform = "translateY(100px)";
                raisedBoxes.push(index); // 해당 박스의 인덱스를 배열에 추가
            }
        });
    }
}

// ... 기존 코드 유지 ...

