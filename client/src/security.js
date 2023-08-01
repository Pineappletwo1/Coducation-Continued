const functions = {
  kickOut: async function () {
    document.body.style.filter = "blur(3px)";
    const response = await fetch("/kick");
    let url = await response.json();
    console.log(url.message);
    if (url.message !== "clear") {
      window.location = url.message;
    } else {
      document.body.style.filter = "blur(0px)";
    }
  },
  autoRedirect: async function () {
    const response = await fetch("/autoRedirect");
    let url = await response.json();
    console.log("redirecting");
    window.location = url.message;
  },
};

export { functions };
