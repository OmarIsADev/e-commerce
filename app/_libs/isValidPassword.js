export async function isValidPassowrd(password, hashedPassword) {
    console.log(hashPassword(password), hashedPassword)
    return (await hashPassword(password)) === hashedPassword;
}

async function hashPassword(password) {
  const arrayBuffer = await crypto.subtle.digest(
    "SHA-256",
    new TextEncoder().encode(password)
  );

  return Buffer.from(arrayBuffer).toString("base64");
}
