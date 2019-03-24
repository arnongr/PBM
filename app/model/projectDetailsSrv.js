app.factory("projectDetailsSrv", function ($http, $q, $log) {

  var items = [];

  // Item constructor
  function Item(parseItem) {

    this.itemName = parseItem.get("itemName");
    this.itemOwner = parseItem.get("itemOwner");
    this.itemCategory = parseItem.get("itemCategory");
    this.itemExpense = parseItem.get("itemExpense");
    this.parseItem = parseItem;
  }


  // Getting Items from DB:
  function getItems() {
    var async = $q.defer();
    // var activeUserId = userSrv.getActiveUser().id;
    var items = [];

    const ItemtParse = Parse.Object.extend('Item');
    const query = new Parse.Query(ItemtParse);
    // query.equalTo("userId", Parse.Project.current());
    query.find().then(function (results) {

      for (var i = 0; i < results.length; i++) {
        items.push(new Item(results[i]));
      }

      async.resolve(items);

    }, function (error) {
      $log.error('Error while fetching Item', error);
      async.reject(error);
    });

    return async.promise;
  }


  // Creating new item:
  function createItem(itemName, itemOwner, itemCategory, itemExpense) {
    var async = $q.defer();
    // var itemId = items.length + 1;

    const ItemParse = Parse.Object.extend('Item');
    const newItem = new ItemParse();

    newItem.set('itemName', itemName);
    newItem.set('itemOwner', itemOwner);
    newItem.set('itemCategory', itemCategory);
    newItem.set('itemExpense', itemExpense);

    newItem.save().then(
      function (result) {
        $log.info('Item created', result);
        var newItem = new Item(result);
        async.resolve(newItem);
        // return itemId;
      },
      function (error) {
        $log.error('Error while creating Item: ', error);
        async.reject(error);
      }
    );
    return async.promise;
  }

  // Updating itemName:
  function updateItemName(item, itemNameNew) {
    var async = $q.defer();
    item.parseItem.set("itemName", itemNameNew);
    console.log('Updated Item');
    async.resolve(itemNameNew);
    item.parseItem.save();
    (error) => {
      console.error('Error while updating Item', error);
      async.reject(error);
    };
    return async.promise;
  };

  // Updating itemOwner:
  function updateItemOwner(item, itemOwnerNew) {
    var async = $q.defer();
    item.parseItem.set("itemOwner", itemOwnerNew);
    console.log('Updated Item');
    async.resolve(itemOwnerNew);
    item.parseItem.save();
    (error) => {
      console.error('Error while updating Item', error);
      async.reject(error);
    };
    return async.promise;
  };

  // Updating itemCategory:
  function updateItemCategory(item, itemCategoryNew) {
    var async = $q.defer();
    item.parseItem.set("itemCategory", itemCategoryNew);
    console.log('Updated Item');
    async.resolve(itemCategoryNew);
    item.parseItem.save();
    (error) => {
      console.error('Error while updating Item', error);
      async.reject(error);
    };
    return async.promise;
  };

  // Updating itemExpense:
  function updateItemExpense(item, itemExpenseNew) {
    var async = $q.defer();
    item.parseItem.set("itemExpense", itemExpenseNew);
    console.log('Updated Item');
    async.resolve(itemExpenseNew);
    item.parseItem.save();
    (error) => {
      console.error('Error while updating Item', error);
      async.reject(error);
    };
    return async.promise;
  };


  // Deleting item:
  function deleteItem(item) {
    var async = $q.defer();

    item.parseItem.destroy().then((response) => {
      console.log('Deleted parseItem', response);
      async.resolve();
    }, (error) => {
      console.error('Error while deleting parseItem', error);
      async.reject(error);
    });

    return async.promise;
  }

  // Summing total expense of items:
  function totalItemExpense() {
    
  }

  return {
    items: items,
    getItems: getItems,
    createItem: createItem,
    deleteItem: deleteItem,
    updateItemName: updateItemName,
    updateItemOwner: updateItemOwner,
    updateItemCategory: updateItemCategory,
    updateItemExpense: updateItemExpense
  }

});
