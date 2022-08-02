import '../styles/Articles.css';
import ArticleData from '../Assets/datas/articles.json'

const Articles = (props) => {
    let order = props.check
    order = order % 2
    return (
        //  available blue , red green , yellow
        <div className='body list-child-1'>
            <section class="light list-child-2">
                <div class="container py-2 list-child-3">
                    <div class="h1 text-center text-dark " id="pageHeaderTitle">{props.pTitle}
                    </div>

                    <div class={order ? "postcard postcard-for light blue" : "postcard postcard-rev light blue"}>
                        <a class="postcard__img_link" href="#">
                            <img class="postcard__img" src="https://picsum.photos/1000/1000" alt="Image Title" />
                        </a>
                        <div class="postcard__text t-dark">
                            <h1 class="postcard__title blue"><a href="#">{props.pTitle}</a></h1>
                            <div class="postcard__subtitle small">
                                <time datetime="2020-05-25 12:00:00">
                                    <i class="fas fa-calendar-alt mr-2"></i>Mon, May 25th 2020
                                </time>
                            </div>
                            <div class="postcard__bar"></div>
                            <div class="postcard__preview-txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugiat asperiores inventore beatae accusamus odit minima enim, commodi quia, doloribus eius! Ducimus nemo accusantium maiores velit corrupti tempora reiciendis molestiae repellat vero. Eveniet ipsam adipisci illo iusto quibusdam, sunt neque nulla unde ipsum dolores nobis enim quidem excepturi, illum quos!</div>
                            <ul class="postcard__tagbox">
                                <li class="tag__item"><i class="fas fa-tag mr-2"></i>Podcast</li>
                                <li class="tag__item"><i class="fas fa-clock mr-2"></i>55 mins.</li>
                                <li class="tag__item play blue">
                                    <a href="#"><i class="fas fa-play mr-2"></i>Play Episode</a>
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