import React, { useState } from "react";
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

function SlideOver() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      {/* Button to toggle the component */}
      <button onClick={() => setOpen(!open)} className="flex items-center p-1">
        <svg
          width="25"
          height="25"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="8" y="22" width="184" height="16" rx="8" fill="#1F2937" />
          <rect x="8" y="92" width="184" height="16" rx="8" fill="#1F2937" />
          <rect x="8" y="162" width="184" height="16" rx="8" fill="#1F2937" />
        </svg>
      </button>

      {/* Your component (conditionally rendered) */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50"
          onClose={() => setOpen(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-900 bg-opacity-40 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-40 ">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md ">
                    <div className="flex h-full flex-col overflow-y-scroll bg-white py-4 px-4 shadow-xl">
                      <div className="flex gap-6 px-4">
                        <button
                          type="button"
                          className="relative focus:outline-none focus:ring-2 focus:ring-white p-2 rounded-full hover:bg-rock "
                          onClick={() => setOpen(false)}
                        >
                          <span className="absolute -inset-2.5" />
                          <span className="sr-only">Close panel</span>
                          <XMarkIcon className="h-6 w-6 " aria-hidden="true" />
                        </button>
                      </div>

                      <div className="py-8 text-lg font-medium">
                        <ul>
                          <li className="py-2 px-4 flex gap-4 items-center rounded hover:bg-rock">
                            <Link
                              href="/"
                              className="py-2 px-4 flex gap-4 items-center rounded hover:bg-rock"
                            >
                              Home
                            </Link>
                          </li>
                          <li className="py-2 px-4 flex gap-4 items-center rounded hover:bg-rock">
                            <Link
                              href="/about"
                              className="py-2 px-4 flex gap-4 items-center rounded hover:bg-rock"
                            >
                              About
                            </Link>
                          </li>
                          <li className="py-2 px-4 flex gap-4 items-center rounded hover:bg-rock">
                            <Link
                              href="/selling"
                              className="py-2 px-4 flex gap-4 items-center rounded hover:bg-rock"
                            >
                              Selling
                            </Link>
                          </li>
                          <li className="py-2 px-4 flex gap-4 items-center rounded hover:bg-rock">
                            <Link
                              href="/buying"
                              className="py-2 px-4 flex gap-4 items-center rounded hover:bg-rock"
                            >
                              Buying
                            </Link>
                          </li>
                          <li className="py-2 px-4 flex gap-4 items-center rounded hover:bg-rock">
                            <Link
                              href="/contact"
                              className="py-2 px-4 flex gap-4 items-center rounded hover:bg-rock"
                            >
                              Contact
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="py-8 flex-1 border-t">
                        <div className="px-8 pb-4 py-2 text-base font-semibold">
                          <Link
                            href="/login"
                            className="flex gap-4 items-center rounded hover:bg-rock"
                          >
                            Login
                          </Link>
                        </div>
                      </div>
                      <div className="absolute px-4 bottom-0 flex justify-between text-sm gap-6"></div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
}

export default SlideOver;
