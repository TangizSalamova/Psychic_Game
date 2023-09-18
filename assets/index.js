 const game = {
    wins: 0,
    losses: 0,
    guesses_left: 9,
    guessed: [],
    computer_choice: "",

    ResetShow: function () {
        document.querySelector('#win').innerHTML = this.wins;
        document.querySelector('#lost').innerHTML = this.losses;
        document.querySelector('#guesses_left').innerHTML = this.guesses_left;
        document.querySelector('#guesses_so_far').innerHTML = this.guessed.join(', ');
    },

    randomLetter: function () {
        var start = 97;
        var end = 123;

        let asciiNumber = Math.floor(Math.random() * (end - start) + start);
        this.computer_choice = String.fromCharCode(asciiNumber);
    },

    guessesSoFar: function (letter) {
        if (!this.guessed.includes(letter)) {
            this.guessed.push(letter);
        }
    },

    comparison: function (letter) {
        if(letter === this.computer_choice) {
            this.wins++;
            this.restart();
        } else if (this.guesses_left > 0) {
            this.guesses_left--;
            this.guessesSoFar(letter); 
        } else {
            this.losses++;
            this.restart();
        }        
    },

    restart: function () {
        this.guesses_left = 9;
        this.guessed = [];
        this.randomLetter();
    }
 }
    game.restart();

    window.addEventListener('keyup', function (e) {
        game.comparison(e.key);
        game.ResetShow();
    })