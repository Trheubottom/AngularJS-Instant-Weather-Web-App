$(document).ready(function(){
  $("#heading1").on("mouseover",function(){
    $(this).addClass("class1");
  });
  $("#heading1").on("mouseout",function(){
    $(this).removeClass("class1");
  });
  $("#heading2").on("mouseover",function(){
    $(this).addClass("class1");
  });
  $("#heading2").on("mouseout",function(){
    $(this).removeClass("class1");
  });
  $("#heading3").on("mouseover",function(){
    $(this).addClass("class1");
  });
  $("#heading3").on("mouseout",function(){
    $(this).removeClass("class1");
  });
  $("#heading4").on("mouseover",function(){
    $(this).addClass("class1");
  });
  $("#heading4").on("mouseout",function(){
    $(this).removeClass("class1");
  });
  $(".breadcrumb-item").on("mouseover",function(){
    $(this).addClass("class2");
  });
  $(".breadcrumb-item").on("mouseout",function(){
    $(this).removeClass("class2");
  });
});
