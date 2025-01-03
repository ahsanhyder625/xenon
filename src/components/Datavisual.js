import React from "react";
import { PieChart } from "react-minimal-pie-chart";
import { RxHamburgerMenu } from "react-icons/rx";
const Datavisual = () => {
  const progressWidth = 80;
  return (
    <div className="p-8 bg-white border border-gray-300 rounded-3xl shadow-md mt-3 mb-2">
      <div className="text-left mb-4">
        <h1 className="text-3xl font-bold">Data Visual</h1>
        <hr className="border-t border-gray-200 my-2" />
      </div>

      <div className="grid grid-cols-3 gap-8 mt-6">
        <div className="flex flex-col gap-4 col-span-1">
          {" "}
          <div className="py-6 px-8 w-2/3 bg-gray-100 rounded-3xl flex justify-between items-center">
            <div>
              <RxHamburgerMenu />
            </div>
            <div>
              <div className="text-sm">Total Number of rows</div>
              <div className="font-bold">34.1M</div>
            </div>
          </div>
          <div className="py-6 px-8 w-2/3 bg-gray-100 rounded-3xl flex justify-between items-center">
            <div>
              <RxHamburgerMenu />
            </div>
            <div>
              <div className="text-sm">Total Number of Columns</div>
              <div className="font-bold">2</div>
            </div>
          </div>
        </div>
        <div className="p-6 w-full bg-gray-100 rounded-3xl">
          <div className="font-bold">Metadata</div>
          <div>
            <div className="flex justify-between my-1">
              <span>Name</span>
              <span>Samples</span>
            </div>
            <div className="flex justify-between my-1">
              <span>Created at</span>
              <span>20 Jul 2022</span>
            </div>
            <div className="flex justify-between my-1">
              <span>Relates to</span>
              <span>dim_books</span>
            </div>
            <div className="flex justify-between my-1">
              <span>Connection</span>
              <span>Postgresql</span>
            </div>
          </div>
        </div>
        {/* Box 4 */}
        <div className="p-6 w-full bg-gray-100 rounded-3xl">
          <div className="font-bold">Metadata</div>
          <div>
            <div className="flex justify-between my-1">
              <span>Name</span>
              <span>Samples</span>
            </div>
            <div className="flex justify-between my-1">
              <span>Created at</span>
              <span>20 Jul 2022</span>
            </div>
            <div className="flex justify-between my-1">
              <span>Relates to</span>
              <span>dim_books</span>
            </div>
            <div className="flex justify-between my-1">
              <span>Connection</span>
              <span>Postgresql</span>
            </div>
          </div>
        </div>
      </div>

      <div className="my-12" />

      <div className="mt-8">
        <h2 className="text-2xl font-semibold">Data Quality</h2>

        <div className="grid grid-cols-2 gap-8 mt-6">
          <div className="p-6 bg-gray-100 rounded-3xl flex flex-col justify-between ">
            <h3 className="text-lg font-medium ">Data Quality Score</h3>
            <div className="w-24 h-24">
              <PieChart
                data={[
                  { title: "Section 1", value: 50, color: "#ff6347" },
                  { title: "Section 2", value: 50, color: "#4caf50" },
                ]}
                radius={45}
                lineWidth={45}
                animate
                startAngle={180}
              />
            </div>
          </div>
          <div className="p-6 bg-gray-100 rounded-3xl flex flex-col justify-between">
            <h3 className="text-lg font-medium ">Rules against target</h3>
            <div className="my-6 flex justify-between">
              <span className="font-bold text-sm">Validity</span>
              <span className="font-bold text-sm">6</span>
            </div>
            <div className="w-full h-2 bg-gray-300 rounded-full relative mb-8">
              <div
                className="absolute top-0 left-0 h-2 bg-orange-500 rounded-full"
                style={{ width: `${progressWidth}%` }}
              ></div>
            </div>
          </div>
        </div>

        <div className="my-12" />

        <div className="grid grid-cols-3 gap-8">
          <div className="p-6 bg-gray-100 rounded-3xl flex flex-col justify-between">
            <h3 className="text-lg font-medium ">Total Health</h3>
            <div className="w-24 h-24 mt-4">
              <PieChart
                data={[
                  { title: "Section 1", value: 60, color: "#ff6347" },
                  { title: "Section 2", value: 20, color: "#4caf50" },
                  { title: "Section 3", value: 20, color: "#ffeb3b" },
                ]}
                radius={45}
                lineWidth={40}
                animate
                viewBoxSize={[100, 100]}
              />
            </div>
          </div>
          <div className="p-6 bg-gray-100 rounded-3xl flex flex-col justify-between">
            <h3 className="text-lg font-medium ">Test Results Breakdown</h3>
            <div className="w-24 h-24 mt-4">
              <PieChart
                data={[
                  { title: "Section 1", value: 60, color: "#ff6347" },
                  { title: "Section 2", value: 20, color: "#4caf50" },
                  { title: "Section 3", value: 20, color: "#ffeb3b" },
                ]}
                radius={45}
                lineWidth={40}
                animate
                viewBoxSize={[100, 100]}
              />
            </div>
          </div>
          <div className="p-6 bg-gray-100 rounded-3xl flex flex-col justify-between">
            <h3 className="text-lg font-medium ">Monitored Tables</h3>
            <div className="w-24 h-24 mt-4">
              <PieChart
                data={[
                  { title: "Section 1", value: 60, color: "#ff6347" },
                  { title: "Section 2", value: 20, color: "#212121" },
                  { title: "Section 3", value: 20, color: "#ffeb3b" },
                ]}
                radius={45}
                lineWidth={40}
                animate
                viewBoxSize={[100, 100]}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Datavisual;
