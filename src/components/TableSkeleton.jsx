import React from 'react';

const TableSkeleton = () => {
  return (
    <div className="flex drop-shadow-xl">
      <div className="mx-64 p-4 bg-gray-50  w-custom-width">
        <div className="pb-4">
          <div className="flex shrink items-center">
            <div class="h-12 w-12 bg-gray-300 rounded-full "></div>
            <div className="pl-2">
              <div className="w-52 bg-gray-300 h-5 rounded-md mb-2 animate-pulse"></div>
              <div className="w-36 h-4 bg-gray-300 rounded-md animate-pulse"></div>
            </div>
          </div>
        </div>
        <hr class="h-custom-height bg-gray-300 border-0 animate-pulse" />
        <div className="overflow-x-auto">
          <table className="table-auto">
            <thead>
              <tr className=" bg-gray-50 p-custom-padding flex">
                <div className="p-1 md:p-3 w-20 mr-40 h-4 bg-gray-300 rounded-md animate-pulse"></div>
                <div className="p-1 md:p-3 w-4 mx-3 bg-gray-300 rounded-md animate-pulse"></div>
                <div className="p-1 md:p-3 w-4 mx-3  bg-gray-300 rounded-md animate-pulse"></div>
                <div className="p-1 md:p-3 w-4 mx-3  bg-gray-300 rounded-md animate-pulse"></div>
                <div className="p-1 md:p-3 w-4 mx-3  bg-gray-300 rounded-md animate-pulse"></div>
                <div className="p-1 md:p-3 w-4 mx-3  bg-gray-300 rounded-md animate-pulse"></div>
                <div className="p-1 md:p-3 w-4 mx-3  bg-gray-300 rounded-md animate-pulse"></div>
                <div className="p-1 md:p-3 w-4 mx-3  bg-gray-300 rounded-md animate-pulse"></div>
                <div className="p-1 md:p-3 w-4 ml-3  bg-gray-300 rounded-md animate-pulse"></div>
              </tr>
            </thead>
            <hr class="h-custom-height bg-gray-300 border-0 animate-pulse" />
            <tbody>
              {Array(20)
                .fill(0)
                .map((_, i) => {
                  return (
                    <div>
                      <tr className=" bg-gray-50 py-3 flex  p-3">
                        <div className="flex items-center mr-9">
                          <div className="p-1 md:p-3 w-6 h-3 mr-5 bg-gray-300 rounded-md animate-pulse"></div>
                          <div className="p-1 md:p-3 w-40 h-3 bg-gray-300 rounded-md animate-pulse"></div>
                        </div>
                        <div className="p-1 md:p-3 w-4 mx-3 bg-gray-300 rounded-md animate-pulse"></div>
                        <div className="p-1 md:p-3 w-4 mx-3  bg-gray-300 rounded-md animate-pulse"></div>
                        <div className="p-1 md:p-3 w-4 mx-3  bg-gray-300 rounded-md animate-pulse"></div>
                        <div className="p-1 md:p-3 w-4 mx-3  bg-gray-300 rounded-md animate-pulse"></div>
                        <div className="p-1 md:p-3 w-4 mx-3  bg-gray-300 rounded-md animate-pulse"></div>
                        <div className="p-1 md:p-3 w-4 mx-3  bg-gray-300 rounded-md animate-pulse"></div>
                        <div className="p-1 md:p-3 w-4 mx-3  bg-gray-300 rounded-md animate-pulse"></div>
                        <div className="p-1 md:p-3 w-4 ml-3  bg-gray-300 rounded-md animate-pulse"></div>
                      </tr>
                      <hr class="h-px bg-gray-300 border-0animate-pulse" />
                    </div>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TableSkeleton;
