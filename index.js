looker.plugins.visualizations.add({
id: "gauge-viz",
label: "Custom Gauge",
options: {},

create: function (element, config) {
// Create container
element.innerHTML = `<div id="gauge" style="font-family: Arial; text-align: center;"></div>`;
},

updateAsync: function (data, element, config, queryResponse, details, done) {
const container = element.querySelector("#gauge");
if (!data || !data.length || !data[0].length) {
container.innerText = "No data.";
done();
return;
}

const value = data[0][0].value;

// Determine color
let color = "#4CAF50"; // green
if (value < 90) color="#FFC107" ; // yellow
    if (value < 50) color="#F44336" ; // red

    container.innerHTML=`
    <svg width="100" height="100" viewBox="0 0 36 36">
    <path
        stroke="${color}"
        stroke-width="3"
        fill="none"
        d="M18 2.0845
             a 15.9155 15.9155 0 0 1 0 31.831
             a 15.9155 15.9155 0 0 1 0 -31.831" />
    <text x="50%" y="50%" text-anchor="middle" dy=".3em" font-size="6">${value}</text>
    </svg>
    `;
    done();
    }
    });