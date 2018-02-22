var randomNum = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
var crystal1Value = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
var crystal2Value = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
var crystal3Value = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
var userTotalScore = 0;
var wins = 0;
var losses = 0;



$(function () {
  $(".total").html(userTotalScore)
  $('.rand-num').html(randomNum)
  console.log(randomNum)
  $(".crystal-1").attr("data-value", crystal1Value);
  $('.crystal-1').on('click', function () {
    $(".crystal-1").attr("data-value")
    console.log(parseInt($(".crystal-1").attr("data-value")))
    userTotalScore += crystal1Value
    $(".total").html(userTotalScore)
    console.log(userTotalScore)
    if (userTotalScore === randomNum) {
      wins++
      $(".winning").html(wins)
      alert("You win!");
     randomNum = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
     crystal1Value = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
     crystal2Value = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
     crystal3Value = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
     userTotalScore = 0;
      $('.rand-num').html(randomNum)
      $("total").html(userTotalScore)

    }
    else if (userTotalScore >= randomNum) {
      losses++
      $(".losing").html(losses)
      alert("You lose!!");
     randomNum = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
     crystal1Value = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
     crystal2Value = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
     crystal3Value = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
     userTotalScore = 0;
      $('.rand-num').html(randomNum)
      $(".total").html(userTotalScore)
    }
  });

  $(".total").html(userTotalScore)
  $(".crystal-2").attr("data-value", crystal2Value);
  $('.crystal-2').on('click', function () {
    $(".crystal-2").attr("data-value")
    console.log(parseInt($(".crystal-2").attr("data-value")))
    userTotalScore += crystal2Value
    $(".total").html(userTotalScore)
    console.log(userTotalScore)
    if (userTotalScore === randomNum) {
      wins++
      $(".winning").html(wins)
      alert("You win!");
     randomNum = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
     crystal1Value = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
     crystal2Value = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
     crystal3Value = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
     userTotalScore = 0;
      $('.rand-num').html(randomNum)
      $(".total").html(userTotalScore)
    }

    else if (userTotalScore >= randomNum) {
      losses++
      $(".losing").html(losses)
      alert("You lose!!");
     randomNum = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
     crystal1Value = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
     crystal2Value = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
     crystal3Value = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
     userTotalScore = 0;
      $('.rand-num').html(randomNum)
      $(".total").html(userTotalScore)
    }
  });

  $(".total").html(userTotalScore)
  $(".crystal-3").attr("data-value", crystal3Value);
  $('.crystal-3').on('click', function () {
    $(".crystal-3").attr("data-value")
    console.log(parseInt($(".crystal-3").attr("data-value")))
    userTotalScore += crystal3Value
    $(".total").html(userTotalScore)
    console.log(userTotalScore)
    if (userTotalScore === randomNum) {
      wins ++ 
      $(".winning").html(wins)
      alert("You win!"); 
     randomNum = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
     crystal1Value = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
     crystal2Value = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
     crystal3Value = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
     userTotalScore = 0;
     $('.rand-num').html(randomNum)
      $(".total").html(userTotalScore)
    }

    else if (userTotalScore >= randomNum) {
      losses++
      $(".losing").html(losses)
      alert("You lose!!");
     randomNum = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
     crystal1Value = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
     crystal2Value = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
     crystal3Value = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
     userTotalScore = 0;
      $('.rand-num').html(randomNum)
      $(".total").html(userTotalScore)
    }
  });

});
