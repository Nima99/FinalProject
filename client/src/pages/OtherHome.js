import React from 'react'
import VinForm from '../components/VinForm'
import { Grid, Button, Container } from '@material-ui/core';
import axios from 'axios';





class OtherHome extends React.Component {
    state = {}
    

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            Vin: value
        });
    
    };


    render() {
        console.log(this.state);
        return (
            <Container maxWidth="sm" border="1" width="500" height="350">

                        <Grid style={{color: "black", backgroundColor: "Cyan", alignContent: "center"}}>
                            <header>VinFinder</header>
                        </Grid>


                <Grid style={{color: "white"}} container >
                    <Grid item xs={12}>
                        <p>Insert Vin Here</p>
                    </Grid>
                </Grid>

                <Grid container >

                    <Grid item xs={12}>
                        <input
                        value={this.state.Vin}
                        onChange={this.handleInputChange}
                         />
                    </Grid>

                </Grid>

                <Grid Container >

                    <Grid item xs={12}>
                        <Button onClick={
                            function vinLook() {
                                // console.log(this)
                                axios.get(`https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVinValuesExtended/${this.state.Vin}?format=json`)
                                    .then(function dueStateChange(value) {
                                        // console.log(this)
                                        // console.log(value)
                                        this.setState({
                                            make: value.data.Results[0].Make,
                                            trans: value.data.Results[0].TransmissionStyle,
                                            type: value.data.Results[0].NCSABodyType,
                                            model: value.data.Results[0].Model,
                                            year: value.data.Results[0].ModelYear,
                                            loaded: true


                                        })
                                    axios.get(`http://localhost:3001/api/vehicleInfo?make=Mazda&model=Mazda5&year=2013/${this.state.Vin}?format=json`)

                                    }.bind(this))

                            }.bind(this)

                          
                        } variant='contained' color='primary'>search</Button>

                    </Grid>

                </Grid>

                <div id="content" border="20">
                        {this.state.loaded && 
                    <Grid Container spacing={3}>
                        <Grid style={{color: "white"}} border="1" item xs={4}>
                            <h1>Make</h1>
                            <p>{this.state.make}</p>
                        </Grid>

                        <Grid style={{color: "white"}} border="1" item xs={4}>
                            <h1>Model</h1>
                            <p>{this.state.model}</p>
                        </Grid>

                        <Grid style={{color: "white"}} item xs={2}>
                            <h1>Year</h1>
                            <p>{this.state.year}</p>

                        </Grid>

                        <Grid style={{color: "white"}} item xs={2}>
                            <h1>Type</h1>
                            <p>{this.state.type}</p>
                        </Grid>
                        <Grid  style={{color: "white"}} item xs={2}>
                            <h1>Transmission</h1>
                            <p>{this.state.trans||'Not Available'}</p>

                        </Grid>

                    </Grid>
    }

                </div>



            </Container>
        )
    }
}


export default OtherHome;
