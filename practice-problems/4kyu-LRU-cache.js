// LRU Cache

// class LRUCache {
function LRUCache(capacity, init) {

    // stack property
    Object.defineProperty(this, 'immutableData', {
        value: {
            enumerable: false,
            writable: false,
            configurable: false
        },
        enumerable: false
    });

    // stack property
    Object.defineProperty(this, 'immutableAccessor', {
        value: {
            enumerable: false,
            configurable: false
        },
        enumerable: false
    });

    // stack property
    Object.defineProperty(this, 'stack', {
        value: [],
        enumerable: false
    });

    // useItem helper
    Object.defineProperty(this, 'useItem', {
        value: function(key) {
            console.log('this is the key', key, 'this is the stack', this.stack);
            const keyIdx = this.stack.indexOf(key);
            this.stack.push(this.stack.splice(keyIdx, 1)[0]); // Remove item and add it to the end
        },
        enumerable: false
    });


    // capacity property
    Object.defineProperty(this, 'capacity', Object.assign({
        get: function() { return capacity; },
        set: function(newCap) { capacity = newCap; this.isValid(); },
    }, this.immutableAccessor));

    // size property
    Object.defineProperty(this, 'size', Object.assign({
        get: function() { return this.stack.length; },
    }, this.immutableAccessor));

    // cache function
    Object.defineProperty(this, 'cache', Object.assign(
        { value: function(key, value) {
            if (!this[key]) {
                // Definte an enumerable property
                Object.defineProperty(this, key, {
                    get: function() { this.useItem(key); return value; },
                    set: function(newVal) { this.useItem(key); value = newVal; },
                    enumerable: true,
                    configurable: true
                });
                // Add to the end of stack
                this.stack.push(key);
                this.isValid();
            }
            this[key] = value;

            this.isValid();

            return this;
        }},
        this.immutableData
    ));

    // isValid function
    Object.defineProperty(this, 'isValid', Object.assign(
        { value: function() {
            while (this.size > this.capacity) {
                this.delete(this.stack[0]);
            }
        }},
        this.immutableData
    ));

    // cache function
    Object.defineProperty(this, 'delete', Object.assign(
        { value: function(key) {
            console.log('deleting:', key, 'current stack:', this.stack);
            const keyIdx = this.stack.indexOf(key);
            if (keyIdx !== -1) this.stack.splice(keyIdx, 1);
            const result = delete this[key];
            console.log('stack after deleting', this.stack);
            return result;
        }},
        this.immutableData
    ));

    // If there's an initial object, add it
    if (init) this.cache(Object.keys(init)[0], init[Object.keys(init)[0]]);
}
