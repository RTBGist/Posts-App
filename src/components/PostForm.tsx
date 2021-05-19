import React from 'react';
import {connect} from "react-redux";
import {createPost} from "../redux/postsReducer";
import {showAlert} from "../redux/appReducer";
import Alert from "./Alert";
import {PostInterface} from "../interfaces";
// Class component for Example

type PostFormProps = {
    createPost(post: PostInterface): void,
    showAlert(text: string): void,
    alert: string | null
}

type PostFormState = {
    title: string,
}

class PostForm extends React.Component<PostFormProps, PostFormState> {
    constructor(props: PostFormProps) {
        super(props);

        this.state = {
            title: ''
        }
    }

    submitHandler = (event: any) => {
        event.preventDefault()

        const {title} = this.state
        if(!title.trim()) {
            return this.props.showAlert('Название не может быть пустым')
        }

        const newPost = {
            title,
            id: Date.now().toString()
        }

        this.props.createPost(newPost)
        this.setState((prev) => ({...prev, title: ''}))
    }

    changeInputHandler = (event: any) => {
        this.setState((prev) => ({
            ...prev,
            [event.target.name]: event.target.value
        }))
    }

    render = () => {
        return (
            <>
                {this.props.alert && <Alert text={this.props.alert} />}

                <form onSubmit={this.submitHandler}>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Заголовок поста</label>
                        <input value={this.state.title} onChange={this.changeInputHandler} name="title" type="text" className="form-control" id="title"/>
                    </div>
                    <button type="submit" className="btn btn-success">Создать</button>
                </form>
            </>
        )
    };
}

const mapStateToProps = (state: any) => ({
    alert: state.app.alert
})

export default connect(mapStateToProps, {createPost, showAlert})(PostForm);