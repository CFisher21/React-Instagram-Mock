import ProfilePhoto from './Profile/ProfilePic.jpg'
import BeachSunset from './Profile/Beachsunset.jpg'
import Birds from './Profile/Birds.jpg'
import Blue from './Profile/Blue.jpg'
import Boat from './Profile/Boat.jpg'
import Crossing from './Profile/Crossing.jpg'
import Mountian from './Profile/Mountian.jpg'
import Stars from './Profile/Stars.jpg'
import Sunset from './Profile/sunset.jpg'
import Thinking from './Profile/Thinking.jpg'
import Trees from './Profile/Trees.jpg'




function Profile() {
    return(
        <div className='profile-container'>
        <img src={ProfilePhoto} className="profileImg" alt=''></img>
        <div className='info'>
        <h1 className='profileUsername'>Justanotheruser</h1>
        <p className='followers'>Followers 12</p>
        <p className='following'>Following 15</p>
        <p className='profileName'>Justin T.</p>
        <p className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed libero varius, pharetra lacus ac, aliquam sem. Ut pulvinar urna ex, rhoncus sodales ligula fermentum sed. Sed congue sit amet libero ut euismod. Sed vel porttitor augue. Praesent iaculis ex vel leo bibendum tempus. Proin nunc nibh, bibendum nec lacinia.</p>
        </div>
        <div className='photoBox'>
            <img src={BeachSunset} className="gallery" alt=''></img>
            <img src={Birds} className="gallery" alt=''></img>
            <img src={Blue} className="gallery" alt=''></img>
            <img src={Boat} className="gallery" alt=''></img>
            <img src={Crossing} className="gallery" alt=''></img>
            <img src={Mountian} className="gallery" alt=''></img>
            <img src={Stars} className="gallery" alt=''></img>
            <img src={Sunset} className="gallery" alt=''></img>
            <img src={Thinking}className="gallery" alt=''></img>
            <img src={Trees}className="gallery" alt=''></img>
            
        </div>
        </div>
        
        
    )
}

export default Profile