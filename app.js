// DOM element constants
const storyTitle = document.querySelector(".story-title1");
const form = document.querySelector("form");
const story = document.querySelector(".story")

// fetch story data from data.json file and process with process() function
fetch("./data/data.json")
  .then((response) => response.json())
  .then((data) => process(data));

function process(data) {
    addTitleToDOM(data);
    let formHTML = createFormHTML(data);
    addFormToDOM(formHTML);
    let storyBlanks = gatherStoryBlanksFromForm(data);
    let storyHTML = createStory(data, storyBlanks);
    addStoryToDOM(storyHTML);
}

function addTitleToDOM(data) {
    storyTitle.innerHTML = data.title;
}

function createFormHTML(data) {
    let html = "";
    // create labels and inputs
    for (i in data.labels) {
        html += `
            <div class="form-control">
                <label for="${data.inputIds[i]}">${data.labels[i]} : </label>
                <input type="text" id="${data.inputIds[i]}" name="${data.inputIds[i]}">
            </div>`
    }
    // create reset and submit buttons
    html += `
        <div class="buttons">
            <button type="reset">Reset</button>
            <button type="submit">Submit</button>
        </div>`;
    return html;
}

function addFormToDOM(formHTML) {
    form.innerHTML = formHTML;
}

function gatherStoryBlanksFromForm(data) {
    let blanksArray = form.addEventListener("submit", (e) => {
        e.preventDefault();
    
        // gather user-entered words
        let blanks = [];
        for (i in data.inputIds) {
            blanks[i] = document.getElementById(data.inputIds[i]).value;
        }
        console.log(blanks)
        return blanks;
    });
    console.log(blanksArray);
    return blanksArray;
}


    // create story
    for (i in storyPieces) {
        storyHTML += storyPieces[i];
        if (i < words.length) {
        storyHTML += words[i];
        }
    }

    // set story
    story.innerHTML = storyHTML;
});