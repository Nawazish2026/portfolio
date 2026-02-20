import { NextResponse } from "next/server";

// Fallback values if API calls fail
const FALLBACK = { leetcode: 450, gfg: 368, codechef: 312, codeforces: 50 };

async function fetchLeetCode(): Promise<number> {
  try {
    const res = await fetch("https://leetcode.com/graphql/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: `
          query userProblemsSolved($username: String!) {
            matchedUser(username: $username) {
              submitStatsGlobal {
                acSubmissionNum {
                  difficulty
                  count
                }
              }
            }
          }
        `,
        variables: { username: "user1199KS" },
      }),
      cache: "no-store",
    });
    const data = await res.json();
    const stats =
      data?.data?.matchedUser?.submitStatsGlobal?.acSubmissionNum;
    if (stats) {
      const allEntry = stats.find(
        (s: { difficulty: string; count: number }) => s.difficulty === "All"
      );
      return allEntry?.count ?? FALLBACK.leetcode;
    }
    return FALLBACK.leetcode;
  } catch {
    return FALLBACK.leetcode;
  }
}

async function fetchGFG(): Promise<number> {
  try {
    const res = await fetch(
      "https://www.geeksforgeeks.org/api/profile/?username=nawazishhamslm",
      {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36",
        },
        cache: "no-store",
      }
    );
    const data = await res.json();
    return data?.data?.total_problems_solved ?? FALLBACK.gfg;
  } catch {
    return FALLBACK.gfg;
  }
}

async function fetchCodeChefProfile(username: string): Promise<number> {
  try {
    const res = await fetch(`https://www.codechef.com/users/${username}`, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36",
      },
      cache: "no-store",
    });
    const html = await res.text();
    const match = html.match(/Total\s+Problems\s+Solved\s*:\s*(\d+)/i);
    return match ? parseInt(match[1], 10) : 0;
  } catch {
    return 0;
  }
}

async function fetchCodeChef(): Promise<number> {
  // Combine two CodeChef accounts
  const [count1, count2] = await Promise.all([
    fetchCodeChefProfile("david123john"),
    fetchCodeChefProfile("afridishahid16"),
  ]);
  const total = count1 + count2;
  return total > 0 ? total : FALLBACK.codechef;
}

async function fetchCodeforces(): Promise<number> {
  try {
    // Fetch all accepted submissions and count unique problems
    const res = await fetch(
      "https://codeforces.com/api/user.status?handle=Nawazishhassan",
      { cache: "no-store" }
    );
    const data = await res.json();
    if (data.status === "OK" && Array.isArray(data.result)) {
      const solved = new Set<string>();
      for (const sub of data.result) {
        if (sub.verdict === "OK") {
          solved.add(`${sub.problem.contestId}-${sub.problem.index}`);
        }
      }
      return solved.size || FALLBACK.codeforces;
    }
    return FALLBACK.codeforces;
  } catch {
    return FALLBACK.codeforces;
  }
}

export async function GET() {
  const [leetcode, gfg, codechef, codeforces] = await Promise.all([
    fetchLeetCode(),
    fetchGFG(),
    fetchCodeChef(),
    fetchCodeforces(),
  ]);

  return NextResponse.json(
    { leetcode, gfg, codechef, codeforces },
    {
      headers: {
        "Cache-Control": "no-cache, no-store, must-revalidate",
      },
    }
  );
}
