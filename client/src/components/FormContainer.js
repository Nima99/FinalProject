import React from 'react';
import ModelForm from './ModelForm';
import VinForm from './VinForm';

class FormContainer extends React.Component{
    render(){
        return(
            <div>
                <ModelForm/>
                <VinForm/>
                <button/>
            </div>
        )
    }

}

export default FormContainer;