<style scoped>
body {
    text-align: center;
    background-color: #f6f6f8;
}
input {
    border-style: groove;
    width: 200px;
}
button {
    border-style: groove;
}
.shadow {
    box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>

<template>
    <div id="app">
        <!-- TodoHeader -->
        <TodoHeader></TodoHeader>

        <!-- TodoInput -->
        <TodoInput v-on:addTodo="addTodo"></TodoInput>

        <!-- TodoList -->
        <TodoList v-bind:todoItems="todoItems" 
                      v-on:doneToggle="doneToggle"
                      v-on:removeTodo.stop="removeTodo"
        ></TodoList>

        <!-- TodoFooter -->
        <TodoFooter v-on:clearAll="clearAll"></TodoFooter>
    </div>
</template>


<script>
import TodoHeader from '../components/todo/TodoHeader.vue';
import TodoInput from '../components/todo/TodoInput.vue';
import TodoList from '../components/todo/TodoList.vue';
import TodoFooter from '../components/todo/TodoFooter.vue';


    export default { 
        /* pdtmc^2w */
        props: [] ,
        data: function() {
           /* 컴포넌트 안에서 사용되는 변수 등록. 개별 변수 */
            return {
                        todoItems: [
                            { id: 1, todo: "영화보기", done: false },
                            { id: 2, todo: "주말 산책", done: true },
                            { id: 3, todo: "ES6 학습", done: false },
                            { id: 4, todo: "잠실 야구장", done: false }
                        ]                
            }
        },
        //template: ``,
        methods: {
           /* 이벤트 핸들러 등록 + 일반 함수 */
            clearAll(){
                this.$set(this.$data, "todoItems",[])
            },
            addTodo(newTodoItem){
                let maxid = 0;
                if( this.$data.todoItems.length>0){
                    maxid = this.$data.todoItems.map( item=>item.id )
                                                .reduce( (prev,curt)=> prev>= curt ? prev: curt );
                } else {
                    maxid = 0;
                }
                const newid = maxid + 1;

                const todo = {
                    id: newid,
                    todo: newTodoItem,
                    done: false,
                };

                // this.$data.todoItems.push( todo );
                // this.$data.todoItems[ this.$data.todoItems.length] = todo;
                this.$set( this.$data.todoItems, this.$data.todoItems.length+"", todo);
            },
            doneToggle(id){
                // id를 이용해서 배열의 인덱스 찾기 ==> findIndex
                // done 값을 반전시킨다. this.$data.todoItems[findIndex].done = !this.$data.todoItems[findIndex].done;
                const findIndex = this.$data.todoItems.findIndex( item => id === item.id );
                this.$data.todoItems[findIndex].done = !this.$data.todoItems[findIndex].done;
            },
            removeTodo(id){
                // id 값을 이용해서 배열의 index를 찾으시오. ==> findIndex() 사용
                const findIndex = this.$data.todoItems.findIndex( (item) =>{
                    return item.id === id;
                });
                // 찾은 인덱스를 이용하여 this.$data.todoItems 에서 삭제하시오.
                this.$data.todoItems.splice(findIndex, 1);

                // // 이벤트 취소. 버블링 방지
                // event.stopPropagation()
                // event.preventDefault();
            },       
        },
        components: {
                TodoInput,
                TodoHeader,
                TodoList,
                TodoFooter,
           /* 전역 컴포넌트는 등록하지 않는다. */
           /* 지역 컴포넌트나 파일 컴포넌트이면 등록해야 한다 . 예시) "태그명" : 컴포넌트명 */
            
        },
        computed: {
            /* 자동처리 + 동기식. 메서드로 작성. return 필수. */
            
        },
        watch: {
            /* 자동처리 + 비동기식. data 에 등록된 프로퍼티(변수) 모니터링. 메서드로 작성. 매개변수 필수. 외부 api 호출을 위해서 사용 */
            
        },
        mounted: function() {
            console.log("mounted");
        },
        updated: function() {
            console.log("updated");
        },
    }
</script>