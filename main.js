(function () {
  "use strict";

  var data = window.GAME_DATA;
  var screens = {
    home: document.getElementById("home-screen"),
    story: document.getElementById("story-screen"),
    reveal: document.getElementById("reveal-screen"),
    result: document.getElementById("result-screen")
  };

  var els = {
    start: document.getElementById("start-button"),
    restart: document.getElementById("restart-button"),
    share: document.getElementById("share-button"),
    feedback: document.getElementById("share-feedback"),
    sceneCard: document.getElementById("scene-card"),
    sceneRoman: document.getElementById("scene-roman"),
    sceneLabel: document.getElementById("scene-label"),
    sceneTitle: document.getElementById("scene-title"),
    sceneBody: document.getElementById("scene-body"),
    storyEcho: document.getElementById("story-echo"),
    options: document.getElementById("options"),
    progressCurrent: document.getElementById("progress-current"),
    progressBar: document.getElementById("progress-bar")
  };

  var roman = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];
  var letters = ["A", "B", "C", "D"];
  var state = createFreshState();
  var currentResult = null;
  var transitionLocked = false;
  var revealTimer = null;

  function createFreshState() {
    var traits = {};
    data.traits.forEach(function (key) { traits[key] = 0; });
    return { questionIndex: 0, answers: [], traits: traits, affinity: {} };
  }

  function showScreen(name) {
    Object.keys(screens).forEach(function (key) {
      screens[key].classList.toggle("is-active", key === name);
    });
    window.scrollTo(0, 0);
  }

  function startGame() {
    if (revealTimer) window.clearTimeout(revealTimer);
    state = createFreshState();
    currentResult = null;
    transitionLocked = false;
    els.feedback.textContent = "";
    showScreen("story");
    renderQuestion();
  }

  function getDynamicText(question) {
    if (!question.dynamic) return "";
    for (var i = 0; i < question.dynamic.length; i += 1) {
      var rule = question.dynamic[i];
      if (state.answers[rule.when[0]] === rule.when[1]) return rule.text;
    }
    return "";
  }

  function renderQuestion() {
    var index = state.questionIndex;
    var question = data.questions[index];
    els.progressCurrent.textContent = String(index + 1).padStart(2, "0");
    els.progressBar.style.width = ((index + 1) / data.questions.length * 100) + "%";
    els.sceneRoman.textContent = roman[index];
    els.sceneLabel.textContent = question.chapter;
    els.sceneTitle.textContent = question.title;
    els.sceneBody.textContent = question.body;

    var echo = getDynamicText(question);
    els.storyEcho.hidden = !echo;
    els.storyEcho.textContent = echo;
    els.options.innerHTML = "";

    question.options.forEach(function (option, optionIndex) {
      var button = document.createElement("button");
      button.type = "button";
      button.className = "option-button";
      button.dataset.letter = letters[optionIndex];
      button.textContent = option.text;
      button.addEventListener("click", function () { selectOption(optionIndex, button); });
      els.options.appendChild(button);
    });

    window.setTimeout(function () {
      var firstOption = els.options.querySelector("button");
      if (firstOption) firstOption.focus({ preventScroll: true });
    }, 80);
  }

  function selectOption(optionIndex, chosenButton) {
    if (transitionLocked) return;
    transitionLocked = true;

    var option = data.questions[state.questionIndex].options[optionIndex];
    state.answers.push(optionIndex);

    Object.keys(option.traits).forEach(function (trait) {
      state.traits[trait] += option.traits[trait];
    });
    option.affinity.forEach(function (resultId) {
      state.affinity[resultId] = (state.affinity[resultId] || 0) + 1;
    });

    Array.prototype.forEach.call(els.options.children, function (button) {
      button.disabled = true;
    });
    chosenButton.classList.add("is-chosen");

    window.setTimeout(function () {
      state.questionIndex += 1;
      if (state.questionIndex < data.questions.length) {
        els.sceneCard.classList.add("is-changing");
        window.setTimeout(function () {
          renderQuestion();
        }, 220);
        window.setTimeout(function () {
          els.sceneCard.classList.remove("is-changing");
          transitionLocked = false;
        }, 500);
      } else {
        transitionLocked = false;
        revealResult();
      }
    }, 380);
  }

  function cosineSimilarity(traits, profile) {
    var dot = 0;
    var traitMagnitude = 0;
    var profileMagnitude = 0;
    data.traits.forEach(function (key) {
      var traitValue = traits[key];
      var profileValue = profile[key];
      dot += traitValue * profileValue;
      traitMagnitude += traitValue * traitValue;
      profileMagnitude += profileValue * profileValue;
    });
    if (!traitMagnitude || !profileMagnitude) return 0;
    return dot / (Math.sqrt(traitMagnitude) * Math.sqrt(profileMagnitude));
  }

  function calculateResult() {
    var signature = state.answers.reduce(function (sum, answer, index) {
      return sum + (answer + 1) * (index + 3);
    }, 0);

    var ranked = data.results.map(function (result, resultIndex) {
      var affinity = state.affinity[result.id] || 0;
      var fit = cosineSimilarity(state.traits, result.profile);
      var lateAffinity = 0;
      for (var i = 7; i < state.answers.length; i += 1) {
        var chosen = data.questions[i].options[state.answers[i]];
        if (chosen.affinity.indexOf(result.id) !== -1) lateAffinity += 1;
      }
      return {
        result: result,
        score: affinity * 3 + fit * 8 + lateAffinity * 0.35,
        tie: (signature + resultIndex * 7) % data.results.length
      };
    });

    ranked.sort(function (a, b) {
      if (Math.abs(b.score - a.score) > 0.000001) return b.score - a.score;
      return a.tie - b.tie;
    });
    return ranked[0].result;
  }

  function revealResult() {
    currentResult = calculateResult();
    showScreen("reveal");
    revealTimer = window.setTimeout(function () {
      fillResult(currentResult);
      showScreen("result");
    }, 1500);
  }

  function fillResult(result) {
    document.getElementById("result-code").textContent = result.code;
    document.getElementById("result-title").textContent = result.name;
    document.getElementById("result-tagline").textContent = result.tagline;
    document.getElementById("result-intro").textContent = result.intro;
    document.getElementById("result-archive").textContent = result.archive;
    document.getElementById("result-advantage").textContent = result.advantage;
    document.getElementById("result-turning").textContent = result.turning;
    document.getElementById("result-quote").textContent = result.quote;
    els.feedback.textContent = "";
  }

  function fallbackCopy(text) {
    var textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.left = "-9999px";
    document.body.appendChild(textarea);
    textarea.select();
    var copied = false;
    try { copied = document.execCommand("copy"); } catch (error) { copied = false; }
    document.body.removeChild(textarea);
    return copied;
  }

  function shareResult() {
    if (!currentResult) return;
    var text = "《如果你穿进豪门，你会是什么身份？》\n我的身份是：" + currentResult.name + "\n" + currentResult.shareLine;
    els.feedback.textContent = "";

    if (navigator.share) {
      navigator.share({ title: "我的豪门身份：" + currentResult.name, text: text })
        .then(function () { els.feedback.textContent = "分享面板已完成。"; })
        .catch(function (error) {
          if (error && error.name === "AbortError") {
            els.feedback.textContent = "已取消分享。";
            return;
          }
          copyShareText(text);
        });
    } else {
      copyShareText(text);
    }
  }

  function copyShareText(text) {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text)
        .then(function () { els.feedback.textContent = "身份文案已复制，可以去分享了。"; })
        .catch(function () {
          els.feedback.textContent = fallbackCopy(text) ? "身份文案已复制，可以去分享了。" : "复制失败，请长按结果页手动截图分享。";
        });
    } else {
      els.feedback.textContent = fallbackCopy(text) ? "身份文案已复制，可以去分享了。" : "复制失败，请长按结果页手动截图分享。";
    }
  }

  els.start.addEventListener("click", startGame);
  els.restart.addEventListener("click", function () {
    if (revealTimer) window.clearTimeout(revealTimer);
    state = createFreshState();
    currentResult = null;
    transitionLocked = false;
    showScreen("home");
    els.start.focus({ preventScroll: true });
  });
  els.share.addEventListener("click", shareResult);
}());
