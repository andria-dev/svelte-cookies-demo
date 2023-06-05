let count = 0;

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function POST(event) {
  event.cookies.set(`TEST_COOKIE_${count % 4}`, `test-${count++}`, {
    path: '/',
    httpOnly: false,
    sameSite: 'strict',
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 60 * 24 * 30
  });

  return new Response();
}