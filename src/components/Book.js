function Book(props){
    function orderBookHandler(){
        alert(`${props.title} by ${props.author} added in wishlist`)
    }
    return(
        <div className="card br-18" onClick={orderBookHandler}>
            <img className="card-img w-100 brt-18" src={props.src}/>
            <div className="card-body">
                <h2 className="title">{props.title} purpose</h2>
                <p className="author">{props.author}</p>
                <p className="des">{props.des}</p>
                <p className="rating br-18">{props.rating} ⭐</p>
            </div>
        </div>
    )
}

export default Book;