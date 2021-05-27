 dataStore = [];
  
    add = function (key, value) {
      if (key && value) {
        this.dataStore.push({
          key: key,
          value: value,
        });
        return this.dataStore;
      }
    };
  
    removeAt = function (key) {
      for (let i = 0; i < this.dataStore.length; i++) {
        if (this.dataStore[i].key === key)
          this.dataStore.splice(this.dataStore[i], 1);
      }
    };
  
    isKeyIn = function (key) {
      for (let i = 0; i < this.dataStore.length; i++) {
        if (this.dataStore[i].key === key) return true;
      }
      return false;
    };
  
    findAt = function (key) {
      for (let i = 0; i < this.dataStore.length; i++) {
        if (this.dataStore[i].key === key) {
          return this.dataStore[i].value;
        }
      }
    };
  
    AddToValue = function (key) {
      this.dataStore.forEach((e) => {
        if (e.key === key) e.value = 2;
      });
    };
  
  module.exports = { add, removeAt, isKeyIn, findAt, AddToValue };