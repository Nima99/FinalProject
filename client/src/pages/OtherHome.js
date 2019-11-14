import React from 'react'
import VinForm from '../components/VinForm'


class OtherHome extends React.Component {
    render(){
        return (
            <div>
                <VinForm/>
                <div className="results">
        
                    <div className="car">
                        <div className="col1">
                            *****
                            <img src="https://www.dodge.com/content/dam/fca-brands/na/dodge/en_us/2019/challenger/gallery/exterior/2019-challenger-gallery-srt-hellcat-red-eye-1.jpg.image.1440.jpg"/>
                        </div>
                        <div className="col2">
                            <h2>HP</h2>
                            
                            <div>300</div>
                        </div>
                    </div>
                </div>


            </div>
        )
    }
}

export default OtherHome;