import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

// Vuex 인스턴스 만들기
export default  new Vuex.Store({
  actions: {
    /* 왜 actions를 사용하나? 비동기로 외부 함수 호출하기 위해서
     * actions 에는 메서드만 등록 가능하다.
     * 첫번째인자: 무조건 mutations로 고정.
     * 두번째인자: 값. store.dispatch()호출시 넘겨지는 값.
     */
      getTodo(mutations){
        // import axios from "axios";
        
        axios({
            url: "http://localhost:5050/todo/get",  // 호출되는 서버 주소.
            method: "get",       // request method: get, post, delete, put
            params: { },  // 서버로 보내는 데이터. 예시) { data1:"test1", data2:"test2" } 
            timeout: 30000,    // 최대 대기 시간: 30초. 30초 이상이 되면 fail 부분이 실행됨.
            responseType: "json",  // response로 넘어오는 데이터 형태: text, html, xml, json, jsonp, script
        })
        .then( (res) => {
            mutations.commit("todo",res.data)
        })
        .catch((error) => {
            console.log(error);
        });

      },
      clearAll(mutations/* 고정 */){
        mutations.commit("clearAll")
      },
      addTodo(mutations/* 고정 */, newTodoItem){
          mutations.commit("addTodo",newTodoItem)
      },
      doneToggle(mutations/* 고정 */, id){
        mutations.commit("doneToggle",id)
      },
      removeTodo(mutations/* 고정 */, id){
        mutations.commit("removeTodo",id);
      },                
  },
  mutations: {
    /* 왜 mutations 를 사용하나? state 를 바꾸기 위해서
     * mutations 에는 메서드만 등록 가능하다.
     * 첫번째인자: 무조건 state 로 고정.
     * 두번째인자: 값. mutations.commit() 호출시 넘겨지는 값.
     * */
      todo(state, params){
        state.todoItems =params;
      },
      clearAll(state){
        state.todoItems =[];
      },
      addTodo(state, newTodoItem){
        let maxid = 0;
        if( state.todoItems.length>0){
            maxid = state.todoItems.map( item=>item.id )
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
       
        state.todoItems.push( todo );    
      },
      doneToggle(state, id){
        const findIndex = state.todoItems.findIndex( item => id === item.id );
        state.todoItems[findIndex].done = !state.todoItems[findIndex].done;        
      },
      removeTodo(state,id)  {
        // id 값을 이용해서 배열의 index를 찾으시오. ==> findIndex() 사용
        const findIndex = state.todoItems.findIndex( (item) =>{
          return item.id === id;
        });
        // 찾은 인덱스를 이용하여 this.$data.todoItems 에서 삭제하시오.
        state.todoItems.splice(findIndex, 1);

      }
  },
  state: {
    /* vue인스턴스나 컴포넌트의 data 프로퍼티에 해당 */
  todoItems: [
                      { id: 1, todo: "영화보기", done: false },
                      { id: 2, todo: "주말 산책", done: true },
                      { id: 3, todo: "ES6 학습", done: false },
                      { id: 4, todo: "잠실 야구장", done: false }
                  ]          
  },
  getters: {
    /* state 변경 정보를 컴포넌트에 전달하는 역활.
     * 메서드로 만들어야 하며 메서드명은 state 의 이름을 그대로 사용
     * 첫번째인자: 무조건 state
     * 컴포넌트에서는 computed를 사용하여 store의 state 변경 정보를 자동으로 가져오게 된다.
     * 예시) message()=> store.getters.인자;
     */
    todoItems: function(state/* 고정 */){
        return state.todoItems;
    },
  },
});

