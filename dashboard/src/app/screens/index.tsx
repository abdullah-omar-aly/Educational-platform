import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import axios from "axios";

function MainScreen() {
  const [file, setFile] = useState<File>({} as File);
  const [caption, setCaption] = useState("");

  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("imagetest", file);
    formData.append("caption", caption);

    // await axios.post("/api/upload", JSON.stringify({name: "boda"}), { headers: {'Content-Type': 'application/json'}})
    // await axios.post("http://localhost:8080/api/upload", formData, {
    //   headers: { "Content-Type": "multipart/form-data" },
    // });
    await axios.post("/api/upload", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    }); 
  };

  return (
    <form onSubmit={submit}>
      <input
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          if (e.target.files) setFile(e.target.files[0]);
        }}
        type="file"
        accept="image/*"
      ></input>
      <input
        value={caption}
        onChange={(e) => setCaption(e.target.value)}
        type="text"
        placeholder="Caption"
      ></input>
      <button type="submit">Submit</button>
    </form>
  );
}

export default MainScreen;
