import React from 'react';
import './style.css'
import './main.css'
import logo from '../../image/Golden_Crown_Minimalist_Logo-removebg-preview.png'
import fb from '../../image/facebook.png'
import ig from '../../image/instagram.png'
import yb from '../../image/youtube.png'
import tw from '../../image/twitter.png'
import em from '../../image/gmail.png'
import tk from '../../image/tiktok.png'

const Index = () => {
    return (
        <div className='container-footer'>
            <br/>
            <div className='div-center'>
                <img src={logo}/>
            </div>
            <div className='div-center'>
                <h2 className='cold'>CONNECT WITH US</h2>
            </div>
            <div className='div-center'>
                <img src={fb} className='logo-small'/>
                <img src={ig} className='logo-small'/>
                <img src={tk} className='logo-small'/>
                <img src={em} className='logo-small'/>
                <img src={tw} className='logo-small'/>
                <img src={yb} className='logo-small'/>
            </div>

            <div className='div-center'>
                <h2 className='cold'>CERTIFIED BY</h2>
            </div>
            <div className='div-center'>
                <ul className='flex w-100 div-contack'>
                    <li className='li-span'>Why Choose Us</li>
                    <li className='li-span'>About us</li>
                    <li className='li-span'>Contact-us</li>
                    <li className='li-span'>Responisble Gaming</li>
                    <li className='li-span'>Terms & Condition</li>
                    <li className='li-span'>About Author</li>
                    <li className='li-span'>FAQ</li>
                    <li className='li-span'>Privacy Policy</li>
                </ul>
            </div>

            <div className='div-contack'>
                <h2 className='cold'>© Copyright 2024 UFAROYAL168. All Right Reserved.</h2>
            </div>
            <br/>
        </div>
    );
}

export default Index;
