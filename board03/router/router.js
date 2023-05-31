import myBoardList from "../components/myBoardList.js"; 
import myBoardRead from "../components/myBoardRead.js"; 
import myBoardWrite from "../components/myBoardWrite.js"; 

export default new VueRouter({
  routes : [
    //boardList -> main
    {
      path : '/',
      name : 'boardList',
      component : myBoardList
    },
    //boardRead
    {
      path : '/boardRead/:item',
      name : 'boardRead',
      component : myBoardRead,
      props : true

    },
    //boardWrite
    {
      path : '/boardWrite',
      name : 'boardWrite',
      component : myBoardWrite
    },
    //ETC
    {
      path : '*',  //모든경로를 의미 [상단부터 읽어와서 위의 경로 제외 나머지를 의미]
      redirect : '/' //이외의 경로를 입력할시 main으로 보냄.
    }
  ]
})