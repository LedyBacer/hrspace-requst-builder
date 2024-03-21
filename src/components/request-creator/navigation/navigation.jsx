import { Button, IconButton } from "@mui/material";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./navigation.module.scss";

export default function NavigationButtons() {
  const navigate = useNavigate();
  return (
    <div className={styles.navigation}>
      <div className={styles.bookmark}>
        <IconButton aria-label="bookmark" color="rqback" sx={{ padding: "0" }}>
          <BookmarkBorderOutlinedIcon />
          <p className={styles.bookmark_text}>Сохранить черновик</p>
        </IconButton>
      </div>
      <Button
        variant="contained"
        color="rqback"
        onClick={() => navigate("/request-builder/2")}
        sx={{
          height: "46px",
          width: "180px",
          borderRadius: "8px",
          textTransform: "none",
        }}
      >
        <p className={styles.button_text}>Далее</p>
      </Button>
    </div>
  );
}
