
// TODO: load the dataset 

var attractions;
fetch('attractions.json')
    .then(response => response.json())
    .then(data => {
        attractions = data;
        console.log("Fetch completed")
    })

function filterData(category) {
    console.log("Empty function")

	/* **************************************************
	 *
	 * TODO: filter attractions by the selected category
	 * TODO: filter top 5 attractions
	 *
	 * CALL THE FOLLOWING FUNCTION TO RENDER THE BAR-CHART:
	 *
	 * renderBarChart(data)
	 *
	 * - 'data' must be an array of JSON objects
	 * - the max. length of 'data' is 5
	 *
	 * **************************************************/
    let filteredAttractions = [];
    if (category == null || category == 'all'){
        console.log("No category given")
        filteredAttractions = attractions;
    }
    else{
        filteredAttractions = attractions.filter(a => a["Category"] == category);    
    }
    
    filteredAttractions.sort((a,b)=>(a["Visitors"] > b["Visitors"]))
    console.log("Array sorted")
    let topFiveAttractions = filteredAttractions.slice(0,5)
    console.log(topFiveAttractions)
    renderBarChart(topFiveAttractions)

}

// TODO: Define an event listener for the dropdown menu
//       Call filterData with the selected category
let selector = document.querySelector('#attraction-category');
let category;
selector.addEventListener("change", (event) => {console.log("Change event"); category = event.target.value; console.log(category); filterData(category);});
setTimeout(() => {  filterData(category); }, 200);

