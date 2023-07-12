// 쿠키 유틸리티

export const setCookie = (name: string, value: string, days: number) => {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  const expires = `expires=${date.toUTCString()}`;
  document.cookie = `${name}=${value}; ${expires}; path=/`;
};

export const getCookie = (name: string): string | null => {
  const cookieString = document.cookie;
  const cookies = cookieString.split(';');

  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    const [cookieName, cookieValue] = cookie.split('=');

    if (cookieName === name) {
      return cookieValue;
    }
  }

  return null;
};

export const deleteCookie = (name: string) => {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
};