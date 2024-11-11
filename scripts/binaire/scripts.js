document.addEventListener("DOMContentLoaded", () => {
  const binaryContainer = document.getElementById("binaire-container");
  const decimalValue = document.getElementById("decimal-valeur");
  const hexValue = document.getElementById("hex-valeur");
  const cp1252Value = document.getElementById("cp1252-valeur");
  const negativeValue = document.getElementById("negative-valeur");
  const octalValue = document.getElementById("octal-valeur");
  const shiftLeftBtn = document.getElementById("shift-left");
  const shiftRightBtn = document.getElementById("shift-right");
  const themeSwitch = document.getElementById("theme-switch");
  const body = document.body;

  let bits = Array(8).fill(0);
  const positions = [128, 64, 32, 16, 8, 4, 2, 1];
  const cp1252 = [
    {
      0: "\u2400",
      1: "\u2401",
      2: "\u2402",
      3: "\u2403",
      4: "\u2404",
      5: "\u2405",
      6: "\u2406",
      7: "\u2407",
      8: "\u2408",
      9: "\u2409",
      10: "\u240A",
      11: "\u240B",
      12: "\u240C",
      13: "\u240D",
      14: "\u240E",
      15: "\u240F",
      16: "\u2410",
      17: "\u2411",
      18: "\u2412",
      19: "\u2413",
      20: "\u2414",
      21: "\u2415",
      22: "\u2416",
      23: "\u2417",
      24: "\u2418",
      25: "\u2419",
      26: "\u241A",
      27: "\u241B",
      28: "\u241C",
      29: "\u241D",
      30: "\u241E",
      31: "\u241F",
      32: "\u2420",
      33: "!",
      34: '"',
      35: "#",
      36: "$",
      37: "%",
      38: "&",
      39: "'",
      40: "(",
      41: ")",
      42: "*",
      43: "+",
      44: ",",
      45: "-",
      46: ".",
      47: "/",
      48: "0",
      49: "1",
      50: "2",
      51: "3",
      52: "4",
      53: "5",
      54: "6",
      55: "7",
      56: "8",
      57: "9",
      58: ":",
      59: ";",
      60: "<",
      61: "=",
      62: ">",
      63: "?",
      64: "@",
      65: "A",
      66: "B",
      67: "C",
      68: "D",
      69: "E",
      70: "F",
      71: "G",
      72: "H",
      73: "I",
      74: "J",
      75: "K",
      76: "L",
      77: "M",
      78: "N",
      79: "O",
      80: "P",
      81: "Q",
      82: "R",
      83: "S",
      84: "T",
      85: "U",
      86: "V",
      87: "W",
      88: "X",
      89: "Y",
      90: "Z",
      91: "[",
      92: "\\",
      93: "]",
      94: "^",
      95: "_",
      96: "`",
      97: "a",
      98: "b",
      99: "c",
      100: "d",
      101: "e",
      102: "f",
      103: "g",
      104: "h",
      105: "i",
      106: "j",
      107: "k",
      108: "l",
      109: "m",
      110: "n",
      111: "o",
      112: "p",
      113: "q",
      114: "r",
      115: "s",
      116: "t",
      117: "u",
      118: "v",
      119: "w",
      120: "x",
      121: "y",
      122: "z",
      123: "{",
      124: "|",
      125: "}",
      126: "~",
      127: "\u2421",
      128: "\u20AC",
      129: "\u0081",
      130: "\u201A",
      131: "\u0192",
      132: "\u201E",
      133: "\u2026",
      134: "\u2020",
      135: "\u2021",
      136: "\u02C6",
      137: "\u2030",
      138: "\u0160",
      139: "\u2039",
      140: "\u0152",
      141: "\u008D",
      142: "\u017D",
      143: "\u008F",
      144: "\u0090",
      145: "\u2018",
      146: "\u2019",
      147: "\u201C",
      148: "\u201D",
      149: "\u2022",
      150: "\u2013",
      151: "\u2014",
      152: "\u02DC",
      153: "\u2122",
      154: "\u0161",
      155: "\u203A",
      156: "\u0153",
      157: "\u009D",
      158: "\u017E",
      159: "\u0178",
      160: "\u00A0",
      161: "\u00A1",
      162: "\u00A2",
      163: "\u00A3",
      164: "\u00A4",
      165: "\u00A5",
      166: "\u00A6",
      167: "\u00A7",
      168: "\u00A8",
      169: "\u00A9",
      170: "\u00AA",
      171: "\u00AB",
      172: "\u00AC",
      173: "\u00AD",
      174: "\u00AE",
      175: "\u00AF",
      176: "\u00B0",
      177: "\u00B1",
      178: "\u00B2",
      179: "\u00B3",
      180: "\u00B4",
      181: "\u00B5",
      182: "\u00B6",
      183: "\u00B7",
      184: "\u00B8",
      185: "\u00B9",
      186: "\u00BA",
      187: "\u00BB",
      188: "\u00BC",
      189: "\u00BD",
      190: "\u00BE",
      191: "\u00BF",
      192: "\u00C0",
      193: "\u00C1",
      194: "\u00C2",
      195: "\u00C3",
      196: "\u00C4",
      197: "\u00C5",
      198: "\u00C6",
      199: "\u00C7",
      200: "\u00C8",
      201: "\u00C9",
      202: "\u00CA",
      203: "\u00CB",
      204: "\u00CC",
      205: "\u00CD",
      206: "\u00CE",
      207: "\u00CF",
      208: "\u00D0",
      209: "\u00D1",
      210: "\u00D2",
      211: "\u00D3",
      212: "\u00D4",
      213: "\u00D5",
      214: "\u00D6",
      215: "\u00D7",
      216: "\u00D8",
      217: "\u00D9",
      218: "\u00DA",
      219: "\u00DB",
      220: "\u00DC",
      221: "\u00DD",
      222: "\u00DE",
      223: "\u00DF",
      224: "\u00E0",
      225: "\u00E1",
      226: "\u00E2",
      227: "\u00E3",
      228: "\u00E4",
      229: "\u00E5",
      230: "\u00E6",
      231: "\u00E7",
      232: "\u00E8",
      233: "\u00E9",
      234: "\u00EA",
      235: "\u00EB",
      236: "\u00EC",
      237: "\u00ED",
      238: "\u00EE",
      239: "\u00EF",
      240: "\u00F0",
      241: "\u00F1",
      242: "\u00F2",
      243: "\u00F3",
      244: "\u00F4",
      245: "\u00F5",
      246: "\u00F6",
      247: "\u00F7",
      248: "\u00F8",
      249: "\u00F9",
      250: "\u00FA",
      251: "\u00FB",
      252: "\u00FC",
      253: "\u00FD",
      254: "\u00FE",
      255: "\u00FF",
    },
  ];

  themeSwitch.addEventListener("change", () => {
    if (themeSwitch.checked) {
      body.classList.add("dark-theme");
    } else {
      body.classList.remove("dark-theme");
    }
  });

  function renderBits() {
    binaryContainer.innerHTML = "";
    bits.forEach((bit, index) => {
      const bitContainer = document.createElement("div");
      bitContainer.className = "bit-container";

      const positionSpan = document.createElement("span");
      positionSpan.className = "position"; // Ajout de la classe 'position'
      positionSpan.textContent = positions[index];
      bitContainer.appendChild(positionSpan);

      const bitDiv = createBitElement(bit, index);
      bitContainer.appendChild(bitDiv);

      binaryContainer.appendChild(bitContainer);
    });
    updateValues();
  }

  function createBitElement(bit, index) {
    const bitDiv = document.createElement("div");
    bitDiv.className = `bit bit-${bit}`;
    bitDiv.innerHTML = `<span>${bit}</span>`;
    bitDiv.addEventListener("click", () => toggleBit(index));
    return bitDiv;
  }

  function toggleBit(index) {
    bits[index] = bits[index] === 0 ? 1 : 0;
    renderBits();

    // Ajouter la classe pour l'animation de clic
    const bitDiv = binaryContainer.children[index].children[1];
    bitDiv.classList.add("clicked");

    // Supprimer la classe après une courte période pour réinitialiser l'animation
    setTimeout(() => {
      bitDiv.classList.remove("clicked");
    }, 100);
  }

  function updateValues() {
    const decimal = bits.reduce(
      (acc, bit, index) => acc + (bit << (7 - index)),
      0
    );

    let negative = decimal;
    let negativeBits = structuredClone(bits);
    if (bits[0] === 1) {
      negativeBits.shift();
      for (i = negativeBits.length - 1; i <= 0; i--) {
        if (negativeBits[i] === 1) {
          negativeBits[i] = 0;
          for (j = j - 1; j <= 0; j--) {
            negativeBits[j] = negativeBits[j] === 1;
            break;
          }
        }
      }
      for (i = 0; i < negativeBits.length; i++) {
        negativeBits[i] = negativeBits[i] === 1 ? 0 : 1;
      }
      negative =
        -1 *
        negativeBits.reduce((acc, bit, index) => acc + (bit << (6 - index)), 0);
      if (negative === 0) negative = -128;
    }
    negativeValue.textContent =
      negative +
      " " +
      negativeBits[0] +
      negativeBits[1] +
      negativeBits[2] +
      negativeBits[3] +
      negativeBits[4] +
      negativeBits[5] +
      negativeBits[6]; // +
    // negativeBits[7];

    decimalValue.textContent = decimal;
    hex = decimal.toString(16).toUpperCase();
    if (hex.length < 2) {
      hex = "0" + hex;
    }
    oct = decimal.toString(8);
    if (oct.length < 2) {
      oct = "0" + oct;
    }
    octalValue.textContent = oct;
    hexValue.textContent = hex;
    cp1252Value.textContent = cp1252[0][decimal];
  }

  shiftLeftBtn.addEventListener("click", () => shiftBits("left"));
  shiftRightBtn.addEventListener("click", () => shiftBits("right"));

  function shiftBits(direction) {
    if (direction === "left") {
      if (bits[0] === 1) {
        bits[0] = 0;
      }
      bits.push(bits.shift());
    } else if (direction === "right") {
      if (bits[bits.length - 1] === 1) {
        bits[bits.length - 1] = 0;
      }
      bits.unshift(bits.pop());
    }
    renderBits();
  }

  renderBits(); // Appel initial pour afficher les bits au chargement
});
