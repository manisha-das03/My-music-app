import React from 'react';

const Detail = ({album, artists, name}) => {

    return (
        <div className="offset-md-2 col-sm-3" >
            <div className="row col-sm-12 px-6">
                <img 
                    src={album.images[0].url}
                    alt={name}>                    
                </img>
            </div>
            <div className="row col-sm-12 px-5">
                <label htmlFor={name} className="form-label col-sm-12">
                    {name}
                </label>
            </div>
           
            <div className="row col-sm-12 px-5">
                <label htmlFor={artists[0].name} className="form-label col-sm-12">
                    {artists[0].name}
                </label>
            </div>
        </div>
    );
}

export default Detail;