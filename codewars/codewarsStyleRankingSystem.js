class User {
    constructor() {
        this.rank = -8;
        this.progress = 0;
    }

    incProgress(activityRank){
        //** Error handle if activityRank is out of range */
        if(activityRank > 8 || activityRank < -8 || activityRank === 0){
            throw new Error;
        };
        /** Make up for 0 not being available in the ranking range */
        if (activityRank > 0 && this.rank < 0){
            activityRank -= 1;
        };
        /** Make up for 0 not being available in the ranking range */
        if (activityRank < 0 && this.rank > 0){
            activityRank += 1;
        }

        /** Calculate rank and progress */
        let d = activityRank - this.rank;
        if (this.rank === activityRank ){ 
            this.progress += 3;
        } else if (this.rank > activityRank && this.rank - activityRank === 1){
             this.progress += 1;
        } else if (this.rank > activityRank && this.rank - activityRank >= 2){
            this.rank;
            this.progress;
         } else { 
            this.progress += 10 * d * d;
        }

        /** If progress is > 100 call calcProgress */
        if (this.progress > 100) {
            this.calcProgress(this.progress);
        }
        /** If progress === 100 rank up and set progress to 0 */
        if (this.progress === 100){
            this.rank++;
            this.progress = 0;
        }
        /** If rank hits 8 keep rank @ 8 and set progress to 0 */
        if (this.rank >= 8){
            this.rank = 8;
            this.progress = 0;
        }
    }

    /** If rank is above 100 calc to rank up and carry over leftover progress */
    calcProgress(){
        this.rank++;
        this.progress -= 100;
        /** If rank hits 0 set it to 1 */
        if (this.rank === 0) {
            this.rank = 1;
        }
        /** If after above calc progress is still above 100, call func again */
        if (this.progress > 100){
            this.calcProgress(this.progress);
        }
    }
}

const nate = new User;


console.log(nate.incProgress(1));
console.log(nate.incProgress(2));
console.log(nate.incProgress(1));
console.log(nate.incProgress(2));
console.log(nate.incProgress(2));
console.log(nate.incProgress(-1));
console.log(nate.incProgress(3));
console.log(nate.incProgress(8));
console.log(nate.incProgress(8));
console.log(nate.incProgress(8));
console.log(nate.incProgress(8));
console.log(nate.incProgress(8));
console.log(nate.incProgress(8));
console.log(nate.incProgress(8));
console.log(nate.incProgress(8));
console.log(nate.incProgress(8));
console.log(nate.incProgress(8));
console.log(nate.incProgress(8));
console.log(nate.incProgress(8));