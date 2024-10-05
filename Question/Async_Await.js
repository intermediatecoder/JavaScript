// A function that simulates fetching data from an API after 2 seconds
function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Data received");
      }, 2000);
    });
  }
  
  // Async function using await to handle the asynchronous fetchData
  async function getData() {
    console.log("Fetching data...");
    
    // Await pauses execution until fetchData resolves
    const result = await fetchData();
    
    console.log(result); // Outputs: Data received
  }
  
  getData();
  