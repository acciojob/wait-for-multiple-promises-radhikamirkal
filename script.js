//your JS code here. If required.
const output = document.getElementById("output");

// 1️⃣ Show default loading row
output.innerHTML = `
  <tr id="loading">
    <td colspan="2" class="text-center">Loading...</td>
  </tr>
`;

// Function to create a promise with random delay (1–3 sec)
function createPromise() {
  const time = Math.random() * 2 + 1; // Random between 1 and 3

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(time);
    }, time * 1000);
  });
}

// 2️⃣ Create 3 promises
const promise1 = createPromise();
const promise2 = createPromise();
const promise3 = createPromise();

// 3️⃣ Wait for all promises
Promise.all([promise1, promise2, promise3]).then((results) => {
  
  // Remove loading row
  output.innerHTML = "";

  // Add individual promise rows
  results.forEach((time, index) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>Promise ${index + 1}</td>
      <td>${time.toFixed(3)}</td>
    `;

    output.appendChild(row);
  });

  // Calculate total (maximum time)
  const totalTime = Math.max(...results);

  const totalRow = document.createElement("tr");
  totalRow.innerHTML = `
    <td><strong>Total</strong></td>
    <td><strong>${totalTime.toFixed(3)}</strong></td>
  `;

  output.appendChild(totalRow);
});
