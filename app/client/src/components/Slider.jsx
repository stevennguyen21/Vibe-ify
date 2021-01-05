import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles((theme) => ({
    root: {
        width: 600,
    },
    margin: {
        height: theme.spacing(3),
    },
}));

const AirbnbSlider = withStyles({
    root: {
      color: '#3a8589',
      height: 3,
      padding: '13px 0',
    },
    thumb: {
      height: 27,
      width: 27,
      backgroundColor: '#fff',
      border: '1px solid currentColor',
      marginTop: -12,
      marginLeft: -13,
      boxShadow: '#ebebeb 0 2px 2px',
      '&:focus, &:hover, &$active': {
        boxShadow: '#ccc 0 2px 3px 1px',
      },
      '& .bar': {
        // display: inline-block !important;
        height: 9,
        width: 1,
        backgroundColor: 'currentColor',
        marginLeft: 1,
        marginRight: 1,
      },
    },
    active: {},
    track: {
      height: 3,
    },
    rail: {
      color: '#d8d8d8',
      opacity: 1,
      height: 3,
    },
  })(Slider);

function AirbnbThumbComponent(props) {
    return (
        <span {...props}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
        </span>
    );
}

export default function CustomizedSlider({ value, onChange }) {
    const classes = useStyles();
    return (
        <div className={classes.root} width="600px">
            <div className={classes.margin} width="100%"/>
            <AirbnbSlider
                ThumbComponent={AirbnbThumbComponent}
                value={value}
                onChange={onChange}
            />
        </div>
    )
}