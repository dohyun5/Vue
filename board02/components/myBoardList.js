export default //무엇을 밖으로 내보낼 것인가
{
  name : 'my-board-list',
  template: `<div>
                    <table id="list">
                        <tr>
                            <th style="width:50px;">글번호</th>
                            <th>글제목</th>
                            <th style="width:50px;">조회수</th>
                            <th style="width:70px;"></th>
                        </tr>
                        <tr v-for="item in object" v-bind:key="item.no">
                            <td>{{item.no}}</td>
                            <!--<td v-on:click="boardRead(item)">{{item.title}}</td> 라우터 사용으로 인해 아래같이 변경-->
                            <router-link tag="td" v-bind:to="{name : 'boardRead', params : {item : item}}">{{item.title}}</router-link>
                            <td>{{item.view}}</td>
                            <td><button v-on:click="boardDelete(item.no)">삭제</button></td>
                        </tr>
                    </table>
                    <router-link tag="button" style="float:right;" to="/boardWrite">글쓰기</router-link>

                </div>`,
  // props: ['object'],
  data : function(){
    return {
      object : []
    }
  },
  created : function () {
    this.object = this.$parent.getDataArray();
  },
  methods: {
    boardDelete(no){
      for(let i=0;i<this.object.length;i++){
        if(this.object[i].no == no){
          this.object.splice(i,1);
        }
      }
      this.$parent.setDataArray(this.object);//부모에게 전달하기 위해서?
    }
    // boardRead: function (info) {
    //   this.$emit('board-read', info);
    // },
    // boardDelete: function (no) {
    //   this.$emit('board-delete', no);
    // },
    // boardWrite: function () {
    //   this.$emit('board-write');
    // }
  }
};