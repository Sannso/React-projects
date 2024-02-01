import { test, expect } from "@playwright/test";
export const IMAGE_CAT_API_URL = "https://cataas.com/cat/";

const pageUrl = "http://localhost:5173/";

test("Page load text and image", async ({ page }) => {
  await page.goto(pageUrl);

  //Obtener texto
  const text = await page.getByTestId("fact");
  const textContent = await text.textContent();

  //Obtener imagen
  const img = await page.getByRole("img");
  const imageSrc = await img.getAttribute("src");

  // Expect a string.
  await expect(textContent?.length).toBeGreaterThan(0);

  // Expect a image.
  await expect(imageSrc?.startsWith(IMAGE_CAT_API_URL)).toBeTruthy();
});
