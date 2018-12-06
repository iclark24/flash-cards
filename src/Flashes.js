import React from "react"
import {Grid, } from "semantic-ui-react"
import Flash from "./Flash"

const FCards = ({ fcards, remove, revealcard }) => (
  <Grid columns="four" centered>
    <Grid.Row>
        {fcards.map(fcard => (
          <Grid.Column>
            <Flash key={fcard.id} {...fcard} revealcard={revealcard} remove= {remove}/>
          </Grid.Column>
          ))
        }
    </Grid.Row>
  </Grid>
);

export default FCards;