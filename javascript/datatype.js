var str = 'coding';
console.log(str.length);        // 6
console.log(str.charAt(0));     // "C"

// .의 이름은 Object access Operator
// 객체지만 문자열이 객체가 아니라고 하는 이유는
//내부적으로 만들고 사용이 끝나면 제거하기 때문ㅇ

var str = 'coding';
// console.log(str);
str.prop = 'everybody'; // 자동으로 만들어지는 객체 = wrapper object
console.log(str.prop);      // undefined
// 내부적으로 String 객체가 만들어진다. 그러나 prop 프로ㅌ퍼티는 이 객체에
//저장되고 곧 제거됨. 즉 prop라는 속성이 저장된 객체는 없
console.log(str);
