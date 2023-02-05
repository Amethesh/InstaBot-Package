// !Use better comments extention in vscode
// TODO To import tags from artstaion and process it through .toLowerCase 

//! Use template literal `` to create a multiline stings
let tags = [
   "#Digital 2D",
   "#Digital 3D",
   "#Mixed Media",
   "#Fan Art",
   "#Character Design",
   "#Character Modeling",
   "#darthmaul",
   "#starwars",
   "#digitalart",
   "#fanart",
   "#conception",
   "#illustration",
   "#characterposter",
   "#characterart",
]; //Realtime example

let caption = "";
function captionSelector(tags) {

    tags.forEach(function(tag) {
        if (tag === "#Character Modeling" || tag === "#Character Design") {
             caption = "The tag is related to character art.";
        } 

        else if (tag === "#Anime & Manga") {
             caption = "The string is related to anime.";
        }

        else if (tag === "#blender") {
             caption = "The tag is related to blender.";
        } 

        else if (tag === "#Concept Art" || tag === "#concept art") {
             caption = "The string is related to concept art.";
        }

        else if (tag === "#Fantasy") {
             caption = "The string is related to fantasy.";
        }

        else if (tag === "#Game Art" || tag === "#game art") {            
            caption = "The string is related to game.";
            
        }

        else if (tag === "#Sketches" || tag === "#Portraits") {
             caption = "The string is related to por.";
        }

        else if (tag === "#Vehicles") {
             caption = "The string is related to veh.";
        }
        
        else if (tag === "#Hard Surface") {
             caption = `The string is related to hard.
             
             
             `;
        }
        
        else if (tag === "#Science Fiction") {
             caption = "The string is related to science.";
        }

    });
}

captionSelector(tags);

console.log(caption);
// TODO Export the function or the final caption itself