import { postData } from "../data/posts"
import "./SummaryCards.css"

const CURRENT_USER = "나"

const chatData = [
    {
        id: 1,
        sender: "나",
        message: "모해 자기양?",
        createdAt: "2025-05-30 21:10",
    },
    {
        id: 2,
        sender: "너",
        message: "아직 일하는 중..ㅠㅠ",
        createdAt: "2025-05-30 21:12",
    },
    {
        id: 3,
        sender: "나",
        message: "끝나면 연락해!",
        createdAt: "2025-05-30 21:13",
    },
]

const scheduleData = [
    {
        id: 1,
        title: "성수동 카페 데이트",
        date: "06월 02일",
    },
    {
        id: 2,
        title: "영화 보기",
        date: "06월 08일",
    },
    {
        id: 3,
        title: "강릉 여행",
        date: "07월 12일",
    },
]

function SummaryCards(){
    const totalRecordCount = postData.length

    const myRecordCount = postData.filter((post) => (
        post.writer === CURRENT_USER
    )).length

    const chatCount = chatData.length

    const upcomingSchedule = scheduleData[0]

    return(
        <div className="SummaryCards">
            <div className="SummaryCard">
                <div className="SummaryCard_icon record">📓</div>

                <div className="SummaryCard_text">
                    <span className="SummaryCard_label">전체 기록</span>
                    <strong>{totalRecordCount}</strong>
                    <p>우리의 기록</p>
                </div>
            </div>

            <div className="SummaryCard">
                <div className="SummaryCard_icon mine">✍️</div>

                <div className="SummaryCard_text">
                    <span className="SummaryCard_label">내 기록</span>
                    <strong>{myRecordCount}</strong>
                    <p>내 쓴 기록</p>
                </div>
            </div>

            <div className="SummaryCard">
                <div className="SummaryCard_icon chat">💬</div>

                <div className="SummaryCard_text">
                    <span className="SummaryCard_label">채팅 수</span>
                    <strong>{chatCount}</strong>
                    <p>오늘 대화</p>
                </div>
            </div>

            <div className="SummaryCard schedule">
                <div className="SummaryCard_icon schedule_icon">📅</div>

                <div className="SummaryCard_text">
                    <span className="SummaryCard_label">다음 약속</span>

                    {upcomingSchedule ? (
                        <>
                            <strong>{upcomingSchedule.date}</strong>
                            <p>{upcomingSchedule.title}</p>
                        </>
                    ) : (
                        <>
                            <strong>없음</strong>
                            <p>아직 등록된 약속이 없어요</p>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}
export default SummaryCards