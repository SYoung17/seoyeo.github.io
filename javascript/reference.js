var a = {'id':1};
var b = a;
b.id = 2;
console.log(a.id);  // 2
// 같은 메모리?
// 심볼릭 링크, 바로가기, 참조


var a = {'id':1};
var b = a;
// b = {'id' : 2}; //얘는 객체 자체를 생ㅇ성
// console.log(a.id); //1
b.id = 2; //원시데이터이므로 참조가 아니라 복제
console.log(a.id);  // 2
