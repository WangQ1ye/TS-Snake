
//记分牌的类
class ScorePanel{
    score=0;
    level=1;
    scoreEle: HTMLElement;
    levelEle: HTMLElement;

    // 设置一个变量,限制等级
    maxLevel: number;
    //设置一个变量，多少分升级
    upLevel: number;
    constructor(maxLevel: number=10,upLevel: number=10){
        this.scoreEle=document.getElementById('score')!;
        this.levelEle=document.getElementById('level')!;
        this.maxLevel=maxLevel,
        this.upLevel=upLevel
    }

    //加分方法
    addScore(){
        this.score++
        this.scoreEle.innerHTML=this.score+''
        // 判断分数多少
        if(this.score % this.upLevel===0){
            this.levelUp()
        }
    }

    //提升等级
    levelUp(){
        if(this.level < this.maxLevel){
            this.level++
            this.levelEle.innerHTML=this.level+''
        }
    }
}
// const scorePanel=new ScorePanel(100,2)
// for(let i=0;i<200;i++){
// scorePanel.addScore()
// }
export default ScorePanel