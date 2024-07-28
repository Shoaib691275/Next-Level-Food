import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";
import fs from "node:fs";

const db = sql("meals.db");

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 5000));

  return db.prepare("SELECT * FROM meals").all();
}

export default async function getMeal(slug) {
  return db.prepare("SELECT * FROM meals WHERE slug=?").get(slug);
}

export async function saveMeals(meal) {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);

  const extension = meal.image.name.split(".").pop();
  const filepath = `${meal.slug}.${extension}`;

  const stream = fs.createWriteStream(`public/images/${filepath}`);
  const bufferedImage = await meal.image.arrayBuffer();

  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) {
      throw error;
    }
  });
  meal.image = `/images/${filepath}`;
  db.prepare(
    "INSERT  INTO meals(title,summary,instructions,creator,creator_email,image,slug) VALUES (@title,@summary,@instructions,@creator,@creator_email,@image,@slug)"
  ).run(meal);
}
