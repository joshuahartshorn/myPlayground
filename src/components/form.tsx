interface FormProps {
  title: string;
  code: string;
  action: (formData: FormData) => Promise<void>;
}

export default function Form(props: FormProps) {
  const { title, code, action } = props;

  return (
    <form action={action}>
      <div className="flex flex-col pb-4">
        <div className="flex gap-4">
          <label className="w-12" htmlFor="title">
            {title}
          </label>
          <input className="border rounded p-2 w-full" id="title" name="title" />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <label className="w-12" htmlFor="code">
            {code}
          </label>
          <textarea className="border rounded p-2 w-full" id="code" name="code" />
        </div>
        <div className="flex flex-col items-center">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-40 " type="submit">
            Create
          </button>
        </div>
      </div>
    </form>
  );
}
