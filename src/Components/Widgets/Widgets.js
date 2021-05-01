import React from 'react';
import './Widgets.css';
import InfoIcon from '@material-ui/icons/Info';
import  FiberManualRecordIcon  from '@material-ui/icons/FiberManualRecord';

function Widgets() {

    const newsArticle = ( heading, subtitle ) => (
                <div className="widgets__article">
                        <div className="widgets__articleLeft">
                            <FiberManualRecordIcon />
                        </div>
                        <div className="widgets__articleRight">
                            <h4>{heading}</h4>
                            <p>{subtitle}</p>
                        </div>
                </div>
    )

    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>LinkedIn news</h2>
                <InfoIcon />
            </div>
            {newsArticle("Arjun","TOP NEWS --> All the beshtt!!..")}
            {newsArticle("Karthik","TOP NEWS --> I shouldn't have told him to be full positive...")}
            {newsArticle("Manoj","TOP NEWS --> Sticker Manja!!!..")}
            {newsArticle("Sukesh","TOP NEWS --> All in good times!!..")}  
            {newsArticle("Vyshak","TOP NEWS --> I see, dedication, commitment & precaution...")}
            </div>
    )
}

export default Widgets
