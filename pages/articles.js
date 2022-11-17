import data from './assets/data/articles.json'
import Articles from './fetcharticles'

const ArticlesShow = () => {

    return (
        <div className='majorListParent'>
            {data.map((send, index) => {
                // let number = data.findIndex(obj => obj.name == send.title);
                return (<Articles key={index} check={index} title={send.title} img_link={send.img_link } link = {send.link} description = {send.description}/>)
            }
            )}
        </div>
    )
}

export default ArticlesShow;
