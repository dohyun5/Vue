export default {
  name : 'my-board-read',
  template : `<div>
                  <table id="list">
                    <tr>
                        <td style="width:50px;">글제목</td>
                        <td>{{ item.title }}</td>
                    </tr>
                    <tr style="height:300px">
                      <td colspan="2">{{ item.content }}</td>
                    </tr>
                  </table>
                  <router-link tag="button" style="float:right;" v-bind:to="{name : 'boardList'}">목록</router-link>

              </div>`,
  props : ['item'], // 라우터(router.js)에서 boardRead를 item 으로 불러오기로 정의 했기 때문에 object -> item으로 수정
  data : function(){
    return{
      board:{}
    }
  },
  created : function(){
    fetch('http://192.168.0.51:8081/myserver/boardInfo?no='+this.item.no)
    .then(response => response.json())
    .then(data => {
      this.board = data;
    })
    .catch(err => console.log(err))//예외사항에 대해서 체크할수 있도록 사용해야함.
  },
  methods : {
    // boardList : function(){
    //   this.$emit('board-list');
    // } 기능호출 이라기 보단 페이지 요청이라 필요없음.
  }
 }









