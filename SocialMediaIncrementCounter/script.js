const followers = document.querySelectorAll(".followers");
followers.forEach((follower) => {
  function updateFollowers() {
    const upperLimit = Number(follower.getAttribute("data-result"));
    const currentValue = Number(follower.innerHTML);
    const increment = Math.floor(upperLimit / 1000);
    if (currentValue < upperLimit) {
      setTimeout(() => {
        follower.innerHTML = currentValue + increment;
        updateFollowers();
      }, 2);
    }
  }
  updateFollowers();
});
