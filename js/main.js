$(document).ready(function(){
  $(".btn2").click(function(){
    $("img").hide()
  })
  $(".btn1").click(function(){
    $("img").show()
  })
  $("h1").dblclick(function(){
    $("h1").toggleClass("style2")
  })
  $(".btn3").click(function(){
    $("ul").append("<li>Another Player</li>")
  })
  $(".hover").hover(function(){
    $(this).css("background-color","red")
  })
  $("h2").mouseleave(function(){
    $(this).slideUp("slow")
  })
  $(".third").hover(function(){
    $(this).hide()
  })
  $(".btn4").click(function(){
    $(".third").show()
  })
  $("h1").hover(function(){
    $(this).css("font-family","serif")
  })
})
