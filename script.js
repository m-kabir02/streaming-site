// Store movie data in an array of objects
const movies = [
    {
        title: "10 Things I Hate About You",
        image: "assets/images/image0.jpeg",
        description: "Kat Stratford is beautiful, smart, and quite abrasive to most of her fellow teens, meaning that she doesn't attract many boys. Unfortunately for her younger sister, Bianca, house rules say that she can't date until Kat has a boyfriend, so strings are pulled to set her up for a romance.",
        genre: ["Romance", "Comedy", "Teen"],
        year: 1999
    },
    {
        title: "The Breakfast Club",
        image: "assets/images/image1.jpeg",
        description: "Five high school students meet in Saturday detention and discover how they have a lot more in common than they thought.",
        genre: ["Drama", "Teen"],
        year: 1985
    },
    {
        title: "The Maze Runner",
        image: "assets/images/image2.jpg",
        description: "Thomas is deposited in a community of boys after his memory is erased, soon learning they're all trapped in a maze that will require him to join forces with fellow runners for a shot at escape.",
        genre: ["Sci-Fi", "Action", "Thriller"],
        year: 2014
    },
    {
        title: "Love and Monsters",
        image: "assets/images/image3.jpg",
        description: "In a monster-infested world, Joel learns his girlfriend is just 80 miles away. To make the dangerous journey, Joel discovers his inner hero to be with the girl of his dreams.",
        genre: ["Adventure", "Comedy", "Sci-Fi"],
        year: 2020
    },
    {
        title: "Divergent",
        image: "assets/images/image4.jpg",
        description: "In a world divided by factions based on virtues, Tris learns she's Divergent and won't fit in. When she discovers a plot to destroy Divergents, Tris and the mysterious Four must find out what makes Divergents dangerous before it's too late.",
        genre: ["Sci-Fi", "Action", "Adventure"],
        year: 2014
    },
    {
        title: "Cheaper by the Dozen 2",
        image: "assets/images/image5.jpg",
        description: "The Bakers, a family of 12, go on a summer vacation, but their vacation turns into a rivalry with a competing family of eight.",
        genre: ["Family", "Comedy"],
        year: 2005
    },
    {
        title: "Rise of the Guardians",
        image: "assets/images/image6.jpg",
        description: "When the evil spirit Pitch launches an assault on Earth, the Immortal Guardians team up to protect the innocence of children around the world.",
        genre: ["Animation", "Family", "Fantasy"],
        year: 2012
    },
    {
        title: "21 Jump Street",
        image: "assets/images/image7.jpg",
        description: "A pair of underachieving cops are sent back to a local high school to blend in and bring down a synthetic drug ring.",
        genre: ["Action", "Comedy"],
        year: 2012
    },
    {
        title: "Alexander and the Terrible, Horrible, No Good, Very Bad Day",
        image: "assets/images/image8.jpeg",
        description: "Alexander's day begins with gum stuck in his hair, followed by more calamities. Though he finds little sympathy from his family, he soon learns that bad days are just part of life.",
        genre: ["Family", "Comedy"],
        year: 2014
    },
    {
        title: "Deadpool",
        image: "assets/images/image9.png",
        description: "A wisecracking mercenary gets experimented on and becomes immortal but ugly and sets out to track down the man who ruined his looks.",
        genre: ["Action", "Comedy", "Superhero"],
        year: 2016
    },
    {
        title: "Mean Girls",
        image: "assets/images/image10.jpg",
        description: "Cady Heron is a hit with The Plastics, the A-list girl clique at her new school, until she makes the mistake of falling for Aaron Samuels, the ex-boyfriend of alpha Plastic Regina George.",
        genre: ["Comedy", "Teen"],
        year: 2004
    },
    {
        title: "Parasite",
        image: "assets/images/image11.jpg",
        description: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
        genre: ["Drama", "Thriller"],
        year: 2019
    },
    {
        title: "John Wick",
        image: "assets/images/image12.jpg",
        description: "An ex-hitman comes out of retirement to track down the gangsters that took everything from him.",
        genre: ["Action", "Thriller"],
        year: 2014
    },
    {
        title: "The Edge of Seventeen",
        image: "assets/images/image13.jpg",
        description: "High school life gets even more unbearable when a teenage girl's best friend starts dating her older brother.",
        genre: ["Comedy", "Drama"],
        year: 2016
    },
    {
        title: "Spider-Man: Into the Spider-Verse",
        image: "assets/images/image14.jpg",
        description: "Teen Miles Morales becomes Spider-Man of his reality, crossing paths with five counterparts from other dimensions to stop a threat for all realities.",
        genre: ["Animation", "Action", "Adventure"],
        year: 2018
    },
    {
        title: "Love Reset",
        image: "assets/images/image15.jpg",
        description: "A Korean movie about a romance reset and the complexities of love and relationships.",
        genre: ["Romance", "Drama"],
        year: 2021
    },
    {
        title: "Definitely, Maybe",
        image: "assets/images/image16.jpeg",
        description: "A political consultant tells his daughter the story of his past relationships to help her understand why he split from her mother.",
        genre: ["Romance", "Comedy",],
        year: 2008
    },
    {
        title: "Life As We Know It",
        image: "assets/images/image17.jpeg",
        description: "Two single adults become caregivers to an orphaned girl after their mutual best friends die in an accident.",
        genre: ["Romance", "Comedy",, "Drama"],
        year: 2010
    },
    {
        title: "To All the Boys I've Loved Before",
        image: "assets/images/image18.jpeg",
        description: "A teenage girl's secret love letters are exposed and wreak havoc on her love life.",
        genre: ["Romantic Comedy", "Teen"],
        year: 2018
    },
    {
        title: "20th Century Girl",
        image: "assets/images/image19.jpeg",
        description: "A Korean film about a young woman navigating love and friendship in the late 20th century.",
        genre: ["Romance", "Drama"],
        year: 2022
    },
    {
        title: "Knives Out",
        image: "assets/images/image20.jpeg",
        description: "A detective investigates the death of a patriarch of an eccentric, combative family.",
        genre: ["Mystery", "Comedy"],
        year: 2019
    },
    {
        title: "Murder Mystery 2",
        image: "assets/images/image21.jpeg",
        description: "A sequel to the original Murder Mystery, with the same comedic detective duo solving new cases.",
        genre: ["Comedy", "Mystery"],
        year: 2023
    },
    {
        title: "Murder on the Orient Express",
        image: "assets/images/image22.jpeg",
        description: "Detective Hercule Poirot investigates a murder aboard the luxurious Orient Express train.",
        genre: ["Mystery", "Drama"],
        year: 2017
    },
    {
        title: "Prisoners",
        image: "assets/images/image23.jpeg",
        description: "When two girls go missing, the parents take matters into their own hands as the police investigate the case.",
        genre: ["Thriller", "Drama"],
        year: 2013
    },
    {
        title: "Glass Onion: A Knives Out Mystery",
        image: "assets/images/image24.jpeg",
        description: "The sequel to Knives Out, featuring a new mystery and cast of characters.",
        genre: ["Mystery", "Comedy"],
        year: 2022
    },
    // Harry Potter Series
    {
        title: "Harry Potter and the Sorcerer's Stone",
        image: "assets/images/image25.jpeg",
        description: "A young wizard discovers his magical heritage on his 11th birthday and sets off for Hogwarts School of Witchcraft and Wizardry.",
        genre: ["Fantasy", "Adventure"],
        year: 2001
    },
    {
        title: "Harry Potter and the Chamber of Secrets",
        image: "assets/images/image26.jpeg",
        description: "Harry returns to Hogwarts for his second year and must uncover the mystery behind a series of attacks on students.",
        genre: ["Fantasy", "Adventure"],
        year: 2002
    },
    {
        title: "Harry Potter and the Prisoner of Azkaban",
        image: "assets/images/image27.jpeg",
        description: "Harry's third year at Hogwarts sees the escape of a dangerous prisoner from the wizarding prison Azkaban, with connections to Harry's past.",
        genre: ["Fantasy", "Adventure"],
        year: 2004
    },
    {
        title: "Harry Potter and the Goblet of Fire",
        image: "assets/images/image29.jpeg",
        description: "In his fourth year, Harry is unexpectedly entered into the Triwizard Tournament, a magical competition with deadly tasks.",
        genre: ["Fantasy", "Adventure"],
        year: 2005
    },
    {
        title: "Harry Potter and the Order of the Phoenix",
        image: "assets/images/image30.jpg",
        description: "As dark forces gather, Harry and his friends form a secret group to fight against Voldemort and his followers.",
        genre: ["Fantasy", "Adventure"],
        year: 2007
    },
    {
        title: "Harry Potter and the Half-Blood Prince",
        image: "assets/images/image31.jpg",
        description: "Harry learns more about Voldemort’s dark past and the Half-Blood Prince while preparing for the final battle.",
        genre: ["Fantasy", "Adventure"],
        year: 2009
    },
    {
        title: "Harry Potter and the Deathly Hallows: Part 1",
        image: "assets/images/image32.jpg",
        description: "Harry, Ron, and Hermione leave Hogwarts to find and destroy Voldemort’s Horcruxes, setting the stage for the final battle.",
        genre: ["Fantasy", "Adventure"],
        year: 2010
    },
    {
        title: "Harry Potter and the Deathly Hallows: Part 2",
        image: "assets/images/image33.jpg",
        description: "The final battle between Harry and Voldemort reaches its climax as Harry seeks to destroy the last Horcrux and bring peace to the wizarding world.",
        genre: ["Fantasy", "Adventure"],
        year: 2011
    },
    // Special October Feature
    {
        title: "Sleepy Hollow",
        image: "assets/images/image34.jpeg",
        description: "Ichabod Crane is sent to Sleepy Hollow to investigate the decapitations of three people, with the culprit being the legendary apparition, The Headless Horseman.",
        genre: ["Fantasy", "Horror"],
        year: 1999
    },
    {
        title: "It",
        image: "assets/images/image35.jpeg",
        description: "A group of children are terrorized by a shape-shifting entity that takes the form of a clown named Pennywise.",
        genre: ["Horror", "Thriller"],
        year: 2017
    },
    {
        title: "It Chapter Two",
        image: "assets/images/image36.jpeg",
        description: "The Losers' Club reunites 27 years after their first encounter with Pennywise to face their fears and defeat the clown once and for all.",
        genre: ["Horror", "Thriller"],
        year: 2019
    },
    {
        title: "The Conjuring",
        image: "assets/images/image37.jpeg",
        description: "Paranormal investigators Ed and Lorraine Warren work to help a family terrorized by a dark presence in their farmhouse.",
        genre: ["Horror", "Supernatural"],
        year: 2013
    },
    {
        title: "Hocus Pocus",
        image: "assets/images/image38.jpeg",
        description: "Three witch sisters are resurrected in Salem, Massachusetts on Halloween night and wreak havoc while three kids try to stop them.",
        genre: ["Comedy", "Fantasy"],
        year: 1993
    },
    {
        title: "The Shining",
        image: "assets/images/image39.jpeg",
        description: "A family heads to an isolated hotel where the father, influenced by a supernatural presence, descends into violence.",
        genre: ["Horror", "Thriller"],
        year: 1980
    },
    {
        title: "Annabelle",
        image: "assets/images/image40.jpeg",
        description: "A doll possessed by a malevolent entity brings terror to a young couple's life.",
        genre: ["Horror", "Supernatural"],
        year: 2014
    },
    {
        title: "The Exorcist",
        image: "assets/images/image41.jpeg",
        description: "When a young girl becomes possessed by a demonic entity, two priests are summoned to perform an exorcism.",
        genre: ["Horror", "Supernatural"],
        year: 1973
    },
    {
        title: "Ready or Not",
        image: "assets/images/image42.jpeg",
        description: "A newlywed is forced to participate in a deadly game of hide and seek with her husband's wealthy and eccentric family.",
        genre: ["Horror", "Comedy"],
        year: 2019
    },
    {
        title: "The Ring",
        image: "assets/images/image43.jpeg",
        description: "A journalist investigates a mysterious videotape that causes viewers to die seven days after watching it.",
        genre: ["Horror", "Mystery"],
        year: 2002
    },
    {
        title: "Us",
        image: "assets/images/image44.jpeg",
        description: "A family’s serene beach vacation turns to chaos when their doppelgängers appear and begin to terrorize them.",
        genre: ["Horror", "Thriller"],
        year: 2019
    },
    {
        title: "A Quiet Place",
        image: "assets/images/image45.jpeg",
        description: "In a post-apocalyptic world, a family must live in silence to avoid blind monsters with acute hearing.",
        genre: ["Horror", "Thriller"],
        year: 2018
    },
    {
        title: "Insidious: The Red Door",
        image: "assets/images/image46.jpeg",
        description: "The Lambert family faces the terrifying return of the malevolent force from the Insidious universe as they try to escape their haunted past.",
        genre: ["Horror", "Supernatural"],
        year: 2023
    },
    {
        title: "Scream",
        image: "assets/images/image47.jpeg",
        description: "A teenage girl is targeted by a masked killer who begins a series of murders in her small town.",
        genre: ["Horror", "Mystery"],
        year: 1996
    },
    {
        title: "A Nightmare on Elm Street",
        image: "assets/images/image48.jpeg",
        description: "A group of teenagers is stalked and killed in their dreams by a disfigured serial killer with a glove of razor-sharp knives.",
        genre: ["Horror"],
        year: 1984
    },
    {
        title: "Scream 4",
        image: "assets/images/image49.jpeg",
        description: "A decade after the original murders, Sidney Prescott returns to Woodsboro and is confronted by a new killer seeking revenge.",
        genre: ["Horror", "Mystery"],
        year: 2011
    },
    {
        title: "Halloween",
        image: "assets/images/image50.jpeg",
        description: "Michael Myers, a psychotic murderer, escapes from a mental institution and returns to his hometown to continue his killing spree.",
        genre: ["Horror"],
        year: 1978
    },
    {
        title: "Hereditary",
        image: "assets/images/image51.jpeg",
        description: "After the death of their reclusive grandmother, a family begins to unravel dark secrets about their ancestry.",
        genre: ["Horror", "Drama"],
        year: 2018
    },
    {
        title: "Paranormal Activity",
        image: "assets/images/image52.jpeg",
        description: "A couple sets up a camera in their home to document supernatural occurrences, only to discover they’re being haunted by a demonic presence.",
        genre: ["Horror", "Supernatural"],
        year: 2007
    },
    {
        title: "The Blair Witch Project",
        image: "assets/images/image53.jpeg",
        description: "Three film students travel to a small town to film a documentary on a local legend, only to find themselves in a terrifying situation.",
        genre: ["Horror"],
        year: 1999
    },
    {
        title: "Coraline",
        image: "assets/images/image54.jpeg",
        description: "A young girl discovers a parallel universe where everything seems better, but soon finds dark secrets lurking behind the façade.",
        genre: ["Animation", "Fantasy", "Horror"],
        year: 2009
    },
    {
        title: "The Babadook",
        image: "assets/images/image55.jpeg",
        description: "A mother and her son are haunted by a sinister presence that emerges from a mysterious book.",
        genre: ["Horror", "Drama"],
        year: 2014
    },
    {
        title: "Get Out",
        image: "assets/images/image56.jpeg",
        description: "A black man uncovers disturbing secrets when he visits his white girlfriend’s family estate.",
        genre: ["Horror", "Thriller"],
        year: 2017
    },
    {
        title: "The Haunting of Hill House",
        image: "assets/images/image57.jpeg",
        description: "A family confronts haunting memories of their old home and the terrifying events that drove them away.",
        genre: ["Horror", "Drama"],
        year: 2018
    },
    {
        title: "The Haunting of Bly Manor",
        image: "assets/images/image58.jpeg",
        description: "A governess is hired to look after two orphaned children in a manor with a dark past and sinister occurrences.",
        genre: ["Horror", "Drama"],
        year: 2020
    },
    {
        title: "The Fall of the House of Usher",
        image: "assets/images/image59.jpeg",
        description: "A man visits his ill friend’s crumbling mansion, where he uncovers a dark family history and supernatural events.",
        genre: ["Horror", "Drama"],
        year: 2023
    },
    {
        title: "Sinister",
        image: "assets/images/image60.jpeg",
        description: "A true-crime writer discovers a box of home videos that expose a disturbing and deadly presence in his new home.",
        genre: ["Horror", "Thriller"],
        year: 2012
    },
    {
        title: "Split",
        image: "assets/images/image61.jpeg",
        description: "A man with 23 distinct personalities kidnaps three teenage girls, and they must find a way to escape before he unleashes his final identity.",
        genre: ["Thriller", "Horror"],
        year: 2016
    },
    {
        title: "Pet Sematary",
        image: "assets/images/image62.jpeg",
        description: "A family moves to a rural town and discovers a cemetery with the power to bring deceased loved ones back to life, with terrifying consequences.",
        genre: ["Horror", "Supernatural"],
        year: 1989
    },
    {
        title: "The Grudge",
        image: "assets/images/image63.jpg",
        description: "A detective investigates a murder case linked to a cursed house that causes a vengeful spirit to haunt anyone who enters.",
        genre: ["Horror", "Supernatural"],
        year: 2004
    },
    {
        title: "Dabbe: The Possession",
        image: "assets/images/image64.jpg",
        description: "A supernatural horror film about a family terrorized by demonic forces, with a blend of traditional Turkish folklore and modern horror.",
        genre: ["Horror", "Supernatural"],
        year: 2006
    },
    {
        title: "Interstellar",
        image: "assets/images/image65.jpeg",
        description: "A team of explorers travels through a wormhole in search of a new home for humanity, facing challenges and cosmic phenomena along the way.",
        genre: ["Science Fiction", "Adventure"],
        year: 2014
    }
];

// Select DOM elements
const carouselContainer = document.querySelector('.carousel-items');
const movieGrid = document.querySelector('.movie-grid');
const filterButton = document.getElementById('filter-button');
const filterOptions = document.getElementById('filter-options');
const applyFiltersButton = document.getElementById('apply-filters');
const prevButton = document.querySelector('.carousel-prev');
const nextButton = document.querySelector('.carousel-next');

let currentCarouselIndex = 0;
const itemsToShow = 5;

// Toggle Filter Options Visibility
filterButton.addEventListener('click', () => {
    console.log('Filter button clicked');
    filterOptions.classList.toggle('hidden'); // Toggle the visibility of filter options
});

// Populate Carousel
function populateCarousel() {
    carouselContainer.innerHTML = ''; // Clear existing items
    for (let i = currentCarouselIndex; i < currentCarouselIndex + itemsToShow; i++) {
        if (i >= movies.length) break;
        const movie = movies[i];
        const item = document.createElement('div');
        item.className = 'carousel-item';
        item.innerHTML = `
            <img src="${movie.image}" alt="${movie.title}">
            <div class="movie-info">
                <h3>${movie.title}</h3>
                <p>${movie.year}</p>
            </div>
        `;
        carouselContainer.appendChild(item);
    }
    updateCarouselVisibility();
}

// Update Carousel Visibility
function updateCarouselVisibility() {
    prevButton.style.display = currentCarouselIndex > 0 ? 'block' : 'none';
    nextButton.style.display = (currentCarouselIndex + itemsToShow < movies.length) ? 'block' : 'none';
}

// Show Next Carousel Items
function showNextCarouselItems() {
    if (currentCarouselIndex + itemsToShow < movies.length) {
        currentCarouselIndex += itemsToShow;
        populateCarousel();
        carouselContainer.style.transform = `translateX(-${currentCarouselIndex * 100 / itemsToShow}%)`;
    }
}

// Show Previous Carousel Items
function showPrevCarouselItems() {
    if (currentCarouselIndex > 0) {
        currentCarouselIndex -= itemsToShow;
        populateCarousel();
        carouselContainer.style.transform = `translateX(-${currentCarouselIndex * 100 / itemsToShow}%)`;
    }
}

// Populate Movie Grid
function populateMovieGrid(moviesToDisplay) {
    movieGrid.innerHTML = ''; // Clear existing grid
    moviesToDisplay.forEach(movie => {
        const item = document.createElement('div');
        item.className = 'movie-item';
        item.innerHTML = `
            <img src="${movie.image}" alt="${movie.title}">
            <h3>${movie.title}</h3>
        `;
        movieGrid.appendChild(item);
    });
}

// Populate Filter Options
function populateFilterOptions() {
    const genres = Array.from(new Set(movies.flatMap(movie => movie.genre)));
    genres.forEach(genre => {
        const label = document.createElement('label');
        label.innerHTML = `
            <input class="checkbox" type="checkbox" value="${genre}"> ${genre}
        `;
        filterOptions.appendChild(label);
    });

    const sortOptions = document.createElement('div');
    sortOptions.innerHTML = `
        <label>
            <input type="radio" name="sort" value="newest"> Newest
        </label>
        <label>
            <input type="radio" name="sort" value="oldest"> Oldest
        </label>
    `;
    filterOptions.appendChild(sortOptions);
}

// Handle Apply Filters Button
applyFiltersButton.addEventListener('click', () => {
    const selectedGenres = Array.from(document.querySelectorAll('input[type="checkbox"]:checked')).map(cb => cb.value);
    const sortOption = document.querySelector('input[name="sort"]:checked')?.value;

    // Filter and sort movies
    let filteredMovies = movies.filter(movie => selectedGenres.length === 0 || movie.genre.some(g => selectedGenres.includes(g)));
    if (sortOption === 'newest') {
        filteredMovies.sort((a, b) => b.year - a.year);
    } else if (sortOption === 'oldest') {
        filteredMovies.sort((a, b) => a.year - b.year);
    }

    // Clear existing movie grid and repopulate
    populateMovieGrid(filteredMovies);
});

// Initialize
window.onload = () => {
    populateCarousel();
    populateFilterOptions();
    populateMovieGrid(movies); // Populate with all movies initially
};

// Add Event Listeners for Carousel Navigation
prevButton.addEventListener('click', showPrevCarouselItems);
nextButton.addEventListener('click', showNextCarouselItems);
