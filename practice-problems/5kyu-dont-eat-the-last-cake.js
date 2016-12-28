// Don't Eat the Last Cake
class Player {

    firstmove(cakes) {
        switch(cakes) {
            case 1: return false;
            case 2: return false;
            case 3: return true;
            case 4: return true;
            case 5: return true;
            case 6: return false;
            case 7: return true;
            case 8: return true;
            case 10: return false;
            default: return true;
        }
    }

    move(cakes, last) {
        switch (cakes) {
            case 1: return this.createMove(1, 2, last);
            case 2: return this.createMove(1, 2, last);
            case 3: return this.createMove(2, 1, last);
            case 4: return this.createMove(2, 3, last);
            case 5: return this.createMove(3, 1, last); // 2, 2
            case 6: return this.createMove(1, 2, last); // 1, 1, 1, 1, 1, 1, 1
            case 7: return this.createMove(1, 3, last); // 2, 2, 2, 2, 2, 2, 2
            case 8: return this.createMove(3, 1, last);
            case 9: return this.createMove(3, 1, last); //
            case 10: return this.createMove(2, 3, last); // 1, 2, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 1, 1, 2

            case 13: return this.createMove(3, 1, last);
            case 14: return this.createMove(2, 3, last);
            case 15: return this.createMove(1, 3, last);
            default: return this.createMove(1, 2, last);
        }
    }

    createMove(firstChoice, secondChoice, last) {
        return last !== firstChoice ? firstChoice : secondChoice;
    }
}
