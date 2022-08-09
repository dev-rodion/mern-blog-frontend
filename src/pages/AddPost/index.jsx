import React, { useCallback, useMemo, useState } from "react";
import { Button, Paper, TextField } from "@mui/material";
import styles from "./AddPost.module.scss";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

const AddPost = () => {
  const imageUrl = "";
  const [value, setValue] = useState("");

  const handleChangeFile = () => {};

  const handleRemoveImage = () => {};

  const onChange = useCallback((value) => {
    setValue(value);
  }, []);

  const options = useMemo(() => {
    return {
      spellChecker: false,
      maxHeight: "400px",
      autofocus: false,
      placeholder: "Enter your text...",
      status: false,
      autosave: {
        enabled: true,
        delay: 1000,
      },
    };
  }, []);

  return (
    <Paper style={{ padding: 30 }}>
      <Button variant="outlined" size="large">
        Load Image
      </Button>
      <input type="file" onChange={handleChangeFile} hidden />
      {imageUrl && (
        <Button variant="contained" color="error" onClick={handleRemoveImage}>
          Delete
        </Button>
      )}
      {imageUrl && <img className={styles.image} src={`http://localhost:4444${imageUrl}`} alt="Uploaded Image" />}
      <br />
      <br />
      <TextField className={styles.title} variant="standard" placeholder="Post Title" fullWidth autoFocus/>
      <TextField className={styles.tags} variant="standard" placeholder="Tags" fullWidth />
      <SimpleMDE className={styles.editor} style={{width: "100%"}} onChange={onChange} options={options} />
      <div className={styles.buttons}>
        <Button size="large" variant="contained">
          Sumbit
        </Button>
        <a href="/">
          <Button size="large">Cancel</Button>
        </a>
      </div>
    </Paper>
  );
};

export default AddPost;
