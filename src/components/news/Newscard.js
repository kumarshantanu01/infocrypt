// import { makeStyles } from "@mui/styles";
import React from "react";
import { Card, CardContent, makeStyles, Grid, Typography, Button } from "@material-ui/core";

function Newscard(props) {
    const classes = useStyles();
  return (
    <div>
      <div className={classes.newscontainer}>
          {props.news.map((value) => {
            return (
                <>
                <Card className={classes.component}>
                    <CardContent className={classes.container}>
                        <Grid container>
                            <Grid lg={5} md={5} sm={5} xs={12} item>
                                <img src={value.urlToImage} alt="png" className={classes.image} />
                            </Grid>
                            <Grid lg={7} md={7} sm={7} xs={12} item className={classes.rightContainer}>
                                <Typography className={classes.title}>{value.title}</Typography>
                                <Typography className={classes.author}>
                                    <b className={classes.newsarticle}>News</b> by {value.author} / {new Date(value.publishedAt).toDateString()}
                                </Typography>
                                <Typography className={classes.description}>{value.content}</Typography>
                                <a href={value.url} target='_blank' rel="noreferrer" className={classes.link}  >
                                    <Button className={classes.button} >
                                        Read more
                                    </Button>
                                </a>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
                </>
            );
          })}
        </div>
    </div>
  );
}

export default Newscard;

const useStyles = makeStyles(theme => ({
    component: {
        boxShadow: '0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%)',
        marginBottom: 20,
        '&:hover':{
            backgroundColor: "#F3F3F3",
            boxShadow: "0.6rem 0.6rem 0.5rem #FBD1E6, -0.6rem -0.4rem 0.5rem #f3f4f5",
          }
    },
    container: {
        display: 'flex',
        padding: 8,
        paddingBottom: '4px!important'
    },
    image: {
        height: 268,
        width: '88%',
        borderRadius: 5,
        objectFit: 'cover',
    },
    rightContainer: {
        margin: '5px 0px 0 -25px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: "space-around",
        [theme.breakpoints.down('sm')]: {
            margin: '5px 0'
        }
    },
    title: {
        fontWeight: 300,
        color: '#44444d',
        fontSize: 22,
        lineHeight: '27px'
    },
    author: {
        color: '#808290',
        fontSize: 12,
        lineHeight: '22px'
    },
    description: {
        lineHeight: '22px',
        color: '#44444d',
        marginTop: 5,
        fontFamily: "'Roboto',sans-serif",
        fontWeight: 300
    },
    newsarticle: {
        color: '#44444d',
        fontFamily: "'Convergence', sans-serif"
    },
    button:{
        textDecoration: "none",background: "#212529", color: "#DD79AA", width:'120px', marginTop: '2rem', marginRight: "1rem", padding: '0.6rem' 
    },
    link: {
        textDecoration: 'none',
        paddingBottom: "1rem",
    }
}))