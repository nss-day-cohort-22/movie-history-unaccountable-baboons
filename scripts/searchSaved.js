const getDataFactory = require("./displayMovies")
//filter through saved movies based on user input
const filterSaved = function () {
    document.querySelector("input[name='trackedMovieFilter']").addEventListener(
        "keyup",
        event => {
            if (event.target.value.length >= 3) {
                // Get lower case version of user input
                const pattern = event.target.value.toLowerCase()

                const filteredMovies = getDataFactory.cache.filter(
                    title => {
                        const matchingTitle = article.title.toLowerCase().includes(pattern)
                    })
                }
            })
        }