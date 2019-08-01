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
import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import Button from "components/CustomButtons/Button.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Grid from "@material-ui/core/grid";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import NavPills from "components/NavPills/NavPills.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import Card from "components/Card/Card"

import profilePageStyle from "assets/jss/material-kit-react/views/profilePage.jsx";
import CardBody from "components/Card/CardBody";

class GalleryPage extends React.Component {

  render() {

    let cardStyle = {
      width: '10rem'
    }

    const { classes, ...rest } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
    const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
    return (
      <div>
        <Header
          color="transparent"
          brand="Gallery"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 200,
            color: "white"
          }}
          {...rest}
        />
        <Parallax small filter image={require("assets/img/bg2.jpg")} />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div>
            <Grid container spacing={3}>
              <Grid item xs={3}>
                <Card style={cardStyle} style={{margin: '30px auto 0px auto', width: '50%'}}>
                  <CardBody>
                    Image
                  </CardBody>
                </Card>
              </Grid>
              <Grid item xs={3}>
                <Card style={cardStyle} style={{margin: '30px auto 0px auto', width: '50%'}}>
                  <CardBody>
                    Image
                  </CardBody>
                </Card>
              </Grid>
              <Grid item xs={3}>
                <Card style={cardStyle} style={{margin: '30px auto 0px auto', width: '50%'}}>
                  <CardBody>
                    Image
                  </CardBody>
                </Card>
              </Grid>
              <Grid item xs={3}>
                <Card style={cardStyle} style={{margin: '30px auto 0px auto', width: '50%'}}>
                  <CardBody>
                    Image
                  </CardBody>
                </Card>
              </Grid>
              <Grid item xs={3}>
                <Card style={cardStyle} style={{margin: '30px auto 0px auto', width: '50%'}}>
                  <CardBody>
                    Image
                  </CardBody>
                </Card>
              </Grid>
            </Grid>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

GalleryPage.propTypes = {
  classes: PropTypes.object
};

export default withStyles(profilePageStyle)(GalleryPage);
