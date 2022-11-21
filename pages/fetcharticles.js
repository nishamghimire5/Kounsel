// import data from './assets/data/articles.json'
const Articles = (props) => {
    let order = props.check
    order = order % 2
    return (
        //  available blue , red green , yellow
        <div className='body list-child-1'>
            <section className="list-child-2">
                <div className="container py-2 list-child-3">
                    {/* <div className="h1 text-center text-dark " id="pageHeaderTitle">{props.pTitle} */}
                    {/* </div> */}

                    <div className={order ? `postcard postcard-for light red` : `postcard postcard-rev light green`}>
                        <a className="postcard__img_link" href={props.img_link}>
                            <img className="postcard__img" src={props.img_link} alt="Image Title" />
                        </a>
                        <div className="postcard__text t-dark">
                            <h1 className="postcard__title blue"><a href={props.link}>{props.title}</a></h1>
                            <div className="postcard__subtitle small">
                                <time dateTime="2020-05-25 12:00:00">
                                    <i className="fas fa-calendar-alt mr-2"></i>July 11, 2020
                                </time>
                            </div>
                            <div className="postcard__bar"></div>
                            <div className="postcard__preview-txt">
                                 <p>
                                 {props.description}
                                 </p>
                                 </div>
                            <ul className="postcard__tagbox">
                                <li className="tag__item"><i className="fas fa-tag mr-2"></i>Article</li>
                                <li className="tag__item"><i className="fas fa-clock mr-2"></i>3 mins.</li>
                                {/* <li className="tag__item play blue"> */}
                                    {/* <a href="#"><i className="fas fa-play mr-2"></i>Play Episode</a> */}
                                {/* </li> */}
                            </ul>
                        </div>
                    </div>
                </div>
                
                

            </section>
        </div>
    )
}

export default Articles;