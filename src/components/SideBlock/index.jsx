import React from "react";
import styles from "./SideBlock.module.scss";
import { Paper, Typography } from "@mui/material";

const SideBlock = ({ title, children }) => {
  return (
    <Paper className={styles.root}>
      <Typography variant="h6" className={styles.title}>
        {title}
      </Typography>
      {children}
    </Paper>
  );
};

export default SideBlock;
