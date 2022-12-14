// Today Customer Bill list
$(document).ready(function(){
    $("#customer-bill-list").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $("#customer-bill-list-data tr").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  });
  
  
  // Today Expence Total list
  $(document).ready(function(){
    $("#today-expence-list").on("keyup", function() {
      console.log($(this).val().toLowerCase())
      var value = $(this).val().toLowerCase();
      $("#today-expence-total-data tr").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  });
  
  
  // Today Bill Recived list
  $(document).ready(function(){
    $("#today-bill-recived").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $("#today-bill-recived-data tr").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  });
