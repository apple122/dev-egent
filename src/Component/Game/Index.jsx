import React, { useState } from 'react';
import './style.css'
import img1 from '../../image/unnamed.webp'
import img2 from '../../image/unnamed (1).webp'
import page1 from '../../image/page-1.jpg'


const Index = () => {

    const [active, setacitve] = useState('CASINO')
    function ClickSate(e) {
        setacitve(e)
    }

    return (
        <div className='container-game'>
            <ul class='ul-disk-game'>
                <li class={`li-disk-game ${active == 'CASINO' ? 'active-game' : ''}`} onClick={() => ClickSate('CASINO')}><a href="#CASINO">CASINO</a></li>
                <li class={`li-disk-game ${active == 'GAME' ? 'active-game' : ''}`} onClick={() => ClickSate('GAME')}><a href="#GAME">GAME</a></li>
                <li class={`li-disk-game ${active == 'SPORT' ? 'active-game' : ''}`} onClick={() => ClickSate('SPORT')}><a href="#SPORT">SPORT</a></li>
            </ul><br />


            <div className='dav-game'>
                <div className='list-game'><img src={img1} className='image-cover' /></div>
                <div className='list-game'><img src={img2} className='image-cover' /></div>
                <div className='list-game'><img src={img1} className='image-cover' /></div>
                <div className='list-game'><img src={img2} className='image-cover' /></div>
            </div>
            <div className='dav-game'>
                <div className='list-game'><img src={img1} className='image-cover' /></div>
                <div className='list-game'><img src={img2} className='image-cover' /></div>
                <div className='list-game'><img src={img1} className='image-cover' /></div>
                <div className='list-game'><img src={img2} className='image-cover' /></div>
            </div>
            <div className='dav-game-news'>
                <label className='label-lisgame cold'>UFARoyal168 เว็บพนันออนไลน์ เว็บตรง UFABET ครบวงจร</label>
                <img src={page1} className='image-news'/>
            </div>
        </div>
    );
}

export default Index;
