export default {
  name : 'my-header',
  template : `
    <header>
      <h2>간단한 게시판</h2>
      <p>게시판 데이터 json 파일 읽기</p>
      <input type="file" v-on:change="loadData($event)">
      <button v-on:click="saveBoardList">게시판 저장하기</button>
    </header>
  `,
  data: function(){
    return {
      dataArray : {}
    }
  },
  props:['dataList'],
  methods : {
    loadData : function(event){
      let file = event.target.files[0].name;
      if(file){
        fetch('data/'+file)
        //json파일 -> this.dataArray 프로퍼티에 저장.
        .then(response => response.json())
        .then(data => {
          console.log(data)
          this.dataArray = data;
          if(this.dataArray != null && this.dataArray['board'].length > 0){
            this.$emit('update-data', this.dataArray);
            // this.listOk = true;
          }
        })
        .catch(err => console.log(err));
    }
    },
    saveBoardList : function(){
      let data = this.dataList; //여기서 부모는 DB역할을 함.
      if(data.length == 0){
        alert('저장할 게시판 내용이 없습니다.');
        return;
      }
      if(typeof data === 'object'){
        data = JSON.stringify(data, undefined, 4);
      }
      let blob = new Blob([data], {type:'text/json'}); //파일로 만들기 위해서 
      let a = document.createElement('a');
      a.download = 'board.json';
      a.href = window.URL.createObjectURL(blob);
      a.click();
    },
    

  }
}