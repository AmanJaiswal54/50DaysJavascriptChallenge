const btn = document.querySelector(".btn");
const toasts = document.querySelector(".toasts");

// const params = new URL(document.location).searchParams;
// const notificationStatus = params.get("notification");

const NOTIFICATION_MESSAGES = [
  "Hello World",
  "Information 1",
  "Success",
  "This is Sparta",
  "Error",
];

btn.addEventListener("click", () => {
  const toastDiv = document.createElement("div");
  toastDiv.classList.add("toast");

  //   if ((notificationStatus === "success")) {
  //     toastDiv.innerText = "Success";
  //     toastDiv.classList.add("success");
  //   } else if ((notificationStatus === "error")) {
  //     toastDiv.innerText = "Error";
  //     toastDiv.classList.add("error");
  //   } else {
  //     toastDiv.innerText = "Information";
  //   }

  toastDiv.innerText =
    NOTIFICATION_MESSAGES[
      Math.floor(Math.random() * NOTIFICATION_MESSAGES.length)
    ];
  toasts.appendChild(toastDiv);

  setTimeout(() => {
    toastDiv.remove("toast");
  }, 3000);
});
