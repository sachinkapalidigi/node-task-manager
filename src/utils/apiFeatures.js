class APIFeatures {
  constructor(collection, queryString) {
    this.collection = collection;
    this.queryString = queryString;
  }

  filter() {
    const queryObject = { ...this.queryString };
    // 1. Filtering
    const excludedFields = ["sortBy"];
    excludedFields.forEach((field) => delete queryObject[field]);

    this.collection = this.collection.filter(function (doc) {
      return Object.keys(queryObject)
        .filter((obj) => true && queryObject[obj])
        .every(function (key) {
          return doc[key] === queryObject[key];
        });
    });

    return this;
  }

  sort() {
    // 3. Sorting
    const sortBy = this.queryString.sortBy || "createdAt";
    this.collection = this.collection.sort((a, b) => {
      if (a[sortBy] > b[sortBy]) {
        return 1;
      }
      return -1;
    });
    return this;
  }

  limitFields() {
    return this;
  }

  paginate() {
    return this;
  }
}

module.exports = APIFeatures;
