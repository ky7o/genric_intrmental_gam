(() => { 
  // All variables start here 
  const numberFormat = new Intl.NumberFormat();
  
  let coins = 0;
  let workers = 0;
  let cost = 0;
  let machinesCost = 0;
  let machines = 0;
  let dynamiteCost = 0;
  let dynamite = 0;
  let drillsCost = 0;
  let drills = 0;
  let dupesCost = 0;
  let dupes = 0;
  let cworkersCost = 0;
  let cworkers = 0;
  let wizardCost = 0;
  let wizard = 0;
  let crystals = 0;
  let energyCost = 0;
  let energy = 0;
  let relic = 0;
  
  const machinesFactor = 1.1;
  const dynamiteFactor = 1.15;
  const drillsFactor = 1.25;
  const dupesFactor = 1.4;
  const cworkersFactor = 1.55;
  const wizardFactor = 1.77;
  
  function getStateObject() {
    return {
      coins: coins,
      cost: cost,
      workers: workers,
      machinesCost: machinesCost,
      machines: machines,
      dynamiteCost: dynamiteCost,
      dynamite: dynamite,
      drillsCost: drillsCost,
      drills: drills,
      dupesCost: dupesCost,
      dupes: dupes,
      cworkersCost: cworkersCost,
      cworkers: cworkers,
      wizardCost: wizardCost,
      wizard: wizard,
      crystals: crystals,
      energyCost: energyCost,
      energy: energy,
      relic: relic,
    }
  }
  function loadInitialValues(state) {
    coins = state?.coins || 50;
    cost = state?.cost || 50;
    workers = state?.workers || 0;
    machinesCost = state?.machinesCost || 10000;
    machines = state?.machines || 0;
    dynamiteCost = state?.dynamiteCost || 50000;
    dynamite = state?.dynamite || 0;
    drillsCost = state?.drillsCost || 125000;
    drills = state?.drills || 0;
    dupesCost = state?.dupesCost || 2000000;
    dupes = state?.dupes || 0;
    cworkersCost = state?.cworkersCost || 5000000;
    cworkers = state?.cworkers || 0;
    wizardCost = state?.wizardCost|| 10000000;
    wizard = state?.wizard || 0;
    crystals = state?.crystals || 0;
    energyCost = state?.energyCost || 20000000;
    energy = state?.energy || 0;
    relic = state?.relic || 0;
    updateCounts();
    checkCounts();
  }
  
  // What happens when you click a button
  function clickCoin() {
    coins++;
    updateCounts();
  }
  
  function mainTicker() {
    coins += (workers * 20) + (machines * 200) + (dynamite * 500) + (drills * 1000) + (dupes * 2500) - (energy * 10000);
    updateCounts();

    crystals += (cworkers * 5) + (energy * 20000) + (wizard * 15);
    updateCrystals();
  checkCounts();
    console.log("Coins:", coins)
     const currentMultiplier = Math.pow(2.5, wizard);
  document.getElementById("multiplier").textContent = currentMultiplier.toFixed(2);
  document.getElementById("prestigeCount").textContent = wizard;

  checkCounts();
  console.log("Coins:", coins);
  }
  function checkCounts() {
    if (coins >= 10000) {
      document.getElementById("machines").style.display = "block";
    }
    if (coins >= 50000) {
      document.getElementById("dynamite").style.display = "block";
    }
    if (coins >= 125000) {
      document.getElementById("drills").style.display = "block";
    }
    if (coins >= 2000000) {
      document.getElementById("dupes").style.display = "block";
    }
    if (coins >= 10000000) {
      document.getElementById("wizards").style.display = "block";
    }
  }

  function hireWorker() {
    if (coins < cost) {
      document.getElementById("workerError").innerHTML = "Not enough coins :(";
      setTimeout(function () {
        document.getElementById("workerError").innerHTML = "";
      }, 3000);
    } else {
      coins -= cost;
      workers++;
      updateCost();
      updateCounts();
      checkCounts();
      console.log("Workers:", workers)
      console.log("Workers Cost:", cost)
    }
  }
  function hireCworker() {
    if (coins < cworkersCost) {
      document.getElementById("cworkerError").innerHTML = "Not enough coins :(";
      setTimeout(function () {
        document.getElementById("cworkerError").innerHTML = "";
      }, 3000) ;
    } else {
      coins -= cworkersCost;
      cworkers++;
      updateCworkerCost();
      updateCounts();
      console.log("Crystal Workers:", cworkers)
    }
  }
  function hirewizard() {
    if (coins < wizardCost) {
      document.getElementById("wizardError").innerHTML = "Not enough coins:(";
      setTimeout(function () {
        document.getElementById("wizardError").innerHTML = "";
      }, 3000);
    } else {
      coins-= wizardCost;
      wizard++;
      updatewizardCost();
      updateCounts();
    }
  }
  function buyMachines() {
    if (coins < machinesCost) {
      document.getElementById("machinesError").innerHTML = "Not enough coins :(";
      setTimeout(function () {
        document.getElementById("machinesError").innerHTML = "";
      }, 3000);
    } else {
      coins -= machinesCost;
      machines++;
      updateMachinesCost();
      updateCounts();
      checkCounts();
    }
  }

  function buyDynamite() {
    if (coins < dynamiteCost) {
      document.getElementById("dynamiteError").innerHTML = "Not enough coins :(";
      setTimeout(function () {
        document.getElementById("dynamiteError").innerHTML = "";
      }, 3000);
    } else {
      coins -= dynamiteCost;
      dynamite++;
      updateDynamiteCost();
      updateCounts();
      checkCounts();
    }
  }

  function buyDrills() {
    if (coins < drillsCost) {
      document.getElementById("drillsError").innerHTML = "Not enough coins :(";
      setTimeout(function () {
        document.getElementById("drillsError").innerHTML = "";
      }, 3000);
    } else {
      coins -= drillsCost;
      drills++;
      updateDrillsCost();
      updateCounts();
      checkCounts();
    }
  }

  function buyDupes() {
    if (coins < dupesCost) {
      document.getElementById("dupesError").innerHTML = "Not enough coins :(";
      setTimeout(function () {
        document.getElementById("dupesError").innerHTML = "";
      }, 3000);
    } else {
      coins -= dupesCost;
      dupes++;
      updateDupesCost();
      updateCounts();
    }
  }
  function buyEnergy() {
    if (crystals < energyCost) {
      document.getElementById("energyError").innerHTML = "Not enough crystals :(";
      setTimeout(function () {
        document.getElementById("energyError").innerHTML = "";
      }, 3000);
    } else {
      crystals -= energyCost;
      energy++;
      //updateCrystals();
      
      // MS: Method seems to be missing
      //updateEnergyCost();
      //Rising: Yeah, the udateITEMcost thing is missing in alot of the new items
      // HEI: energy wont be used until later in the game, so dont worry about this
      // setInterval(function () {
      //   crystals += 20000;
      //   coins -= 100
      //   updateCrystals();
      // }, 1000);
    }
  }



  function updateCounts() {
    document.getElementById("coinCount").innerHTML = numberFormat.format(coins.toFixed(0));
    document.getElementById("workerCount").innerHTML = workers;
    document.getElementById("machinesCount").innerHTML = machines;
    document.getElementById("dynamiteCount").innerHTML = dynamite;
    document.getElementById("drillsCount").innerHTML = drills;
    document.getElementById("dupesCount").innerHTML = dupes;
    document.getElementById("cworkerCount").innerHTML = cworkers;
    document.getElementById("crystalsCount").innerHTML = numberFormat.format(crystals.toFixed(0));
    document.getElementById("wizardCount").innerHTML = wizard;
  }

  function updateCrystals() {
    document.getElementById("crystalsCount").innerHTML =
    crystals.toFixed(0);
    document.getElementById("cworkerCount").innerHTML = cworkers;
  }

  function updateCost() {
    cost = cost * 1.35;
    document.getElementById("workerCost").innerHTML = numberFormat.format(cost.toFixed(0));
  }

  function updateMachinesCost() {
    machinesCost = machinesCost * machinesFactor;
    document.getElementById("machinesCost").innerHTML =
    numberFormat.format(machinesCost.toFixed(0));
  }

  function updateDynamiteCost() {
    dynamiteCost = dynamiteCost * dynamiteFactor;
    document.getElementById("dynamiteCost").innerHTML =
    numberFormat.format(dynamiteCost.toFixed(0));
  }
  function updateDrillsCost() {
    drillsCost = drillsCost * drillsFactor;
    document.getElementById("drillsCost").innerHTML = numberFormat.format(drillsCost.toFixed(0));
  }
  function updateDupesCost() {
    dupesCost = dupesCost * dupesFactor;
    document.getElementById("dupesCost").innerHTML = numberFormat.format(dupesCost.toFixed(0));
  }
  function updateCworkerCost() {
    cworkersCost = cworkersCost * cworkersFactor;
    document.getElementById("cworkerCost").innerHTML =
    numberFormat.format(cworkersCost.toFixed(0));
  }
  function updatewizardCost() {
    wizardCost = wizardCost * wizardFactor;
    document.getElementById("wizardCost").innerHTML =
    numberFormat.format(wizardCost.toFixed(0));
  }

  function boostCoins() {
  if (crystals < 2500) {
    document.getElementById("boostError").innerHTML = "Not enough crystals :(";
    setTimeout(function () {
      document.getElementById("boostError").innerHTML = "";
    }, 3000);
  } else {
    crystals -= 100;
    coins += coins * 0.5;
    updateCounts();
  }
}
  function boostCrystals() {
  if (crystals < 10000) {
    document.getElementById("cboostError").innerHTML = "Not enough crystals :(";
    setTimeout(function () {
      document.getElementById("cboostError").innerHTML = "";
    }, 3000);
  } else {
    crystals -= 10000;
    crystals += crystals * 0.1;
    updateCrystals();
  }
}

  function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  // MS: No longer needed I guess?
  //const otherTabLinks = document.querySelectorAll(".tab-link:not(#settings-tab-link)");


  // Calculate the time spent on the site
  var startTime = Date.now();

  function updateTimeSpent() {
    var timeDiff = Date.now() - startTime;
    var seconds = Math.floor(timeDiff / 1000);
    var minutes = Math.floor(seconds / 60);
    var hours = Math.floor(minutes / 60);
    var days = Math.floor(hours / 24);

    // Format the time display
    var timeDisplay = "";
    if (days > 0) {
      timeDisplay += days + " days ";
    }
    if (hours > 0) {
      timeDisplay += (hours % 24) + " hours ";
    }
    if (minutes > 0) {
      timeDisplay += (minutes % 60) + " minutes ";
    }
    if (seconds > 0) {
      timeDisplay += (seconds % 60) + " seconds";
    }

    // Update the time display element
    document.getElementById("time-spent").innerHTML = timeDisplay;
  }
  // Not sure what's wrong, will work on it later.-Rising
  function initializeButtonHandlers() {
    document.getElementById('hireWorkerButton').addEventListener('click', hireWorker);
    document.getElementById('buyMachineButton').addEventListener('click', buyMachines);
    document.getElementById('buyDynamiteButton').addEventListener('click', buyDynamite);
    document.getElementById('buyDrillButton').addEventListener('click', buyDrills);
    document.getElementById('buyDupeButton').addEventListener('click', buyDupes);
    document.getElementById('hireCworkerButton').addEventListener('click', hireCworker);
    document.getElementById('hirewizardButton').addEventListener('click', hirewizard);
    document.getElementById('buyboostCoinsButton').addEventListener('click', boostCoins);
    document.getElementById('boostCrystalButton').addEventListener('click', boostCrystals)
  }
  
  function initialize() {
    // Update the time display every second
    setInterval(updateTimeSpent, 1000);
    
    // Calculate and update coins and crystals every second
    setInterval(mainTicker, 1000);
    
    // Setup button handlers
    initializeButtonHandlers();
    

    // Retrieve the most coins earned from local storage
    var mostCoins = localStorage.getItem("mostCoins");
    if (!mostCoins) {
      mostCoins = 0;
    }

    // Update the most coins display element
    document.getElementById("most-coins").innerHTML = mostCoins;

    /*
    // MS: This is old code I guess?
    const settingsTabLink = document.getElementById("settings-tab-link");
    const fontChanger = document.getElementById("font-changer");

    settingsTabLink.addEventListener("click", () => {
      fontChanger.style.display = "block";
    });

    const otherTabLinks = document.querySelectorAll(".tab-link:not(#settings-tab-link)");

    otherTabLinks.forEach(tabLink => {
      tabLink.addEventListener("click", () => {
        fontChanger.style.display = "none";
      });
    });
    */

    
    // Get the color picker input and the apply color button
    const colorPicker = document.querySelector('#color-picker');
    const applyColorBtn = document.querySelector('#apply-color');

    // Add a click event listener to the apply color button
    applyColorBtn.addEventListener('click', () => {
      // Get the value of the color picker
      const selectedColor = colorPicker.value;

      // Change the background color of the website
      document.body.style.backgroundColor = selectedColor;
      document.button.style.backgroundColor = selectedColor;
      
    });

    /*
    // MS: Old code too?
    // HEI: this is a deleted feature, may come back later
    document.getElementById('font-selector').addEventListener('change', function() {
      var selectedFont = this.value;
      document.body.style.fontFamily = selectedFont;
    });
    */
    

    document.getElementById("reset-progress-btn").addEventListener("click", function() {
      localStorage.removeItem('minertestState');
      loadInitialValues();
    });
  }
  function resetProgress() {
  localStorage.removeItem('minertestState');
  loadInitialValues();
}


  //save the website state before closing
  window.addEventListener('beforeunload', function(event) {
    localStorage.setItem('minertestState', JSON.stringify(getStateObject()));
  });
  
  //retrieve the website state on page load
  window.addEventListener('load', function(event) {
    initialize();
    var savedState = localStorage.getItem('minertestState');
    if (savedState) {
      const state = JSON.parse(savedState);
      loadInitialValues(state);
    }
  });

})();
