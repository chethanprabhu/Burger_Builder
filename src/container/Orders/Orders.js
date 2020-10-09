import React, {Component} from 'react';
import axios from "../../axios/axios-orders"
import Order from "../../components/Burger/Order/Order"
import withErrorHandling from "../../hoc/withErrorHandling/withErrorHandling"
import Spinner from "../../components/UI/Spinnner/Spinner"

class Orders extends Component {

    state = {
        orders: [],
        loading: true
    }

    componentDidMount() {
        axios.get("/orderInfo.json")
            .then((res) => {
                const fetchedOrders = [];
                for(let key in res.data) {
                    fetchedOrders.push({
                        ...res.data[key],
                        id: key
                    })
                }
                this.setState({orders: fetchedOrders})
                this.setState({loading: false})
            })
            .catch((err) => {
                this.setState({loading: false})
            })
        }

        

    render() {

        let orderData = <Spinner />
        
        if(!this.state.loading) {
            orderData = (this.state.orders.map(order => {
                return <Order 
                     key={order.id}
                     ingredient={order.ingredients}
                     price={order.totalPrice}
                />
            }))
        }
        return (
            <div>
                {orderData}
            </div>
        )
    }
}

export default withErrorHandling(Orders, axios);