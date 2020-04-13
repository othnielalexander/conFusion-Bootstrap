// ___________________Script for Tool Tip____________________________

// $(document).ready(function () {
//   $('[data-toggle="tooltip"]').tooltip();
// });

$(document).ready(function () {
  $("#mycarousel").carousel({ interval: 2000 });
  $(document).click(function () {
    if ($("#carouselButton").children("span").hasClass("fa-pause")) {
      $("#mycarousel").carousel("pause");
      $("#carouselButton").children("span").removeClass("fa-pause");
      $("#carouselButton").children("span").addClass("fa-play");
    } else if ($("#carouselButton").children("span").hasClass("fa-play")) {
      $("#mycarousel").carousel("cycle");
      $("#carouselButton").children("span").removeClass("fa-play");
      $("#carouselButton").children("span").addClass("fa-pause");
    }
  });

  $("#loginModal-Button").click(function () {
    $("#loginModal").modal("show");
  });

  $("#reserveTable-Button").click(function () {
    $("#reserveModal").modal("show");
  });
});
