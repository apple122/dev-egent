import React, { useEffect, useState } from 'react';
import './style.css'
import page1 from '../../image/page-1.jpg'
import page2 from '../../image/page-2.jpg'

const Index = () => {

    const [img, setimg] = useState(page1)
    const [over, setover] = useState(1)

    setTimeout(() => {
            // setover(0)
            if (img == page1) {
                setimg(page2)
            } else {
                setimg(page1)
            }
        }, 15000);

    // useEffect(() => {
    //     setTimeout(() => {
    //         setover(0)
    //         if (img == page1) {
    //             setimg(page2)
    //         } else {
    //             setimg(page1)
    //         }
    //     }, 2000);
    // }, [over]);
    

    // switch (over) {
    //     case 0:
    //         OverClick()
    //         break;
    
    //     default:
    //         break;
    // }

    // function OverClick() {
    //     setover(1)
    // }

    // over.then((res) => {
    //     res == 0 ? setover(1) : setover(0)
    // })

    console.log(over)

    // if (over == 0) {
    //     setTimeout(() => {
    //         setover(1)
    //     }, 500)
    // }

    return (
        <div>
            <img src={img} class={`w-100 ${over == 1 ? 'image-over-1' : 'image-over-0'}`} />
        </div>
    );
}

export default Index;
