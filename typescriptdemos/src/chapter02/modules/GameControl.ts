import Snake from "./Snake";
import Food from "./Food";
import ScoreDashboard from "./ScoreDashboard";

class GameControl {

    private snake: Snake;
    private food: Food;
    private scoreDashboard: ScoreDashboard;


    //private direction = "";

    private isLive = true;
    private timeInterval = 300;
    private reduceTime = 30;
    private pressedKey = "";

    private allowedKeySets = {
        "UP": new Set().add("ArrowUp").add("Up"),
        "DOWN": new Set().add("ArrowDown").add("Down"),
        "LEFT": new Set().add("ArrowLeft").add("Left"),
        "RIGHT": new Set().add("ArrowRight").add("Right")
    }


    constructor() {
        this.snake = new Snake();
        this.food = new Food();
        this.scoreDashboard = new ScoreDashboard();

        this.init();
    }

    init(): void {
        document.addEventListener("keydown", this.keydownHandler.bind(this));
        this.run();
    }

    /**
     * Chrome Edge: ArrowUp ArrowDown, ArrowLeft, ArrowRight
     * IE: Up, Down, Left, Right
     * @param event
     */
    private keydownHandler(event: KeyboardEvent): void {
        this.pressedKey = event.key;
    }

    private run(): void {
        let X = this.snake.X;
        let Y = this.snake.Y;

        if(this.isChangingDirection() || "" === this.snake.direction) {
            this.snake.direction = this.pressedKey;
        }

        switch (this.snake.direction) {
            case "ArrowUp":
            case "Up":
                Y -= 10;
                break;
            case "ArrowDown":
            case "Down":
                Y += 10;
                break;
            case "ArrowLeft":
            case "Left":
                X -= 10;
                break;
            case "ArrowRight":
            case "Right":
                X += 10;
                break;
        }

        this.checkEat(X, Y);

        try {
            this.snake.X = X;
            this.snake.Y = Y;
        } catch (e) {
            alert(e.message + " Game Over!");
            this.isLive = false;
        }


        this.isLive && setTimeout(this.run.bind(this), this.timeInterval - (this.scoreDashboard.level - 1) * this.reduceTime);
    }

    private checkEat(X: number, Y: number) {

        if (X === this.food.X && Y === this.food.Y) {
            //change the position of the food
            this.food.change();

            //add score
            this.scoreDashboard.addScore();

            //add a part to the snake
            this.snake.addBody();

        }

    }

    private isChangingDirection(): boolean {
        let currDirection = this.snake.direction;
        return (this.allowedKeySets.UP.has(currDirection) || this.allowedKeySets.DOWN.has(currDirection))
            && (this.allowedKeySets.LEFT.has(this.pressedKey) || this.allowedKeySets.RIGHT.has(this.pressedKey)) ||
            ((this.allowedKeySets.LEFT.has(currDirection) || this.allowedKeySets.RIGHT.has(currDirection)) &&
                (this.allowedKeySets.UP.has(this.pressedKey) || this.allowedKeySets.DOWN.has(this.pressedKey)))
    }
}


export default GameControl;