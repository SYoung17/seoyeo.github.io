var a = 1;
function func(b){
    b = 2;
}
func(a);
console.log(a);


var a = {'id':1};
function func(b){
    b = {'id':2}; // 그러나 b는 다른 객체를 새로 생성함 -2
}
func(a); // a랑 b랑 같은 객체를 보고 있다. 1
console.log(a.id);  // 1


var a = {'id':1};
function func(b){
    b.id = 2;
}
func(a);
console.log(a.id);  // 2
