import React from 'react';
import json from '../../data/organizations';



export default props => {
    const fundation = json.organizations[props.activeView].foundations[props.index];
    return (
        <div className='fundation'>
            <div className='fundation-nfo'>
                <div className='fundation-nfo-name'>
                    {fundation.name}

                </div>
                <div className='fundation-nfo-mission'>
                    {fundation.mission}
                </div>
            </div>
            <div className='fundation-things'>
                {fundation.things}
            </div>
        </div>
    )
}