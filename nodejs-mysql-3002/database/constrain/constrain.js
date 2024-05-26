const axios = require('axios')

module.exports = {
    isProductExist
}

async function isProductExist(productCode){
    try {
        const is200 = await axios.get(`http://localhost:3001/product/${productCode}`)
        if ( await is200.status == 200){
            return true
        }
        return false
    } catch (error) {
        console.log(error)
        return false
    }
}
