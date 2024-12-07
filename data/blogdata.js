let blogDataInitial = {
    "blogs": [
        {
            "name": "Star Trek (Original)",
            "captain": "CAPT James Tiberius Kirk",
            "ship_station": "USS Enterprise",
            "image": "images/original_main.jpg",
            "entries": [
                {
                    "stardate": "12345.1",
                    "enterer": "Captain Kirk",
                    "entry": "Explored another civilization. All directives followed."
                },
                {
                    "stardate": "12345.2",
                    "enterer": "Captain Kirk",
                    "entry": "Explored another civilization. All directives followed."
                },
                {
                    "stardate": "12345.3",
                    "enterer": "Captain Kirk",
                    "entry": "Explored another civilization. All directives followed."
                },
                {
                    "stardate": "12345.4",
                    "enterer": "Captain Kirk",
                    "entry": "Explored another civilization. All directives followed."
                },
                {
                    "stardate": "12345.5",
                    "enterer": "Captain Kirk",
                    "entry": "Explored another civilization. All directives followed."
                }
            ]
        },
        {
            "name": "Star Trek TNG",
            "captain": "CAPT Jean-Luc Picard",
            "ship_station": "USS Enterprise-D",
            "image": "images/tng_main.jpg",
            "entries": [
                {
                    "stardate": "12347.6",
                    "enterer": "Captain Picard",
                    "entry": "First contact with a new species was successful."
                },
                {
                    "stardate": "12347.7",
                    "enterer": "Captain Picard",
                    "entry": "First contact with a new species was successful."
                },
                {
                    "stardate": "12347.8",
                    "enterer": "Captain Picard",
                    "entry": "First contact with a new species was successful."
                },
                {
                    "stardate": "12347.9",
                    "enterer": "Captain Picard",
                    "entry": "First contact with a new species was successful."
                }
            ]
        },
        {
            "name": "Star Trek Voyager",
            "captain": "CAPT Kathryn Janeway",
            "ship_station": "USS Voyager",
            "image": "images/voyager_main.jpg",
            "entries": [
                {
                    "stardate": "12349.9",
                    "enterer": "Captain Janeway",
                    "entry": "Navigated through the Delta Quadrant."
                },
                {
                    "stardate": "12349.10",
                    "enterer": "Captain Janeway",
                    "entry": "Navigated through the Delta Quadrant."
                },
                {
                    "stardate": "12349.11",
                    "enterer": "Captain Janeway",
                    "entry": "Navigated through the Delta Quadrant."
                },
                {
                    "stardate": "12349.12",
                    "enterer": "Captain Janeway",
                    "entry": "Navigated through the Delta Quadrant."
                }
            ]
        }
    ],
    "characters": [
        {
            "name": "LT CMDR Data",
            "title": "Android",
            "location": "USS Enterprise-D",
            "notes": "Positronic brain.",
            "quotes": "I am fully functional and programmed in multiple techniques.",
            "image": "images/tng_data.jpg"
        },
        {
            "name": "The Borg Queen",
            "title": "Queen of the Collective",
            "location": "The Borg Cube",
            "notes": "The Queen.",
            "quotes": "Resistance is futile. You will be assimilated.",
            "image": "images/borg_queen.jpg"
        },
        {
            "name": "Q",
            "title": "Omnipotent",
            "location": "The Continuum",
            "notes": "Plays Napoleon, plays chess.",
            "quotes": "Hello, Number Two.",
            "image": "images/q.jpg"
        },
        {
            "name": "Quark",
            "title": "Bartender at Quark's",
            "location": "Deep Space Nine station.",
            "notes": "Contraband smuggler, entrepreneurial.",
            "quotes": "The more they overthink the plumbing, the easier it is to stop up the drain.",
            "image": "images/quark.jpg"
        }
    ]
};

// Use localStorage's "blogData", used to pass updated data
let blogDataTest = localStorage.getItem("blogData");

if (blogDataTest === null) {
    blogData = blogDataInitial;
} else {
    blogData = JSON.parse(blogDataTest);
}
