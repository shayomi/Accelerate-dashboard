export const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

export const specialCurrencyFormatter = (amount: number): string => {
  return `USD ${amount.toLocaleString("en-US", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  })}`;
};

export const dateFormatter = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "short",
  day: "numeric",
});

export const shortCurrencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 0,
  maximumFractionDigits: 2,
  notation: "compact",
});

export const sentenceCaseFormatter = (text: string) => {
  if (typeof text != "string" || text.length === 0) {
    return "";
  }

  const trimmedText = text.trim();
  const firstChar = trimmedText.charAt(0).toUpperCase();
  const remainingChars = trimmedText.slice(1).toLowerCase();

  return firstChar + remainingChars;
};
