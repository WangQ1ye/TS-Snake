import './style/index.less';

import GameControl from './modules/GameControl';
const gaControl=new GameControl()
setInterval(()=>{
    console.log(gaControl.direction);
},1000)