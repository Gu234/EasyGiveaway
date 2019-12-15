import React from 'react';
import organisations from '../../data/organizations';

JSON.parse(organisations)

export default props => {
    const fundation = JSON.parse(organisations).organisations[props.activeView].fundations[props.index + props.activePage * 3];
    return <div className='fundation'>
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
}