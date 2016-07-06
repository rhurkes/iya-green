// Scoping placeholders
let whitelistListElement;

const resetCwas = function () {
  if (filterableCwas) {
    filterableCwas.forEach(x => x.value = false);
    saveFilters();
    renderMenu(menu.filters, document.getElementById('filters'), saveFilters);
  }
};

const showAllCwa = function (element, enabled) {
  if (!element) return;
  element.querySelector('.subtext').textContent = enabled
    ? 'Show all CWA events'
    : 'Hide all non-whitelist events';
};

const whitelistInit = function (element) {
  whitelistListElement = element;
};

const setWhitelistText = function () {
  const wlCwas = getWhitelistCwas();
  const text = wlCwas.length ? `[ ${wlCwas.join(', ')} ]` : 'No CWAs selected';
  whitelistListElement.querySelector('.subtext').textContent = text;
};

var cwas = [
  { code: 'AFC', name: 'Anchorage', st: 'AK' },
  { code: 'AFG', name: 'Fairbanks', st: 'AK' },
  { code: 'AJK', name: 'Juneau', st: 'AK' },
  { code: 'BOU', name: 'Denver/Boulder', st: 'CO' },
  { code: 'GJT', name: 'Grand Junction', st: 'CO' },
  { code: 'PUB', name: 'Pueblo', st: 'CO' },
  { code: 'LOT', name: 'Chicago', st: 'IL' },
  { code: 'ILX', name: 'Lincoln', st: 'IL' },
  { code: 'IND', name: 'Indianapolis', st: 'IN' },
  { code: 'IWX', name: 'Northern Indiana', st: 'IN' },
  { code: 'DVN', name: 'Davenport/Quad Cities', st: 'IA' },
  { code: 'DMX', name: 'Des Moines', st: 'IA' },
  { code: 'DDC', name: 'Dodge City', st: 'KS' },
  { code: 'GLD', name: 'Goodland', st: 'KS' },
  { code: 'TOP', name: 'Topeka', st: 'KS' },
  { code: 'ICT', name: 'Wichita', st: 'KS' },
  { code: 'JKL', name: 'Jackson', st: 'KY' },
  { code: 'LMK', name: 'Louisville', st: 'KY' },
  { code: 'PAH', name: 'Paducah', st: 'KY' },
  { code: 'DTX', name: 'Detroit/Pontiac', st: 'MI' },
  { code: 'APX', name: 'Gaylord', st: 'MI' },
  { code: 'GRR', name: 'Grand Rapids', st: 'MI' },
  { code: 'MQT', name: 'Marquette', st: 'MI' },
  { code: 'DLH', name: 'Duluth', st: 'MN' },
  { code: 'MPX', name: 'Minneapolis/Twin Cities', st: 'MN' },
  { code: 'EAX', name: 'Kansas City/Pleasant Hill', st: 'MO' },
  { code: 'SGF', name: 'Springfield', st: 'MO' },
  { code: 'LSX', name: 'St. Louis', st: 'MO' },
  { code: 'GID', name: 'Hastings', st: 'NE' },
  { code: 'LBF', name: 'North Platte', st: 'NE' },
  { code: 'OAX', name: 'Omaha/Valley', st: 'NE' },
  { code: 'BIS', name: 'Bismarck', st: 'ND' },
  { code: 'FGF', name: 'Grand Forks', st: 'ND' },
  { code: 'ABR', name: 'Aberdeen', st: 'SD' },
  { code: 'UNR', name: 'Rapid City', st: 'SD' },
  { code: 'FSD', name: 'Sioux Falls', st: 'SD' },
  { code: 'GRB', name: 'Green Bay', st: 'WI' },
  { code: 'ARX', name: 'La Crosse', st: 'WI' },
  { code: 'MKX', name: 'Milwaukee/Sullivan', st: 'WI' },
  { code: 'CYS', name: 'Cheyenne', st: 'WY' },
  { code: 'RIW', name: 'Riverton', st: 'WY' },
  { code: 'CAR', name: 'Caribou', st: 'ME' },
  { code: 'GYX', name: 'Gray/Portland', st: 'ME' },
  { code: 'BOX', name: 'Boston', st: 'MA' },
  { code: 'PHI', name: 'Mount Holly/Philadelphia', st: 'NJ' },
  { code: 'ALY', name: 'Albany', st: 'NY' },
  { code: 'BGM', name: 'Binghamton', st: 'NY' },
  { code: 'BUF', name: 'Buffalo', st: 'NY' },
  { code: 'OKX', name: 'New York/Upton', st: 'NY' },
  { code: 'MHX', name: 'Newport/Morehead City', st: 'NC' },
  { code: 'RAH', name: 'Raleigh', st: 'NC' },
  { code: 'ILM', name: 'Wilmington', st: 'NC' },
  { code: 'CLE', name: 'Cleveland', st: 'OH' },
  { code: 'ILN', name: 'Wilmington', st: 'OH' },
  { code: 'PBZ', name: 'Pittsburgh', st: 'PA' },
  { code: 'CTP', name: 'State College', st: 'PA' },
  { code: 'CHS', name: 'Charleston', st: 'SC' },
  { code: 'CAE', name: 'Columbia', st: 'SC' },
  { code: 'GSP', name: 'Greenville-Spartanburg', st: 'SC' },
  { code: 'BTV', name: 'Burlington', st: 'VT' },
  { code: 'LWX', name: 'Baltimore/Washington', st: 'VA' },
  { code: 'RNK', name: 'Blacksburg', st: 'VA' },
  { code: 'AKQ', name: 'Wakefield', st: 'VA' },
  { code: 'RLX', name: 'Charleston', st: 'WV' },
  { code: 'GUM', name: 'Tiyan', st: 'GU' },
  { code: 'HFO', name: 'Honolulu', st: 'HI' },
  { code: 'BMX', name: 'Birmingham', st: 'AL' },
  { code: 'HUN', name: 'Huntsville', st: 'AL' },
  { code: 'MOB', name: 'Mobile/Pensacola', st: 'AL' },
  { code: 'LZK', name: 'North Little Rock', st: 'AR' },
  { code: 'JAX', name: 'Jacksonville', st: 'FL' },
  { code: 'KEY', name: 'Key West', st: 'FL' },
  { code: 'MLB', name: 'Melbourne', st: 'FL' },
  { code: 'MFL', name: 'Miami', st: 'FL' },
  { code: 'TAE', name: 'Tallahassee', st: 'FL' },
  { code: 'TBW', name: 'Tampa', st: 'FL' },
  { code: 'FFC', name: 'Peachtree City/Atlanta', st: 'GA' },
  { code: 'LCH', name: 'Lake Charles', st: 'LA' },
  { code: 'LIX', name: 'New Orleans/Baton Rouge', st: 'LA' },
  { code: 'SHV', name: 'Shreveport', st: 'LA' },
  { code: 'JAN', name: 'Jackson', st: 'MS' },
  { code: 'ABQ', name: 'Albuquerque', st: 'NM' },
  { code: 'OUN', name: 'Norman/Oklahoma City', st: 'OK' },
  { code: 'TSA', name: 'Tulsa', st: 'OK' },
  { code: 'SJU', name: 'San Juan', st: 'PR' },
  { code: 'MEG', name: 'Memphis', st: 'TN' },
  { code: 'MRX', name: 'Morristown/Knoxville', st: 'TN' },
  { code: 'OHX', name: 'Nashville', st: 'TN' },
  { code: 'AMA', name: 'Amarillo', st: 'TX' },
  { code: 'EWX', name: 'Austin/San Antonio', st: 'TX' },
  { code: 'BRO', name: 'Brownsville', st: 'TX' },
  { code: 'CRP', name: 'Corpus Christi', st: 'TX' },
  { code: 'EPZ', name: 'El Paso', st: 'TX' },
  { code: 'FWD', name: 'Fort Worth/Dallas', st: 'TX' },
  { code: 'HGX', name: 'Houston/Galveston', st: 'TX' },
  { code: 'LUB', name: 'Lubbock', st: 'TX' },
  { code: 'MAF', name: 'Midland/Odessa', st: 'ATX' },
  { code: 'SJT', name: 'San Angelo', st: 'TX' },
  { code: 'FGZ', name: 'Flagstaff', st: 'AZ' },
  { code: 'PSR', name: 'Phoenix', st: 'AZ' },
  { code: 'TWC', name: 'Tucson', st: 'AZ' },
  { code: 'EKA', name: 'Eureka', st: 'CA' },
  { code: 'LOX', name: 'Los Angeles/Oxnard', st: 'CA' },
  { code: 'STO', name: 'Sacramento', st: 'CA' },
  { code: 'SGX', name: 'San Diego', st: 'CA' },
  { code: 'MTR', name: 'San Francisco Bay Area/Monterey', st: 'CA' },
  { code: 'HNX', name: 'San Joaquin Valley/Hanford', st: 'CA' },
  { code: 'BOI', name: 'Boise', st: 'ID' },
  { code: 'PIH', name: 'Pocatello', st: 'ID' },
  { code: 'BYZ', name: 'Billings', st: 'MT' },
  { code: 'GGW', name: 'Glasgow', st: 'MT' },
  { code: 'TFX', name: 'Great Falls', st: 'MT' },
  { code: 'MSO', name: 'Missoula', st: 'MT' },
  { code: 'LKN', name: 'Elko', st: 'NV' },
  { code: 'VEF', name: 'Las Vegas', st: 'NV' },
  { code: 'REV', name: 'Reno', st: 'NV' },
  { code: 'MFR', name: 'Medford', st: 'OR' },
  { code: 'PDT', name: 'Pendleton', st: 'OR' },
  { code: 'PQR', name: 'Portland', st: 'OR' },
  { code: 'SLC', name: 'Salt Lake City', st: 'UT' },
  { code: 'SEW', name: 'Seattle', st: 'WA' },
  { code: 'OTX', name: 'Spokane', st: 'WA' }
];

var menu = {
  filters: [{
    id: "location",
    text: "Location",
    subtext: "",
    children: [{
      id: "distance",
      text: "Distance",
      hidden: true,
      subtext: "Within {value} km",
      value: 0,
      min: 0,
      max: 200,
      minTemplate: "No distance filter",
      maxTemplate: "",
      template: "Within {value} km"
    }, {
      id: "allcwa",
      text: "CWA - Show All",
      subtext: "Show all CWA events",
      value: true,
      fn: showAllCwa
    }, {
      id: "resetcwa",
      text: "CWA - Reset Whitelist",
      subtext: "Deselect all whitelist CWAs",
      fn: resetCwas
    }, {
      id: "cwa",
      text: "CWA - Whitelist",
      subtext: "Display specific CWAs",
      init: whitelistInit,
      children: [{
        "id": "afc",
        "text": "AFC",
        "subtext": "Anchorage, AK",
        "value": false
      }, {
        "id": "afg",
        "text": "AFG",
        "subtext": "Fairbanks, AK",
        "value": false
      }, {
        "id": "ajk",
        "text": "AJK",
        "subtext": "Juneau, AK",
        "value": false
      }, {
        "id": "bmx",
        "text": "BMX",
        "subtext": "Birmingham, AL",
        "value": false
      }, {
        "id": "hun",
        "text": "HUN",
        "subtext": "Huntsville, AL",
        "value": false
      }, {
        "id": "mob",
        "text": "MOB",
        "subtext": "Mobile/Pensacola, AL",
        "value": false
      }, {
        "id": "lzk",
        "text": "LZK",
        "subtext": "North Little Rock, AR",
        "value": false
      }, {
        "id": "maf",
        "text": "MAF",
        "subtext": "Midland/Odessa, ATX",
        "value": false
      }, {
        "id": "fgz",
        "text": "FGZ",
        "subtext": "Flagstaff, AZ",
        "value": false
      }, {
        "id": "psr",
        "text": "PSR",
        "subtext": "Phoenix, AZ",
        "value": false
      }, {
        "id": "twc",
        "text": "TWC",
        "subtext": "Tucson, AZ",
        "value": false
      }, {
        "id": "eka",
        "text": "EKA",
        "subtext": "Eureka, CA",
        "value": false
      }, {
        "id": "hnx",
        "text": "HNX",
        "subtext": "San Joaquin Valley/Hanford, CA",
        "value": false
      }, {
        "id": "lox",
        "text": "LOX",
        "subtext": "Los Angeles/Oxnard, CA",
        "value": false
      }, {
        "id": "mtr",
        "text": "MTR",
        "subtext": "San Francisco Bay Area/Monterey, CA",
        "value": false
      }, {
        "id": "sgx",
        "text": "SGX",
        "subtext": "San Diego, CA",
        "value": false
      }, {
        "id": "sto",
        "text": "STO",
        "subtext": "Sacramento, CA",
        "value": false
      }, {
        "id": "bou",
        "text": "BOU",
        "subtext": "Denver/Boulder, CO",
        "value": false
      }, {
        "id": "gjt",
        "text": "GJT",
        "subtext": "Grand Junction, CO",
        "value": false
      }, {
        "id": "pub",
        "text": "PUB",
        "subtext": "Pueblo, CO",
        "value": false
      }, {
        "id": "jax",
        "text": "JAX",
        "subtext": "Jacksonville, FL",
        "value": false
      }, {
        "id": "key",
        "text": "KEY",
        "subtext": "Key West, FL",
        "value": false
      }, {
        "id": "mfl",
        "text": "MFL",
        "subtext": "Miami, FL",
        "value": false
      }, {
        "id": "mlb",
        "text": "MLB",
        "subtext": "Melbourne, FL",
        "value": false
      }, {
        "id": "tae",
        "text": "TAE",
        "subtext": "Tallahassee, FL",
        "value": false
      }, {
        "id": "tbw",
        "text": "TBW",
        "subtext": "Tampa, FL",
        "value": false
      }, {
        "id": "ffc",
        "text": "FFC",
        "subtext": "Peachtree City/Atlanta, GA",
        "value": false
      }, {
        "id": "gum",
        "text": "GUM",
        "subtext": "Tiyan, GU",
        "value": false
      }, {
        "id": "hfo",
        "text": "HFO",
        "subtext": "Honolulu, HI",
        "value": false
      }, {
        "id": "dmx",
        "text": "DMX",
        "subtext": "Des Moines, IA",
        "value": false
      }, {
        "id": "dvn",
        "text": "DVN",
        "subtext": "Davenport/Quad Cities, IA",
        "value": false
      }, {
        "id": "boi",
        "text": "BOI",
        "subtext": "Boise, ID",
        "value": false
      }, {
        "id": "pih",
        "text": "PIH",
        "subtext": "Pocatello, ID",
        "value": false
      }, {
        "id": "ilx",
        "text": "ILX",
        "subtext": "Lincoln, IL",
        "value": false
      }, {
        "id": "lot",
        "text": "LOT",
        "subtext": "Chicago, IL",
        "value": false
      }, {
        "id": "ind",
        "text": "IND",
        "subtext": "Indianapolis, IN",
        "value": false
      }, {
        "id": "iwx",
        "text": "IWX",
        "subtext": "Northern Indiana, IN",
        "value": false
      }, {
        "id": "ddc",
        "text": "DDC",
        "subtext": "Dodge City, KS",
        "value": false
      }, {
        "id": "gld",
        "text": "GLD",
        "subtext": "Goodland, KS",
        "value": false
      }, {
        "id": "ict",
        "text": "ICT",
        "subtext": "Wichita, KS",
        "value": false
      }, {
        "id": "top",
        "text": "TOP",
        "subtext": "Topeka, KS",
        "value": false
      }, {
        "id": "jkl",
        "text": "JKL",
        "subtext": "Jackson, KY",
        "value": false
      }, {
        "id": "lmk",
        "text": "LMK",
        "subtext": "Louisville, KY",
        "value": false
      }, {
        "id": "pah",
        "text": "PAH",
        "subtext": "Paducah, KY",
        "value": false
      }, {
        "id": "lch",
        "text": "LCH",
        "subtext": "Lake Charles, LA",
        "value": false
      }, {
        "id": "lix",
        "text": "LIX",
        "subtext": "New Orleans/Baton Rouge, LA",
        "value": false
      }, {
        "id": "shv",
        "text": "SHV",
        "subtext": "Shreveport, LA",
        "value": false
      }, {
        "id": "box",
        "text": "BOX",
        "subtext": "Boston, MA",
        "value": false
      }, {
        "id": "car",
        "text": "CAR",
        "subtext": "Caribou, ME",
        "value": false
      }, {
        "id": "gyx",
        "text": "GYX",
        "subtext": "Gray/Portland, ME",
        "value": false
      }, {
        "id": "apx",
        "text": "APX",
        "subtext": "Gaylord, MI",
        "value": false
      }, {
        "id": "dtx",
        "text": "DTX",
        "subtext": "Detroit/Pontiac, MI",
        "value": false
      }, {
        "id": "grr",
        "text": "GRR",
        "subtext": "Grand Rapids, MI",
        "value": false
      }, {
        "id": "mqt",
        "text": "MQT",
        "subtext": "Marquette, MI",
        "value": false
      }, {
        "id": "dlh",
        "text": "DLH",
        "subtext": "Duluth, MN",
        "value": false
      }, {
        "id": "mpx",
        "text": "MPX",
        "subtext": "Minneapolis/Twin Cities, MN",
        "value": false
      }, {
        "id": "eax",
        "text": "EAX",
        "subtext": "Kansas City/Pleasant Hill, MO",
        "value": false
      }, {
        "id": "lsx",
        "text": "LSX",
        "subtext": "St. Louis, MO",
        "value": false
      }, {
        "id": "sgf",
        "text": "SGF",
        "subtext": "Springfield, MO",
        "value": false
      }, {
        "id": "jan",
        "text": "JAN",
        "subtext": "Jackson, MS",
        "value": false
      }, {
        "id": "byz",
        "text": "BYZ",
        "subtext": "Billings, MT",
        "value": false
      }, {
        "id": "ggw",
        "text": "GGW",
        "subtext": "Glasgow, MT",
        "value": false
      }, {
        "id": "mso",
        "text": "MSO",
        "subtext": "Missoula, MT",
        "value": false
      }, {
        "id": "tfx",
        "text": "TFX",
        "subtext": "Great Falls, MT",
        "value": false
      }, {
        "id": "ilm",
        "text": "ILM",
        "subtext": "Wilmington, NC",
        "value": false
      }, {
        "id": "mhx",
        "text": "MHX",
        "subtext": "Newport/Morehead City, NC",
        "value": false
      }, {
        "id": "rah",
        "text": "RAH",
        "subtext": "Raleigh, NC",
        "value": false
      }, {
        "id": "bis",
        "text": "BIS",
        "subtext": "Bismarck, ND",
        "value": false
      }, {
        "id": "fgf",
        "text": "FGF",
        "subtext": "Grand Forks, ND",
        "value": false
      }, {
        "id": "gid",
        "text": "GID",
        "subtext": "Hastings, NE",
        "value": false
      }, {
        "id": "lbf",
        "text": "LBF",
        "subtext": "North Platte, NE",
        "value": false
      }, {
        "id": "oax",
        "text": "OAX",
        "subtext": "Omaha/Valley, NE",
        "value": false
      }, {
        "id": "phi",
        "text": "PHI",
        "subtext": "Mount Holly/Philadelphia, NJ",
        "value": false
      }, {
        "id": "abq",
        "text": "ABQ",
        "subtext": "Albuquerque, NM",
        "value": false
      }, {
        "id": "lkn",
        "text": "LKN",
        "subtext": "Elko, NV",
        "value": false
      }, {
        "id": "rev",
        "text": "REV",
        "subtext": "Reno, NV",
        "value": false
      }, {
        "id": "vef",
        "text": "VEF",
        "subtext": "Las Vegas, NV",
        "value": false
      }, {
        "id": "aly",
        "text": "ALY",
        "subtext": "Albany, NY",
        "value": false
      }, {
        "id": "bgm",
        "text": "BGM",
        "subtext": "Binghamton, NY",
        "value": false
      }, {
        "id": "buf",
        "text": "BUF",
        "subtext": "Buffalo, NY",
        "value": false
      }, {
        "id": "okx",
        "text": "OKX",
        "subtext": "New York/Upton, NY",
        "value": false
      }, {
        "id": "cle",
        "text": "CLE",
        "subtext": "Cleveland, OH",
        "value": false
      }, {
        "id": "iln",
        "text": "ILN",
        "subtext": "Wilmington, OH",
        "value": false
      }, {
        "id": "oun",
        "text": "OUN",
        "subtext": "Norman/Oklahoma City, OK",
        "value": false
      }, {
        "id": "tsa",
        "text": "TSA",
        "subtext": "Tulsa, OK",
        "value": false
      }, {
        "id": "mfr",
        "text": "MFR",
        "subtext": "Medford, OR",
        "value": false
      }, {
        "id": "pdt",
        "text": "PDT",
        "subtext": "Pendleton, OR",
        "value": false
      }, {
        "id": "pqr",
        "text": "PQR",
        "subtext": "Portland, OR",
        "value": false
      }, {
        "id": "ctp",
        "text": "CTP",
        "subtext": "State College, PA",
        "value": false
      }, {
        "id": "pbz",
        "text": "PBZ",
        "subtext": "Pittsburgh, PA",
        "value": false
      }, {
        "id": "sju",
        "text": "SJU",
        "subtext": "San Juan, PR",
        "value": false
      }, {
        "id": "cae",
        "text": "CAE",
        "subtext": "Columbia, SC",
        "value": false
      }, {
        "id": "chs",
        "text": "CHS",
        "subtext": "Charleston, SC",
        "value": false
      }, {
        "id": "gsp",
        "text": "GSP",
        "subtext": "Greenville-Spartanburg, SC",
        "value": false
      }, {
        "id": "abr",
        "text": "ABR",
        "subtext": "Aberdeen, SD",
        "value": false
      }, {
        "id": "fsd",
        "text": "FSD",
        "subtext": "Sioux Falls, SD",
        "value": false
      }, {
        "id": "unr",
        "text": "UNR",
        "subtext": "Rapid City, SD",
        "value": false
      }, {
        "id": "meg",
        "text": "MEG",
        "subtext": "Memphis, TN",
        "value": false
      }, {
        "id": "mrx",
        "text": "MRX",
        "subtext": "Morristown/Knoxville, TN",
        "value": false
      }, {
        "id": "ohx",
        "text": "OHX",
        "subtext": "Nashville, TN",
        "value": false
      }, {
        "id": "ama",
        "text": "AMA",
        "subtext": "Amarillo, TX",
        "value": false
      }, {
        "id": "bro",
        "text": "BRO",
        "subtext": "Brownsville, TX",
        "value": false
      }, {
        "id": "crp",
        "text": "CRP",
        "subtext": "Corpus Christi, TX",
        "value": false
      }, {
        "id": "epz",
        "text": "EPZ",
        "subtext": "El Paso, TX",
        "value": false
      }, {
        "id": "ewx",
        "text": "EWX",
        "subtext": "Austin/San Antonio, TX",
        "value": false
      }, {
        "id": "fwd",
        "text": "FWD",
        "subtext": "Fort Worth/Dallas, TX",
        "value": false
      }, {
        "id": "hgx",
        "text": "HGX",
        "subtext": "Houston/Galveston, TX",
        "value": false
      }, {
        "id": "lub",
        "text": "LUB",
        "subtext": "Lubbock, TX",
        "value": false
      }, {
        "id": "sjt",
        "text": "SJT",
        "subtext": "San Angelo, TX",
        "value": false
      }, {
        "id": "slc",
        "text": "SLC",
        "subtext": "Salt Lake City, UT",
        "value": false
      }, {
        "id": "akq",
        "text": "AKQ",
        "subtext": "Wakefield, VA",
        "value": false
      }, {
        "id": "lwx",
        "text": "LWX",
        "subtext": "Baltimore/Washington, VA",
        "value": false
      }, {
        "id": "rnk",
        "text": "RNK",
        "subtext": "Blacksburg, VA",
        "value": false
      }, {
        "id": "btv",
        "text": "BTV",
        "subtext": "Burlington, VT",
        "value": false
      }, {
        "id": "otx",
        "text": "OTX",
        "subtext": "Spokane, WA",
        "value": false
      }, {
        "id": "sew",
        "text": "SEW",
        "subtext": "Seattle, WA",
        "value": false
      }, {
        "id": "arx",
        "text": "ARX",
        "subtext": "La Crosse, WI",
        "value": false
      }, {
        "id": "grb",
        "text": "GRB",
        "subtext": "Green Bay, WI",
        "value": false
      }, {
        "id": "mkx",
        "text": "MKX",
        "subtext": "Milwaukee/Sullivan, WI",
        "value": false
      }, {
        "id": "rlx",
        "text": "RLX",
        "subtext": "Charleston, WV",
        "value": false
      }, {
        "id": "cys",
        "text": "CYS",
        "subtext": "Cheyenne, WY",
        "value": false
      }, {
        "id": "riw",
        "text": "RIW",
        "subtext": "Riverton, WY",
        "value": false
      }]
    }]
  }, {
    id: "time",
    text: "Time",
    subtext: "Last {value} minutes",
    value: 0,
    min: 0,
    max: 120,
    minTemplate: "No time filter",
    maxTemplate: "",
    template: "Last {value} minutes"
  }]
};

/*, {
    id: "source",
    text: "Event Source",
    subtext: "",
    children: [{
      id: "iem",
      text: "IEM",
      subtext: "Iowa Environment Mesonet",
      value: false
    }]
  }, {
    id: 'product',
    text: 'Event Type',
    subtext: 'Show all by default',
    children: [
      {
        id: "mww",
        text: "MWW",
        subtext: "Marine Weather Message",
        source: 'iem',
        value: false
      },
      {
        id: "afd",
        text: "AFD",
        subtext: "Area Forecast Discussion",
        source: 'iem',
        value: false
      },
      {
        id: "svr",
        text: "SVR",
        subtext: "Severe Thunderstorm Warning",
        source: 'iem',
        value: false
      },
      {
        id: "svs",
        text: "SVS",
        subtext: "Severe Weather Statement",
        source: 'iem',
        value: false
      },
      {
        id: "ffa",
        text: "FFA",
        subtext: "Flash Flood Watch",
        source: 'iem',
        value: false
      },
      {
        id: "ffw",
        text: "FFW",
        subtext: "Flash Flood Warning",
        source: 'iem',
        value: false
      },
      {
        id: "lsr",
        text: "LSR",
        subtext: "Local Storm Report",
        source: 'iem',
        value: false
      },
      {
        id: "now",
        text: "NOW",
        subtext: "Short Term Forecast",
        source: 'iem',
        value: false
      },
      {
        id: "tor",
        text: "TOR",
        subtext: "Tornado Warning",
        source: 'iem',
        value: false
      }
    ]
  }, {
    id: "advanced",
    text: "Advanced",
    hidden: true,
    subtext: "",
    children: [
      {
        id: 'iem',
        text: 'Test',
        source: 'iem',
        value: false,
        processor: function(event) {
          console.log('Processing pilot report');
          return !event.data.product_id && event.data.message.indexOf('pilot report') > -1;
        }
      }
    ]
  }*/

function renderMenu(menuModel, position, updateFunction) {
  function buildElement(tag, options) {
    var el = document.createElement(tag);
    if (options) {
      if (options.classes) {
        if (Array.isArray(options.classes)) {
          options.classes.forEach(function(className) {
            el.classList.add(className);
          });
        } else {
          el.classList.add(options.classes);
        }
      }
      if (options.html) {
        el.innerHTML = options.html;
      }
      if (options.value) {
        el.value = options.value;
      }
      if (Array.isArray(options.attributes)) {
          options.attributes.forEach(function(attr) {
            for (var key in attr) {
              if (attr.hasOwnProperty(key)) {
                el.setAttribute(key, attr[key]);
              }
            }
          });
      }
      if (options.parent) {
        options.parent.appendChild(el);
      }
    }
    return el;
  }

  function handleSliderChange(item, value, itemSubtext) {
    value = parseInt(value);
    item.value = value;
    var template = item.template;
    switch (value) {
      case 0:
        template = item.minTemplate || item.template;
        break;
      case 100:
        template = item.maxTemplate || item.template;
        break;
    }
    if (itemSubtext && template) {
      itemSubtext.innerHTML = template.replace('{value}', value);
    }
  }

  if (!menuModel || !Array.isArray(menuModel)) throw new Error('First argument must be an array.');
  if (!position || position.nodeType !== 1) throw new Error('Second argument must be a DOM element.');
  if (updateFunction && typeof updateFunction !== 'function') throw new Error('Third argument must be a function.');

  var menuRootElement = buildElement('ol', { classes: 'menu' });

  function createItem(item, parentElement, options) {
    if (item.hidden) return;
    var itemSubtext;
    parentElement = parentElement || menuRootElement;
    var listElement = buildElement('li', { classes: parentElement === menuRootElement ? 'root' : '',  parent: parentElement });
    var outerElement = buildElement('div', { classes: 'outer', parent: listElement });
    var innerElement = buildElement('div', { classes: 'inner', parent: outerElement });

    if (item.text) {
      buildElement('div', { classes: 'text', html: item.text, parent: innerElement });
    }
    if (item.subtext) {
      itemSubtext = buildElement('div', { classes: 'subtext', html: item.subtext, parent: innerElement });
    }

    switch (typeof item.value) {
      case 'boolean':
        var id = options.parentId + '-' + item.id;
        var html = '<input id="' + id + '" ' + (item.value ? 'checked' : '') + ' type="checkbox"><label class="onoffswitch-label" for="' + id + '"></label>';
        var toggle = buildElement('div', { classes: 'switch', html: html, parent: innerElement });
        toggle.addEventListener('change', function() {
          item.value = !item.value;
          if (updateFunction) updateFunction();
          if (item.fn) item.fn(listElement, item.value);
        });
        break;
      case 'number':
        var slider = buildElement('input', {
          classes: 'slider', parent: innerElement,
          attributes: [ { min: item.min }, { max: item.max }],
          value: item.value.toString()
        });
        slider.type = 'range';
        slider.addEventListener('change', function() {
          handleSliderChange(item, slider.value, itemSubtext);
          if (updateFunction) updateFunction();
        });
        slider.addEventListener('input', function() {
          handleSliderChange(item, slider.value, itemSubtext);
          if (updateFunction) updateFunction();
        });
        handleSliderChange(item, item.value, itemSubtext);
        break;
      case 'undefined':
        // Menus with children won't have a value, treat the ones without children as buttons
        if (!item.children && item.fn) listElement.addEventListener('click', item.fn);
        break;
    }

    if (Array.isArray(item.children)) {
      listElement.classList.add('parent');
      item.children.forEach(function(child) { createItem(child, buildElement('ol', { parent: listElement }), { parentId: item.id }); });
    }

    listElement.addEventListener('click', function(e) {
      if (Array.isArray(item.children)) {
        this.classList.toggle('open');
      }
      e.stopPropagation();
    });

    if (item.init) item.init(listElement);
  }

  menuModel.forEach(function(item) {
    createItem(item);
  });

  let existingMenu = position.querySelector('ol.menu');
  if (existingMenu !== null) position.removeChild(existingMenu);
  position.appendChild(menuRootElement);
}

var cbId = new Date().getTime();
var tempElement, eventsElement;

// START PROTOTYPE EXTENSIONS
Number.prototype.toRad = function() {
  return this * 0.017453292519943295;
};

String.prototype.hashCode = function() {
  var hash = 0, i, chr, len;
  if (this.length === 0) return hash;
  for (i = 0, len = this.length; i < len; i++) {
    chr   = this.charCodeAt(i);
    hash  = ((hash << 5) - hash) + chr;
    hash |= 0; // Convert to 32bit integer
  }
  return hash;
};

NodeList.prototype.forEach = Array.prototype.forEach;
NodeList.prototype.some = Array.prototype.some;
// END PROTOTYPE EXTENSIONS

function getNowTicks() {
  return new Date().getTime();
}

function getZuluTime() {
  var d = new Date();
  return (d.getUTCHours() < 10 ? '0' : '') + d.getUTCHours() + ':' + (d.getMinutes() < 10 ? '0' : '') + d.getMinutes() + 'Z';
}

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function getJSONP(url, cb) {
  cbId++;
  var cbName = 'jsonp' + cbId;
  window[cbName] = function(data) {
    cb(data);
    window[cbName] = undefined;
    try {
      delete window[cbName];
    } catch (e) {
      // Swallow errors
    }
  }
  var script = document.createElement('script');
  var separator = url.indexOf('?') > -1 ? '&' : '?';
  script.src = url + separator + 'callback=' + cbName;
  document.head.appendChild(script);
  document.head.removeChild(script);
}

function getTextFromHtml(html) {
  tempElement.innerHTML = html;
  return tempElement.textContent;
}

function appendElement(target, details) {
  var newElement;
  details = !Array.isArray(details) ? [details] : details;
  details.forEach(function(detail) {
    newElement = document.createElement(detail.type);
    if (detail.text) {
      // TODO do I need both of these
      newElement.innerHTML = detail.text;
    } else if (detail.html) {
      newElement.innerHTML = detail.html;
    }
    if (detail.attr) {
      detail.attr.forEach(function(attr) {
        newElement.setAttribute(attr[0], attr[1]);
      });
    }
    if (detail.classes) {
      detail.classes.forEach(function(className) {
        newElement.classList.add(className);
      });
    }
    target.appendChild(newElement);
  });
}

function onReady() {
  eventsElement = document.getElementById('events');
  tempElement = document.createElement('temp');
  getIemData();
  clockElement.textContent = getZuluTime();
  setInterval(function() {
    clockElement.textContent = getZuluTime();
  }, 1000);
}

function isPointInPoly(poly, pt) {
  for (var c = false, i = -1, l = poly.length, j = l - 1; ++i < l; j = i)
    ((poly[i].y <= pt.y && pt.y < poly[j].y) || (poly[j].y <= pt.y && pt.y < poly[i].y)) && (pt.x < (poly[j].x - poly[i].x) * (pt.y - poly[i].y) / (poly[j].y - poly[i].y) + poly[i].x) && (c = !c);
  return c;
}

function haversineDistance(lat1, lon1, lat2, lon2) {
  // NOTE: all units in km
  var R = 6371;
  var x1 = lat2 - lat1;
  var dLat = x1.toRad();
  var x2 = lon2 - lon1;
  var dLon = x2.toRad();
  var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1.toRad()) * Math.cos(lat2.toRad()) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return R * c;
}

var sort_by = function(field, reverse, primer) {
   var key = primer ?
       function(x) {return primer(x[field])} :
       function(x) {return x[field]};
   reverse = !reverse ? 1 : -1;

   return function (a, b) {
       return a = key(a), b = key(b), reverse * ((a > b) - (b > a));
     }
}

function padZero(value) {
  if (typeof value === 'string') {
    value = parseInt(value);
  }
  return (value < 10) ? '0' + value : value.toString();
}

function formatIemTime(ts) {
  var time = {};
  var dt = new Date(Date.parse(ts));
  var diff = getNowTicks() - dt.getTime();

  if (diff < 1000 * 60) {
    time.ago = '< 1 min';
  } else if (diff < 1000 * 60 * 60) {
    time.ago = Math.floor(diff / 1000 / 60) + ' min';
  } else {
    time.ago = Math.floor(diff / 1000 / 60 / 60) + ' hr';
  }

  return time;
}

if (document.readyState !== 'loading') {
  onReady();
} else {
  document.addEventListener('DOMContentLoaded', onReady);
}

// TODO check for supported browsers, need localStorage
const supportsTTS = typeof window.speechSynthesis === 'object';

// DEFAULTS
const ttsPitch = 1;
const ttsRate = 1;
const hailAlertThreshold = 2;

// ELEMENTS
const messageOverlayElement = document.getElementById('message-overlay');
const imageOverlayElement = document.getElementById('image-overlay');
const pageElements = document.querySelectorAll('.page');
const titleElement = document.querySelectorAll('.header-title')[0];
const eventListElement = document.querySelectorAll('#events > ul')[0];
const clockElement = document.getElementById('tray-clock');

// GLOBALS
let filteredCwas = [];
const iya = {};

// SOUNDS
const chime = new Audio('audio/chime.mp3');
const eas = new Audio('audio/eas.mp3');

// STORE
const maxEvents = 1000;
let store;

// SPEECH
const synth = window.speechSynthesis;

function speak(text) {
  // TODO multiple voice support
  if (!supportsTTS || !text) return;
  const utter = new SpeechSynthesisUtterance(text);
  utter.pitch = ttsPitch;
  utter.rate = ttsRate;
  synth.speak(utter);
}

function updateCWAWhitelist() {
  // Pre-compute filtered CWAs
  if (!cwafilters) return;
  cwaWhitelist = cwafilters.filter((f) => f.value).map((f) => f.id.toLowerCase());
}

function filterEvent(event) {
  let filtered = false;

  // Location filters
  // CWAs
  if (event.data.office && !allcwa.value && cwaNames.indexOf(event.data.office) > -1) {
    const displayCwas = getCwas();
    filtered = displayCwas.indexOf(event.data.office.toLowerCase()) === -1;
  }

  // Time filter
  if (timeFilters.value &&
    ((new Date().getTime() - new Date(event.isoTime).getTime()) / 1000 / 60) > timeFilters.value) {
    filtered = true;
  }

  // Source filters
  /*sourceFilters.children.forEach(function (filter) {
    if (filter.value && filter.source === event.source) {
      filtered = true;
    }
  });*/

  // Product filters
  /*filters.product.children.forEach(function (filter) {
    if (!filter.value || filter.source !== event.source) return;
    filtered = event.display && (event.data.code.toLowerCase() !== filter.id.toLowerCase());
  });*/

  // Iterate through Advanced filters
  /*filters.advanced.children.forEach(function (filter) {
    if (!filter.value || filter.source !== event.source) return;
    filtered = filtered && !filter.processor(event);
  });*/

  return filtered;
}

function processStore() {
  if (store.events.length > maxEvents) {
    store.events = store.events.slice(0, maxEvents);
  }

  // TODO clearing out the page is slow, maybe should just append unless there were filter changes
  eventListElement.innerHTML = '';

  // Filter events
  for (let i = store.events.length - 1; i > -1; i--) {
    if (!filterEvent(store.events[i])) {
      if (supportsTTS && iya.settings.textToSpeech) {
        processTTSEvent(store.events[i]);
      }
      renderEvent(store.events[i]);
    }
  }
}

function lsrTTSReplace(text) {
  let newText = text.replace('KS]', 'Kansas]');
  newText = newText.replace('IA]', 'Iowa]');
  newText = newText.replace('NE]', 'Nebraska]');
  newText = newText.replace('TX]', 'Texas]');
  newText = newText.replace(/TSTM WND GST/g, 'Thunderstorm Wind Gust');
  return newText;
}

// TODO Either add a ton of error handling here, or try/catch it
function processTTSEvent(event) {
  const ttsLines = [];
  let notify = false;
  const watches = [];
  let outlookSeen = false;
  
  if (event.processed || !event.data || !event.data.text) return;
  let text = event.data.text;
  event.processed = true;
  
  if (event.data.code === 'PTS' && event.data.office === 'DY1' && !outlookSeen) {
    ttsLines.push('Storm Prediction Center has issued a new day 1 convective outlook');
    notify = true;
    outlookSeen = true;
  } else if (event.data.code === 'SWO' && event.data.office === 'MCD') {
    // SPC Mesoscale Discussion
    ttsLines.push(text);
    notify = true;
  } else if (event.data.code === 'TOR') {
    const cwa = cwas.find((x) => x.code === event.data.office);
    if (cwa) {
      let counties = text.substring(text.indexOf('] for') + 6);
      counties = counties.substring(0, counties.indexOf(' ['));
      const countyList = counties.split(',');
      if (countyList.length > 1) {
        countyList.splice(countyList.length - 1, 0, 'and');
        counties = countyList.join();
      }
      let source = text.substring(text.indexOf('[tornado:'));
      source = source.substring(10, source.indexOf(','));
      let description = text.substring(text.indexOf('*') + 1);
      const timeMatch = description.match(/AT (.*) [AP]M/);
      if (timeMatch && timeMatch.length === 2) {
        const firstPart = timeMatch[1].length === 3 ? 1 : 2;
        const newTime = `At ${timeMatch[1].slice(0, firstPart)}:${timeMatch[1].slice(firstPart)}`;
        description = description.replace(timeMatch[0], newTime);
      }
      let newText = `NWS ${cwa.name} has issued a tornado warning for ${counties} counties.`;
      newText += ` Source: ${source}. ${description}`;
      notify = true;
      ttsLines.push(newText);
    }
  } else if (event.data.code === 'LSR') {
    if (text.indexOf('reports HAIL') > 0) {
      text = text.substring(text.indexOf('['));
      text = text.replace('Co,', 'County,');
      text = lsrTTSReplace(text);
      const matches = text.match(/\(.*\)/);
      if (matches && matches.length) {
        let size = matches[0].replace('(E', '').replace(')', '')
          .replace(' INCH', '').replace('.00', '');
        size = parseFloat(size);
        if (size >= hailAlertThreshold) {
          text = `${text.substring(0, text.indexOf(' reports HAIL'))} reports ${size} inch hail`;
          ttsLines.push(text);
          notify = true;
        }
      }
    }
  } else if (!event.data.product_id && event.data.message.indexOf('http://www.spc.noaa.gov/products/watch') > -1
    && event.data.message.indexOf('Storm Prediction Center issues') > -1) {
    text = text.replace('TSTM', 'THUNDERSTORM');
    text = text.replace('watchtill', 'watch till');
    text = text.replace('(Watch Quickview)', '');
    watches.push(text);
  }

  let watchDelay = 0;
  if (watches.length) {
    watchDelay = 24 * 1000;
    eas.play();
  }
  setTimeout(() => {
    watches.forEach(watch => {
      setTimeout(() => speak(watch), 3000);
    });
  }, watchDelay);
  
  if (notify) chime.play();
  
  // TODO delay between lines
  setTimeout(() => {
    ttsLines.forEach((line) => speak(line));
  }, 2000);
}

// TODO are stores only holding events, or other things?
function updateStore(events) {
  if (!events || !events.length) return;
  store.events = store.events.concat(events);
  processStore();
}

function formatTsAgo(ts) {
  let timeLabel = 'N/A';
  const diff = (new Date().getTime() - new Date(ts).getTime()) / 1000;
  if (diff < 60) {
    timeLabel = '< 1m';
  } else if (diff < 60 * 60) {
    timeLabel = `${Math.floor(diff / 60)}m`;
  } else {
    timeLabel = `${(diff / 60 / 60).toFixed(1)}h`;
  }
  return timeLabel;
}

function renderEvent(event) {
  var badgeHtml, className;
  var data = event.data;
  var badgeEl = document.createElement('div');
  var li = document.createElement('li');
  if (data.code) {
    li.classList.add(data.code.toLowerCase());
  }
  data.codeText = data.codeText || 'N/A';
  badgeEl.classList.add('badge');
  if (data.code === 'LSR') {
    var icon = 'unknown';
    if (data.text.indexOf('SNOW') > -1) {
      className = 'snow';
      icon = 'snow';
    } else if (data.text.indexOf('WND DMG') > -1 || data.text.indexOf('WND GST') > -1) {
      className = 'wind';
      icon = 'wind';
    } else if (data.text.indexOf('TORNADO') > -1) {
      className = 'tor';
      icon = 'tornado';
    } else if (data.text.indexOf('FLOOD') > -1) {
      className = 'flood';
      icon = 'flood';
    }
    badgeHtml = `<div class="badge"><img src="icons/${icon}.svg"></img></div>`;
    li.classList.add(className);
  } else {
    badgeHtml = `<div class="badge">${data.codeText}</div>`;
  }

  var textHtml = `<div class="text secondary">${data.text}</div>`;
  var timeHtml = `<div class="text secondary time">${formatTsAgo(event.isoTime)}</div>`;
  // Hacky, but shouldn't be an issue when we replace IEM as a feed
  data.message = data.message.replace('<a href=', '<a target="_blank" href=')
  li.attributes['data-message'] = data.message;
  li.attributes['data-product'] = data.product_id;
  li.innerHTML = badgeHtml + textHtml + timeHtml;
  eventListElement.appendChild(li);
  li.addEventListener('click', function overlayListener() {
    messageOverlayElement.style.display = 'block';
    messageOverlayElement.innerHTML = `<div>Full Event Details</div><div>Product ID: ${this.attributes['data-product']}</div>${this.attributes['data-message']}`;
  })
}

const defaultSettings = JSON.stringify({
  displayZuluTime: true,
  audioNotification: true,
  textToSpeech: true,
  events: {
    filters: {}
  }
});

function processSettings() {
  localStorage.settings = JSON.stringify(iya.settings);
  clockElement.style.display = iya.settings.displayZuluTime ? 'block' : 'none';
}

function saveSetting(key, value) {
  iya.settings[key] = value;
  localStorage[`iya-settings-${key}`] = value;
}

function saveFilters() {
  localStorage['iya-filters'] = JSON.stringify(menu.filters);
  setWhitelistText();
}

function initializeSettings() {
  iya.settings = iya.settings || {};
  if (localStorage.settings === undefined) {
    iya.settings = JSON.parse(defaultSettings);
    localStorage.settings = defaultSettings;
  } else {
    iya.settings = JSON.parse(localStorage.settings);
  }
  processSettings();
}

// BINDINGS
/*document.getElementById('clockSwitch').addEventListener('click', function() {
  iya.settings.displayZuluTime = !iya.settings.displayZuluTime;
  processSettings();
});
document.getElementById('audioNotificationSwitch').addEventListener('click', function() {
  iya.settings.audioNotification = !iya.settings.audioNotification;
  processSettings();
});
document.getElementById('speechSwitch').addEventListener('click', function() {
  iya.settings.textToSpeech = !iya.settings.textToSpeech;
  processSettings();
});*/
document.getElementById('restoreDefaults').addEventListener('click', function () {
  localStorage.clear();
  iya.settings = JSON.parse(defaultSettings);
});

// BINDINGS
document.getElementById('menu-button').addEventListener('click', function() {
  switchPage('main');
});
document.querySelectorAll('ul.page-menu > li').forEach(function(el) {
  if (!el.getAttribute('data-page')) return;
  el.addEventListener('click', function(e) {
    switchPage(this.getAttribute('data-page'), this.getAttribute('data-title'));
  });
});

// Reference overlays
document.querySelectorAll('#reference li').forEach(function(el) {
  el.addEventListener('click', function(e) {
    if (el.getAttribute('data-type') === 'image') {
      var options = {
        title: el.getAttribute('data-title'),
        text: el.getAttribute('data-text')
      };
      displayImage(el.getAttribute('data-src'), options);
    }
  });
});

function switchPage(page, title) {
  pageElements.some(function (el) {
    if (el.classList.contains('active')) {
      el.classList.remove('active');
      el.querySelectorAll('.open').forEach(function (openEl) {
        openEl.classList.remove('open');
      });
    }
  });
  document.getElementById(page).classList.add('active');
  titleElement.innerHTML = (page === 'main')
    ? 'Iya'
    : `Iya <span class="sub-header">${capitalize(title || page)}</span>`;
  if (page === 'events') processStore();

  // Re-process events in case any filters/other changed
  if (page === 'events') processStore();
}

function displayImage(src, options) {
  options = options || {};
  imageOverlayElement.innerHTML = '';
  var titleHtml = options.title ? '<h2>' + options.title + '</h2>' : '';
  var textHtml = options.text ? '<p>' + options.text + '</p>' : '';
  var img = document.createElement('img');
  if (options.load) {
    img.onload = options.load;
  }
  if (options.error) {
    img.onerror = options.error;
  }
  img.src = src;
  var overlayHtml = '';
  if (options.overlays) {
    options.overlays.forEach(function(overlay) {
      overlayHtml += '<img src="' + overlay + '" class="overlay" />';
    });
  }
  if (options.attr) {
    options.attr.forEach(function(attr) {
      var key = Object.keys(attr)[0];
      img.setAttribute(key, attr[key]);
    });
  }
  imageOverlayElement.innerHTML = titleHtml + overlayHtml + textHtml;
  imageOverlayElement.appendChild(img);
  imageOverlayElement.style.display = 'block';
}

// BINDINGS
messageOverlayElement.addEventListener('click', function() {
  messageOverlayElement.style.display = 'none';
});

imageOverlayElement.addEventListener('click', function() {
  imageOverlayElement.style.display = 'none';
});

// INITIALIZATION
iya.store = {
  events: [],
  update: updateStore
};
store = iya.store;  // Reference to make it easier to use
iya.location = { lat: 44.89, lon: -93.22 }; // NOTE: hardcoding lat/lon for testing

// Load saved filters
if (typeof localStorage['iya-filters'] !== 'undefined') {
  const storedFilters = JSON.parse(localStorage['iya-filters']);
  if (storedFilters) {
    _.merge(menu.filters, storedFilters);
    // TODO handle missing settings
  }
}

renderMenu(menu.filters, document.getElementById('filters'), saveFilters);

var filterableCwas = [];
let cwaNames = cwas.map((x) => x.code);
const locationFilters = menu.filters.find(x => x.id === 'location');
const timeFilters = menu.filters.find(x => x.id === 'time');
const sourceFilters = menu.filters.find(x => x.id === 'source');
const productFilters = menu.filters.find(x => x.id === 'product');
const advancedFilters = menu.filters.find(x => x.id === 'advanced');
const allcwa = locationFilters.children.find((x) => x.id === 'allcwa');

locationFilters.children
  .find((x) => x.id === 'cwa')
  .children.forEach((x) => filterableCwas.push(x));

const getWhitelistCwas = function () {
  return filterableCwas.filter((x) => x.value)
    .map((x) => x.id.toLowerCase());
};

const getCwas = function () {
  return allcwa.value ? [] : getWhitelistCwas();
};

// Set subtext for initial whitelist CWAs
setWhitelistText();

// Start processing events?
// TODO check if event processing is on
// TODO if you flip event processing off, stop this timer
// TODO configurable event timer
// TODO max number of events?
var eventProcessingTimer = setInterval(function() {
  getIemData();
}, 1000 * 60);

initializeSettings();
