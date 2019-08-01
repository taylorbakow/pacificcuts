/*!

=========================================================
* Material Kit React - v1.7.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";

import teamStyle from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.jsx";

import team2 from "assets/img/faces/jtdavis.jpg";

class TeamSection extends React.Component {
  render() {
    const { classes } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
    return (
      <div className={classes.section}>
        <h2 className={classes.title}>About me</h2>
        <div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <Card plain>
                <GridItem xs={12} sm={12} md={12} className={classes.itemGrid}>
                  <img src={team2} alt="..." className={imageClasses} style={{maxWidth: '50%'}}/>
                </GridItem>
                <h4 className={classes.cardTitle}>
                  JT Davis
                  <br />
                  <small className={classes.smallTitle}>Barber</small>
                </h4>
                <CardBody>
                  <p className={classes.description}>
                    Coolest barber around. You can write more details here.
                    Feel free to add some <a href="/">links</a> for people
                    to be able to follow.
                  </p>
                </CardBody>
                <CardFooter className={classes.justifyCenter}>
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                  >
                    <i className={classes.socials + " fab fa-twitter"} />
                  </Button>
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                    href="https://www.facebook.com/jt.skattebo"
                  >
                    <i className={classes.socials + " fab fa-facebook"} />
                  </Button>
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                    href="https://www.instagram.com/jcutz15/"
                  >
                    <i className={classes.socials + " fab fa-instagram"} />
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

TeamSection.propTypes = {
  classes: PropTypes.object
};

export default withStyles(teamStyle)(TeamSection);
