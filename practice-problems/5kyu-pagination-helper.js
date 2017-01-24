// Pagination helper

class PaginationHelper {
    constructor(arr, limit) {
        this.limit = limit;
        this.arr = arr;
    }

    itemCount() {
        return this.arr.length;
    }

    pageCount() {
        const wholePages = Math.floor(this.itemCount() / this.limit);
        const partPage = this.itemCount % this.limit ? 0 : 1;
        return wholePages + partPage;
    }

    pageItemCount(page) {
        if ((page + 1) > this.pageCount()) return -1;
        if ((page + 1) * this.limit > this.itemCount()) return this.itemCount() % this.limit;
        return this.limit;
    }

    pageIndex(idx) {
        if (((idx + 1) > this.itemCount()) || (idx < 0)) return -1;
        if (!((idx + 1) % this.limit)) return (idx + 1) / this.limit - 1;
        return Math.floor((idx + 1) / this.limit);
    }
}

// 4 per page, 11 items;
// pageIndex(10) // item 11 => p2
// p0 = 1-4
// p1 = 5-8
// p2 = 9-11
