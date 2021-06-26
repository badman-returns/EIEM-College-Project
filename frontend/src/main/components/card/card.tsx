import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
interface props {
  imageUrl: string;
  heading: string;
  viewAll: Function;
}
const Card: React.FC<props> = ({ imageUrl, heading, viewAll }: props) => {
  return (
    <Grid item xs={12} sm={6} md={4} style={{ padding: "20px" }}>
      <Grid container justify="center" alignItems="center">
        <Grid item xs={12}>
          <img
            alt={heading}
            src={imageUrl}
            style={{ maxWidth: "100%", maxHeight: "100%" }}
          />
        </Grid>
    
        <Grid item xs={12}>
          <Grid container justify='flex-start' alignItems='center' >
            <p>{heading}</p>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Grid container justify="center" alignItems="center">
            <Button
              onClick={() => viewAll()}
              variant="contained"
              color="secondary"
            >
              View
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default Card;
