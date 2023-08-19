function extractNumbersFromLink(link) {
  const regex = /\/(\d+)$/;
  const match = link.match(regex);

  if (match) {
    const number = match[1];
    return number;
  } else {
    return null;
  }
}

export default extractNumbersFromLink;
