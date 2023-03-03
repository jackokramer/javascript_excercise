import mediaData from "./data.js";

/* Find All Unique Tags

As a software dev at ScrimFlix, you're working on a feature
to let users browse TV shows by tag. The first step is to collect all
the tags from our data into a new array. Then we'll need
to filter out the duplicate tags.

Write a function that takes in the media data and returns
a flat array of unique tags.

Expected output:
["supernatural", "horror", "drama",
"fantasy", "reality", "home improvement", "comedy", "sci-fi", "adventure"]

*/

// Solution 1 nested loops not recommended.

function getUniqueTags(data) {
    const tags = data.map(movie=>movie.tag).flat()

    const uniqueTags = []
    tags.forEach(tag=>{
        if(!uniqueTags.includes(tag)){
            uniqueTags.push(tag)
        }
    })
    return uniqueTags
}

console.log(getUniqueTags(mediaData));


// Solution 2 - Look up BETTER

const uniqueTagsTwo=()=>{
    const tags = data.map(podcast=>podcast.tags).flat()
    const uniqueTags={}
    return tags.filter(tag=>{
        if(!unique[tag]){
            unique[tag]=true
            return true
        }
        return false
    })
}

console.log(uniqueTagsTwo(mediaData))