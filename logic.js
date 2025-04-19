export function calculatePoints(receipt) {
  let points = 0;

  // Rule 1: Alphanumeric characters in retailer name
  points += (receipt.retailer.match(/[a-zA-Z0-9]/g) || []).length;

  // Rule 2: Total is round dollar amount
  if (receipt.total.endsWith('.00')) points += 50;

  // Rule 3: Total is multiple of 0.25
  if (parseFloat(receipt.total) % 0.25 === 0) points += 25;

  // Rule 4: 5 points for every 2 items
  points += Math.floor(receipt.items.length / 2) * 5;

  // Rule 5: Description length multiple of 3
  receipt.items.forEach(item => {
    const desc = item.shortDescription.trim();
    if (desc.length % 3 === 0) {
      points += Math.ceil(parseFloat(item.price) * 0.2);
    }
  });

  // Rule 6: Total greater than 10.00
  if (parseFloat(receipt.total) > 10.00) points += 5;

  // Rule 7: Odd day of the purchase date
  const day = parseInt(receipt.purchaseDate.split('-')[2]);
  if (day % 2 !== 0) points += 6;

  // Rule 8: Time between 2pm and 4pm
  const [hour, minute] = receipt.purchaseTime.split(':').map(Number);
  if (hour === 14 || (hour === 15 && minute < 60)) points += 10;

  return points;
}
