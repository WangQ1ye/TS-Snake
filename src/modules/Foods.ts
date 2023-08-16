// 定义食物的类
class Food{
    //定义一个属性表示食物对应的元素
    element: HTMLElement;
    constructor(){
        //获取页面food元素，并赋值给element
        this.element = document.getElementById('food')!;//！表示不为空
    }
    //定义食物x轴坐标
    get X(){
        return this.element.offsetLeft
    }
    //Y轴坐标
    get Y(){
        return this.element.offsetTop
    }

    //修改食物位置
    change(){
        //生成随机位置 范围0~290
        //蛇移动一次就是一格，一格就是10 食物坐标必须整十
        let top= Math.round( Math.random()*29 ) *10
        let left= Math.round( Math.random()*29 ) *10
        this.element.style.left= left +'px'
        this.element.style.top= top +'px'
    }
}
// const food = new Food()
// console.log(food.X, food.Y);
// food.change()
// console.log(food.X, food.Y);

export default Food