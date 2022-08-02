import styles from '../styles/Articles.module.css';

const Articles = (props) => {
    let counter = props.check;
    return (
        <div>
            {counter % 2 === 0 ? (

                <section className="styles.dark">
                    <div className="container py-4">
                        {/* <div className="h1 text-center" id="pageHeaderTitle">Article no: {counter + 1}</div> */}


                        <article className={`${styles.postcard} ${styles.dark} ${styles.blue}`}>
                            <a className={styles.postcard__img_link} href="/">
                                <img className={styles.postcard__img} src="https://picsum.photos/1000/1000" alt="Image Title" />
                            </a>
                            <div className={`${styles.postcard__text}`}>
                                <h1 className={`${styles.postcard__title} ${styles.blue}`}><a href="/">{props.pTitle}</a></h1>
                                <div className={`${styles.postcard__subtitle} ${styles.small}`}>
                                    <i className="fas fa-calendar-alt mr-2"></i>Mon, May 25th 2020
                                </div>
                                <div className={styles.postcard__bar}></div>
                                <div className={styles.postcard__preview_txt}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugiat asperiores inventore beatae accusamus odit minima enim, commodi quia, doloribus eius! Ducimus nemo accusantium maiores velit corrupti tempora reiciendis molestiae repellat vero. Eveniet ipsam adipisci illo iusto quibusdam, sunt neque nulla unde ipsum dolores nobis enim quidem excepturi, illum quos!</div>
                                <ul className={styles.postcard__tagbox}>
                                    <li className={styles.tag__item}><i className="fas fa-tag mr-2"></i>Podcast</li>
                                    <li className={styles.tag__item}><i className="fas fa-clock mr-2"></i>55 mins.</li>
                                    <li className={`${styles.tag__item} ${styles.play} ${styles.blue}`}>
                                        <a href="/"><i className="fas fa-play mr-2"></i>Play Episode</a>
                                    </li>
                                </ul>
                            </div>
                        </article>
                    </div>
                </section>

            ) : (

                <section className={styles.light}>
                    <div className="container py-2">
                        {/* <div className="h1 text-center text-dark" id="pageHeaderTitle">Article no: {counter + 1}</div> */}

                        <article className={`${styles.postcard} ${styles.light} ${styles.blue}`}>
                            <a className={styles.postcard__img_link} href="#">
                                <img className={styles.postcard__img} src="https://picsum.photos/1000/1000" alt="Image Title" />
                            </a>
                            <div className={`${styles.postcard__text} ${styles.t_dark}`}>
                                <h1 className={`${styles.postcard__title} ${styles.blue}`}><a href="#">{props.pTitle}</a></h1>
                                <div className={`${styles.postcard__subtitle} ${styles.small}`}>
                                    <i className="fas fa-calendar-alt mr-2"></i>Mon, May 25th 2020
                                </div>
                                <div className={styles.postcard__bar}></div>
                                <div className={`${styles.postcard__preview_txt}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugiat asperiores inventore beatae accusamus odit minima enim, commodi quia, doloribus eius! Ducimus nemo accusantium maiores velit corrupti tempora reiciendis molestiae repellat vero. Eveniet ipsam adipisci illo iusto quibusdam, sunt neque nulla unde ipsum dolores nobis enim quidem excepturi, illum quos!</div>
                                <ul className={styles.postcard__tagbox}>
                                    <li className={styles.tag__item}><i className="fas fa-tag mr-2"></i>Podcast</li>
                                    <li className={styles.tag__item}><i className="fas fa-clock mr-2"></i>55 mins.</li>
                                    <li className={`${styles.tag__item} ${styles.play} ${styles.blue}`}>
                                        <a href="/"><i className="fas fa-play mr-2"></i>Play Episode</a>
                                    </li>
                                </ul>
                            </div>
                        </article>
                    </div>
                </section>

            )}

        </div>
    )
}


export default Articles;