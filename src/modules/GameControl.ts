import Snake from "./Snake"
import Food from "./Foods"
import ScorePanel from "./ScorePanel"
class GameControl{

        snake:Snake

        food:Food

        scorePanel:ScorePanel

        //存储蛇的移动方向
        direction:string='ArrowRight'

        //游戏是否结束
        isLive=true

        constructor(){
            this.snake=new Snake()
            this.food=new Food()
            this.scorePanel=new ScorePanel(10,5)
            this.init()
        }
        //游戏初始化方法，调用后游戏开始
        init(){
            //绑定键盘按下事件
            document.addEventListener('keydown',this.keyDownHandler.bind(this))
            //调用run方法
            this.run()
       
        }

        //创建一个键盘按下响应函数
        keyDownHandler(event: KeyboardEvent){
            // console.log(event.key);


            //检查event.key值是否合法



            //修改direction值
            this.direction=event.key
        }

        //创建蛇移动的方法
        run(){
            /**
             * 根据方向（direction）来使蛇位置改变
             * 向上 top 减少
             * 向下 top 增加
             * 向左 left 减少
             * 向右 left 增加
             */
            let X=this.snake.X
            let Y=this.snake.Y

         
            //根据按键修改XY值
            switch(this.direction){
                case "ArrowUp":
                case "Up":
                    Y -=10
                    break;
                case "ArrowDown":
                case "Down":
                    Y +=10;
                    break;
                case "ArrowRight":
                case "Right":
                        X +=10;
                        break;
                case "ArrowLeft":
                case "Left":
                        X -=10
                        break
            }
         this.checkEat(X,Y)
            try{
                this.snake.X=X
                this.snake.Y=Y
            }catch(e:any){
                alert(e.message+' 游戏结束！')
                this.isLive=false
            }
          

          this.isLive && setTimeout(this.run.bind(this),300 - (this.scorePanel.level-1)*30)
        }

            //检查蛇是否吃到食物
        checkEat(X:number,Y:number){

            if( X===this.food.X && Y===this.food.Y){
                //食物位置改变
                this.food.change()
                //分数改变
                this.scorePanel.addScore()
                //蛇增加一节
                this.snake.addBody()
            }   
         }

}
export default GameControl