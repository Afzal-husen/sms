
import mongoose from "mongoose";
const url = "mongodb+srv://paldilip202:rXflnN2u4nX6oWdo@demo.cad5sk0.mongodb.net/demo?retryWrites=true&w=majority"

export const connectdb = async () => {
try {
    return await mongoose.connect(url)
} catch (error) {
    console.log(error.message)
}
}



 