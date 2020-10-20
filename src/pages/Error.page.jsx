import React from 'react';
import MainVisual from '../components/layout/MainVisual/MainVisual';

const ErrorPage = () => {
    return ( 
        <MainVisual
            title="404"
            info="Page Not Found"
            path="/"
            buttonName="Return home"
        />
     );
}
 
export default ErrorPage;