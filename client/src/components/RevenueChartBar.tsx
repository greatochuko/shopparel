type DataType = {
  month: string;
  amount: number;
  sales: number;
};

export default function RevenueChartBar({
  data,
  month,
  index,
}: {
  data: DataType[];
  month: DataType;
  index: number;
}) {
  let percentageIncrease;

  if (data[index - 1] && data[index - 1].amount != 0)
    percentageIncrease = (
      ((month.amount - data[index - 1].amount) / data[index - 1].amount) *
      100
    ).toFixed(1);

  return (
    <div
      key={month.month}
      className="flex flex-col justify-end items-center w-[5%] z-[2]"
    >
      <div
        style={{ height: ((month.amount / 5000) * 100).toFixed() + "%" }}
        tabIndex={month.amount ? 0 : undefined}
        className="relative w-full duration-500 rounded-t-full cursor-pointer group active:bg-accent-blue-300 focus-visible:bg-accent-blue-300 hover:bg-accent-blue-200 bg-accent-blue-100"
      >
        {month.amount ? (
          <div className="px-2 py-1 bg-white border hidden md:group-hover:flex rounded-md shadow gap-2 border-zinc-100 font-sm min-w-[7rem] flex-col absolute left-[50%] -translate-y-[100%] animate-fade-in-2 -translate-x-[50%]">
            <p className="flex items-center justify-between text-sm text-zinc-500">
              {month.month}
              {percentageIncrease && (
                <span
                  className={
                    Number(percentageIncrease) > 0
                      ? "text-green-600"
                      : "text-red-500"
                  }
                >
                  {percentageIncrease}%
                </span>
              )}
            </p>
            <p className="text-lg font-semibold text-zinc-700">
              ${month.amount.toFixed(2)}
            </p>
          </div>
        ) : null}
      </div>
      <p className="hidden pt-2 text-sm text-center md:text-base sm:block">
        {month.month}
      </p>
      <p className="pt-2 text-sm text-center sm:hidden">
        {month.month.slice(0, 1)}
      </p>
    </div>
  );
}
