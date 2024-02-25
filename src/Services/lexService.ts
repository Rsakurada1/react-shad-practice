import { LexRuntimeV2Client, RecognizeTextCommand } from "@aws-sdk/client-lex-runtime-v2";

// Lex V2 クライアントの初期化
const lexClient = new LexRuntimeV2Client({
  region: "ap-northeast-1", // あなたのボットがデプロイされているリージョン
});

// メッセージを Lex に送信し、レスポンスを取得する関数
export const sendMessageToLex = async (message: string, userId: string): Promise<string> => {
  const params = {
    botId: "YourBotId", // あなたのボットID
    botAliasId: "YourBotAliasId", // あなたのボットエイリアスID
    localeId: "ja_JP", // ロケールID
    sessionId: userId, // セッションID
    text: message, // ユーザーからのメッセージ
  };

  try {
    const command = new RecognizeTextCommand(params);
    const response = await lexClient.send(command);
    return response.messages?.[0]?.content || "Lexからの応答がありません。";
  } catch (error) {
    console.error("Lexとの通信エラー:", error);
    return "エラーが発生しました。";
  }
};