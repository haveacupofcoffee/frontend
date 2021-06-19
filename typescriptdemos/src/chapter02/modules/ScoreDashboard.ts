class ScoreDashboard {

    private score = 0;
    private _level = 1;
    private maxLevel: number;
    private scoresPerLevel: number;

    private scoreElement : HTMLElement;
    private levelElement : HTMLElement;

    constructor(maxLevel : number = 10, scorePerLevel : number = 10) {
        this.maxLevel = maxLevel;
        this.scoresPerLevel = scorePerLevel;
        this.scoreElement = document.getElementById("score")!;
        this.levelElement = document.getElementById("level")!;
    }

    get level() : number{
        return this._level;
    }


    addScore() : void {
        this.scoreElement.innerHTML = ++this.score + "" ;
        if(this.score % this.scoresPerLevel === 0) this.addLevel();
    }

    addLevel() : void {
        if(this._level < this.maxLevel) {
            this.levelElement.innerHTML = ++this._level + "";
        }
    }


}
export default ScoreDashboard;

