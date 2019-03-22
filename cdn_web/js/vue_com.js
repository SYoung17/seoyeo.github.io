//컴포넌트 정의
Vue.component('todo-item', {
  // template: '<li>할일 항목 하나입니다.</li>'
  //todo-item 컴포넌트는 "prop" 라고 하는
  //사용자 정의 속성
  //이 prop
  props: ['todo'],
  template: '<li>({ todo.text })</li>'
})
