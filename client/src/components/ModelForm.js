import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import axios from 'axios';
import makeListjson from '../makes';
import modelListjson from '../model';

const useStyles = makeStyles(theme => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export default function ModelForm() {
    const classes = useStyles();
    const [makeList, setMakeList] = useState([]);
    const [make, setMake] = useState('');
    const [modelList, setModelList] = useState([]);
    const [model, setModel] = useState('');
    const [year, setYear] = useState(2019);

    useEffect(() => {
       axios({
           method: 'GET',
           url: `http://api.carmd.com/v3.0/make?year=${year}`,
           headers: {
            'content-type': 'application/json',
            'authorization': 'Basic ODBkZTllMzctODQ4Ni00Y2YwLTliOTYtOTEzYWIwMWQyZDIy',
            'partner-token': '6a0877d27766407c8f511fdfcd89babc',

           }
        })
       .then(response => {
           const makeResponse = response.data;
           setMakeList(makeListjson.data);
       })
    }, [year])

    useEffect(() => {
        if (make){
            axios({
                method: 'GET',
                url: `http://api.carmd.com/v3.0/model?year=${year}&make=${make}`,
                headers: {
                 'content-type': 'application/json',
                 'authorization': 'Basic ODBkZTllMzctODQ4Ni00Y2YwLTliOTYtOTEzYWIwMWQyZDIy',
                 'partner-token': '6a0877d27766407c8f511fdfcd89babc',
     
                }
             })
            .then(response => {
                const makeResponse = response.data;
                setModelList(modelListjson.data);
            })
        }
      
    }, [make, year])

    const onChange = event => {
        const { name, value } = event.target
        if (name === "make") {
            setMake(value)
        } else if (name === "model") {
            setModel(value)
        } else if (name === "year") {
            setYear(value)
        }


    }

    return (
        <div>
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Make</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={make}
                    name="make"
                    onChange={onChange}
                >
                    {makeList && makeList.map((make, index) => {
                        return <MenuItem key={index} value={make}>{make}</MenuItem>    
                    })}
                </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-helper-label">Model</InputLabel>
                <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={model}
                    name="model"
                    onChange={onChange}
                >
                   {modelList && modelList.map((model, index) => {
                        return <MenuItem key={index} value={model}>{model}</MenuItem>    
                    })}
                </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-helper-label">Year</InputLabel>
                <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select"
                    value={year}
                    name="year"
                    onChange={onChange}
                     >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={2019}>2019</MenuItem>
                    <MenuItem value={2018}>2018</MenuItem>
                    <MenuItem value={2017}>2017</MenuItem>
                </Select>
                <FormHelperText></FormHelperText>
            </FormControl>



        </div>
    );
}