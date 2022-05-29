import { AxiosError } from "axios";

export type ErrorMessage = {
  statusCode: number;
  message: string;
};

export const statusCode = {
  unauthorized: 401,
  badRequest: 400,
  forbidden: 403,
  notFound: 404,
  internalServerError: 500,
};

export const errorMessages = {
  internalServerError:
    "サーバーエラーが発生いたしました。しばらく時間が経ってから再度お試しください。",
  badRequest: "入力値を確認してください。",
  notFound: "対象のデータが見つかりません。",
  forbidden: "許可されていない操作です。",
  unauthorized: "認証情報が正しくありません。ログインし直してください。",
};

export const handleError = (err: AxiosError): ErrorMessage => {
  if (!err.response) {
    console.trace(err);
    return {
      statusCode: statusCode.internalServerError,
      message: errorMessages.internalServerError,
    };
  }

  if (err.response.status === statusCode.unauthorized) {
    return {
      statusCode: statusCode.unauthorized,
      message: errorMessages.unauthorized,
    };
  }

  if (err.response.status === statusCode.notFound) {
    return {
      statusCode: statusCode.notFound,
      message: errorMessages.notFound,
    };
  }

  if (err.response.status === statusCode.forbidden) {
    return {
      statusCode: statusCode.forbidden,
      message: errorMessages.forbidden,
    };
  }

  if (err.message) {
    return {
      statusCode: statusCode.badRequest,
      message: err.message,
    };
  }

  console.trace(err);
  return {
    statusCode: statusCode.internalServerError,
    message: errorMessages.internalServerError,
  };
};
