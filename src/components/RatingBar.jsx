const filled = "★";
const outlined = "✩";

function RatingBar({rating}){
    const start = new Array(10);
    start.fill(outlined);
    start.fill(filled,0,rating);
    return(
        <>
            {
                start.map((e,i) => <span key={i}>{e}</span>)
            }
        </>
    );
}

export default RatingBar;