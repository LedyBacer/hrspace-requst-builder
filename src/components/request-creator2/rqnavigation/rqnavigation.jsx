import { useNavigate } from "react-router-dom";
import { Button, IconButton } from "@mui/material";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import React from "react";
import styles from "./rqnavigation.module.scss";

export default function RQNavigation() {
  const navigate = useNavigate();
  return (
    <div className={styles.navigation}>
      <div className={styles.bookmark}>
        <IconButton aria-label="bookmark" color="rqback" sx={{ padding: "0" }}>
          <BookmarkBorderOutlinedIcon />
          <p className={styles.bookmark_text}>Сохранить черновик</p>
        </IconButton>
      </div>
      <div className={styles.navigation_button_container}>
        <Button
          onClick={() => {
            navigate("/request-builder/1");
          }}
          variant="contained"
          color="rqwhite"
          sx={{
            height: "46px",
            width: "180px",
            borderRadius: "8px",
            textTransform: "none",
          }}
        >
          <p className={styles.button_text}>Назад</p>
        </Button>
        <Button
          onClick={() => {
            navigate("/request-builder/3");
          }}
          variant="contained"
          color="rqback"
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
    </div>
  );
}
