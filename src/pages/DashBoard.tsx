import { useState } from "react";

import { Button } from "flowbite-react";
import { useAllSalesQuery } from "../redux/api/productApi/saleApi";

const DashBoard = () => {
  const [reportTime, setReportTIme] = useState({
    startDate: new Date(),
    endDate: new Date(),
  });

  const [heading, setHeading] = useState("Today's sale report");

  const { data } = useAllSalesQuery(reportTime);

  const today = () => {
    setReportTIme({
      startDate: new Date(),
      endDate: new Date(),
    });
    setHeading("Today's sale report");
  };

  const last7days = () => {
    const endDate = new Date();

    const startDate = new Date();
    startDate.setDate(endDate.getDate() - 7);

    setReportTIme({
      startDate,
      endDate,
    });

    setHeading("Last 7 days sale report");
  };

  const thisMonth = () => {
    const currentDate = new Date();

    const startDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      1
    );
    const endDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      0
    );

    setReportTIme({
      startDate,
      endDate,
    });

    setHeading("This month sale report");
  };

  const thisYear = () => {
    const currentDate = new Date();
    const startDate = new Date(currentDate.getFullYear(), 0, 1);
    const endDate = new Date(currentDate.getFullYear(), 11, 31);

    setReportTIme({
      startDate,
      endDate,
    });

    setHeading("This year sale report");
  };

  let serial = 0;

  return (
    <div>
      <div>
        <h1 className="text-5xl text-center font-semibold my-5">Dashboard</h1>
      </div>
      <hr className="mx-2" />
      <div className="mx-5">
        <h1 className="text-4xl text-left font-semibold my-5">{heading}</h1>
      </div>

      <div className="flex justify-around mt-10 md:mt-28">
        <div>
          <h1 className="text-6xl text-center font-semibold">
            {data?.data?.totalQuantity | 0}
          </h1>
          <h1 className="text-4xl text-center">Total Order</h1>
        </div>
        <div>
          <h1 className="text-6xl text-center font-semibold">
            {data?.data?.totalSaleValue | 0}
          </h1>
          <h1 className="text-4xl text-center">Total Order Value</h1>
        </div>
      </div>
      <hr className="my-5" />
      <div className="flex justify-around mt-15">
        <Button onClick={() => today()}>Today</Button>
        <Button onClick={() => last7days()}>last 7 days</Button>
        <Button onClick={() => thisMonth()}>this month</Button>
        <Button onClick={() => thisYear()}>this year</Button>
      </div>
      <hr className="my-5" />
      <div className="grid grid-cols-10 py-4 bg-slate-500">
        <div className="text-lg col-span-1">serial</div>
        <div className="text-lg col-span-4 text-left">Product name</div>
        <div className="text-lg col-span-3">Buyer's name</div>
        <div className="text-lg col-span-2">Selling date</div>
      </div>

      <hr />
      <div>
        {data?.data?.sales
          ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
            data.data.sales.map((sale: any) => {
              serial++;
              return (
                <div
                  className={`grid grid-cols-10 py-2 my-1 ${
                    serial % 2 == 1 ? "bg-white" : "bg-lime-300"
                  } `}
                >
                  <div className="text-lg col-span-1">{serial}</div>
                  <div className="text-lg col-span-4 text-left">
                    {sale.productName}
                  </div>
                  <div className="text-lg col-span-3">{sale.buyer}</div>
                  <div className="text-lg col-span-2">
                    {sale.date.toString().split("T")[0]}
                  </div>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default DashBoard;
