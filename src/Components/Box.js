import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Box = ({
  id,
  title,
  date,
  img,
  onFavoriteClick,
  seticon,
  setSeticon,
}) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteClick = () => {
    setIsFavorite((prevIsFavorite) => !prevIsFavorite);
    onFavoriteClick({ id, title, date, img, isFavorite: !isFavorite });
    setSeticon(false);
  };

  return (
    <Card
      sx={{
        width: 300,
        height: 350,
        "@media (max-width: 600px)": {
          width: "100%",
          height: "auto",
        },
      }}
    >
      <CardHeader title={title} className="card-header" /> <br />
      <CardMedia
        component="img"
        height="150" /* Set a fixed height for the image */
        width="100%"
        image={img}
        alt=""
        sx={{
          "@media (max-width: 600px)": {
            width: "80%",
            margin: "auto",
            marginTop: "20px",
          },
        }}
      />
      <CardActions className="card-actions">
        {seticon ? (
          <IconButton onClick={handleFavoriteClick}>
            <FavoriteIcon className="favorite-icon" style={{ color: "red" }} />
          </IconButton>
        ) : (
          ""
        )}
      </CardActions>
    </Card>
  );
};

export default Box;
