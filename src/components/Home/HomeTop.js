import React from 'react';
import SectionTitle from '../SectionTitle';
import HomeBigButton from './HomeBigButton'

export default () =>
    <div className='homeTop'>
        <div className='homeTop-heroBanner'></div>
        <div className='homeTop-items'>
            <SectionTitle>Zacznij pomagać! Oddaj niechciane rzeczy w zaufane ręce</SectionTitle>
            <HomeBigButton>ODDAJ RZECZY</HomeBigButton>
            <HomeBigButton>ZORGANIZUJ ZBIÓRKĘ</HomeBigButton>
        </div>
    </div>