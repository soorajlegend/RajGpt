import { Configuration, OpenAIApi } from "openai";

const configration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
})

const openai = new OpenAIApi(configration);

export default openai
