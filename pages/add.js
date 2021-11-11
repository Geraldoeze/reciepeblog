import Head from 'next/head'
import styles from '../styles/Create.module.css'
import '../styles/Create.module.css'

import React from 'react';

// const style = {
//   .btn1 {
      
//     background-color: transparent;
//     color:rgba(119, 119, 27, 0.925);
//     border: 1px solid yellow;
//     font-weight:bold ;
//     cursor: pointer;
//     margin: 5px;
//     padding: 10px 5px;
//     text-align: center;
//   }

//   .btn1:hover,
//   .btni:active {
//     background-color: gold;
//     color: maroon;
//   }
// }



class NewPost extends React.Component {
    state = {
        title: '',
        content:'',
        author: ''
    }

    
    render() { 
        return (
            <div className="cont">
            <h1>Add a Post</h1>
         
            <label>Title</label>
            <input value={this.state.title} className="input"  type="text" />
            <label>Content</label>
            <textarea value={this.state.content}className="input c" type="text"/>
            <label>Author</label>
            <select value={this.state.author} className="input " type="text">
                <option value="Gerald">Gerald</option>
                <option value="Crisom">Crimson</option>
            </select>
            <div>
                <button className="btn1" >Add Post</button>
            </div>
        </div>
        );
    }
}
 
export default NewPost;