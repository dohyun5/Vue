import myHeader from './components/header.js'; 
// import myBoardList from "./components/myBoardList.js"; 
// import myBoardRead from "./components/myBoardRead.js"; 
// import myBoardWrite from "./components/myBoardWrite.js"; 
// 주석처리는 router사용하면서 필요 없어진것들
let template = `
  <div>
    <my-header v-on:update-data="updateDataArray" 
               v-bind:dataList="dataArray"></my-header>
    <router-view></router-view>  
  </div>
  `;
//sdadas
new Vue ({
  el : '#app',
  data : {
    // listOk : false,
    // readOk : false,
    // writeOk : false,
    dataArray : [],
    // boardInfo: {}
  },
  template : template,
  components : {
    'my-header' : myHeader,
    // 'my-board-list' : myBoardList,
    // 'my-board-read' : myBoardRead,
    // 'my-board-write' : myBoardWrite
  },
  methods : {
    updateDataArray : function(inputData){
      this.dataArray = inputData;
      // this.listOk = true;
    }
    // boardList : function(){
    //   this.readOk = false;
    //   this.writeOk = false;
    //   this.listOk = true;
    // },
    // boardWrite : function(){
    //   this.readOk = false;
    //   this.writeOk = true;
    //   this.listOk =false;
    // },
    // boardRead : function(info){
    //   this.readOk = true;
    //   this.writeOk = false;
    //   this.listOk = false;

    //   this.boardInfo = info;

    //   for(let i=0; i<this.dataArray['board'].length; i++){
    //     if(this.dataArray['board'][i].no == info.no){
    //       this.dataArray['board'][i].view = parseInt(this.dataArray['board'][i].view) + 1;
    //     }
    //   }
    // },
    // boardSave : function(title, content){
    //   let no = 1;
    //   if(this.dataArray['board'].length != 0){
    //     let index = this.dataArray['board'].length-1;
    //     no = parseInt(this.dataArray['board'][index].no)+1;
    //   }

    //   let boardInfo = {
    //     no : no,
    //     title : title,
    //     content : content,
    //     view : "1"
    //   }

    //   this.dataArray['board'].push(boardInfo);
    //   this.writeOk = false;
    //   this.readOk = false;
    //   this.listOk = true;
    // },
    // boardDelete : function(no){
    //   for(let i=0; i<this.dataArray['board'].length; i++){
    //     if(this.dataArray['board'][i].no == no){
    //       this.dataArray['board'].splice(i,1);
    //     }
    //   }
    // },
   
  }
})