// async 方法的处理
export const createCatchAsyncFun = (errorHandle) => {
  return async (fn) => {
    try {
      return [null, await fn];
    } catch (error) {
      typeof errorHandle === "function" && errorHandle(error);
      return [error, null];
    }
  };
};
