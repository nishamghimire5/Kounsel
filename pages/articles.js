import data from './assets/data/articles.json'
import Articles from './fetcharticles'
import FooterPage from "./layout/footer";

const ArticlesShow = () => {

    return (
        <div className='majorListParent'>
            {data.map((send, index) => {
                // let number = data.findIndex(obj => obj.name == send.title);
                return (<Articles key={index} check={index} pTitle={send.title} />)
            }
            )}
            <div style={{ position: 'relative', top: '5rem' }}>
                <FooterPage />
            </div>
        </div>
    )
}

export default ArticlesShow;
