// !Use better comments extention in vscode
// TODO To import tags from artstaion and process it through .toLowerCase 
// TODO test it in instagram to see wheather the tab spaces is considered or not
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

let ArtHead = ""; // TODO Add the parameter we get from the artstation bot
let Artist = ""; // TODO Add the parameter we get from the artstation bot

let caption = "";
function captionSelector(tags) {

    tags.forEach(function(tag) {
        if (tag === "#Character Modeling" || tag === "#Character Design") {
             caption = `
${ArtHead}
Great character by ${Artist}
Follow us @cg.nation_
.
.
.
.
.
.
.
.
#characterdesign #artstation #artstationHQ #fanart
#digitalpainting #charactermodeling #3dart #lightingart
#artdaily #aiart
             `;
        } 

        else if (tag === "#Anime & Manga") {
             caption = `
${ArtHead}
Great anime style art by ${Artist}
Follow us @cg.nation_
.
.
.
.
.
.
.
.
#characterdesign #artstation #artstationHQ #fanart
#jpanart #animeedit #charactermodeling #anime #manga 
#aot #animeboy #animeart #animegirl #cosplay
             `;
        }

        else if (tag === "#blender") {
             caption = `
${ArtHead}
Created in blender by ${Artist}
Follow us @cg.nation_
.
.
.
.
.
.
.
.
#blender #blender3d #blendercommunity #artstation #artstationHQ
#blendercycles #blenderguru #b3d #blenderart #3drender #3dartists
             `;
        } 

        else if (tag === "#Concept Art" || tag === "#concept art") { //make sure change the statement once .toLower is implemented
             caption = `
${ArtHead}
Great concept art by ${Artist}
Follow us @cg.nation_
.
.
.
.
.
.
.
.
#conceptart #artstation #artstationHQ
#digitalpainting #charactermodeling #conceptartist #digitalart
#colorstudy #illustration #illustrationartist #noai
             `;
        }

        else if (tag === "#Fantasy") {
             caption = `
${ArtHead}
Great character by ${Artist}
Follow us @cg.nation_
.
.
.
.
.
.
.
.
#artstation #artstationHQ #digitalpainting
#artdaily
             `;
        }

        else if (tag === "#Game Art" || tag === "#game art") {            
            caption = `${ArtHead}
            Great character by ${Artist}
            Follow us @cg.nation_
            .
            .
            .
            .
            .
            .
            .
            .
            #artstation #artstationHQ #digitalpainting
            #artdaily
            `;
            
        }

        else if (tag === "#Sketches" || tag === "#Portraits") {
             caption = `${ArtHead}
             Great character by ${Artist}
             Follow us @cg.nation_
             .
             .
             .
             .
             .
             .
             .
             .
             #artstation #artstationHQ #digitalpainting
             #artdaily
             `;
        }

        else if (tag === "#Vehicles") {
             caption = `${ArtHead}
             Great character by ${Artist}
             Follow us @cg.nation_
             .
             .
             .
             .
             .
             .
             .
             .
             #artstation #artstationHQ #digitalpainting
             #artdaily
             `;
        }
        
        else if (tag === "#Hard Surface") {
             caption = `${ArtHead}
             Great character by ${Artist}
             Follow us @cg.nation_
             .
             .
             .
             .
             .
             .
             .
             .
             #artstation #artstationHQ #digitalpainting
             #artdaily
             `;
        }
        
        else if (tag === "#Science Fiction") {
             caption = `${ArtHead}
             Great character by ${Artist}
             Follow us @cg.nation_
             .
             .
             .
             .
             .
             .
             .
             .
             #artstation #artstationHQ #digitalpainting
             #artdaily
             `;
        }

    });
}

captionSelector(tags);

console.log(caption);
// TODO Export the function or the final caption itself