import { useParams } from "react-router-dom";
import './cards/Card.scss'
import arr from './gallery/galleryData.js';

function Card() {
    const {cardId} = useParams();
    const data = arr.filter(arr => arr.key == Number(cardId))[0];
    const dataDetail = data.other.map(detail => {
        return (
            <section className="works">
                <div className="work__img" style={{backgroundImage: `url(${detail.oimg})`}}></div>
                <figcaption>{detail.otitle}, {detail.odate}</figcaption>
            </section>
        )
    });

    return (
        <main id="explore">
            <section id="detail" className="card"> {/* card for image info */}
                <img className="card__img" src={data.image} />
                {/* info */}
                <section id="detail__text" className="card__detail">
                    <h2  className="card__title">{data.title}</h2>   
                    <span  className="card__info">{data.artist}, {data.date}<br />{data.location}</span>
                    <p  className="card__desc">{data.description}</p>
                </section>
            </section>
                
            <section id="about" className="card">
                <div className="card__detail about">
                    <h2 className="card__title">About {data.artist}</h2>
                    <p className="card__desc">{data.artistDesc}</p>
                </div>               
                <img className="card__img" src={data.artistPic} />
            </section>

            {/* about the more paintings by artist + links to website with more info*/}
            <section id="other-works">
                {dataDetail}
            </section>

        </main>
    );
}
export default Card