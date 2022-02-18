function addActive() {
  let url = window.location.pathname.split("/");

  // Get the current path and find the target link
  let path =
    url[url.length - 2] + "/" + (url[url.length - 1] || "") || "index.html";

  let selector = '[data-page="' + path + '"]';

  let target = document.querySelector(selector);

  if (target.length == 0) {
    throw "there is no element with that selector " + selector;
  }

  target.classList.add("active");
}

addActive();

// $(document).ready(function () {
//   $("a").each(function () {
//     if (
//       $(this).attr("href") == window.location.pathname ||
//       window.location.pathname == ""
//     )
//       $(this).addClass("active");
//   });
// });

// $(document).ready(function () {
//   // Add active class to menu
//   $(function () {
//     var pgurl = window.location.href.substr(
//       window.location.href.lastIndexOf("/") + 1
//     );
//     $("nav .navbar-collapse li a").each(function () {
//       if ($(this).attr("href") == pgurl) $(this).addClass("active");
//       if (pgurl == "")
//         $("nav .navbar-collapse li a:first-child").addClass("active");
//     });
//   });
// });
