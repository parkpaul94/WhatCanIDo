$(document).ready(function() {

    var $newItemInput = $("input.new-item");

    var $todoContent = $("#content");

    $(document).on("click", function(){
        var todos = [];
  
        getTodos();
      
        function initializeRows() {
          $todoContent.empty();
          var rowsToAdd = [];
          for (var i = 0; i < todos.length; i++) {
            rowsToAdd.push(createNewRow(todos[i]));
          }
          $todoContent.prepend(rowsToAdd);
        }
      
        function getTodos() {
          $.get("/api/content", function(data) {
            todos = data;
            initializeRows();
          });
        }
    });
});
  
   