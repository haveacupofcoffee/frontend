class Snake {

    //Snake container
    private snake : HTMLElement;
    //Snake head
    private head : HTMLElement;
    //Snake body, includes head
    private bodies: HTMLCollection;

    //Snake movement previous direction
    private _direction = "";
    //private _direction = "";

    constructor() {
        this.snake = document.getElementById("snake")!;
        this.head = document.querySelector("#snake>div")!;
        this.bodies = this.snake.getElementsByTagName("div");
    }

    get X() : number {
        return this.head.offsetLeft;
    }

    get Y() : number{
        return this.head.offsetTop;
    }

    set X(value : number) {
        if(this.X === value) return;
        this.hasHitTheWall(value);
        this.head.style.left = value + "px";
        this.moveBody();
    }

    set Y(value : number ) {
        if(this.Y === value) return;
        this.hasHitTheWall(value);
        this.head.style.top = value + "px";
        this.moveBody();
    }

/*    get preDirection() : string {
        return this._preDirection;
    }*/

    get direction():string {
        return this._direction;
    }

    set direction(value : string) {
        this._direction = value;
    }

    addBody() {
        this.snake.insertAdjacentHTML("beforeend", "<div></div>");

    }

    private moveBody() {
        for(let i = this.bodies.length - 1; i > 0; i--) {
            let previousBodyElement = (this.bodies[i-1]) as HTMLElement;
            let preX = previousBodyElement.offsetLeft;
            let preY = previousBodyElement.offsetTop;

            let currBodyElement = this.bodies[i] as HTMLElement;
            currBodyElement.style.left = preX + "px";
            currBodyElement.style.top = preY + "px";

        }
    }

    private hasHitTheWall(value : number) : void {
        if(value < 0 || value > 290) {
            throw new Error("Hit the wall!!");
        }
    }

}

export default Snake;