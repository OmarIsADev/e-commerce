import { isValidPassowrd } from "./app/_libs/isValidPassword";

export async function middleware(request) {
  if ((await isAuthenticated(request)) === false) {
    return new Response("Not authenticated", {
      status: 401,
      headers: { "WWW-Authenticate": "Basic" },
    });
  }
}

async function isAuthenticated(request) {
  const authHeader =
    request.headers.get("Authorization") ||
    request.headers.get("authorization");
  if (authHeader == null) return false;

  const [username, password] = Buffer.from(authHeader.split(" ")[1], "base64")
    .toString()
    .split(":");

    console.log(username, process.env.ADMIN_USERNAME)
  return (
    (username === process.env.ADMIN_USERNAME ) &&
    (await isValidPassowrd(password, process.env.HASHED_PASSWORD))
  );
//   return true;
}

export const config = {
  matcher: "/admin/:path*",
};
