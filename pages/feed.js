import man1 from './Friends/man1.jpg'
import man2 from './Friends/man2.jpg'
import man3 from './Friends/man3.jpg'
import man4 from './Friends/man4.jpg'
import man5 from './Friends/man5.jpg'
import man6 from './Friends/man6.jpg'
import woman1 from './Friends/woman1.jpg'
import woman2 from './Friends/woman2.jpg'
import woman3 from './Friends/woman3.jpg'
import woman4 from './Friends/woman4.jpg'
import woman5 from './Friends/woman5.jpg'
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



function Feed(props) {
    return (
      
<div className="feed-magrin">
 <div className='feed-container'>
        <div className='storyTogether'>
        <img src={man1} className='storyProfilepic' alt=''></img>
        <p className='storyName'>ScottyLive</p>
        </div>
        <div className='storyTogether'>
        <img src={man2} className='storyProfilepic' alt=''></img>
        <p className='storyName'>Usernamed</p>
        </div>
        <div className='storyTogether'>
        <img src={woman1} className='storyProfilepic' alt=''></img>
        <p className='storyName'>JanesWay</p>
        </div>
        <div className='storyTogether'>
        <img src={man4} className='storyProfilepic' alt=''></img>
        <p className='storyName'>f3ea</p>
        </div>
        <div className='storyTogether'>
        <img src={woman2} className='storyProfilepic' alt=''></img>
        <p className='storyName'>SarahConnor</p>
        </div>
        <div className='storyTogether'>
        <img src={man6} className='storyProfilepic' alt=''></img>
        <p className='storyName'>Short</p>
        </div>
        <div className='storyTogether'>
        <img src={man3} className='storyProfilepic' alt=''></img>
        <p className='storyName'>AlwaysOnTime</p>
        </div>
        <div className='storyTogether'>
        <img src={man5} className='storyProfilepic' alt=''></img>
        <p className='storyName'>TacoTime</p>
        </div>
        <div className='storyTogether'>
        <img src={woman4} className='storyProfilepic' alt=''></img>
        <p className='storyName'>Short</p>
        </div>
        <div className='storyTogether'>
        <img src={woman3} className='storyProfilepic' alt=''></img>
        <p className='storyName'>AlwaysOnTime</p>
        </div>
        <div className='storyTogether'>
        <img src={woman5} className='storyProfilepic' alt=''></img>
        <p className='storyName'>TacoTime</p>
        </div>
        </div>
        <div className='feed'>
            <div className='userTogether'>

                <div className='photoHeader'>
                    <img src={man1} className='photoUserphoto' alt=""></img>
                  {props.username ? <p className='photoUsername'>{props.username}</p> : null}
                </div>
                    <img src={BeachSunset} className='userPhoto' alt=""></img>

                <div className='photoHeader'>
                    <img src={man2} className='photoUserphoto' alt=""></img>
                    <p className='photoUsername'>AccountName</p>
                </div>
                    <img src={Birds} className='userPhoto' alt=""></img>

                <div className='photoHeader'>
                    <img src={man3} className='photoUserphoto' alt=""></img>
                    <p className='photoUsername'>AccountName</p>
                </div>
                    <img src={Blue} className='userPhoto' alt=""></img>

                <div className='photoHeader'>
                    <img src={man4} className='photoUserphoto' alt=""></img>
                    <p className='photoUsername'>AccountName</p>
                </div>
                    <img src={Boat} className='userPhoto' alt=""></img>

                <div className='photoHeader'>
                    <img src={man5} className='photoUserphoto' alt=""></img>
                    <p className='photoUsername'>AccountName</p>
                </div>
                    <img src={Crossing} className='userPhoto' alt=""></img>

                <div className='photoHeader'>
                    <img src={man6} className='photoUserphoto' alt=""></img>
                    <p className='photoUsername'>AccountName</p>
                </div>
                    <img src={Mountian} className='userPhoto' alt=""></img>

                <div className='photoHeader'>
                    <img src={woman1} className='photoUserphoto' alt=""></img>
                    <p className='photoUsername'>AccountName</p>
                </div>
                    <img src={Stars} className='userPhoto' alt=""></img>

                <div className='photoHeader'>
                    <img src={woman2} className='photoUserphoto' alt=""></img>
                    <p className='photoUsername'>AccountName</p>
                </div>
                    <img src={Sunset} className='userPhoto' alt=""></img>
                <div className='photoHeader'>
                    <img src={woman3} className='photoUserphoto' alt=""></img>
                    <p className='photoUsername'>AccountName1</p>
                </div>
                <img src={Thinking} className='userPhoto' alt=""></img> 
                <div className='photoHeader'>
                    <img src={woman4} className='photoUserphoto' alt=""></img>
                    <p className='photoUsername'>AccountName</p>
                </div>
                    <img src={Trees} className='userPhoto' alt=""></img>     
            </div>
        </div>
    </div>
    )
}

export default Feed