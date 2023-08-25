import { useState } from "react";

export default function CreateNewList() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button
        className="mb-1 mr-1 rounded bg-gray-200 px-6 py-3 text-sm font-bold uppercase shadow outline-none transition-all duration-150 ease-linear hover:bg-white hover:text-red-800 focus:outline-none "
        type="button"
        onClick={() => setShowModal(true)}
      >
        Create New List
      </button>
      {showModal ? (
        <>
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none">
            <div className=" relative mx-auto my-6 w-3/4 md:w-1/2">
              {/*content*/}
              <div className="relative flex w-full flex-col rounded-lg border-0 bg-white shadow-lg outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between rounded-t border-b border-solid border-slate-200 p-5">
                  <h3 className="text-3xl font-medium">Create New List</h3>
                  <button
                    className="float-right ml-auto border-0 bg-transparent p-1 text-3xl font-semibold leading-none text-black opacity-5 outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="block h-6 w-6 bg-transparent text-2xl text-black opacity-5 outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative flex-auto p-6">
                  <form className="space-y-5">
                    <div className="flex flex-col space-x-2 md:flex-row md:items-center">
                      <label className="md:w-1/6"> Name: </label>
                      <input
                        type="text"
                        placeholder=""
                        className="w-full rounded-md bg-zinc-100 py-2"
                      />
                    </div>
                    <div className="flex flex-col space-x-2 md:flex-row md:items-center">
                      <label className="md:w-1/6"> Description: </label>
                      <textarea
                        type="text"
                        placeholder=""
                        className="w-full rounded-md bg-zinc-100 py-2"
                      ></textarea>
                    </div>
                  </form>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end rounded-b border-t border-solid border-slate-200 p-6">
                  <button
                    className="background-transparent mb-1 mr-1 px-6 py-2 text-sm font-bold uppercase text-zinc-500 outline-none transition-all duration-150 ease-linear focus:outline-none"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="mb-1 mr-1 rounded bg-red-700 px-6 py-3 text-sm font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-lg focus:outline-none active:bg-emerald-600"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
        </>
      ) : null}
    </>
  );
}
