import { Carousel } from "antd";
import cleanRoom1 from '../assets/clean-room-carousel/clean-room1.jpg';
import cleanRoom2 from '../assets/clean-room-carousel/clean-room2.png';
import cleanRoom3 from '../assets/clean-room-carousel/clean-room3.png';
import cleanRoom4 from '../assets/clean-room-carousel/clean-room4.jpg';
import cleanRoom5 from '../assets/clean-room-carousel/clean-room5.png';
import cleanRoom6 from '../assets/clean-room-carousel/clean-room6.png';
import cleanRoom7 from '../assets/clean-room-carousel/clean-room7.png';

export default function cleanRoom() {
    const imgStyle = {
        maxHeight: "280px",
        margin: "auto",
        marginBottom: "30px",
    };

    return (
        <Carousel style={{marginBottom: "50px"}} effect="auto" autoplay="true">
            <div>
                <img style={imgStyle} src={cleanRoom1} alt="عکس اول" />
            </div>
            <div>
                <img style={imgStyle} src={cleanRoom2} alt="عکس دوم"/>
            </div>
            <div>
                <img style={imgStyle} src={cleanRoom3} alt="عکس سوم"/>
            </div>
            <div>
                <img style={imgStyle} src={cleanRoom4} alt="عکس چهارم"/>
            </div>
            <div>
                <img style={imgStyle} src={cleanRoom5} alt="عکس پنجم"/>
            </div>
            <div>
                <img style={imgStyle} src={cleanRoom6} alt="عکس ششم"/>
            </div>
            <div>
                <img style={imgStyle} src={cleanRoom7} alt="عکس هفتم"/>
            </div>
        </Carousel>
    )
}