import data from './assets/data/articles.json'
import Articles from './fetcharticles'

const ArticlesShow = () => {

    return (
        <div className='majorListParent'>
            {data.map((send, index) => {
                // let number = data.findIndex(obj => obj.name == send.title);
                return (<Articles key={index} check={index} pTitle={send.title} />)
            }
            )}
        </div>
    )
}

export default ArticlesShow;
