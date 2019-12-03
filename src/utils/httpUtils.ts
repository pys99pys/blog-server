import { Context } from 'koa';

export const errorResponse = (
  context: Context,
  { status = 500, message = '처리중 오류가 발생했습니다.' }
) => {
  context.status = status;
  context.body = message;
};
