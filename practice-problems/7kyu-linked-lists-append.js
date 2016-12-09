function Node(data) {
    this.data = data;
    this.next = null;
}

function append(listA, listB) {
    let head, nextNode;
    if (listA) head = listA;
    else return listB; // Handles the empty list A, then just return B

    // Find the tail of A
    nextNode = head;
    while (nextNode.next) { nextNode = nextNode.next; }

    // Change the tail to the head of list B
    nextNode.next = listB;

    // Return the new concatenated list
    return head;
}
