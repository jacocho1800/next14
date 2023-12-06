'use client'
import { useState } from "react"

const page = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/auth", {
        method: "POST",
        headers: {"Content-Type":"applicaiton/json"},
        body: JSON.stringify({email: email})
      })
      const responseData = await response.json();
      console.log("responseData", responseData);
    } catch(err) {
      alert(err);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setEmail(e.target.value)} />
        <button type="submit">보내기</button>
      </form>
    </div>
  );
}

export default page
