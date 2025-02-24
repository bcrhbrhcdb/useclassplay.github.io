    // follow this format when adding games. Make sure you add the images + url OR game html file.
const games = {
    tetris: {
        title: "Twitch Tetris",
      //if you only want to have the game open up in an about:blank, this is not needed.
        //the id should be the same as the name of the object, so it should be "tetris" for this game.
        url: "game-template.html?id=tetris",
        originalUrl: "https://emulatoros.github.io/gfile/tetris/index.html",
        image: "../img/tetris.png",
        description: "You know what this is, a ripoff of Tetris.",
      //for info insid the game page, you can add this:
      //you can use literal templates for html OR just normal quotes for text.
        controls: `<p>hey there</p>`
    },
}
