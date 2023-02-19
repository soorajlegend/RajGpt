import admin from "firebase-admin";
import { adminDb } from "firebaseAdmin";
import query from "lib/queryApi";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
    answer: string;
}

export default async function handler(
req: NextApiRequest,
res: NextApiResponse<Data>
) {

    const {prompt, chatId, model, session } = req.body;

    if (!prompt) {
        res.status(400).json({ answer: "Please provide a prompt!" });
        return;
    }
    if (!chatId) {
        res.status(400).json({ answer: "Please provide a valid chat ID!." });
        return;
    }

    // chatGPT Query
    const response = await query(prompt, chatId, model);

    const message: Message = {
        text: response || "myGpt was unable to find an answer to that!",
        createdAt: admin.firestore.Timestamp.now(),
        user: {
            _id: "myGpt",
            name: "myGpt",
            avatar: "/gpt.png",
        },
    };


    await adminDb
    .collection('users')
    .doc(session?.user?.email)
    .collection('chats')
    .doc(chatId)
    .collection('messages')
    .add(message);


    res.status(200).json({answer: message.text})
}