// app/api/quiz/route.js

export async function GET(req) {
  try {
    const response = await fetch('https://api.jsonserve.com/Uw5CrX');
    if (!response.ok) {
      throw new Error('Failed to fetch quiz data');
    }
    const data = await response.json();
    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
