
var links = [
    {
        label: "Week1 Notes",
        url: "week1/index.html"
    },
    {
        label: "Week2 Notes",
        url: "week2/index.html"
    },
    {
        label: "Week3 Notes",
        url: "week3/index.html"
    },
  ];

  listWeeklyLinks(links,"links");

//create href list
function listWeeklyLinks(weekLinks, listElementName){
    let ul = document.getElementById(listElementName);
    if (ul) {

        // loop through objects
        weekLinks.forEach(element => {
            
        //create anchor with attributes
        let anchor = document.createElement("a");
        anchor.innerHTML = element.label;
        anchor.href = element.url;
        anchor.target= "_blank";

        //create list item with anchor attached
        let li = document.createElement("li");
        li.appendChild(anchor);

        ul.appendChild(li);
        });
    }
}
