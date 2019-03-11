app.factory("projectViewSrv", function ($http, $q, $log) {

    var items = [];
  
    // Items constructor
    function Item(itemIdOrObject, itemName, itemCategory, itemExpense) {
      
      if (typeof itemIdOrObject === "object") {
        this.itemId = itemIdOrObject.itemId;
        this.itemName = itemIdOrObject.itemName;
        this.itemCategory = itemIdOrObject.itemCategory;
        this.itemExpense = itemIdOrObject.itemExpense;
      } else {
        this.itemId = itemIdOrObject;
        this.itemName = itemName;
        this.itemCategory = itemCategory;
        this.itemExpense = itemExpense;
      }
    }
    
    // Car.prototype.kmPerYear = function() {
    //   var currentYear = new Date().getFullYear();
    //   return this.km / (currentYear - this.year + 1);
    // }
  
    
    function getItems() {
      var async = $q.defer();
      
        $http.get("assets/data/items.json").then(function(res) {
          for (var i = 0; i < res.data.length; i++) {
            items.push(new Item(res.data[i]));
          }
            async.resolve(items);     
        }, function(err) {

          console.error(err);
          async.reject(err);
        });
      
      
      return async.promise;
    }    
   
    return {
        items: items,
        getItems: getItems
    }
    
  });