export default function Detail({img, title,excerpt,category,released, review}){
    return(
        <div className="detailCard">
            <div>
              <h1>{title}</h1>
               <h3>{excerpt}</h3>
               <h3>{category}</h3>
               <h3>{released}</h3>
               <h3>Review:{review}</h3>
            </div>
            <img src={img} />
        </div>
    )
}