import axios from "axios";


const checkError = response => {
    if (response.status == "fail") {
        throw Error(response.error)
    }
    return response
}


export const submitForm = (username, email) => {
    let form_data = new FormData()
    form_data.append("username", username)
    form_data.append("email", email)
    return axios.post("/api/gather/", form_data).then(response => response.data).then(checkError)
}
