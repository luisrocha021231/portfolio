const SITE_URL = "https://luisrocharo.com/";

const API_KEY = process.env.PAGESPEED_API_KEY || "";

const CATEGORIES = ["performance", "accessibility", "best-practices", "seo"];

async function fetchScores(strategy) {
  const params = new URLSearchParams({ url: SITE_URL, strategy });
  CATEGORIES.forEach((c) => params.append("category", c));
  if (API_KEY) params.set("key", API_KEY);

  const res = await fetch(
    `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?${params}`
  );

  if (!res.ok) {
    throw new Error(`PageSpeed API respondió ${res.status}: ${await res.text()}`);
  }

  const data = await res.json();
  const categories = data.lighthouseResult.categories;

  return {
    performance: Math.round(categories.performance.score * 100),
    accessibility: Math.round(categories.accessibility.score * 100),
    bestPractices: Math.round(categories["best-practices"].score * 100),
    seo: Math.round(categories.seo.score * 100),
  };
}

async function main() {
  const scores = await fetchScores("mobile");

  const output = {
    url: SITE_URL,
    updatedAt: new Date().toISOString(),
    scores,
  };

  const fs = await import("node:fs/promises");
  await fs.writeFile("public/performance.json", JSON.stringify(output, null, 2));

}

main().catch((err) => {
  process.exit(1);
});
