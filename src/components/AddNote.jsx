

export function AddNote({ addNote }) {
  return (
    <button className="block mx-auto rounded bg-slate-100  hover:bg-slate-300  uppercase text-lg p-4" onClick={addNote}>
      Create note
      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M12 4.5v15m7.5-7.5h-15"
        />
      </svg> */}
    </button>
  );
}
