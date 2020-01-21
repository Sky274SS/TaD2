import React from 'react';
import s from './Launch.module.css';
import UpPanel from '../../images/UpPanel.png';
import SignalPanel from '../../images/SignalPanel.png';
import CenterPanel from '../../images/CenterPanel.png';
import SwitchOn from '../../images/SwitchOn.png';
import SwitchOff from '../../images/SwitchOff.png';
const Launch = (props) => {

    let i=0;
    let ChangeImg =()=>{
      if(i==1)
      {
          document.img.src=SwitchOff;
          i=0;
          alert('АЗС ВЫКЛ');
      }
      else
      {
          document.img.src=SwitchOn;
          i=1;
          alert('АЗС ВКЛ');
      }

    }

    return (

        <div className={s.item}>
            <div className={s.UpPanel}>
          <img src={UpPanel} alt="logo"/>
            </div>
            <div className={s.Switch} >
                <img name='img' src={SwitchOff} alt={"logo"} onClick={ChangeImg}/>
            </div>
          <div className={s.SignalPanel}>
              <img src={SignalPanel} alt="logo"/>
          </div>
            <div className={s.CenterPanel}>
                <img src={CenterPanel} alt="logo"/>
            </div>
        </div>

    );
}

export default Launch