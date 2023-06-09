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
    //서버와 통신하는 코드가 필요
    fetch('http://192.168.0.51:8081/myserver/boardAll')
    .then(response => response.json())
    .then(data => {
      // console.log(data);
      this.object = data;
    })
    .catch(err => console.log(err))
  },
  methods: {
    boardDelete(no){
      fetch('http://192.168.0.51:8081/myserver/boardDelete?no='+no)
      .then(response => response.text())
      .then(data => console.log(data))
      .catch(err => console.log(err));
    },
    
  }
};