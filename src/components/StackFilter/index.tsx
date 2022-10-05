import { Listbox, Transition } from '@headlessui/react';
import { StackName, stacksNames } from '@src/utils';
import { Fragment, useEffect, useState } from 'react';
import { FaCaretDown, FaCheck } from 'react-icons/fa';
import { StackIcon } from '../StackIcon';

interface StackFilterProps {
  setTask: (stackName: StackName | '') => void;
}

export function StackFilter({ setTask }: StackFilterProps) {
  const [selectedStack, setSelectedStack] = useState('all');
  useEffect(() => {
    setTask(selectedStack === 'all' ? '' : selectedStack as StackName);
  }, [selectedStack]);
  return (
    <div
      className="w-52"
    >
      <Listbox
        value={selectedStack}
        onChange={setSelectedStack}
      >
        <div
          className="relative mt-1"
        >
          <Listbox.Button
            className="relative w-full cursor-pointer rounded-lg bg-white py-2 pl-3 pr-10 ml-2 text-left shadow-md focus:outline-none focus-visible:border-bluesky-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-lemonade-500 sm:text-sm flex justify-center items-center"
          >
            <span className="flex items-center truncate text-base text-grafite-900">
              {selectedStack !== 'all'
                ? <StackIcon
                  stackName={selectedStack.toLowerCase() as StackName}
                  className="text-sm fill-teal-600 mr-2"
                />
                : null
              }
              {selectedStack}
            </span>
            <span className="absolute inset-y-0 right-0 flex items-center pr-2">
              <FaCaretDown
                className="hover:text-lemonade-500 text-base"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options
              className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm z-50 scrollbar-thin scrollbar-thumb-lemonade-500 scrollbar-track-silver-300 scrollbar-thumb-rounded-md"
            >
              <Listbox.Option
                value="all"
                disabled={selectedStack === 'all'}
                className={({ active }) =>
                  `relative text-base select-none py-2 pl-16 pr-4 ${active ? 'bg-green-200 text-lemonade-500 cursor-pointer' : 'text-grafite-900'
                  }`
                }
              >
                {({ selected }) => (
                  <>
                    <span
                      className={`flex items-center truncate ${selected ? 'font-medium' : 'font-normal'
                      }`}
                    >
                      all
                    </span>
                    {selected ? (
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                        <FaCheck className="fill-lemonade-500 text-sm" aria-hidden="true" />
                      </span>
                    ) : null}
                  </>
                )}
              </Listbox.Option>
              {
                stacksNames
                  .sort((a, b) => a
                    .localeCompare(b, 'pt-BR', {
                      sensitivity: 'base', numeric: true
                    }))
                  .map((stackName, index) => (
                    <Listbox.Option
                      key={stackName + (index + 1)}
                      value={stackName}
                      disabled={stackName === selectedStack}
                      className={({ active }) =>
                        `relative text-base select-none py-2 pl-10 pr-4 ${active ? 'bg-green-200 text-lemonade-500 cursor-pointer' : 'text-grafite-900'
                        }`
                      }
                    >
                      {({ selected }) => (
                        <>
                          <span
                            className={`flex items-center truncate ${selected ? 'font-medium' : 'font-normal'
                            }`}
                          >
                            <StackIcon
                              stackName={stackName.toLowerCase() as StackName}
                              className="text-sm fill-teal-600 mr-2"
                            />
                            {stackName}

                          </span>
                          {selected ? (
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                              <FaCheck className="fill-lemonade-500 text-sm" aria-hidden="true" />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))
              }
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}
