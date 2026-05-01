🔑 Key Concepts
---------------

### 1\. The fetch() Method

*   The basic tool for making network requests.
    
*   **Syntax:** fetch(url, options)
    
*   It returns a **Promise** that resolves into a **Response Object**.
    

### 2\. The Request-Response Cycle

*   **Request:** What you send to the server (URL, Method, Headers, Body).
    
*   **Response:** What the server sends back (Status, Headers, Data).
    
*   **Network Errors:** The Promise only rejects if there is a total network failure (offline/DNS error). It **does not** reject on 404 or 500 errors.
    

### 3\. Handling Errors with response.ok

*   **response.ok:** A boolean that is true for status codes 200-299.
    
*   **Manual Throw:** Because fetch doesn't reject on 404s, we must manually use if (!response.ok) { throw new Error(...) } to jump to the catch block.
    
*   **Status Codes:** \* 200: Success
    
    *   201: Created (Common for POST)
        
    *   404: Not Found
        
    *   500: Server Error
        

### 4\. Parsing JSON Data

*   Servers send data as raw strings. We use .json() to turn that string into a JavaScript Object.
    
*   **Note:** .json() also returns a Promise, so it must be awaited.
    

### 5\. HTTP Methods (GET vs. POST)

*   **GET:** The default method. Used to retrieve data from a server.
    
*   **POST:** Used to send/create new data. Requires an **Options Object**.
    
    *   **Method:** Set to 'POST'.
        
    *   **Headers:** Metadata like 'Content-Type': 'application/json'.
        
    *   **Body:** The actual data, converted to a string via JSON.stringify(data).
        

### 6\. Async/Await with Fetch

*   The cleanest way to handle multiple asynchronous calls.
    
*   Allows you to use try...catch blocks for professional error handling.