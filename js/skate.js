var checklistConfig = {
  title: "Miniramp Warmup Checklist",
  description: "Track your transition skating progress",
  categories: [
    {
      name: "Rock Tricks",
      tricks: [
        { id: "rock-fakie", name: "Rock Fakie" },
        { id: "fakie-rock", name: "Fakie Rock" },
        { id: "fakie-pop-rock", name: "Fakie Pop Rock" },
        { id: "halfcab-rock", name: "Halfcab Rock" },
        { id: "rock-and-roll", name: "Rock and Roll" },
        { id: "360-rock", name: "360 Rock" },
        { id: "frontside-fakie-180-rock", name: "Frontside Fakie 180 Rock" },
        { id: "front-rock", name: "Front Rock" },
        { id: "frontside-360-rock", name: "Frontside 360 Rock" },
        { id: "halfcab-front-rock", name: "Halfcab Front Rock" },
        { id: "back-disaster", name: "Back Disaster" },
        { id: "front-disaster", name: "Front Disaster" },
      ],
    },
    {
      name: "Feeble Stalls",
      tricks: [
        { id: "back-feeble", name: "Back Feeble" },
        { id: "front-feeble", name: "Front Feeble" },
        { id: "fakie-back-feeble", name: "Fakie Back Feeble" },
        { id: "fakie-front-feeble", name: "Fakie Front Feeble" },
        { id: "back-feeble-fakie", name: "Back Feeble Fakie" },
        { id: "front-feeble-fakie", name: "Front Feeble Fakie" },
        { id: "fakie-back-feeble-fakie", name: "Fakie Back Feeble Fakie" },
        { id: "fakie-front-feeble-fakie", name: "Fakie Front Feeble Fakie" },
        { id: "halfcab-feeble", name: "Halfcab Feeble" },
        { id: "halfcab-feeble-fakie", name: "Halfcab Feeble Fakie" },
        { id: "front-feeble-270-out", name: "Front Feeble 270 out" },
        {
          id: "fakie-front-feeble-270-out",
          name: "Fakie Front Feeble 270 out",
        },
        { id: "switch-back-feeble", name: "Switch Back Feeble Regular out" },
      ],
    },
    {
      name: "Axle Stalls",
      tricks: [
        { id: "back-axle", name: "Back Axle" },
        { id: "front-axle", name: "Front Axle" },
        { id: "fakie-back-axle", name: "Fakie Back Axle" },
        { id: "fakie-front-axle", name: "Fakie Front Axle" },
        { id: "back-axle-fakie", name: "Back Axle Fakie" },
        { id: "front-axle-fakie", name: "Front Axle Fakie" },
        { id: "fakie-back-axle-fakie", name: "Fakie Back Axle Fakie" },
        { id: "fakie-front-axle-fakie", name: "Fakie Front Axle Fakie" },
        { id: "270-back-axle", name: "270 Back Axle" },
      ],
    },
    {
      name: "Pivot Stalls",
      tricks: [
        { id: "back-pivot", name: "Back Pivot" },
        { id: "front-pivot", name: "Front Pivot" },
        { id: "fakie-back-pivot", name: "Fakie Back Pivot" },
        { id: "fakie-front-pivot", name: "Fakie Front Pivot" },
        { id: "back-pivot-fakie", name: "Back Pivot Fakie" },
      ],
    },
    {
      name: "Smith Stalls",
      tricks: [
        { id: "back-smith", name: "Back Smith" },
        { id: "front-smith", name: "Front Smith" },
        { id: "fakie-back-smith", name: "Fakie Back Smith" },
        { id: "fakie-front-smith", name: "Fakie Front Smith" },
        { id: "front-smith-revert", name: "Front Smith Revert" },
        { id: "fakie-front-smith-revert", name: "Fakie Front Smith Revert" },
      ],
    },
    {
      name: "Other Stalls",
      tricks: [
        { id: "tail-stall", name: "Tail Stall" },
        { id: "nose-stall", name: "Nose Stall" },
      ],
    },
    {
      name: "Other Tricks and Combos",
      tricks: [
        { id: "frontside-180", name: "Frontside 180" },
        { id: "backside-180", name: "Backside 180" },
        { id: "halfcab-rock-body-varial", name: "Halfcab Rock Body Varial" },
        { id: "tail-stall-pull-rock", name: "Tail Stall pull to Rock" },
        {
          id: "fakie-front-smith-rock",
          name: "Fakie Front Smith to Rock Fakie",
        },
        {
          id: "fakie-front-smith-rock-roll",
          name: "Fakie Front Smith to Rock and Roll",
        },
        {
          id: "fakie-front-smith-front-rock",
          name: "Fakie Front Smith to Front Rock",
        },
        {
          id: "fakie-back-smith-rock",
          name: "Fakie Back Smith to Rock Fakie",
        },
        {
          id: "fakie-back-smith-rock-roll",
          name: "Fakie Back Smith to Rock and Roll",
        },
        {
          id: "fakie-back-smith-front-rock",
          name: "Fakie Back Smith to Front Rock",
        },
        {
          id: "fakie-front-smith-front-feeble",
          name: "Fakie Front Smith to Front Feeble",
        },
        {
          id: "fakie-back-smith-back-feeble",
          name: "Fakie Back Smith to Back Feeble",
        },
      ],
    },
    {
      name: "Grinds",
      tricks: [
        { id: "back-smith-grind", name: "Back Smith" },
        { id: "front-smith-grind", name: "Front Smith" },
        { id: "back-5050-grind", name: "Back 5050" },
        { id: "front-5050-grind", name: "Front 5050" },
        { id: "front-50-grind", name: "Front 5/0" },
        { id: "back-50-grind", name: "Back 5/0" },
        { id: "back-feeble-grind", name: "Back Feeble" },
        { id: "front-feeble-grind", name: "Front Feeble" },
      ],
    },
  ],
};

document.addEventListener("DOMContentLoaded", function () {
  initializeChecklistFromConfig();
  document
    .getElementById("resetProgress")
    .addEventListener("click", resetProgress);
  loadProgress();
  updateProgress();
});

function initializeChecklistFromConfig() {
  document.getElementById("checklistTitle").textContent = checklistConfig.title;
  document.getElementById("checklistDescription").textContent =
    checklistConfig.description;

  var container = document.getElementById("checklistContainer");

  for (var i = 0; i < checklistConfig.categories.length; i += 2) {
    var row = document.createElement("div");
    row.className = "row";

    if (i < checklistConfig.categories.length) {
      var col1 = document.createElement("div");
      col1.className = "col-md-6";
      col1.innerHTML = generateCategoryHTML(checklistConfig.categories[i]);
      row.appendChild(col1);
    }

    if (i + 1 < checklistConfig.categories.length) {
      var col2 = document.createElement("div");
      col2.className = "col-md-6";
      col2.innerHTML = generateCategoryHTML(checklistConfig.categories[i + 1]);
      row.appendChild(col2);
    }

    container.appendChild(row);
  }

  initializeChecklist();
}

function generateCategoryHTML(category) {
  var html =
    '<div class="trick-category">' +
    '<h3 class="category-toggle" tabindex="0" role="button" aria-expanded="true">' +
    '<span class="toggle-icon"></span>' +
    category.name +
    "</h3>" +
    '<div class="category-tricks">';
  category.tricks.forEach(function (trick) {
    html +=
      '<label class="trick-item">' +
      '<input type="checkbox" data-trick="' +
      trick.id +
      '" class="trick-checkbox">' +
      '<span class="checkmark"></span>' +
      '<span class="trick-name">' +
      trick.name +
      "</span>" +
      "</label>";
  });
  html += "</div></div>";
  return html;
}

function initializeChecklist() {
  var checkboxes = document.querySelectorAll(".trick-checkbox");
  checkboxes.forEach(function (checkbox) {
    checkbox.addEventListener("change", function () {
      saveProgress();
      updateProgress();
    });
    checkbox.addEventListener("click", function (event) {
      this._lastClickEvent = event;
    });
  });

  var toggles = document.querySelectorAll(".category-toggle");
  toggles.forEach(function (toggle) {
    function handleToggle() {
      var tricks = toggle.nextElementSibling;
      var expanded = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!expanded));
      tricks.classList.toggle("collapsed");
      saveCollapseState();
    }
    toggle.addEventListener("click", handleToggle);
    toggle.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        handleToggle();
      }
    });
  });

  loadCollapseState();
}

function saveCollapseState() {
  var toggles = document.querySelectorAll(".category-toggle");
  var state = {};
  toggles.forEach(function (toggle, i) {
    state[i] = toggle.getAttribute("aria-expanded") === "true";
  });
  localStorage.setItem("skateCollapseState", JSON.stringify(state));
}

function loadCollapseState() {
  var saved = localStorage.getItem("skateCollapseState");
  if (saved) {
    var state = JSON.parse(saved);
    var toggles = document.querySelectorAll(".category-toggle");
    toggles.forEach(function (toggle, i) {
      if (state.hasOwnProperty(i) && !state[i]) {
        toggle.setAttribute("aria-expanded", "false");
        toggle.nextElementSibling.classList.add("collapsed");
      }
    });
  }
}

function updateTrickItemSilently(checkbox) {
  var trickItem = checkbox.closest(".trick-item");
  if (checkbox.checked) {
    trickItem.classList.add("completed");
  } else {
    trickItem.classList.remove("completed");
  }
}

function saveProgress() {
  var checkboxes = document.querySelectorAll(".trick-checkbox");
  var progress = {};
  checkboxes.forEach(function (checkbox) {
    progress[checkbox.dataset.trick] = checkbox.checked;
  });
  localStorage.setItem("skateProgress", JSON.stringify(progress));
}

function loadProgress() {
  var saved = localStorage.getItem("skateProgress");
  if (saved) {
    var progress = JSON.parse(saved);
    var checkboxes = document.querySelectorAll(".trick-checkbox");
    checkboxes.forEach(function (checkbox) {
      var trickId = checkbox.dataset.trick;
      if (progress.hasOwnProperty(trickId)) {
        checkbox.checked = progress[trickId];
        updateTrickItemSilently(checkbox);
      }
    });
  }
}

function updateTrickItem(checkbox, event) {
  var trickItem = checkbox.closest(".trick-item");
  if (checkbox.checked) {
    if (!trickItem.classList.contains("completed")) {
      createExplosion(trickItem, event);
    }
    trickItem.classList.add("completed");
  } else {
    trickItem.classList.remove("completed");
  }
}

function createExplosion(element, event) {
  cleanupExplosions();

  var centerX, centerY;
  if (event && event.clientX !== undefined && event.clientY !== undefined) {
    centerX = event.clientX;
    centerY = event.clientY;
  } else {
    var rect = element.getBoundingClientRect();
    centerX = rect.left + rect.width / 2;
    centerY = rect.top + rect.height / 2;
  }

  var explosion = document.createElement("div");
  explosion.className = "explosion";
  explosion.style.cssText =
    "position:fixed;left:" +
    centerX +
    "px;top:" +
    centerY +
    "px;pointer-events:none;z-index:1000;";

  var particleCount = 15 + Math.floor(Math.random() * 8);
  var colors = [
    "#FFD700",
    "#FF6B6B",
    "#4ECDC4",
    "#45B7D1",
    "#96CEB4",
    "#FFEAA7",
    "#FF8E53",
    "#A8E6CF",
  ];

  for (var i = 0; i < particleCount; i++) {
    var particle = document.createElement("div");
    particle.className = "explosion-particle";

    var randomColor = colors[Math.floor(Math.random() * colors.length)];
    var size = 4 + Math.random() * 8;

    particle.style.cssText =
      "position:absolute;width:" +
      size +
      "px;height:" +
      size +
      "px;background:" +
      randomColor +
      ";border-radius:50%;box-shadow:0 0 " +
      size * 2 +
      "px " +
      randomColor +
      ";";

    var angle = (i / particleCount) * 2 * Math.PI + Math.random() * 0.5;
    var speed = 80 + Math.random() * 120;
    var vx = Math.cos(angle) * speed;
    var vy = Math.sin(angle) * speed;
    var rotation = Math.random() * 360;

    particle.animate(
      [
        { transform: "translate(0, 0) scale(1) rotate(0deg)", opacity: 1 },
        {
          transform:
            "translate(" +
            vx * 0.3 +
            "px, " +
            vy * 0.3 +
            "px) scale(1.2) rotate(" +
            rotation * 0.3 +
            "deg)",
          opacity: 1,
        },
        {
          transform:
            "translate(" +
            vx +
            "px, " +
            vy +
            "px) scale(0) rotate(" +
            rotation +
            "deg)",
          opacity: 0,
        },
      ],
      {
        duration: 1000 + Math.random() * 400,
        easing: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      },
    );

    explosion.appendChild(particle);
  }

  document.body.appendChild(explosion);

  setTimeout(function () {
    if (explosion && explosion.parentNode) {
      explosion.parentNode.removeChild(explosion);
    }
  }, 1500);
}

function cleanupExplosions() {
  var existing = document.querySelectorAll(".explosion");
  existing.forEach(function (el) {
    if (el.parentNode) {
      el.parentNode.removeChild(el);
    }
  });
}

function updateProgress() {
  var checkboxes = document.querySelectorAll(".trick-checkbox");
  var completed = Array.from(checkboxes).filter(function (cb) {
    return cb.checked;
  }).length;
  var total = checkboxes.length;
  var percentage = total > 0 ? (completed / total) * 100 : 0;

  document.getElementById("progressCount").textContent = completed;
  var totalCountElement = document.getElementById("totalCount");
  if (totalCountElement) {
    totalCountElement.textContent = total;
  }
  var progressBarElement = document.getElementById("progressBar");
  if (progressBarElement) {
    progressBarElement.style.width = percentage + "%";
  }

  checkboxes.forEach(function (checkbox) {
    updateTrickItem(checkbox, checkbox._lastClickEvent);
  });
}

function resetProgress() {
  if (
    confirm(
      "Are you sure you want to reset all progress? This cannot be undone.",
    )
  ) {
    var checkboxes = document.querySelectorAll(".trick-checkbox");
    checkboxes.forEach(function (checkbox) {
      checkbox.checked = false;
    });
    saveProgress();
    updateProgress();
  }
}
