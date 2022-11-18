const Articles = (props) => {
    let order = props.check
    order = order % 2
    return (
        //  available blue , red green , yellow
        <div className='body list-child-1'>
            <section className="list-child-2">
                <div className="container py-2 list-child-3">
                    <div className="h1 text-center text-dark " id="pageHeaderTitle">{props.pTitle}
                    </div>

                    <div className={order ? `postcard postcard-for light red` : `postcard postcard-rev light green`}>
                        <a className="postcard__img_link" href="#">
                            <img className="postcard__img" src="https://picsum.photos/1000/1000" alt="Image Title" />
                        </a>
                        <div className="postcard__text t-dark">
                            <h1 className="postcard__title blue"><a href="#">{props.pTitle}</a></h1>
                            <div className="postcard__subtitle small">
                                <time dateTime="2020-05-25 12:00:00">
                                    <i className="fas fa-calendar-alt mr-2"></i>Mon, May 25th 2020
                                </time>
                            </div>
                            <div className="postcard__bar"></div>
                            <div className="postcard__preview-txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugiat asperiores inventore beatae accusamus odit minima enim, commodi quia, doloribus eius! Ducimus nemo accusantium maiores velit corrupti tempora reiciendis molestiae repellat vero. Eveniet ipsam adipisci illo iusto quibusdam, sunt neque nulla unde ipsum dolores nobis enim quidem excepturi, illum quos!</div>
                            <ul className="postcard__tagbox">
                                <li className="tag__item"><i className="fas fa-tag mr-2"></i>Podcast</li>
                                <li className="tag__item"><i className="fas fa-clock mr-2"></i>55 mins.</li>
                                <li className="tag__item play blue">
                                    <a href="#"><i className="fas fa-play mr-2"></i>Play Episode</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Articles;