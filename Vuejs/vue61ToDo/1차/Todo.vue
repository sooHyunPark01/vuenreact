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
        <TodoInput></TodoInput>

        <!-- TodoList -->
        <TodoList></TodoList>

        <!-- TodoFooter -->
        <TodoFooter></TodoFooter>
    </div>
</template>

<style scoped>
    
</style>

<template>
    
</template>

<script>
    export default { 
        /* pdtmc^2w */
        props: [] ,
        data: function() {
           /* 컴포넌트 안에서 사용되는 변수 등록. 개별 변수 */
            return {
                
            }
        },
        //template: ``,
        methods: {
           /* 이벤트 핸들러 등록 + 일반 함수 */
            
        },
        components: {
           /* 전역 컴포넌트는 등록하지 않는다. */
           /* 지역 컴포넌트나 파일 컴포넌트이면 등록해야 한다 . 예시) "태그명" : 컴포넌트명 */
           "TodoHeader":,
           "TodoInput":,
           "TodoList":,
           "TodoFooter":,
            
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