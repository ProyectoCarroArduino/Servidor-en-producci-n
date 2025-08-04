import mongoose from "mongoose";

try {
    await mongoose.connect(process.env.URI_MONGODB, {
        useUnifiedTopology: true, 
        useNewUrlParser: true
    });
    console.log("conexion a BD exitosa");
    } catch (error) {
    console.log("error de conexion a bd" + error);
}
