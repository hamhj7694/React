import './ItemComponent2.css'

function ItemComponent2(props){
    return(
        <div className="item" onClick={props.onClick}>
            <div>
                <div className="line1">
                    <span>{props.item.no}</span>
                    <span>{props.item.name}</span>
                </div>
                <div className="line2">
                    {props.item.message}
                </div>
            </div>
            <img src={props.item.img} alt="이미지들" />
        </div>
    )
}
export default ItemComponent2