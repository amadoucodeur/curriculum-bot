import OpenAI from "openai";


const openKey = process.env.OPENAI_API_KEY

if(!openKey){
    throw new Error("la clé n'exist pas")
}
export const openai = new OpenAI({
    apikey: openKey,
})