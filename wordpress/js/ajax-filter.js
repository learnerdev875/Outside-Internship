document.querySelectorAll(".category").forEach((element) => {
  element.addEventListener("click", function (e) {
    let term_id = e.target.getAttribute("id");
    const request = new XMLHttpRequest();
    let data = `action=my_action_callback&term_id=${term_id}`;
    request.open("POST", my_ajax_form.ajaxurl, true);
    request.setRequestHeader(
      "Content-Type",
      "application/x-www-form-urlencoded; charset=UTF-8"
    );
    request.onload = function () {
      if (this.status >= 200 && this.status < 400) {
        var content = JSON.parse(this.response);
        document.querySelector(".container-wrapper").innerHTML =
          content.content;
      } else {
        console.log(this.status);
      }
    };
    request.onerror = function () {
      console.log("error");
    };
    request.send(data);
  });
});

document.querySelector("#searchBox").addEventListener("input", function (e) {
  let searchKey = e.target.value;
  const request = new XMLHttpRequest();
  let data = `action=my_action_callback&search_key=${searchKey}`;
  request.open("POST", my_ajax_form.ajaxurl, true);
  request.setRequestHeader(
    "Content-Type",
    "application/x-www-form-urlencoded; charset=UTF-8"
  );
  request.onload = function () {
    if (this.status >= 200 && this.status < 400) {
      var content = JSON.parse(this.response);
      document.querySelector(".container-wrapper").innerHTML = content.content;
    } else {
      console.log(this.status);
    }
  };
  request.onerror = function () {
    console.log("error");
  };
  request.send(data);
});
