app.factory("projectDetailsSrv", function ($http, $q, $log) {

  var items = [];

  // Item constructor
  function Item(parseItem) {
    // this.projectId = parseProject.get("objectId");
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

    const ItemParse = Parse.Object.extend('Item');
    const newItem = new ItemParse();

    // newProject.set('projectName', projectId);
    newItem.set('itemName', itemName);
    newItem.set('itemOwner', itemOwner);
    newItem.set('itemCategory', itemCategory);
    newItem.set('itemExpense', itemExpense);

    newItem.save().then(
      function (result) {
        $log.info('Item created', result);
        var newItem = new Item(result);
        async.resolve(newItem);
      },
      function (error) {
        $log.error('Error while creating Item: ', error);
        async.reject(error);
      }
    );

    return async.promise;
  }



  return {
    items: items,
    getItems: getItems,
    createItem: createItem
  }

});
