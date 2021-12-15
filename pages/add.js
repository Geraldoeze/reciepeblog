import Head from 'next/head'
import styles from '../styles/Create.module.css'
import '../styles/Create.module.css'

import React from 'react';



class NewPost extends React.Component {
    state = {
        title: '',
        ingredients:'',
        author: ''
    }
    // deletePostHandler = () => {
    //     const data = {
    //         title: this.state.title,
    //         body: this.state.content,
    //         author: this.state.author
    //     }
    //     axios.post(` /posts/`, data)
    //         .then(response => {
    //             console.log(response)
    //         })

    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
    }
    checkcode = (e) => {
        e.preventDefault()
        console.log(this.state)
    }
    render() { 
        
        return (
            <div className={styles.cont}>
                <h1>Add a Post</h1>
                <form onSubmit={this.checkcode}>
                <label className={styles.label} >Title</label>
                <input className={styles.input} 
                    value={this.state.title}
                    onChange={this.handleChange}  
                    id="title"
                    type="text"
                    required
                     />
                <label className={styles.label}>Ingredients</label>
                <textarea className={styles.input} 
                    value={this.state.ingredients}
                    required
                    onChange={this.handleChange}  
                    type="text"/>
                <label className={styles.label}>Author</label>
                <input  className={styles.input} 
                    value={this.state.author}
                    required
                    onChange={this.handleChange}  
                    type="text" />
                
                
                    <button className={styles.btn1} >Add Post
                        </button>
                </form>
        </div>
        );
    }
}
 
export default NewPost;