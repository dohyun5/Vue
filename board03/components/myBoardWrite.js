export default {
  name : 'my-board-write',
  template : `<div>
                   <table id="list">
                     <tr>
                         <td>글제목</td>
                         <td><input type="text" style="width:90%;" v-model="title"></td>
                     </tr>
                     <tr>
                         <td colspan="2">
                             <textarea style="width:100%;" v-model="content"></textarea>
                         </td>
                     </tr>
                   </table>
                   <router-link tag="button" style="float:right;" :to="{name : 'boardList'}">목록</router-link>
                   <button style="float:right;" v-on:click="boardSave">저장</button>
             </div>`,
   data:function(){
     return {
       title : '',
       content : ''
     }
   },
   methods : {
    //  boardList : function(){
    //    this.$emit('board-list');
    //  },
     boardSave : function(){
      
      // fetch('http://192.168.0.51:8081/myserver/boardInsert?title='+this.title+"&content="+this.content)
      // fetch('http://192.168.0.51:8081/myserver/boardInsert',{
      //   method : 'POST',
      //   headers:{'Content-Type':'application/x-www-form-urlencoded'},
      //   body:new URLSearchParams({title:this.title, content: this.content})
      // })
      fetch('http://192.168.0.51:8081/myserver/boardInsert',{
        method : 'post',
        headers : {
          'Content-type' : 'application/json'
        },
        body: JSON.stringify({title : this.title, content : this.content})
      })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.$router.push({name : 'boardList'}); //성공했을때 목록으로 보내기 위해서 ! catch아래에 사용하면 성공여부를 떠나서 목록으로 보내버림(비동기)
      })
      .catch(err => console.log(err))
     }
   } 
};