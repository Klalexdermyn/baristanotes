import "./styleNote.css";
import { DeleteNote } from "./DeleteNote";

export function Note(props) {
  const { name, weight, extraction, preassure, grinding, description } =
    props.recipe;
  const {noteKey, deleteNote} = props;  
  return (
    <div>
      <div className="note flex flex-col justify-center mx-auto my-6 max-w-lg rounded border border-neutral-100/50 p-8">
        <div className="px-4 sm:px-0">
          <h2 className="text-base font-semibold leading-7 text-gray-900 ">
            {name}
          </h2>
          <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
            {description}
          </p>
        </div>
        <div className="mt-6 border-t border-gray-100">
          <dl className="divide-y divide-gray-100">
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900 ">
                Weight:
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {weight}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Extraction:
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {extraction}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
               Preassure:
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {preassure}
              </dd>
            </div>
            <div className="px-4 pt-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Grinding:
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {grinding}
              </dd>
            </div>
          </dl>
        </div>
        <div className="flex flex-row-reverse">
          <DeleteNote deleteNote={deleteNote}  noteKey={noteKey}/>
        </div>
      </div>
    </div>
  );
}
