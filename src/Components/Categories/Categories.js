import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { categories } from "../../Data";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

class Categories extends Component {

  render() {        
    return (
        <div>
            <div style={{ flex: 1, flexDirection: "row"}}>
                {categories.map(item => {
                    return (
                        <Card style={{ width: 355, minHeight: 250,  margin: 10, display: "inline-block" }}>
                        <CardActionArea
                        onClick={() => {
                            this.props.history.push("/?category=" + item.name,);
                        }}
                        >
                        <CardMedia
                            style={{ height: 140 }}
                            image={item.imageUrl}
                        />
                        <CardContent>
                            <div
                            style={{
                                marginLeft: 5,
                                marginBottom: 5,
                                fontWeight: "bold",
                                whiteSpace: "nowrap",
                                overflow: "hidden",
                                textOverflow: "ellipsis"
                            }}
                            >
                                {item.name}
                            </div>
                            <div
                            style={{
                                marginLeft: 5,
                                marginBottom: 5
                            }}>
                                {item.desc}   
                            </div>
                        </CardContent>
                        </CardActionArea>
                    </Card>
                    );
                })}
            </div>
        </div>
    )
  }
}

export default withRouter(connect()(Categories));





