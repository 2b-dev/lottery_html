var elementPosition = $("#numcat").offset();

$(window).scroll(function() {
  if ($(window).scrollTop() > elementPosition.top) {
    $("#numcat").addClass("sticky-class");
  } else {
    $("#numcat").removeClass("sticky-class");
  }
});

function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function(e) {
      $("#img-file").attr("src", e.target.result);
    };

    reader.readAsDataURL(input.files[0]);
  }
}

$("#input-file").change(function() {
  readURL(this);
});

$("#img-file").click(function() {
  $("#input-file").click();
});
