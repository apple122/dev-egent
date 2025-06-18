import React, { useState } from 'react';
import './Style.css'
import './media.css'

import logo from '../../image/Golden_Crown_Minimalist_Logo-removebg-preview.png'
import menu from '../../image/dropdown-bar.png'

const Header = () => {

    const [MenuState, setMenu] = useState(0)
    function OverMenu() {
        switch (MenuState) {
            case 0: setMenu(1)
                break;
            case 1: setMenu(0)
                break;

        }
    }

    console.log(MenuState)

    return (
        <div>
            <header class="container">
                <div class="layout-header">
                    <nav class="nav-image-header">
                        <a href="#" title="" class="flex">
                            <img class="image-cuttom" src={logo} alt="" />
                        </a>
                    </nav>
                   
                    <nav class='container-navbar display-none'>
                        <div className='w-100'>
                            <div class="title-aline">
                                <a href='#' title='' class='padding-left title-tack'>FAQ</a>
                                <a href='#' title='' class='padding-left title-tack'>Author</a>
                                <a href='#' title='' class='padding-left title-tack'>Term & Condition</a>
                                <a href='#' title='' class='padding-left title-tack'>Privacy Policy</a>
                            </div>

                            <div class="title-aline">
                                <a href='#' title='' class='padding-left title-tack-block'>บล็อค</a>
                                <a href='#' title='' class='padding-left title-tack-block'>เกี่ยวกับเรา</a>
                                <a href='#' title='' class='padding-left title-tack-block'>ติดต่อ</a>
                                <div className='btn-login flex padding-left'>
                                    <button class='btn-cottom'>เข้าสู่ระบบ</button>
                                    <button class='btn-cottom'>สมัครสมาชิก</button>
                                </div>
                            </div>
                        </div>
                    </nav>
                    <br />
                </div>
            </header>
            <ul class='nav-menu container' onClick={OverMenu}>
                <li class='w-100'>
                    <a href="#menu" class='title-tack-menu'><img src={menu} class='icon ' /> AP Royal280 คือเว็บไชต์พนันออนไลน์ที่ดีที่สุด</a>
                </li>
            </ul>
            <ul class={`ul-bar container-list ${MenuState == 0 ? 'menu-hidden' : ''}`}>
                <li class='title-a-text active-ul-bar'>
                    <a href="#หน้าแรก" class='active-a'>หน้าแรก</a>
                </li>
                <li class='title-a-text'>
                    <a href="#กีฬา" class='hover-black'>กีฬา</a>
                </li>
                <li class='title-a-text'>
                    <a href="#คาสิโน" class='hover-black'>คาสิโน</a>
                </li>
                <li class='title-a-text'>
                    <a href="#สล็อต" class='hover-black'>สล็อต</a>
                </li>
                <li class='title-a-text'>
                    <a href="#แทงบอล" class='hover-black'>แทงบอล</a>
                </li>
            </ul>
        </div>
    );
}

export default Header;
