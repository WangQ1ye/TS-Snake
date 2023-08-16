class Snake{
    //蛇的容器
    element:HTMLElement
    //蛇头元素
    head: HTMLElement;
    // 蛇身体 包括蛇头
    bodies: HTMLCollection;  //数组内 Element 类型转换成 HTMLElement
    constructor(){
        this.element=document.getElementById('snake')!
        this.head=document.querySelector('#snake>div') as HTMLElement;
        this.bodies=this.element.getElementsByTagName('div');
    }
    //获取蛇头X坐标
    get X(){
        return this.head.offsetLeft
    }
    //获取蛇头Y坐标
    get Y(){
        return this.head.offsetTop
    }
    //设置蛇坐标
    set X(value:number){
        if(this.X===value) return;

        if(value < 0 ||value > 290 ){
            throw new Error('设撞墙了')
        }

        // 修改x 是在修改左右移动，修改左移动时，不能向右掉头
        if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft===value){
            if(value>this.X){
                //如果value大于旧值X，说明蛇在向右走，此时发生掉头，应该继续让蛇往左走
                value=this.X-10
            }else{
                //如果value小于旧值X，说明蛇在向左走，此时发生掉头，应该继续让蛇右走
                value=this.X+10
            }
        }
        this.moveBody()
        this.head.style.left = value +'px' 
        this.checkHeadBody()
    }
    set Y(value:number){
        if(this.Y===value) return;
        if(value < 0 || value > 290 ){
            throw new Error('蛇撞墙了')
        }
         // 修改Y 是在修改上下移动，修改上移动时，不能向下掉头
         if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop===value){
            if(value>this.Y){
                //如果value大于旧值Y，说明蛇在向下走，此时发生掉头，应该继续让蛇往上走
                value=this.Y-10
            }else{
                //如果value小于旧值X，说明蛇在向上走，此时发生掉头，应该继续让蛇下走
                value=this.Y+10
            }
        }
        this.moveBody()
        this.head.style.top = value +'px'
        this.checkHeadBody()
    }

    //蛇增加身体
    addBody(){
        this.element.insertAdjacentHTML("beforeend",'<div></div>')
    }

    //蛇身体移动的方法
    moveBody(){
        for(let i=this.bodies.length - 1; i > 0; i--){
            let X=(this.bodies[i-1] as HTMLElement).offsetLeft;
            let Y=(this.bodies[i-1] as HTMLElement).offsetTop;
           ( this.bodies[i] as HTMLElement).style.left = X + 'px';
           ( this.bodies[i] as HTMLElement).style.top = Y+'px'
        }
    }

    //检查撞到自己
    checkHeadBody(){
        //获取所有的身体，检查其是否和蛇头坐标发生重叠
        for(let i=1; i<this.bodies.length; i++){
            let bd=this.bodies[i] as HTMLElement
            if(this.X===bd.offsetLeft && this.Y===bd.offsetTop){
                //蛇头撞到身体
                throw new Error('撞到自己了！')
            }
        }
    }

}
export default Snake;