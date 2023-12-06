
const handle = async (req, res) => {
    const {email} = req.body;

    console.log("email", email);
    try {
        const response = fetch("http://localhost:1337/api/auth/forgot-password", {
            method: "POST",
            body: JSON.stringify(email),
            headers: {"Content-Type":"application/json"}
        })
        res.status(200).json({message: "ok"})
    } catch(err) {
        res.status(401).json({message: "error"})
    }
}

export default handle;


// import axios from "axios";

// const resetPassword = async (email) => {
//   try {
//     const response = await axios.post(
//       "http://localhost:1337/api/auth/reset-password",
//       { email }
//     );
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// };

// export default resetPassword;
