import { postData } from "../data/posts"
import "./SummaryCards.css"

const CURRENT_USER = "나"

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

function SummaryCards({ chatList = [] }){
    const totalRecordCount = postData.length

    const myRecordCount = postData.filter((post) => (
        post.writer === CURRENT_USER
    )).length

    const chatCount = chatList.length
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
                    <span className="SummaryCard_label">다가오는 약속</span>

                    {upcomingSchedule ? (
                        <>
                            <strong>{upcomingSchedule.date}</strong>
                            <p>{upcomingSchedule.title}</p>

                            <div className="Schedule_hover_panel">
                                <span>다가오는 약속</span>
                                <strong>{upcomingSchedule.date}</strong>
                                <p>{upcomingSchedule.title}</p>
                            </div>
                        </>
                    ) : (
                        <>
                            <strong>없음</strong>
                            <p>아직 등록된 약속이 없어요</p>

                            <div className="Schedule_hover_panel">
                                <span>다가오는 약속</span>
                                <strong>없음</strong>
                                <p>아직 등록된 약속이 없어요</p>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}
export default SummaryCards