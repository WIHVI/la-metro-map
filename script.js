function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    mapId: "c2deb299cd8b7ee3",
    center: { lat: 33.98920912879793, lng: -118.21826850560727 },
    zoom: 10,
  });

  const lineCoordinates = [
    {
      coordinates: [
        { lat: 34.048591832755186, lng: -118.25882058624023 },
        { lat: 34.03998538115356, lng: -118.26672225529185 },
        { lat: 34.03376603560924, lng: -118.2705002548267 },
        { lat: 34.02095595204333, lng: -118.24281207868728 },
        { lat: 33.939393144623956, lng: -118.24281635393243 },
        { lat: 33.90283690559444, lng: -118.22460175135727 },
        { lat: 33.87751955348671, lng: -118.22290736972236 },
        { lat: 33.80539428398739, lng: -118.18901973602885 },
        { lat: 33.76822253553025, lng: -118.18927810888508 },
        { lat: 33.76822253553025, lng: -118.19381854809647 },
        { lat: 33.7766420149731, lng: -118.1936439158191 },
        { lat: 33.7766420149731, lng: -118.18927810888508 },
      ],
      lineColor: "#0000FF",
    },
    {
      coordinates: [
        { lat: 34.0486739583519, lng: -118.25896471023552 },
        { lat: 34.04015777558646, lng: -118.26702536156094 },
        { lat: 34.028396639564626, lng: -118.27406129399397 },
        { lat: 34.02752787937759, lng: -118.27488345815136 },
        { lat: 34.018236351685445, lng: -118.28093108921547 },
        { lat: 34.01838808759322, lng: -118.31439477066036 },
        { lat: 34.02369700423534, lng: -118.34297955116742 },
        { lat: 34.02989192614327, lng: -118.40913196216847 },
        { lat: 34.03279971461646, lng: -118.41575954854501 },
        { lat: 34.03497979772821, lng: -118.41719274089048 },
        { lat: 34.03633427399972, lng: -118.41843207185883 },
        { lat: 34.0372273234634, lng: -118.42144957388673 },
        { lat: 34.02905682936325, lng: -118.46606226779282 },
        { lat: 34.02364437337387, lng: -118.47978485343062 },
        { lat: 34.01412035360219, lng: -118.49160611636121 },
      ],
      lineColor: "#03D8D8",
    },
    {
      coordinates: [
        { lat: 34.05660876823404, lng: -118.23380038834084 },
        { lat: 34.05721739566612, lng: -118.2350169355248 },
        { lat: 34.05791366008897, lng: -118.23840798733714 },
        { lat: 34.05797695657109, lng: -118.23909560096287 },
        { lat: 34.05796234969479, lng: -118.240259254791 },
        { lat: 34.0578357566615, lng: -118.2413347530261 },
        { lat: 34.05758652292954, lng: -118.24237950457935 },
        { lat: 34.05698852756168, lng: -118.24368429677594 },
        { lat: 34.05634708339618, lng: -118.24459734285205 },
        { lat: 34.046743150199376, lng: -118.25359752047093 },
        { lat: 34.046436872728144, lng: -118.2541896293325 },
        { lat: 34.04634895955094, lng: -118.2548399223554 },
        { lat: 34.04656397873053, lng: -118.25555693805757 },
        { lat: 34.05052462826406, lng: -118.26172498869704 },
        { lat: 34.050945877823594, lng: -118.26253959896715 },
        { lat: 34.056695589943914, lng: -118.27586670284244 },
        { lat: 34.060031848795305, lng: -118.28067773151923 },
        { lat: 34.061679649880105, lng: -118.28424086804402 },
        { lat: 34.0617698054676, lng: -118.28472098467229 },
        { lat: 34.061753944810334, lng: -118.28808339372543 },
        { lat: 34.06197650307383, lng: -118.28908133229693 },
        { lat: 34.0623963022774, lng: -118.29029732184019 },
        { lat: 34.062353501186955, lng: -118.29120682049229 },
        { lat: 34.06177093833863, lng: -118.29271252147726 },
        { lat: 34.06170240126268, lng: -118.30901876623494 },
      ],
      lineColor: "#800080",
    },
    {
      coordinates: [
        { lat: 34.056730494070074, lng: -118.233747494985 },
        { lat: 34.05734398962297, lng: -118.23496404216897 },
        { lat: 34.05805485986879, lng: -118.23839623325806 },
        { lat: 34.05812302519554, lng: -118.23909560096287 },
        { lat: 34.058113287295065, lng: -118.24028863998869 },
        { lat: 34.05797695657109, lng: -118.24135826118426 },
        { lat: 34.05767852184243, lng: -118.24245045072713 },
        { lat: 34.057072860497286, lng: -118.24375832753887 },
        { lat: 34.05642886140837, lng: -118.24468062746034 },
        { lat: 34.04681971938998, lng: -118.25370019831665 },
        { lat: 34.046527621718695, lng: -118.25426834901424 },
        { lat: 34.04643623269559, lng: -118.25482547938037 },
        { lat: 34.046648111894456, lng: -118.25549720942075 },
        { lat: 34.05058413576237, lng: -118.26164749676668 },
        { lat: 34.05101634687482, lng: -118.26247911746053 },
        { lat: 34.0567589233953, lng: -118.27578623438045 },
        { lat: 34.060116032677215, lng: -118.28063575967853 },
        { lat: 34.06176715383405, lng: -118.28422646454518 },
        { lat: 34.06185730932844, lng: -118.28472418544982 },
        { lat: 34.061850229921234, lng: -118.28808726183114 },
        { lat: 34.062064345155996, lng: -118.28904819661471 },
        { lat: 34.062490479768044, lng: -118.2902798322675 },
        { lat: 34.0638612279449, lng: -118.29165713440942 },
        { lat: 34.10059240324084, lng: -118.29178408882001 },
        { lat: 34.10158819575407, lng: -118.2924173292691 },
        { lat: 34.10178061809529, lng: -118.29298666464611 },
        { lat: 34.10153909288415, lng: -118.3388271003248 },
        { lat: 34.10201883935541, lng: -118.34106412703325 },
        { lat: 34.10289836739213, lng: -118.34238381199071 },
        { lat: 34.10521707934831, lng: -118.34434724562131 },
        { lat: 34.11336636595273, lng: -118.3485569122155 },
        { lat: 34.135296461016914, lng: -118.36284352715305 },
        { lat: 34.137521041239715, lng: -118.36310102677926 },
        { lat: 34.139417041279145, lng: -118.36256357343576 },
        { lat: 34.143388326059394, lng: -118.36183643804814 },
        { lat: 34.14389222501675, lng: -118.3619428378765 },
        { lat: 34.168852782509276, lng: -118.37701404557343 },
      ],
      lineColor: "#ff0000",
    },
    {
      coordinates: [
        { lat: 33.89440745215486, lng: -118.36879581223246 },
        { lat: 33.90621460866804, lng: -118.38431219281695 },
        { lat: 33.90806425113462, lng: -118.3853134652634 },
        { lat: 33.914872734248306, lng: -118.38537806350203 },
        { lat: 33.91707063229607, lng: -118.38754210395082 },
        { lat: 33.92680157256653, lng: -118.38755959919055 },
        { lat: 33.92810108124053, lng: -118.38674697189413 },
        { lat: 33.92964575443998, lng: -118.38201895853314 },
        { lat: 33.92964575448311, lng: -118.37599074170652 },
        { lat: 33.93000127053936, lng: -118.37412908644563 },
        { lat: 33.930038048006956, lng: -118.36857367103968 },
        { lat: 33.93334795246565, lng: -118.35676841298303 },
        { lat: 33.933678935855156, lng: -118.35410890574816 },
        { lat: 33.93278405193843, lng: -118.34912971667734 },
        { lat: 33.9309207017338, lng: -118.34522910598264 },
        { lat: 33.926642197495376, lng: -118.33923043941043 },
        { lat: 33.925281367445585, lng: -118.33618678080927 },
        { lat: 33.92487679215734, lng: -118.332552120538 },
        { lat: 33.92547912606949, lng: -118.32096715223807 },
        { lat: 33.92543059409064, lng: -118.31220844408807 },
        { lat: 33.92596444437743, lng: -118.3071784015107 },
        { lat: 33.92858506101142, lng: -118.29509962118239 },
        { lat: 33.92871861237379, lng: -118.29257383456148 },
        { lat: 33.92867108845101, lng: -118.27684823567499 },
        { lat: 33.92750021215067, lng: -118.27060997104128 },
        { lat: 33.92751570585979, lng: -118.25822888244184 },
        { lat: 33.928833610740455, lng: -118.24775528233296 },
        { lat: 33.92805069941542, lng: -118.23443525344628 },
        { lat: 33.92849435004984, lng: -118.23015774692404 },
        { lat: 33.929394692763175, lng: -118.22652501160553 },
        { lat: 33.92965565988646, lng: -118.2246064241213 },
        { lat: 33.929642611549305, lng: -118.22248339698712 },
        { lat: 33.92901628901411, lng: -118.2193224454762 },
        { lat: 33.916384467988046, lng: -118.19046500426468 },
        { lat: 33.91164934216716, lng: -118.17652071067712 },
        { lat: 33.91123589992691, lng: -118.17454714073627 },
        { lat: 33.91110643467964, lng: -118.16897768440776 },
        { lat: 33.913074018085496, lng: -118.1461393516139 },
        { lat: 33.913167914812036, lng: -118.12624858171422 },
        { lat: 33.91382518892506, lng: -118.11599770711057 },
        { lat: 33.91390030564072, lng: -118.10588260537033 },
        { lat: 33.91416321362414, lng: -118.10386863656746 },
      ],
      lineColor: "#008000",
    },
    {
      coordinates: [
        { lat: 34.13694541369973, lng: -117.89086310894237 },
        { lat: 34.136576400164294, lng: -117.89420683268564 },
        { lat: 34.13661330159035, lng: -117.9043271698819 },
        { lat: 34.12971245470237, lng: -117.92670782747018 },
        { lat: 34.128162454375364, lng: -117.93954772609062 },
        { lat: 34.13262785447632, lng: -117.95269970506592 },
        { lat: 34.13236953201468, lng: -117.99933350411045 },
        { lat: 34.13856905435309, lng: -118.02238290483803 },
        { lat: 34.14886368456495, lng: -118.04106317486709 },
        { lat: 34.14875299627281, lng: -118.07102293840795 },
        { lat: 34.14794127781421, lng: -118.07619456446422 },
        { lat: 34.14768300212345, lng: -118.08279284598424 },
        { lat: 34.14816265634921, lng: -118.08551240796213 },
        { lat: 34.150982369951436, lng: -118.08983376571682 },
        { lat: 34.152590105211246, lng: -118.09447358759405 },
        { lat: 34.15231273568606, lng: -118.12328696579347 },
        { lat: 34.151902652885816, lng: -118.12765671310169 },
        { lat: 34.15186537252962, lng: -118.14482035929905 },
        { lat: 34.15104541920418, lng: -118.14617901158296 },
        { lat: 34.14680480951478, lng: -118.14824642224053 },
        { lat: 34.12703643367608, lng: -118.14807722360183 },
        { lat: 34.12453844852701, lng: -118.15059188232887 },
        { lat: 34.12207508534059, lng: -118.15071761526524 },
        { lat: 34.120002035060956, lng: -118.15161299486932 },
        { lat: 34.11269076051188, lng: -118.16091888972022 },
        { lat: 34.112009390862, lng: -118.1708261863111 },
        { lat: 34.10993904186567, lng: -118.18019538727197 },
        { lat: 34.112166630476956, lng: -118.18833013215952 },
        { lat: 34.11211421730092, lng: -118.19070408510568 },
        { lat: 34.10663106689943, lng: -118.20195643655833 },
        { lat: 34.10513457732272, lng: -118.20385646973025 },
        { lat: 34.103254334950456, lng: -118.20478331517998 },
        { lat: 34.1003955190438, lng: -118.20487599972493 },
        { lat: 34.09884135712155, lng: -118.20582601631088 },
        { lat: 34.09699935035554, lng: -118.20851386780488 },
        { lat: 34.095214868187384, lng: -118.20967242461703 },
        { lat: 34.09387168474943, lng: -118.21097000824663 },
        { lat: 34.09000430781139, lng: -118.21134248431474 },
        { lat: 34.08381900937323, lng: -118.21681363001825 },
        { lat: 34.079538386961595, lng: -118.22240264710075 },
        { lat: 34.07746436424724, lng: -118.22408536199784 },
        { lat: 34.07152408204313, lng: -118.2267897250966 },
        { lat: 34.06976514764278, lng: -118.23125693250194 },
        { lat: 34.068543161201234, lng: -118.23329584030438 },
        { lat: 34.06686473104844, lng: -118.23484974438053 },
        { lat: 34.06309129669285, lng: -118.23611419566465 },
        { lat: 34.06230130299608, lng: -118.23610263473773 },
        { lat: 34.06147586208688, lng: -118.2355505245782 },
        { lat: 34.060087573271, lng: -118.2335852929207 },
        { lat: 34.05939342038458, lng: -118.2334329493838 },
        { lat: 34.05750024717475, lng: -118.2344384166871 },
        { lat: 34.0536706464959, lng: -118.23537600075574 },
        { lat: 34.05344271677855, lng: -118.2360257203721 },
        { lat: 34.053602752567265, lng: -118.2374480794759 },
        { lat: 34.05338937139511, lng: -118.23777586594855 },
        { lat: 34.049514469959504, lng: -118.23793390584619 },
        { lat: 34.04917013348286, lng: -118.23755929273405 },
        { lat: 34.049058587545886, lng: -118.23655252004227 },
        { lat: 34.048646351347486, lng: -118.23539356081784 },
        { lat: 34.047870434297124, lng: -118.22949085967295 },
        { lat: 34.047150154436615, lng: -118.2188243010149 },
        { lat: 34.04446365122028, lng: -118.21277443588203 },
        { lat: 34.0444539173584, lng: -118.21138825312316 },
        { lat: 34.03588768561983, lng: -118.19235760951443 },
        { lat: 34.033561025617665, lng: -118.19215790521869 },
        { lat: 34.033268971737435, lng: -118.19188771705383 },
        { lat: 34.033394925496744, lng: -118.1537653078805 },
      ],
      lineColor: "#f57f17",
    },
  ];

  function addLinePath(props) {
    const lineOptions = new google.maps.Polyline({
      path: props.coordinates,
      geodesic: true,
      strokeColor: props.lineColor,
      strokeOpacity: 1.0,
      strokeWeight: 3,
    });

    lineOptions.setMap(map);
  }

  lineCoordinates.forEach((line) => addLinePath(line));

  const metroStationCoordinates = [
    {
      coordinates: { lat: 34.048213958960744, lng: -118.25841567694475 },
      station: "<h2>7th Street/Metro Center</h2>",
    },
    {
      coordinates: { lat: 34.056245581372856, lng: -118.23425385749228 },
      station: "<h2>Union Station</h2>",
    },
    {
      coordinates: { lat: 34.168725423511574, lng: -118.37678170508711 },
      station: "<h2>North Hollywood</h2>",
    },
    {
      coordinates: { lat: 34.062080839644835, lng: -118.30886692297103 },
      station: "<h2>Wilshire/Western</h2>",
    },
    {
      coordinates: { lat: 34.014037530816616, lng: -118.49134307393744 },
      iconImage:
        "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
      station: "<h2>Downtown Santa Monica</h2>",
    },
    {
      coordinates: { lat: 33.76806889106064, lng: -118.19322544252502 },
      iconImage:
        "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
      station: "<h2>Downtown Long Beach</h2>",
    },
    {
      coordinates: { lat: 33.894650181197896, lng: -118.36912958412861 },
      iconImage:
        "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
      station: "<h2>Redondo Beach</h2>",
    },
    {
      coordinates: { lat: 33.91409353717671, lng: -118.10406874007947 },
      station: "<h2>Norwalk</h2>",
    },
    {
      coordinates: { lat: 34.13684045378583, lng: -117.89172383421182 },
      station: "<h2>APU/Citrus College</h2>",
    },
    {
      coordinates: { lat: 34.0334378000857, lng: -118.15506790354902 },
      station: "<h2>Atlantic</h2>",
    },
  ];

  function addMarkerAndInfo(props) {
    const marker = new google.maps.Marker({
      position: props.coordinates,
      map,
      //icon: props.iconImage
    });

    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }

    const infowindow = new google.maps.InfoWindow({
      content: props.station,
    });

    marker.addListener("click", () => {
      infowindow.open({
        anchor: marker,
        map,
        shouldFocus: false,
      });
    });
  }

  for (let i = 0; i < metroStationCoordinates.length; i++) {
    addMarkerAndInfo(metroStationCoordinates[i]);
  }
}

window.initMap = initMap;

// Lines toggle functionality

const button = document.querySelectorAll("button");
const blueLineStations = document.getElementById("blue-line-stations");
const expoLineStations = document.getElementById("expo-line-stations");
const purpleLineStations = document.getElementById("purple-line-stations");
const redLineStations = document.getElementById("red-line-stations");
const goldLineStations = document.getElementById("gold-line-stations");
const greenLineStations = document.getElementById("green-line-stations");
const blueOpen = document.getElementById("blue-open");
const blueHide = document.getElementById("blue-hide");
const expoOpen = document.getElementById("expo-open");
const expoHide = document.getElementById("expo-hide");
const purpleOpen = document.getElementById("purple-open");
const purpleHide = document.getElementById("purple-hide");
const redOpen = document.getElementById("red-open");
const redHide = document.getElementById("red-hide");
const goldOpen = document.getElementById("gold-open");
const goldHide = document.getElementById("gold-hide");
const greenOpen = document.getElementById("green-open");
const greenHide = document.getElementById("green-hide");

button.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (e.target.id == "blue-line-btn") {
      blueLineStations.style.display =
        blueLineStations.style.display === "none" ? "block" : "none";
      blueOpen.style.display =
        blueOpen.style.display === "block" ? "none" : "block";
      blueHide.style.display =
        blueHide.style.display === "none" ? "block" : "none";
    } else if (e.target.id == "expo-line-btn") {
      expoLineStations.style.display =
        expoLineStations.style.display === "none" ? "block" : "none";
      expoOpen.style.display =
        expoOpen.style.display === "block" ? "none" : "block";
      expoHide.style.display =
        expoHide.style.display === "none" ? "block" : "none";
    } else if (e.target.id == "purple-line-btn") {
      purpleLineStations.style.display =
        purpleLineStations.style.display === "none" ? "block" : "none";
      purpleOpen.style.display =
        purpleOpen.style.display === "block" ? "none" : "block";
      purpleHide.style.display =
        purpleHide.style.display === "none" ? "block" : "none";
    } else if (e.target.id == "red-line-btn") {
      redLineStations.style.display =
        redLineStations.style.display === "none" ? "block" : "none";
      redOpen.style.display =
        redOpen.style.display === "block" ? "none" : "block";
      redHide.style.display =
        redHide.style.display === "none" ? "block" : "none";
    } else if (e.target.id == "gold-line-btn") {
      goldLineStations.style.display =
        goldLineStations.style.display === "none" ? "block" : "none";
      goldOpen.style.display =
        goldOpen.style.display === "block" ? "none" : "block";
      goldHide.style.display =
        goldHide.style.display === "none" ? "block" : "none";
    } else if (e.target.id == "green-line-btn") {
      greenLineStations.style.display =
        greenLineStations.style.display === "none" ? "block" : "none";
      greenOpen.style.display =
        greenOpen.style.display === "block" ? "none" : "block";
      greenHide.style.display =
        greenHide.style.display === "none" ? "block" : "none";
    }
  });
});

// Dark mode
const sunMoonContainer = document.querySelector(".sun-moon-container");

document.querySelector(".theme-toggle-button").addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const currentRotation = parseInt(
    getComputedStyle(sunMoonContainer).getPropertyValue("--rotation")
  );
  sunMoonContainer.style.setProperty("--rotation", currentRotation + 180);
});
