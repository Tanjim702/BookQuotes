export const generateRandomId = (index:number) =>{
    const random = () =>{
        return Math.random() * Math.pow(10,index)
    }
    return Math.round(Math.sqrt(random()*random())).toString()
}