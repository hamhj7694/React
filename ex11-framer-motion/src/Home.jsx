//움직임이 있는 요소를 만들어주는 framer-motion 라이브러리로 UX 향상
//npm install framer-motion

//motion기능을 사용하기 위해 import
import {motion, useAnimationControls} from 'framer-motion'
import star from './assets/star.png'
import './BottomSheet.css'

function Home(){

    //애니메이션의 컨트롤러를 만들어주는 HOOK기술(useXXX()함수)
    const controls= useAnimationControls()

    return (
        <div>
            <h2>frame motion 라이브러리</h2>

            {/* 1) 애니메이션이 가능한 div요소를 사용 */}
            <motion.div 
                initial={{x:10, y:5}} //애니메이션의 시작위치(원래놓여질 위치를 기준으로 배치됨)
                animate={{x:100, y:50}} //움직일 곳의 좌표
                transition={{duration:3, repeat:Infinity}} //3초동안 이동
            >나는 움직이는 div 입니다</motion.div>
            <br /><br /><br /><br /><hr />

            {/* 2) 버튼클릭하면 특정 위치로 이동 */}
            <button onClick={()=>controls.start('right')}>right→</button>
            <button onClick={()=>controls.start('up')}>up↑</button>
            <button onClick={()=>controls.start('down')}>down↓</button>
            <br /><br /><br />
            <motion.div
                style={{padding:8, boxShadow:'3px 3px 10px gray', width:150}}
                //애니메이션으로 움질일 곳들의 위치를 지정
                variants={{
                    right:{x:100},
                    up:{y:-50},
                    down:{y:50}
                }}
                //애니메이션을 실행하는 컨트롤러 등록 -- HOOK기술로 컨트롤러 적용
                animate={controls}
            >나는 DIV 입니다.</motion.div>

            <br /><br /><br /><hr />
            {/* 3) 드래그하기 */}
            <div style={{width:'500px', }}>
                <motion.img
                    src={star}
                    style={{height:100, border:'solid', margin:'16px auto', display:'block'}}
                    drag='x' // x, t 양쪽(both) 다 하고싶으면 : true
                    dragConstraints={{left:-100, right:100}}
                    dragElastic={0.3} //제한범위 바운더리에서 움직임 허용치
                ></motion.img>
            </div>

            {/* 4) 요즘 가장 많이 보이는 UX -- Bottom Sheet */}
            <button onClick={()=>controls.start('open')}>open bottom sheet</button>
            <button onClick={()=>controls.start('close')}>close bottom sheet</button>
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

            {/* Bottom Sheet 영역 요소 */}
            <motion.div
                className='BottomSheet'
                variants={{
                    close:{y:'50%'}, //원래 위치에서 바텀시트의 절반 사이즈 만큼 내리기
                    open:{y:0} //원래 위치
                }}
                animate={controls}
                initial='close' //초기에 닫힘
                drag='y'
                dragConstraints={{top:0}}
                dragElastic={0}
            >
                <div className='title'>
                    <h2>Bottom Sheet 타이틀</h2>
                </div>
                <div className='content'>
                    <p>요즘 많이 보이는 버텀시트 요소입니다!</p>
                    <img src={star} style={{width:'200px'}}/>
                </div>
            </motion.div>

        </div>
    )
}
export default Home