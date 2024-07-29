// Task 6 : Use the Queue class to simulate a simple printer queue where print jobs are added to the queue and processed in order.

class Queue {
    constructor() {
      this.items = [];
    }
  
    enqueue(element) {
      this.items.push(element);
    }
  
    dequeue() {
      if (this.isEmpty()) {
        console.log('Queue is empty');
        return null;
      }
      return this.items.shift(); // shift() removes the first element from the array
    }
  
    front() {
      if (this.isEmpty()) {
        console.log('Queue is empty');
        return null;
      }
      return this.items[0]; // Access the first element in the array
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  
    size() {
      return this.items.length;
    }
  
    display() {
      console.log(this.items);
    }
  }
  
  // Simulate a simple printer queue
  class PrinterQueue {
    constructor() {
      this.queue = new Queue();
    }
  
    addPrintJob(job) {
      console.log(`Adding print job: ${job}`);
      this.queue.enqueue(job);
    }
  
    processPrintJobs() {
      console.log('Processing print jobs...');
      while (!this.queue.isEmpty()) {
        const job = this.queue.dequeue();
        console.log(`Printing job: ${job}`);
      }
      console.log('All print jobs have been processed.');
    }
  
    displayQueue() {
      console.log('Current print queue:');
      this.queue.display();
    }
  }
  
  // Example usage:
  const printerQueue = new PrinterQueue();
  
  printerQueue.addPrintJob('Document1.pdf');
  printerQueue.addPrintJob('Image2.png');
  printerQueue.addPrintJob('Report3.docx');
  
  printerQueue.displayQueue(); 
  printerQueue.processPrintJobs();
  
  
  printerQueue.displayQueue(); 
  