export const getSearchRegExp = (value: string): RegExp => {
  let text = '';
  for (let i = 0; i < value.length; i++) {
    text += getMath(value[i]);
  }
  return new RegExp(text);
};

export const getMath = (value: string): string => {
  switch (value) {
    case 'ㄱ':
      return '[가-깋]';
    case 'ㄲ':
      return '[까-깧]';
    case 'ㄴ':
      return '[나-닣]';
    case 'ㄷ':
      return '[다-딯]';
    case 'ㄸ':
      return '[따-띻]';
    case 'ㄹ':
      return '[라-맇]';
    case 'ㅁ':
      return '[마-밓]';
    case 'ㅂ':
      return '[바-빟]';
    case 'ㅃ':
      return '[빠-삫]';
    case 'ㅅ':
      return '[사-싷]';
    case 'ㅆ':
      return '[싸-앃]';
    case 'ㅇ':
      return '[아-잏]';
    case 'ㅈ':
      return '[자-짛]';
    case 'ㅉ':
      return '[짜-찧]';
    case 'ㅊ':
      return '[차-칳]';
    case 'ㅋ':
      return '[카-킿]';
    case 'ㅌ':
      return '[타-팋]';
    case 'ㅍ':
      return '[파-핗]';
    case 'ㅎ':
      return '[하-힣]';
    case 'ㅛ':
      return 'y';
    case 'ㅕ':
      return 'u';
    case 'ㅐ':
    case 'ㅒ':
      return 'o';
    case 'ㅔ':
    case 'ㅖ':
      return 'p';
    case 'ㅗ':
      return 'h';
    case 'ㅓ':
      return 'j';
    case 'ㅏ':
      return 'k';
    case 'ㅣ':
      return 'l';
    case 'ㅠ':
      return 'b';
    case 'ㅜ':
      return 'n';
    case 'ㅡ':
      return 'm';
    case '+':
    case '(':
    case ')':
    case '[':
    case ']':
    case '*':
    case '"':
    case "'":
    case '\\':
      return `\\${value}`;
    default:
      return value;
  }
};
