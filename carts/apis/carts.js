

export default  {

    getCarts(cb){
        fetch("http://localhost:3001/api/carts")
            .then(response=>{
                response.json().then(data=>{
                    cb(data)
                })
            })
    }
}
