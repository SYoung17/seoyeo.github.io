var i = 5;

function a(){
    var i = 10;
    b();
}

function b(){
    document.write(i); // 선언될때의 i 이므로 5
}

a();
