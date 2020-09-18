import React, { Component } from 'react'
import Modal from "../../components/UI/Modal/Modal"

const withErrorHandling = (WrappedComponent, axios) => {
    return class extends Component {

        state = {
            error: false
        }
        
        UNSAFE_componentWillMount() {
            this.setState({error: false})
            this.respInterceptors = axios.interceptors.response.use(null, (error) => {
                this.setState({error: true})
            })
        }

        componentWillUnmount() {
            axios.interceptors.response.eject(this.respInterceptors);
        }

        backdropClickedHandler = () => {
            this.setState({error: false})
        }

        render() {
            

            return (
                <React.Fragment>
                    <WrappedComponent {...this.props}/>
                    <Modal ordered={this.state.error} backdropClicked={this.backdropClickedHandler}>
                        <h1>Something went wrong!!</h1>
                        <p>Sorry you had to face this technical issue.<br/>
                           You can try again later OR<br/>
                           Call us at 9123129312.<br/>
                           Mail us at pleasedontmail@nothing.com
                        </p>
                    </Modal>
                </React.Fragment>
            )
        }
    }
}

export default withErrorHandling;

