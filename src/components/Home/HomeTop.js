import React from 'react';
import SectionTitle from '../SectionTitle';
import HomeBigButton from './HomeBigButton'

export default () =>
    <>
        <div className='homeTop'>
            <div className='homeTop-heroBanner'></div>
            <div className='homeTop-items'>
                <SectionTitle>Zacznij pomagać!<br />Oddaj niechciane rzeczy w zaufane ręce</SectionTitle>

                <div className='homeTop-buttons'>
                    <HomeBigButton>ODDAJ<br />RZECZY</HomeBigButton>
                    <HomeBigButton>ZORGANIZUJ<br />ZBIÓRKĘ</HomeBigButton>
                </div>
            </div>
        </div>
    </>