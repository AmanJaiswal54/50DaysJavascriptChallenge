const emojis = document.querySelector(".emojis");
const reviewBtn = document.querySelector('.reviewbtn');
const feedbackSection =  document.querySelector('.feedback');
const thankyouSection =  document.querySelector('.thankyou');
const feedbackResult = document.querySelector('.feedback-result');

let emojiText = '';

// using event delegation
emojis.addEventListener("click", function (e) {
  const selectedEmoji = e.target;
  if (selectedEmoji.className === "emoji") {
    removeExistinActiveClass();
    selectedEmoji.classList.add("active");
    emojiText = selectedEmoji.dataset.text
  }
});

reviewBtn.addEventListener("click", function (e) {
    feedbackSection.classList.add('hide');
    thankyouSection.classList.add('show');
    feedbackResult.innerHTML = `Feedback: ${emojiText}`
});


function removeExistinActiveClass() {
  const totalEmojis = emojis.children;
  for (let i = 0; i < totalEmojis.length; i++) {
    totalEmojis[i].classList.remove("active");
  }
}
