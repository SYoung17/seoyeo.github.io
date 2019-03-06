var vscope = 'global'; // 전역변수
function fscope(){
    var vscope = 'local'; //지역변수
    alert(vscope);
}
fscope();

//무한반복
function a (){
    i = 0;
}
for(var i = 0; i < 5; i++){ // var i가 여기서 전역변수가 된것
    a();
    document.write(i);
}


for(var i = 0; i < 1; i++){
    var name = 'coding everybody';
}
alert(name); // coding everybody // java와 다른 거 유의
