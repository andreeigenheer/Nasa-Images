import express from "express";
import 'dotenv/config';
import OpenAI from "openai";
import cors from "cors";

const app = express();
app.use(cors())
app.use(express.json());

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});


app.post("/translate", async (req, res) => {
  const { text, target_lang } = req.body;
  try {
    const completion = await client.chat.completions.create({
       model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: `Você é um tradutor profissional. Traduza o texto do inglês para ${target_lang}. Responda apenas com a tradução, sem explicações.`,
        },
        { role: "user", content: text },
      ],
    });

    const translated = completion.choices[0].message.content;
    res.json({ translated });
  }catch (err) {
  console.error("ERRO DETALHADO:", err)
  if (err.response) {
    console.error("ERRO RESPONSE DATA:", err.response.data)
  }
  res.status(500).json({ error: "Erro na tradução", details: err.message })
}
});

app.listen(3000, () => console.log("Servidor de tradução rodando na porta 3000"));
