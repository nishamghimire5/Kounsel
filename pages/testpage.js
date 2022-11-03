import React, { useEffect } from "react"
import ReactDOM from "react-dom"
import io from 'Socket.IO-client'
let socket = io('http://localhost/api/socket');
class Form extends React.Component {

    constructor() {
      super();

      this.displayData = [];

      this.state = {
        showdata : this.displayData,
        postVal : ""
      }

      this.appendData = this.appendData.bind(this);
      this.prependData = this.prependData.bind(this);
      this.handleChange = this.handleChange.bind(this);

    };

  appendData() {
         this.displayData.push(<div  id="display-data"><pre>{this.state.postVal}</pre></div>);
         this.setState({
            showdata : this.displayData,
            postVal : ""
         });
      }

  prependData() {
   this.displayData.unshift(<div id="display-data"><pre>{this.state.postVal}</pre></div>);
   this.setState({
      showdata : this.displayData,
      postVal : ""
   });
 }

 handleChange(e) {
      let getTextAreaValue = e.target.value;
      this.setState({
        postVal :getTextAreaValue
      });

}

  render() {
    return (
          <div id="mainContainer">
             <textarea rows="4" cols="50" value={this.state.postVal} onChange={this.handleChange} ></textarea>
             <div >
             <input  type="submit" className="button" onClick={this.appendData}  value="Append"/>
             <input  type="submit" className="button" onClick={this.prependData}   value="Prepend"/>
             </div>
             <div id="display-data-Container">
             {this.displayData}
             </div>
          </div>
      );
  }
}

export default function Test() {
    useEffect(() => {
        ReactDOM.render(<Form/>, document.getElementById('root'));
    }, [])

    useEffect(() => {socketInitializer(); 
        console.log('fires only once');
      }, []);
      
        const socketInitializer = async () => {
          await fetch('/api/socket')
          socket = io()
      
          socket.on('connect', () => {
            console.log('connected')
          })
          
        }
        socket.emit('custom-event', 10, 'Hi', {a: 'a'});
        

    return (
        <div id="root">

        </div>
    )
}
