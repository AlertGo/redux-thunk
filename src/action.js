const showDiscuss = (data) => {
    return {
        type:'SHOW_DIS',
        data
    }
}
const getDiscuss = () => {
    return (a) => {
        return fetch('http://localhost:8006/text/text')
        .then((data) => {
            return data.json()
        })
        .then((data) => {
          console.log(data)
              return a(showDiscuss(data))
        })
        .catch((err) => {
            return new Error(err)
        })
    }

}
const Fabulous = (id,num) => {
    return {
        type:"Fabulous",
        id,
        num
    }
}
const addFabulous = (id,num) => {
    return (dispatch) => {
        return fetch('http://localhost:8006/text/updatef',{
            method:"POST",
            headers:{
            "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
            },
            body:`id=${id}&num=${num+1}`
        })
        .then((data) => {
            return data.json()
        })
        .then((data) => {
            return dispatch(Fabulous(id,num))

        })
    }
}
export { getDiscuss , addFabulous }
