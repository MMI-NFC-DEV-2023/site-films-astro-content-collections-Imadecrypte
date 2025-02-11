import { glob } from "astro/loaders";
import { defineCollection } from "astro:content";

const personne = defineCollection({
    loader: glob("src/data/personne/*.md", { pattern: "**/*.md" }),
    schema: z.object({
        nom: z.string(),
        lieuNaissance: z.string(),
        dateNaissance: z.string(),
        dateDeces: z.string(),
        nationalite: z.string(),
    })
});