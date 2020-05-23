//jshint esversion: 6

let controller = function() {
  let addCommentFromInputBox = function() {
    //Semmy uses "$" to name variables that will contain jQuery objects
    let $new_comment;

    if ($(".comment-input input").val() !== "") {
      $new_comment = $("<p>").text($(".comment-input input").val());
      //$new_comment.hide();
      $(".comments").append($new_comment);
      //$new_comment.fadeIn();
      $(".comment-input input").val("");

      //log the list of aragraph elements
      console.log($(".comments").html());
    }
  };

  if (localStorage.getItem("toDoList")) {
    localStorage.setItem("toDoList", $(".comments").html());

    $(".comments").html(localStorage.getItem("toDoList"));
  }

  // ^^ .documents.pagelistener?? ^

  $(".comment-input button").on("click", function(event) {
    addCommentFromInputBox();
  });

  $(".comment-input input").on("keypress", function(event) {
    if (event.keyCode === 13) {
      addCommentFromInputBox();
    }
  });
};

$(document).ready(controller);
