import Axios from "axios";

const instance = Axios.create({
    baseURL: "https://react-my-burger-ea404.firebaseio.com/"
})

export default instance;

