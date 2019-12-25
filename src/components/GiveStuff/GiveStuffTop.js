import React from 'react';
import SectionTitle from '../SectionTitle'

export default () =>
    <>
        <div className='giveStuffTop'>
            <div className='giveStuffTop-heroBanner'></div>
            <div className='giveStuffTop-items'>
                <SectionTitle>Oddaj rzeczy, których już nie chcesz<br/> POTRZEBUJĄCYM</SectionTitle>
                <div className='giveStuffTop-items-steps'>Wystarczą 4 proste kroki:</div>
                <div className='columns'>
                    <div className="col">
                        <div>1</div>
                        <div>Wybierz<br/>rzeczy</div>
                    </div>
                    <div className="col">
                        <div>2</div>
                        <div>Spakuj je<br/>w worki</div>
                    </div>
                    <div className="col">
                        <div>3</div>
                        <div>Wybierz<br/>fundację</div>
                    </div>
                    <div className="col">
                        <div>4</div>
                        <div>Zamów<br/>kuriera</div>
                    </div>
                </div>
            </div>
        </div>
    </>