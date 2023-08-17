const functions = {
  kickOut: async function () {
    const response = await fetch("/kick");
    let data = await response.json();
    console.log(data);
    if (data.message === "expired") {
      alert("Your session has expired. Please login again.");
      window.location = "/login";
    } else if (data.message === "kick") {
      alert("Intruder alert!");
      window.location = "/login";
    } else {
      console.log("clear");
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
