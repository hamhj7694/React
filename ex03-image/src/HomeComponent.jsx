import React, {Component} from "react"
// src 폴더 속 이미지파일 불러와서 변수에 저장
import cat from './cat.png'
import lion from './assets/lion.png'
import dog from './assets/dog.png'

import moana01 from './assets/moana/moana01.jpg'
import moana02 from './assets/moana/moana02.jpg'
import moana03 from './assets/moana/moana03.jpg'
import moana04 from './assets/moana/moana04.jpg'
import moana05 from './assets/moana/moana05.jpg'

class HomeComponent extends Component{

    // 값이 변경되면 화면이 갱신되는 Component 클래스의 아주 특별한 멤버변수 state
    state={
        image: cat,
        // 이미지들을 가진 배열
        images: [moana01, moana02, moana03, moana04, moana05],
        imgIndex: 0, // 현재 보여줄 이미지의 인덱스 번호
    }
    
    render(){
        return(
            <div>
                <h2>Reack Image</h2>

                {/* img 요소 보여주기 */}
                {/* 1) src 폴더 안 이미지 가져오기 */}
                {/* (경로1) html 처럼 파일 경로를 지정하면 안 보임! */}
                <img src="./cat.png" alt="고양이" /> <br />
                {/* (해결) src 폴더의 이미지를 .jsx 파일에 불러와서 보여줘야 함. import */}
                <img src={cat} alt="고양이" height={120} />

                {/* 2) src 폴더 안에 이미지 파일을 넣으면 파일이 많아서 관리 어려움... scr/assets 폴더 안에 관리하는 것 권장 */}
                <img src={lion} alt="사자" height={120}/>

                {/* 3) public 폴더는 index.html이 바라보는 본인 폴더 위치임! */}
                {/* public 폴더에 이미지 파일을 위치하고 사용해보기! */}
                <img src="./rabbit.png" alt="토끼" height={120}/>

                {/* 4) 웹 이미지파일의 전체 url 경로(절대경로) */}
                <img src='https://cdn.pixabay.com/photo/2026/06/11/18/00/18-00-02-769_1280.jpg' alt="픽사베이 호랑이 이미지" width={300}/>

                {/* 이미지 파일을 사용하는 방법은 경로에 따라 다름. 이 중 권장은 src/assets 폴더 */}
                {/* public 폴더안에는 아이콘 이미지들을 보통 배치하여 사용 */}

                <hr />

                {/* 버튼 클릭하여 이미지 변경하기 -- 화면 갱신에 영향을 주는 state 변수 활용 */}
                <img src={this.state.image} alt="고양이" width={400}/>
                <button onClick={this.changeImg}>고양이를 호랑이로 바꾸기</button>
                
                <hr />

                {/* 이미지 클릭하면 그림 바꾸기 */}
                <img src={this.state.images[this.state.imgIndex]} alt="모아나 이미지들" width={500} onClick={this.changeImgs}/>
                


            </div>
        )
    } // render..................

    changeImg= () => this.setState({image:'https://cdn.pixabay.com/photo/2026/06/11/18/00/18-00-02-769_1280.jpg'})

    changeImgs= () => {
        // 번호가 계속 증가되면 안됨
        let idx= this.state.imgIndex + 1
        if(idx>=5){ // imgIndex가 5 이상이면
            idx=0 // imgIndex를 0으로 바꾸기!
        }

        this.setState({imgIndex: idx})
    } 

} // HomeComponent.................................
export default HomeComponent