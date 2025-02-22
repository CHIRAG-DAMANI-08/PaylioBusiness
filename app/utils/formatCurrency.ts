interface iAppProps {
    amount: number;
    currency: "USD" | "INR" | "JPY" | "GBP" | "CAD" | "AUD" | "CNY" | "KRW" | "INR" | "BRL";
  }
  
  export function formatCurrency({ amount, currency }: iAppProps) {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currency,
    }).format(amount);
  }