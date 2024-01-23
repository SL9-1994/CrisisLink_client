import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

interface RegisterReqBody {
  username: string;
  email: string;
  password: string;
}

/**
 * POST /app/api/register
 * 新規登録中間API
 * @param {NextRequest} req - サインアップリクエストデータ
 * @returns {Promise<NextResponse>} - サインアップレスポンスデータ
 */
export async function POST(req: NextRequest) {
  const data = (await req.json()) as RegisterReqBody;

  try {
    const response = await axios.post("http://localhost:8080/api/auth/register", data);
    return NextResponse.json({
      status: response.status,
      message: response.data,
    });
  } catch (e: any) {
    // ユーザーが既に存在する場合
    if (e.response.status === 409) {
      console.log(`${e.response.status}, ${e.response.data}`);
      return NextResponse.json({
        status: e.response.status,
        message: e.response.data,
      });
    } else {
      // サーバーサイドエラー
      console.log(`${e.response.status}, ${e.response.data}`);
      return NextResponse.json({
        status: e.response.status,
        message: e.response.data,
      });
    }
  }
}
