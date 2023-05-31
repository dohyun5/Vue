import myBoardList from "./components/myBoardList.js"; 
import myBoardRead from "./components/myBoardRead.js"; 
import myBoardWrite from "./components/myBoardWrite.js"; 

export default new VueRouter({
  routes : [
    //main //가장 먼저 접근하게 되는 메인경로 정의
    {
      path : '/',
      name : 'main',
      components : {
        template : `
          <div>
            <h3>게시판을 불러와 주세요</h3>
          </div>
        `,
      }
    },
    //boardList
    {
      path : '/boardList',
      name : 'boardList',
      components : myBoardList
    },
    //boardRead
    {
      path : '/boardRead/:item',
      name : 'boardRead',
      components : myBoardRead,
      props : true

    },
    //boardWrite
    {
      path : '/boardWrite',
      name : 'boardWrite',
      components : myBoardWrite
    },
    //ETC
    {
      path : '*',  //모든경로를 의미 [상단부터 읽어와서 위의 경로 제외 나머지를 의미]
      redirect : '/' //이외의 경로를 입력할시 main으로 보냄.
    }
  ]
})