const projects = [
    {
        name: "Creatures Online",
        desc: "Game-Website with online lobby and user data",
        details: ["Personal project to mix again webpage development and my hobby of game design.",
            "The primary goals were to learn TypeScript, HTML Canvas as well as make a working online lobby and play games against other online players.",
            "There has been some challenges regarding importing certain data while using TypeScript. While many of TypeScript's features make for more robust code, it can seem a bit inflexible when loading/importing external data.",
            "There has been some challenges regarding importing certain data while using TypeScript. While many of TypeScript's features make for more robust code, it can seem a bit inflexible when loading/importing external data.",
            "There has been some challenges regarding importing certain data while using TypeScript. While many of TypeScript's features make for more robust code, it can seem a bit inflexible when loading/importing external data.",
            "There has been some challenges regarding importing certain data while using TypeScript. While many of TypeScript's features make for more robust code, it can seem a bit inflexible when loading/importing external data.",
            "There has been some challenges regarding importing certain data while using TypeScript. While many of TypeScript's features make for more robust code, it can seem a bit inflexible when loading/importing external data.",
            "There has been some challenges regarding importing certain data while using TypeScript. While many of TypeScript's features make for more robust code, it can seem a bit inflexible when loading/importing external data."],
        tech: ["Typescript","Canvas", "MongoDB", "Express"],
        features: ["cat","dog","rat","bat","baboon"],
        
        //features: ["online game lobby and multiplayer","user data can be saved locally or server-side","game part rendered entirely in HTML.Canvas with considerations for pixel art style"],
        src: "placeholder.png",
        gif: "placeholder.png",
    },  
    {
        name: "Maker Decider",
        desc: "Daily random creative idea generator. ",
        tech: ["React","HTML5"],
        features: 
        ["date-based content",
          "personal + global content",
            "sound effect player"],
        details: ["an old idea i've wanted to remake in a way that's more accessible, making it on the web seemed like the best idea. Adding a shared global version without going so far as making it server-involved meant i needed to create a random number generator that goes off the current date."],
        src: "makergenerator.png",
        gif: "placeholder.png",
    },
    {
        name: "Create-a-Myth",
        desc: "Simple board-game-like game website that includes tools for users to create their own cards.",
        details: ["the final project of my 2023 web development class it was relatively ambitious for the 12 day timeframe, but given my prior experience in game development i felt confident. While i wasn't able to polish the game side quite as much as i wanted, I am nevertheless proud of the result. The possibility for players to make their own cards and upload them to the server was quite the achievement. In the code side, there are improvements to be made still - using only one file for the context and reducer ended up quite messy, and i've lost a lot of efficency by making my own structured clone code, unaware that it was now part of Javascript's regular documentation. i will work towards cleaning this part, and have been using it in more recent projects"],
        tech: ["React","HTML5", "MongoDB", "Express"],
        features: ["user creation/login system","timed login-remembering cookies","users upload custom data to server"],
        src: "placeholder.png",
        gif: "placeholder.png",
    },  
    {
        name: "Penguin Game",
        desc: ["Simple video game engine using javascript DOM manipulation."],
        details: ["A project done during the 2023 web development class. The goal was to modify a simple game that runs using DOM manipulation.","cat"],
        src: "penguin.png",
        gif: "penguin.gif",
        tech: ["Javascript","HTML5"], 
        features: ["2d Spritesheet animations", "custom collision detection boxes","scrolling backgrounds","advanced keyboard controls"],
    }, 
]

export {projects}